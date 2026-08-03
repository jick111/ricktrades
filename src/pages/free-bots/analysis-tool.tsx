// src/pages/free-bots/analysis-tool.tsx
//
// "Analysis Tool" tab — scans every selected volatility index live and
// surfaces four kinds of signal (Even/Odd, Rise/Fall, Matches/Differs,
// Over2/Under7). Optionally auto-fires trades the moment a qualifying
// signal appears, applying martingale on losses.
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

const AnalysisTool: React.FC = () => {
    const { isAuthorized, activeLoginid } = useApiBase();

    const [watchedSymbols, setWatchedSymbols] = useState<string[]>(SYMBOLS.map(s => s.code));
    const [scanning, setScanning] = useState(false);
    const [stake, setStake] = useState(1);
    const [martingaleMultiplier, setMartingaleMultiplier] = useState(2);
    const [autoTrade, setAutoTrade] = useState(false);
    const [tradesThisSession, setTradesThisSession] = useState(0);
    const [log, setLog] = useState<TradeLogEntry[]>([]);

    // Signals are recomputed on a timer while scanning, from the stats ref below.
    const [signals, setSignals] = useState<ReturnType<typeof scanAll> | null>(null);

    const statsRef = useRef<Record<string, SymbolStats>>({});
    const currentStakeRef = useRef(stake);
    const tradesThisSessionRef = useRef(0);
    const lastFiredKeyRef = useRef<Record<string, string>>({}); // debounce per signal-kind
    const scanningRef = useRef(false);
    const autoTradeRef = useRef(false);

    useEffect(() => { currentStakeRef.current = stake; }, [stake]);
    useEffect(() => { scanningRef.current = scanning; }, [scanning]);
    useEffect(() => { autoTradeRef.current = autoTrade; }, [autoTrade]);

    const addLog = useCallback((entry: TradeLogEntry) => {
        setLog(prev => [entry, ...prev].slice(0, 200));
    }, []);

    // --- Trading -----------------------------------------------------------

    /**
     * Builds the buy request for a given signal, sends it, then subscribes to
     * the contract until it settles so we know whether to grow or reset the
     * martingale stake.
     */
    const fireTrade = useCallback((signal: AnySignal, label: string) => {
        if (!api_base.api) return;
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

        const currency = (api_base.account_info as { currency?: string })?.currency || 'USD';
        let contract_type = '';
        let barrier: string | undefined;

        switch (signal.kind) {
            case 'EVEN_ODD':
                contract_type = signal.side === 'EVEN' ? 'DIGITEVEN' : 'DIGITODD';
                break;
            case 'RISE_FALL':
                contract_type = signal.side === 'RISE' ? 'CALL' : 'PUT';
                break;
            case 'MATCH':
                contract_type = 'DIGITMATCH';
                barrier = String(signal.digit);
                break;
            case 'OVER_UNDER':
                contract_type = signal.side === 'OVER2' ? 'DIGITOVER' : 'DIGITUNDER';
                barrier = signal.side === 'OVER2' ? '2' : '7';
                break;
            default:
                return;
        }

        // Rise/Fall (CALL/PUT) needs a duration in ticks or seconds; digit
        // contracts run on a single tick. Adjust rise_fall_duration below if
        // you'd rather trade Rise/Fall over more ticks.
        const rise_fall_duration = 5;
        const duration = signal.kind === 'RISE_FALL' ? rise_fall_duration : 1;

        const stakeNow = currentStakeRef.current;

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

        api_base.api
            .send(buy_request)
            .then((res: any) => {
                setTradesThisSession(prev => {
                    tradesThisSessionRef.current = prev + 1;
                    return prev + 1;
                });
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol: signal.symbol,
                    label,
                    stake: stakeNow,
                    status: 'sent',
                });

                const contract_id = res?.buy?.contract_id;
                if (!contract_id || !api_base.api) return;

                // Watch this contract until it settles, then adjust the
                // martingale stake for the NEXT auto-trade.
                const sub = api_base.api.onMessage().subscribe((response: any) => {
                    const poc = response?.data?.proposal_open_contract;
                    if (!poc || poc.contract_id !== contract_id) return;
                    if (!poc.is_sold) return;

                    const profit = parseFloat(poc.profit ?? '0');
                    const won = profit > 0;

                    currentStakeRef.current = won ? stake : currentStakeRef.current * martingaleMultiplier;

                    addLog({
                        time: new Date().toLocaleTimeString(),
                        symbol: signal.symbol,
                        label,
                        stake: stakeNow,
                        status: won ? 'won' : 'lost',
                        detail: `Profit: ${profit.toFixed(2)} ${currency} — next stake: ${currentStakeRef.current.toFixed(2)}`,
                    });

                    sub.unsubscribe();
                    api_base.api?.send({ forget: poc.id });
                });

                api_base.api.send({ proposal_open_contract: 1, contract_id, subscribe: 1 });
            })
            .catch((err: any) => {
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol: signal.symbol,
                    label,
                    stake: stakeNow,
                    status: 'error',
                    detail: err?.error?.message || err?.message || 'Buy request failed',
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addLog, martingaleMultiplier, stake]);

    /** Builds a stable key per signal so we don't re-fire on every tick for the same ongoing signal. */
    const signalKey = (signal: AnySignal): string => {
        switch (signal.kind) {
            case 'EVEN_ODD':
                return `EO-${signal.symbol}-${signal.side}`;
            case 'RISE_FALL':
                return `RF-${signal.symbol}-${signal.side}`;
            case 'MATCH':
                return `MA-${signal.symbol}-${signal.digit}`;
            case 'OVER_UNDER':
                return `OU-${signal.symbol}-${signal.side}`;
            default:
                return 'unknown';
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
            default:
                return signal.symbol;
        }
    };

    const maybeAutoFire = useCallback((all: AnySignal[]) => {
        if (!autoTradeRef.current || !scanningRef.current) return;
        all.forEach(signal => {
            const key = signalKey(signal);
            if (lastFiredKeyRef.current[signal.symbol + signal.kind] === key) return;
            lastFiredKeyRef.current[signal.symbol + signal.kind] = key;
            fireTrade(signal, labelFor(signal));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fireTrade]);

    // --- Tick subscription ---------------------------------------------------

    useEffect(() => {
        if (!api_base.api) return undefined;

        watchedSymbols.forEach(code => {
            if (!statsRef.current[code]) statsRef.current[code] = initSymbolStats(code);
        });

        const sub = api_base.api.onMessage().subscribe((response: any) => {
            const { data } = response;
            if (data?.msg_type !== 'tick' || !data.tick) return;
            const { symbol, quote } = data.tick;
            const stats = statsRef.current[symbol];
            if (!stats) return;
            pushTick(stats, +quote);
        });

        watchedSymbols.forEach(code => {
            api_base.api?.send({ ticks: code, subscribe: 1 });
        });

        return () => {
            sub.unsubscribe();
            api_base.api?.send({ forget_all: 'ticks' });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchedSymbols.join(',')]);

    // Recompute signals on an interval while scanning is on.
    useEffect(() => {
        if (!scanning) {
            setSignals(null);
            return undefined;
        }
        const id = setInterval(() => {
            const all = Object.values(statsRef.current);
            const result = scanAll(all);
            setSignals(result);
            maybeAutoFire([...result.evenOdd, ...result.riseFall, ...result.matches, ...result.overUnder]);
        }, 1000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scanning, maybeAutoFire]);

    const toggleSymbol = (code: string) => {
        setWatchedSymbols(prev => (prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]));
    };

    const handleStartStop = () => {
        if (!scanning) {
            currentStakeRef.current = stake;
            lastFiredKeyRef.current = {};
        }
        setScanning(prev => !prev);
    };

    // --- Render ---------------------------------------------------------------

    return (
        <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
            <h1>📊 Analysis Tool</h1>
            <p style={{ opacity: 0.8, fontSize: 14 }}>
                Scans your selected markets for four signal types — Even/Odd, Rise/Fall, Matches/Differs,
                and Over 2 / Under 7 — and shows momentum so you know roughly how long a signal tends to
                run before it breaks. Past digit distribution doesn&apos;t guarantee future ticks; treat this
                as a decision aid, not a certainty.
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

            <h3>Markets to scan</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                {SYMBOLS.map(s => (
                    <label key={s.code} style={{ border: '1px solid #555', borderRadius: 6, padding: '4px 10px' }}>
                        <input
                            type="checkbox"
                            checked={watchedSymbols.includes(s.code)}
                            onChange={() => toggleSymbol(s.code)}
                            style={{ marginRight: 6 }}
                        />
                        {s.label}
                    </label>
                ))}
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
                    <input type="checkbox" checked={autoTrade} onChange={e => setAutoTrade(e.target.checked)} />{' '}
                    Auto-trade sweet signals immediately
                </label>

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
                    {currentStakeRef.current.toFixed(2)}
                </span>
            </div>

            {scanning && !signals && (
                <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 16 }}>
                    Gathering ticks — signals need at least 40 ticks per market before they&apos;re trusted.
                </div>
            )}

            {signals && (
                <>
                    <SignalSection title="Even / Odd">
                        {signals.evenOdd.length === 0 && <Empty />}
                        {signals.evenOdd.map((s: EvenOddSignal) => (
                            <div key={s.symbol + s.side} style={cardStyle}>
                                <strong>{s.symbol}</strong> — strongest side: <strong>{s.side}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Current run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </div>
                        ))}
                    </SignalSection>

                    <SignalSection title="Rise / Fall">
                        {signals.riseFall.length === 0 && <Empty />}
                        {signals.riseFall.map((s: RiseFallSignal) => (
                            <div key={s.symbol + s.side} style={cardStyle}>
                                <strong>{s.symbol}</strong> — strongest side: <strong>{s.side}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Current run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </div>
                        ))}
                    </SignalSection>

                    <SignalSection title="Matches / Differs">
                        {signals.matches.length === 0 && <Empty />}
                        {signals.matches.map((s: MatchSignal) => (
                            <div key={s.symbol} style={cardStyle}>
                                <strong>{s.symbol}</strong> — strongest digit: <strong>{s.digit}</strong> at{' '}
                                {s.pct.toFixed(1)}%
                                <div style={detailStyle}>
                                    Reappears roughly every {s.gap.avgGap.toFixed(1)} ticks · {s.gap.ticksSinceLast}{' '}
                                    ticks since it last hit
                                </div>
                            </div>
                        ))}
                    </SignalSection>

                    <SignalSection title="Over 2 / Under 7">
                        {signals.overUnder.length === 0 && <Empty />}
                        {signals.overUnder.map((s: OverUnderSignal) => (
                            <div key={s.symbol + s.side} style={cardStyle}>
                                <strong>{s.symbol}</strong> — qualified for{' '}
                                <strong>{s.side === 'OVER2' ? 'Over 2' : 'Under 7'}</strong> (
                                {s.qualifyingDigitsAbove}/7 favouring digits above 10.5%)
                                <div style={detailStyle}>
                                    Current qualifying run: {s.momentum.currentRun} · typically breaks after ~
                                    {s.momentum.avgRun.toFixed(1)} runs (longest seen: {s.momentum.maxRun})
                                </div>
                            </div>
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

const Empty = () => <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 8 }}>No qualifying signal right now.</div>;

const SignalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div style={{ marginBottom: 20 }}>
        <h3>{title}</h3>
        {children}
    </div>
);

export default AnalysisTool;
