import React, { useEffect, useRef, useState, useCallback } from 'react';
import { api_base } from '@/external/bot-skeleton/services/api/api-base';
import { useApiBase } from '@/hooks/useApiBase';
import { initStats, initStreak, pushDigit, checkSignals, DigitStats, StreakState, Signal } from '@/utils/digitScanner';

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

type SymbolState = {
    stats: DigitStats;
    streak: StreakState;
    history: number[];
    lastDigit: number | null;
};

type LogEntry = {
    time: string;
    symbol: string;
    signal: Signal;
    stake: number;
    bulkCount: number;
    status: 'sent' | 'error';
    detail?: string;
};

const MAX_TRADES_PER_SESSION = 50;

const AiScanner: React.FC = () => {
    const { isAuthorized, activeLoginid } = useApiBase();
    const [watchedSymbols, setWatchedSymbols] = useState<string[]>(['R_100']);
    const [symbolStates, setSymbolStates] = useState<Record<string, SymbolState>>({});
    const [autoTrade, setAutoTrade] = useState(false);
    const [bulkTrade, setBulkTrade] = useState(false);
    const [bulkCount, setBulkCount] = useState(2);
    const [stake, setStake] = useState(1);
    const [log, setLog] = useState<LogEntry[]>([]);
    const [tradesThisSession, setTradesThisSession] = useState(0);
    const [running, setRunning] = useState(false);

    const stateRef = useRef<Record<string, SymbolState>>({});
    const lastSignalKeyRef = useRef<Record<string, string>>({});
    const autoTradeRef = useRef(autoTrade);
    const bulkTradeRef = useRef(bulkTrade);
    const bulkCountRef = useRef(bulkCount);
    const stakeRef = useRef(stake);
    const tradesThisSessionRef = useRef(tradesThisSession);
    const runningRef = useRef(running);

    useEffect(() => { autoTradeRef.current = autoTrade; }, [autoTrade]);
    useEffect(() => { bulkTradeRef.current = bulkTrade; }, [bulkTrade]);
    useEffect(() => { bulkCountRef.current = bulkCount; }, [bulkCount]);
    useEffect(() => { stakeRef.current = stake; }, [stake]);
    useEffect(() => { tradesThisSessionRef.current = tradesThisSession; }, [tradesThisSession]);
    useEffect(() => { runningRef.current = running; }, [running]);

    const addLog = useCallback((entry: LogEntry) => {
        setLog(prev => [entry, ...prev].slice(0, 200));
    }, []);

    const placeTrade = useCallback((symbol: string, signal: Signal) => {
        if (!signal || !api_base.api) return;
        if (tradesThisSessionRef.current >= MAX_TRADES_PER_SESSION) {
            addLog({
                time: new Date().toLocaleTimeString(),
                symbol,
                signal,
                stake: stakeRef.current,
                bulkCount: 1,
                status: 'error',
                detail: `Session trade cap (${MAX_TRADES_PER_SESSION}) reached — stopped for safety.`,
            });
            setRunning(false);
            return;
        }

        const currency = (api_base.account_info as { currency?: string })?.currency || 'USD';
        let contract_type = '';
        let barrier: string | undefined;

        switch (signal.type) {
            case 'EVEN': contract_type = 'DIGITEVEN'; break;
            case 'ODD': contract_type = 'DIGITODD'; break;
            case 'OVER2': contract_type = 'DIGITOVER'; barrier = '2'; break;
            case 'UNDER7': contract_type = 'DIGITUNDER'; barrier = '7'; break;
            default: return;
        }

        const buildBuyRequest = () => ({
            buy: 1,
            price: stakeRef.current,
            parameters: {
                amount: stakeRef.current,
                basis: 'stake',
                contract_type,
                currency,
                duration: 1,
                duration_unit: 't',
                symbol,
                ...(barrier ? { barrier } : {}),
            },
        });

        const count = bulkTradeRef.current ? Math.max(1, bulkCountRef.current) : 1;
        const requests = Array.from({ length: count }, () => buildBuyRequest());

        Promise.all(requests.map(req => api_base.api!.send(req)))
            .then(() => {
                setTradesThisSession(prev => prev + count);
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol,
                    signal,
                    stake: stakeRef.current,
                    bulkCount: count,
                    status: 'sent',
                });
            })
            .catch(err => {
                addLog({
                    time: new Date().toLocaleTimeString(),
                    symbol,
                    signal,
                    stake: stakeRef.current,
                    bulkCount: count,
                    status: 'error',
                    detail: err?.error?.message || err?.message || 'Buy request failed',
                });
            });
    }, [addLog]);

    const handleTick = useCallback((symbol: string, quote: number) => {
        const quoteStr = quote.toString();
        const lastChar = quoteStr[quoteStr.length - 1];
        const digit = parseInt(lastChar, 10);
        if (Number.isNaN(digit)) return;

        if (!stateRef.current[symbol]) {
            stateRef.current[symbol] = { stats: initStats(), streak: initStreak(), history: [], lastDigit: null };
        }
        const s = stateRef.current[symbol];
        pushDigit(s.stats, s.streak, digit, s.history, 1000);
        s.lastDigit = digit;

        const signal = checkSignals(s.stats, s.streak);
        if (signal) {
            const key = `${signal.type}-${s.streak.parityStreak}-${s.streak.lowStreak}-${s.streak.highStreak}`;
            if (lastSignalKeyRef.current[symbol] !== key) {
                lastSignalKeyRef.current[symbol] = key;
                if (autoTradeRef.current && runningRef.current) {
                    placeTrade(symbol, signal);
                }
            }
        }

        setSymbolStates(prev => ({ ...prev, [symbol]: { ...s } }));
    }, [placeTrade]);

    useEffect(() => {
        if (!api_base.api) return undefined;

        const sub = api_base.api.onMessage().subscribe((response: any) => {
            const { data } = response;
            if (data?.msg_type === 'tick' && data.tick) {
                handleTick(data.tick.symbol, +data.tick.quote);
            }
        });

        watchedSymbols.forEach(symbol => {
            api_base.api?.send({ ticks: symbol, subscribe: 1 });
        });

        return () => {
            sub.unsubscribe();
            api_base.api?.send({ forget_all: 'ticks' });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchedSymbols.join(',')]);

    const toggleSymbol = (code: string) => {
        setWatchedSymbols(prev =>
            prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
        );
    };

    return (
        <div style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
            <h1>🤖 AI Digit Scanner</h1>
            <p style={{ opacity: 0.8, fontSize: 14 }}>
                Tracks even/odd and over/under digit frequency plus streaks across the markets you select,
                and can auto-fire trades when your rules match. Synthetic index digits are generated
                independently each tick, so treat this as a rules engine, not a guaranteed edge.
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
                    <input type="checkbox" checked={bulkTrade} onChange={e => setBulkTrade(e.target.checked)} />{' '}
                    Bulk trade
                </label>
                {bulkTrade && (
                    <label>
                        Count:{' '}
                        <input
                            type="number"
                            min={1}
                            max={20}
                            value={bulkCount}
                            onChange={e => setBulkCount(parseInt(e.target.value, 10) || 1)}
                            style={{ width: 60 }}
                        />
                    </label>
                )}

                <label>
                    <input type="checkbox" checked={autoTrade} onChange={e => setAutoTrade(e.target.checked)} />{' '}
                    Auto-trade on signal
                </label>

                <button
                    onClick={() => setRunning(r => !r)}
                    disabled={!isAuthorized}
                    style={{
                        background: running ? '#a22' : '#2a2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 16px',
                        cursor: 'pointer',
                    }}
                >
                    {running ? 'Stop Scanner' : 'Start Scanner'}
                </button>

                <span style={{ fontSize: 12, opacity: 0.7 }}>
                    Trades this session: {tradesThisSession}/{MAX_TRADES_PER_SESSION}
                </span>
            </div>

            <h3>Live stats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
                {watchedSymbols.map(code => {
                    const s = symbolStates[code];
                    return (
                        <div key={code} style={{ border: '1px solid #444', borderRadius: 8, padding: 10 }}>
                            <strong>{code}</strong>
                            {s ? (
                                <div style={{ fontSize: 13, marginTop: 6 }}>
                                    <div>Last digit: {s.lastDigit}</div>
                                    <div>Even: {s.stats.evenPct.toFixed(1)}% / Odd: {s.stats.oddPct.toFixed(1)}%</div>
                                    <div>Parity streak: {s.streak.parityStreak} ({s.streak.lastParity})</div>
                                    <div>Low(0-2) streak: {s.streak.lowStreak} / High(7-9) streak: {s.streak.highStreak}</div>
                                </div>
                            ) : (
                                <div style={{ fontSize: 13, opacity: 0.6 }}>Waiting for ticks…</div>
                            )}
                        </div>
                    );
                })}
            </div>

            <h3 style={{ marginTop: 24 }}>Signal / trade log</h3>
            <div style={{ maxHeight: 260, overflowY: 'auto', border: '1px solid #444', borderRadius: 8 }}>
                {log.length === 0 && <div style={{ padding: 10, opacity: 0.6, fontSize: 13 }}>No signals yet.</div>}
                {log.map((entry, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '6px 10px',
                            fontSize: 13,
                            borderBottom: '1px solid #333',
                            color: entry.status === 'error' ? '#f66' : '#9f9',
                        }}
                    >
                        [{entry.time}] {entry.symbol} — {entry.signal?.type} x{entry.bulkCount} @ {entry.stake}
                        {entry.detail ? ` — ${entry.detail}` : ''}
                        {entry.signal?.reason ? ` (${entry.signal.reason})` : ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiScanner;
