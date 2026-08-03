// src/pages/free-bots/analysis-tool.tsx
//
// "Analysis Tool" tab — scans ONE selected volatility index live and
// surfaces four kinds of signal (Even/Odd, Rise/Fall, Matches/Differs,
// Over2/Under7). Trades are NEVER placed automatically — each signal
// card has its own "Place Trade" button, so you decide when to fire.
//
// Session controls:
//   - Stake / Martingale multiplier (grows the stake after a loss)
//   - Take Profit / Stop Loss (auto-stops the session once your running
//     P/L for this session crosses either limit)
//   - Hedge after a loss (toggle) — when on, the trade placed right
//     after a loss on a given signal takes the OPPOSITE side of that
//     same signal instead of repeating it (e.g. EVEN -> ODD,
//     DIGITMATCH -> DIGITDIFF). It still applies the martingale stake.
//
// This does not start, stop, or otherwise touch any other bot running
// elsewhere on the site (e.g. DBot) — it only manages its own manual
// trades on the Deriv connection, so other bots can keep running.
//
// This talks to the same Deriv WS connection the rest of the app already
// uses (api_base), so it only works once the user is authorized — same as
// the existing AI Scanner page.

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { api_base } from '@/external/bot-skeleton/services/api/api-base';
import { useApiBase } from '@/hooks/useApiBase';
import {
    AnySignal,
    EvenOddSignal,
    MatchSignal,
    OverUnderSignal,
    RiseFallSignal,
    SymbolStats,
    initSymbolStats,
    pushTick,
    scanAll,
} from '@/utils/analysisEngine';

const SYMBOLS = [
    { code: 'R_10', label: 'Volatility 10 Index' },
    { code: 'R_25', label: 'Volatility 25 Index' },
    { code: 'R_50', label: 'Volatility 50 Index' },
    { code: 'R_75', label: 'Volatility 75 Index' },
    { code: 'R_100', label: 'Volatility 100 Index' },
    { code: '1HZ10V', label: 'Volatility 10 (1s) Index' },
    { code: '1HZ25V', label: 'Volatility 25 (1s) Index' },
    { code: '1HZ50V', label: 'Volatility 50 (1s) Index' },
    { code: '1HZ75V', label: 'Volatility 75 (1s) Index' },
    { code: '1HZ100V', label: 'Volatility 100 (1s) Index' },
];

const MAX_TRADES_PER_SESSION = 50;

type TradeLogEntry = {
    time: string;
    symbol: string;
    label: string;
    stake: number;
    status: 'sent' | 'error' | 'won' | 'lost';
    detail?: string;
};

/** Builds the contract_type/barrier for a signal. When `hedge` is true, returns
 *  the OPPOSITE side of the signal instead of the side the signal actually favours. */
function getContractParams(signal: AnySignal, hedge: boolean): { contract_type: string; barrier?: string } {
    switch (signal.kind) {
        case 'EVEN_ODD': {
            const side = hedge ? (signal.side === 'EVEN' ? 'ODD' : 'EVEN') : signal.side;
            return { contract_type: side === 'EVEN' ? 'DIGITEVEN' : 'DIGITODD' };
        }
        case 'RISE_FALL': {
            const side = hedge ? (signal.side === 'RISE' ? 'FALL' : 'RISE') : signal.side;
            return { contract_type: side === 'RISE' ? 'CALL' : 'PUT' };
        }
        case 'MATCH':
            return { contract_type: hedge ? 'DIGITDIFF' : 'DIGITMATCH', barrier: String(signal.digit) };
        case 'OVER_UNDER': {
            const side = hedge ? (signal.side === 'OVER2' ? 'UNDER7' : 'OVER2') : signal.side;
            return {
                contract_type: side === 'OVER2' ? 'DIGITOVER' : 'DIGITUNDER',
                barrier: side === 'OVER2' ? '2' : '7',
            };
        }
        default:
            return { contract_type: '' };
    }
}

const AnalysisTool: React.FC = () => {
    const { isAuthorized, activeLoginid } = useApiBase();

    const [symbol, setSymbol] = useState<string>(SYMBOLS[0].code);
    const [scanning, setScanning] = useState(false);

    const [stake, setStake] = useState(1);
    const [martingaleMultiplier, setMartingaleMultiplier] = useState(2);
    const [takeProfit, setTakeProfit] = useState(10);
    const [stopLoss, setStopLoss] = useState(10);
    const [hedgeAfterLoss, setHedgeAfterLoss] = useState(false);

    const [tradesThisSession, setTradesThisSession] = useState(0);
    const [sessionProfit, setSessionProfit] = useState(0);
    const [log, setLog] = useState<TradeLogEntry[]>([]);

    const [signals, setSignals] = useState<ReturnType<typeof scanAll> | null>(null);

    const statsRef = useRef<Record<string, SymbolStats>>({});
    const currentStakeRef = useRef(stake);
    const tradesThisSessionRef = useRef(0);
    const sessionProfitRef = useRef(0);
    const hedgeActiveRef = useRef<Record<string, boolean>>({});
    const pendingRef = useRef<Record<string, boolean>>({});
    const scanningRef = useRef(false);
    const hedgeAfterLossRef = useRef(false);
    const takeProfitRef = useRef(takeProfit);
    const stopLossRef = useRef(stopLoss);

    useEffect(() => { currentStakeRef.current = stake; }, [stake]);
    useEffect(() => { scanningRef.current = scanning; }, [scanning]);
    useEffect(() => { hedgeAfterLossRef.current = hedgeAfterLoss; }, [hedgeAfterLoss]);
    useEffect(() => { takeProfitRef.current = takeProfit; }, [takeProfit]);
    useEffect(() => { stopLossRef.current = stopLoss; }, [stopLoss]);

    const addLog = useCallback((entry: TradeLogEntry) => {
        setLog(prev => [entry, ...prev].slice(0, 200));
    }, []);

    const signalKey = (signal: AnySignal): string => {
        switch (signal.kind) {
            case 'EVEN_ODD':
                return `EO-${signal.symbol}`;
            case 'RISE_FALL':
                return `RF-${signal.symbol}`;
            case 'MATCH':
                return `MA-${signal.symbol}`;
            case 'OVER_UNDER':
                return `OU-${signal.symbol}`;
        }
    };

    const labelFor = (signal: AnySignal): string => {
        switch (signal.kind) {
            case 'EVEN_ODD':
                return `${signal.symbol} — ${signal.side} (${signal.pct.toFixed(1)}%)`;
            case 'RISE_FALL':
                return `${signal.symbol} — ${signal.side} (${signal.pct.toFixed(1)}%)`;
            case 'MATCH':
                return `${signal.symbol} — Matches ${signal.digit} (${signal.pct.toFixed(1)}%)`;
            case 'OVER_UNDER':
                return `${signal.symbol} — ${signal.side === 'OVER2' ? 'Over 2' : 'Under 7'}`;
        }
    };

    const fireTrade = useCallback((signal: AnySignal, label: string) => {
        if (!api_base.api) return;

        const key = signalKey(signal);
        if (pendingRef.current[key]) return;

        if (tradesThisSessionRef.current >= MAX_TRADES_PER_SESSION) {
            addLog({
                time: new Date().toLocaleTimeString(),
                symbol: signal.symbol,
                label,
                stake: currentStakeRef.current,
                status: 'error',
                detail: `Session trade cap (${MAX_TRADES_PER_SESSION}) reached — stopped for safety.`,
            });
            setScanning(false);
            return;
        }

        const hedge = !!hedgeActiveRef.current[key];
        const { contract_type, barrier } = getContractParams(signal, hedge);
        if (!contract_type) return;

        const currency = (api_base.account_info as { currency?: string })?.currency || 'USD';

        const rise_fall_duration = 5;
        const duration = signal.kind === 'RISE_FALL' ? rise_fall_duration : 1;

        const stakeNow = currentStakeRef.current;
        const displayLabel = hedge ? `HEDGE: ${label}` : label;

        const buy_request = {
            buy: 1,
            price: stakeNow,
            parameters: {
                amount: stakeNow,
                basis: 'stake',
                contract_type,
                currency,
                duration,
                duration_unit: 't',
                symbol: signal.symbol,
                ...(barrier ? { barrier } : {}),
            },
        };

        pendingRef.current[key] = true;

        (api_base.api.send(buy_request) as unknown as Promise<any>)
            .then((res: any) => {
                setTradesThisSession(prev => {
                    tradesThisSessionRef.current = prev + 1;
                    return prev + 1;
                });
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol: signal.symbol,
                    label: displayLabel,
                    stake: stakeNow,
                    status: 'sent',
                });

                const contract_id = res?.buy?.contract_id;
                if (!contract_id || !api_base.api) {
                    pendingRef.current[key] = false;
                    return;
                }

                const sub = api_base.api.onMessage().subscribe((response: any) => {
                    const poc = response?.data?.proposal_open_contract;
                    if (!poc || poc.contract_id !== contract_id) return;
                    if (!poc.is_sold) return;

                    const profit = parseFloat(poc.profit ?? '0');
                    const won = profit > 0;

                    sessionProfitRef.current += profit;
                    setSessionProfit(sessionProfitRef.current);

                    if (won) {
                        currentStakeRef.current = stake;
                        hedgeActiveRef.current[key] = false;
                    } else {
                        currentStakeRef.current = currentStakeRef.current * martingaleMultiplier;
                        if (hedgeAfterLossRef.current) hedgeActiveRef.current[key] = true;
                    }

                    addLog({
                        time: new Date().toLocaleTimeString(),
                        symbol: signal.symbol,
                        label: displayLabel,
                        stake: stakeNow,
                        status: won ? 'won' : 'lost',
                        detail: `Profit: ${profit.toFixed(2)} ${currency} — session P/L: ${sessionProfitRef.current.toFixed(2)} — next stake: ${currentStakeRef.current.toFixed(2)}${hedgeActiveRef.current[key] ? ' (next trade will hedge)' : ''}`,
                    });

                    pendingRef.current[key] = false;
                    sub.unsubscribe();
                    api_base.api?.send({ forget: poc.id });

                    const tp = takeProfitRef.current;
                    const sl = stopLossRef.current;
                    if (tp > 0 && sessionProfitRef.current >= tp) {
                        setScanning(false);
                        addLog({
                            time: new Date().toLocaleTimeString(),
                            symbol: signal.symbol,
                            label: 'Session stopped',
                            stake: 0,
                            status: 'error',
                            detail: `Take profit of ${tp.toFixed(2)} reached (session P/L: ${sessionProfitRef.current.toFixed(2)}).`,
                        });
                    } else if (sl > 0 && sessionProfitRef.current <= -sl) {
                        setScanning(false);
                        addLog({
                            time: new Date().toLocaleTimeString(),
                            symbol: signal.symbol,
                            label: 'Session stopped',
                            stake: 0,
                            status: 'error',
                            detail: `Stop loss of ${sl.toFixed(2)} reached (session P/L: ${sessionProfitRef.current.toFixed(2)}).`,
                        });
                    }
                });

                api_base.api.send({ proposal_open_contract: 1, contract_id, subscribe: 1 });
            })
            .catch((err: any) => {
                pendingRef.current[key] = false;
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol: signal.symbol,
                    label: displayLabel,
                    stake: stakeNow,
                    status: 'error',
                    detail: err?.error?.message || err?.message || 'Buy request failed',
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addLog, martingaleMultiplier, stake]);

    useEffect(() => {
        if (!api_base.api) return undefined;

        statsRef.current[symbol] = initSymbolStats(symbol);

        const sub = api_base.api.onMessage().subscribe((response: any) => {
            const { data } = response;
            if (data?.msg_type !== 'tick' || !data.tick) return;
            const { symbol: tickSymbol, quote } = data.tick;
            if (tickSymbol !== symbol) return;
            const stats = statsRef.current[symbol];
            if (!stats) return;
            pushTick(stats, +quote);
        });

        api_base.api.send({ ticks: symbol, subscribe: 1 });

        return () => {
            sub.unsubscribe();
            api_base.api?.send({ forget_all: 'ticks' });
            delete statsRef.current[symbol];
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol]);

    useEffect(() => {
        if (!scanning) {
            setSignals(null);
            return undefined;
        }
        const id = setInterval(() => {
            const all = Object.values(statsRef.current);
            const result = scanAll(all);
            setSignals(result);
        }, 1000);
        return () => clearInterval(id);
    }, [scanning]);

    const handleStartStop = () => {
        if (!scanning) {
            currentStakeRef.current = stake;
            sessionProfitRef.current = 0;
            setSessionProfit(0);
            hedgeActiveRef.current = {};
            pendingRef.current = {};
        }
        setScanning(prev => !prev);
    };

    return (
        <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
            <h1>📊 Analysis Tool</h1>
            <p style={{ opacity: 0.8, fontSize: 14 }}>
                Scans ONE market you choose below for four signal types — Even/Odd, Rise/Fall,
                Matches/Differs, and Over 2 / Under 7 — and shows momentum so you know roughly how
                long a signal tends to run before it breaks. Nothing is traded automatically: press
                &quot;Place Trade&quot; on a signal card yourself when you want to act on it. Past
                digit distribution doesn&apos;t guarantee future ticks; treat this as a decision aid,
                not a certainty.
            </p>

            {!isAuthorized && (
                <div style={{ background: '#402', color: '#fff', padding: 10, borderRadius: 6, marginBottom: 16 }}>
                    Not logged in to a Deriv account yet — connect your account to enable live trading.
                </div>
            )}
            {isAuthorized && (
                <div style={{ background: '#043', color: '#fff', padding: 10, borderRadius: 6, marginBottom: 16 }}>
                    Connected: {activeLoginid} — trades will use this account.
                </div>
            )}

            <h3>Volatility to scan</h3>
            <div style={{ marginBottom: 16 }}>
                <select
                    value={symbol}
                    onChange={e => setSymbol(e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: 6 }}
                >
                    {SYMBOLS.map(s => (
                        <option key={s.code} value={s.code}>
                            {s.label}
                        </option>
                    ))}
                </select>
                <span style={{ marginLeft: 10, fontSize: 12, opacity: 0.7 }}>
                    Only one market is scanned at a time — switching resets the tick history for the new market.
                </span>
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16, alignItems: 'center' }}>
                <label>
                    Stake:{' '}
                    <input
                        type="number"
                        min={0.35}
                        step={0.01}
                        value={stake}
                        onChange={e => setStake(parseFloat(e.target.value) || 0)}
                        style={{ width: 80 }}
                    />
                </label>

                <label>
                    Martingale multiplier:{' '}
                    <input
                        type="number"
                        min={1}
                        step={0.1}
                        value={martingaleMultiplier}
                        onChange={e => setMartingaleMultiplier(parseFloat(e.target.value) || 1)}
                        style={{ width: 70 }}
                    />
                </label>

                <label>
                    Take profit:{' '}
                    <input
                        type="number"
                        min={0}
                        step={0.5}
                        value={takeProfit}
                        onChange={e => setTakeProfit(parseFloat(e.target.value) || 0)}
                        style={{ width: 80 }}
                    />
                </label>

                <label>
                    Stop loss:{' '}
                    <input
                        type="number"
                        min={0}
                        step={0.5}
                        value={stopLoss}
                        onChange={e => setStopLoss(parseFloat(e.target.value) || 0)}
                        style={{ width: 80 }}
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={hedgeAfterLoss}
                        onChange={e => setHedgeAfterLoss(e.target.checked)}
                    />{' '}
                    Hedge after a loss
                </label>
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16, alignItems: 'center' }}>
                <button
                    onClick={handleStartStop}
                    disabled={!isAuthorized}
                    style={{
                        background: scanning ? '#a22' : '#2a2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 16px',
                        cursor: 'pointer',
                    }}
                >
                    {scanning ? 'Stop Scan' : 'Start Scan'}
                </button>

                <span style={{ fontSize: 12, opacity: 0.7 }}>
                    Trades this session: {tradesThisSession}/{MAX_TRADES_PER_SESSION} — current stake:{' '}
                    {currentStakeRef.current.toFixed(2)} — session P/L: {sessionProfit.toFixed(2)}
                </span>
            </div>

            {scanning && !signals && (
                <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 16 }}>
                    Gathering ticks — signals need at least 40 ticks on this market before they&apos;re trusted.
                </div>
            )}

            {signals && (
                <>
                    <SignalSection title="Even / Odd">
                        {signals.evenOdd.length === 0 && <Empty />}
                        {signals.evenOdd.map((s: EvenOddSignal) => (
                            <SignalCard key={s.symbol + s.side} signal={s} label={labelFor(s)} onTrade={fireTrade} isAuthorized={isAuthorized}>
                                <strong>{s.symbol}</strong> — strongest side: <strong>{s.side}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Current run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </SignalCard>
                        ))}
                    </SignalSection>

                    <SignalSection title="Rise / Fall">
                        {signals.riseFall.length === 0 && <Empty />}
                        {signals.riseFall.map((s: RiseFallSignal) => (
                            <SignalCard key={s.symbol + s.side} signal={s} label={labelFor(s)} onTrade={fireTrade} isAuthorized={isAuthorized}>
                                <strong>{s.symbol}</strong> — strongest side: <strong>{s.side}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Current run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </SignalCard>
                        ))}
                    </SignalSection>

                    <SignalSection title="Matches / Differs">
                        {signals.matches.length === 0 && <Empty />}
                        {signals.matches.map((s: MatchSignal) => (
                            <SignalCard key={s.symbol} signal={s} label={labelFor(s)} onTrade={fireTrade} isAuthorized={isAuthorized}>
                                <strong>{s.symbol}</strong> — strongest digit: <strong>{s.digit}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Reappears roughly every {s.gap.avgGap.toFixed(1)} ticks · {s.gap.ticksSinceLast}{' '}
                                    ticks since it last hit
                                </div>
                            </SignalCard>
                        ))}
                    </SignalSection>

                    <SignalSection title="Over 2 / Under 7">
                        {signals.overUnder.length === 0 && <Empty />}
                        {signals.overUnder.map((s: OverUnderSignal) => (
                            <SignalCard key={s.symbol + s.side} signal={s} label={labelFor(s)} onTrade={fireTrade} isAuthorized={isAuthorized}>
                                <strong>{s.symbol}</strong> — qualified for{' '}
                                <strong>{s.side === 'OVER2' ? 'Over 2' : 'Under 7'}</strong> (
                                {s.qualifyingDigitsAbove}/7 favouring digits above 10.5%)
                                <div style={detailStyle}>
                                    Current qualifying run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </SignalCard>
                        ))}
                    </SignalSection>
                </>
            )}

            <h3 style={{ marginTop: 24 }}>Signal / trade log</h3>
            <div style={{ maxHeight: 260, overflowY: 'auto', border: '1px solid #444', borderRadius: 8 }}>
                {log.length === 0 && <div style={{ padding: 10, opacity: 0.6, fontSize: 13 }}>No trades yet.</div>}
                {log.map((entry, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '6px 10px',
                            fontSize: 13,
                            borderBottom: '1px solid #333',
                            color:
                                entry.status === 'error' || entry.status === 'lost'
                                    ? '#f66'
                                    : entry.status === 'won'
                                      ? '#6f6'
                                      : '#9f9',
                        }}
                    >
                        [{entry.time}] {entry.label} @ {entry.stake.toFixed(2)} — {entry.status}
                        {entry.detail ? ` — ${entry.detail}` : ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

const cardStyle: React.CSSProperties = {
    border: '1px solid #444',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
};

const detailStyle: React.CSSProperties = {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
};

const tradeButtonStyle: React.CSSProperties = {
    marginTop: 8,
    background: '#246',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '4px 12px',
    cursor: 'pointer',
    fontSize: 12,
};

const Empty = () => <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 8 }}>No qualifying signal right now.</div>;

const SignalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div style={{ marginBottom: 20 }}>
        <h3>{title}</h3>
        {children}
    </div>
);

const SignalCard: React.FC<{
    signal: AnySignal;
    label: string;
    isAuthorized: boolean;
    onTrade: (signal: AnySignal, label: string) => void;
    children: React.ReactNode;
}> = ({ signal, label, isAuthorized, onTrade, children }) => (
    <div style={cardStyle}>
        {children}
        <div>
            <button
                type="button"
                style={tradeButtonStyle}
                disabled={!isAuthorized}
                onClick={() => onTrade(signal, label)}
            >
                Place Trade
            </button>
        </div>
    </div>
);

export default AnalysisTool;
