// src/utils/analysisEngine.ts
//
// Pure, framework-free statistics engine for the Analysis Tool.
// Tracks per-symbol tick/digit history and computes signal candidates for:
//   1. Even / Odd
//   2. Rise / Fall
//   3. Matches / Differs
//   4. Over 2 / Under 7
//
// No API calls or React here on purpose — this file is just math over a
// stream of digits, so it's easy to unit test or tune thresholds later.

export const HISTORY_CAP = 500; // how many recent ticks we keep per symbol
export const STRONG_PCT = 55; // threshold for even/odd + rise/fall signals
export const OVERUNDER_PCT = 10.5; // threshold used for over2/under7 qualification
export const MATCH_MIN_PCT = 12; // minimum % to treat a digit as a "strong" match candidate
export const MIN_SAMPLE = 40; // don't trust stats until we've seen this many ticks

export type SymbolStats = {
    symbol: string;
    digitHistory: number[]; // last-digit stream, capped at HISTORY_CAP
    digitCounts: number[]; // length 10, running counts mirroring digitHistory
    evenOddHistory: boolean[]; // true = even, capped alongside digitHistory
    riseFallHistory: (boolean | null)[]; // true = rise, false = fall, null = no change / first tick
    lastQuote: number | null;
};

export function initSymbolStats(symbol: string): SymbolStats {
    return {
        symbol,
        digitHistory: [],
        digitCounts: new Array(10).fill(0),
        evenOddHistory: [],
        riseFallHistory: [],
        lastQuote: null,
    };
}

function lastDigitOf(quote: number): number {
    const str = quote.toString();
    return parseInt(str[str.length - 1], 10);
}

/** Mutates `stats` in place with a new tick. Call this once per incoming tick. */
export function pushTick(stats: SymbolStats, quote: number): void {
    const digit = lastDigitOf(quote);
    if (Number.isNaN(digit)) return;

    stats.digitHistory.push(digit);
    stats.digitCounts[digit] += 1;
    stats.evenOddHistory.push(digit % 2 === 0);

    if (stats.lastQuote === null) {
        stats.riseFallHistory.push(null);
    } else if (quote > stats.lastQuote) {
        stats.riseFallHistory.push(true);
    } else if (quote < stats.lastQuote) {
        stats.riseFallHistory.push(false);
    } else {
        stats.riseFallHistory.push(null);
    }
    stats.lastQuote = quote;

    if (stats.digitHistory.length > HISTORY_CAP) {
        const removed = stats.digitHistory.shift() as number;
        stats.digitCounts[removed] -= 1;
        stats.evenOddHistory.shift();
        stats.riseFallHistory.shift();
    }
}

export function getDigitPct(stats: SymbolStats): number[] {
    const total = stats.digitHistory.length;
    if (!total) return new Array(10).fill(0);
    return stats.digitCounts.map(c => (c / total) * 100);
}

export function getEvenOddPct(stats: SymbolStats) {
    const total = stats.evenOddHistory.length;
    if (!total) return { evenPct: 0, oddPct: 0 };
    const evens = stats.evenOddHistory.filter(Boolean).length;
    return { evenPct: (evens / total) * 100, oddPct: ((total - evens) / total) * 100 };
}

export function getRiseFallPct(stats: SymbolStats) {
    const relevant = stats.riseFallHistory.filter(v => v !== null) as boolean[];
    const total = relevant.length;
    if (!total) return { risePct: 0, fallPct: 0 };
    const rises = relevant.filter(Boolean).length;
    return { risePct: (rises / total) * 100, fallPct: ((total - rises) / total) * 100 };
}

// --- Run-length / momentum helpers -----------------------------------------

export type RunStats = {
    currentRun: number; // length of the run currently in progress, at the tail
    avgRun: number; // average COMPLETED run length historically for this class
    maxRun: number; // longest completed run seen
    totalRuns: number; // number of completed runs observed
};

/**
 * Given a boolean stream and the "class" we're tracking (true/false), returns
 * how long the run at the tail currently is, plus the historical average and
 * longest completed run length for that class.
 *
 * This is the basis for "how many runs before the signal tends to lose
 * momentum" — e.g. avgRun tells you the typical streak length, and
 * currentRun tells you where you are in the current streak right now.
 */
export function computeRunStats(bools: (boolean | null)[], targetClass: boolean): RunStats {
    const clean = bools.filter(v => v !== null) as boolean[];
    const completedRuns: number[] = [];
    let run = 0;
    let prev: boolean | null = null;

    clean.forEach(v => {
        if (v === prev) {
            run += 1;
        } else {
            if (prev === targetClass && run > 0) completedRuns.push(run);
            run = v === targetClass ? 1 : 0;
        }
        prev = v;
    });

    const currentRun = prev === targetClass ? run : 0;
    const avgRun = completedRuns.length ? completedRuns.reduce((a, b) => a + b, 0) / completedRuns.length : 0;
    const maxRun = completedRuns.length ? Math.max(...completedRuns) : 0;

    return { currentRun, avgRun, maxRun, totalRuns: completedRuns.length };
}

// --- Digit-match gap helpers -------------------------------------------------

export type MatchGapStats = {
    avgGap: number; // average ticks between repeat appearances of the digit
    ticksSinceLast: number; // ticks elapsed since the digit last appeared
};

export function computeMatchGapStats(digitHistory: number[], digit: number): MatchGapStats {
    const positions: number[] = [];
    digitHistory.forEach((d, i) => {
        if (d === digit) positions.push(i);
    });

    if (!positions.length) return { avgGap: 0, ticksSinceLast: digitHistory.length };

    const gaps: number[] = [];
    for (let i = 1; i < positions.length; i += 1) {
        gaps.push(positions[i] - positions[i - 1]);
    }
    const avgGap = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
    const ticksSinceLast = digitHistory.length - 1 - positions[positions.length - 1];

    return { avgGap, ticksSinceLast };
}

// --- Signal shapes -------------------------------------------------------------

export type EvenOddSignal = {
    kind: 'EVEN_ODD';
    symbol: string;
    side: 'EVEN' | 'ODD';
    pct: number;
    momentum: RunStats;
};

export type RiseFallSignal = {
    kind: 'RISE_FALL';
    symbol: string;
    side: 'RISE' | 'FALL';
    pct: number;
    momentum: RunStats;
};

export type MatchSignal = {
    kind: 'MATCH';
    symbol: string;
    digit: number;
    pct: number;
    gap: MatchGapStats;
};

export type OverUnderSignal = {
    kind: 'OVER_UNDER';
    symbol: string;
    side: 'OVER2' | 'UNDER7';
    digitPct: number[];
    qualifyingDigitsAbove: number; // how many of the 7 "in favour" digits cleared the threshold
    momentum: RunStats;
};

export type AnySignal = EvenOddSignal | RiseFallSignal | MatchSignal | OverUnderSignal;

// --- Signal scanners (run these across every symbol you're watching) -----------

export function scanEvenOdd(allStats: SymbolStats[]): EvenOddSignal[] {
    const signals: EvenOddSignal[] = [];
    allStats.forEach(stats => {
        if (stats.digitHistory.length < MIN_SAMPLE) return;
        const { evenPct, oddPct } = getEvenOddPct(stats);
        if (evenPct >= STRONG_PCT) {
            signals.push({
                kind: 'EVEN_ODD',
                symbol: stats.symbol,
                side: 'EVEN',
                pct: evenPct,
                momentum: computeRunStats(stats.evenOddHistory, true),
            });
        } else if (oddPct >= STRONG_PCT) {
            signals.push({
                kind: 'EVEN_ODD',
                symbol: stats.symbol,
                side: 'ODD',
                pct: oddPct,
                momentum: computeRunStats(stats.evenOddHistory, false),
            });
        }
    });
    return signals.sort((a, b) => b.pct - a.pct);
}

export function scanRiseFall(allStats: SymbolStats[]): RiseFallSignal[] {
    const signals: RiseFallSignal[] = [];
    allStats.forEach(stats => {
        const relevant = stats.riseFallHistory.filter(v => v !== null);
        if (relevant.length < MIN_SAMPLE) return;
        const { risePct, fallPct } = getRiseFallPct(stats);
        if (risePct >= STRONG_PCT) {
            signals.push({
                kind: 'RISE_FALL',
                symbol: stats.symbol,
                side: 'RISE',
                pct: risePct,
                momentum: computeRunStats(stats.riseFallHistory, true),
            });
        } else if (fallPct >= STRONG_PCT) {
            signals.push({
                kind: 'RISE_FALL',
                symbol: stats.symbol,
                side: 'FALL',
                pct: fallPct,
                momentum: computeRunStats(stats.riseFallHistory, false),
            });
        }
    });
    return signals.sort((a, b) => b.pct - a.pct);
}

export function scanMatches(allStats: SymbolStats[]): MatchSignal[] {
    const signals: MatchSignal[] = [];
    allStats.forEach(stats => {
        if (stats.digitHistory.length < MIN_SAMPLE) return;
        const pct = getDigitPct(stats);
        let bestDigit = 0;
        let bestPct = pct[0];
        pct.forEach((p, d) => {
            if (p > bestPct) {
                bestPct = p;
                bestDigit = d;
            }
        });
        if (bestPct >= MATCH_MIN_PCT) {
            signals.push({
                kind: 'MATCH',
                symbol: stats.symbol,
                digit: bestDigit,
                pct: bestPct,
                gap: computeMatchGapStats(stats.digitHistory, bestDigit),
            });
        }
    });
    return signals.sort((a, b) => b.pct - a.pct);
}

export function scanOverUnder(allStats: SymbolStats[]): OverUnderSignal[] {
    const signals: OverUnderSignal[] = [];
    allStats.forEach(stats => {
        if (stats.digitHistory.length < MIN_SAMPLE) return;
        const pct = getDigitPct(stats);

        // OVER 2: digits 0 & 1 must stay under the threshold, AND at least 4 of
        // digits 3-9 must clear the threshold. That combination means the market
        // is leaning hard toward the "over 2" digits.
        const overLowOk = pct[0] < OVERUNDER_PCT && pct[1] < OVERUNDER_PCT;
        const overHighCount = [3, 4, 5, 6, 7, 8, 9].filter(d => pct[d] >= OVERUNDER_PCT).length;
        if (overLowOk && overHighCount >= 4) {
            const boolStream = stats.digitHistory.map(d => d > 2);
            signals.push({
                kind: 'OVER_UNDER',
                symbol: stats.symbol,
                side: 'OVER2',
                digitPct: pct,
                qualifyingDigitsAbove: overHighCount,
                momentum: computeRunStats(boolStream, true),
            });
        }

        // UNDER 7: mirror image — digits 8 & 9 must stay under the threshold,
        // AND at least 4 of digits 0-6 must clear the threshold.
        const underHighOk = pct[8] < OVERUNDER_PCT && pct[9] < OVERUNDER_PCT;
        const underLowCount = [0, 1, 2, 3, 4, 5, 6].filter(d => pct[d] >= OVERUNDER_PCT).length;
        if (underHighOk && underLowCount >= 4) {
            const boolStream = stats.digitHistory.map(d => d < 7);
            signals.push({
                kind: 'OVER_UNDER',
                symbol: stats.symbol,
                side: 'UNDER7',
                digitPct: pct,
                qualifyingDigitsAbove: underLowCount,
                momentum: computeRunStats(boolStream, true),
            });
        }
    });
    return signals;
}

export function scanAll(allStats: SymbolStats[]) {
    return {
        evenOdd: scanEvenOdd(allStats),
        riseFall: scanRiseFall(allStats),
        matches: scanMatches(allStats),
        overUnder: scanOverUnder(allStats),
    };
}
