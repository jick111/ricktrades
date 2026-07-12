export type DigitStats = {
  digitCounts: number[];
  total: number;
  evenPct: number;
  oddPct: number;
  digitPct: number[];
};

export type StreakState = {
  lastParity: 'even' | 'odd' | null;
  parityStreak: number;
  lastLowHigh: 'low' | 'high' | 'mid' | null;
  lowStreak: number;
  highStreak: number;
};

export function initStats(): DigitStats {
  return { digitCounts: new Array(10).fill(0), total: 0, evenPct: 0, oddPct: 0, digitPct: new Array(10).fill(0) };
}

export function initStreak(): StreakState {
  return { lastParity: null, parityStreak: 0, lastLowHigh: null, lowStreak: 0, highStreak: 0 };
}

export function pushDigit(stats: DigitStats, streak: StreakState, digit: number, history: number[], windowSize = 1000) {
  history.push(digit);
  if (history.length > windowSize) {
    const removed = history.shift()!;
    stats.digitCounts[removed]--;
    stats.total--;
  }
  stats.digitCounts[digit]++;
  stats.total++;

  for (let i = 0; i < 10; i++) {
    stats.digitPct[i] = stats.total ? (stats.digitCounts[i] / stats.total) * 100 : 0;
  }
  const evenCount = [0, 2, 4, 6, 8].reduce((s, d) => s + stats.digitCounts[d], 0);
  const oddCount = [1, 3, 5, 7, 9].reduce((s, d) => s + stats.digitCounts[d], 0);
  stats.evenPct = stats.total ? (evenCount / stats.total) * 100 : 0;
  stats.oddPct = stats.total ? (oddCount / stats.total) * 100 : 0;

  const parity = digit % 2 === 0 ? 'even' : 'odd';
  if (streak.lastParity === parity) streak.parityStreak++;
  else { streak.lastParity = parity; streak.parityStreak = 1; }

  let lh: 'low' | 'high' | 'mid' = 'mid';
  if (digit <= 2) lh = 'low';
  else if (digit >= 7) lh = 'high';
  if (lh === streak.lastLowHigh) {
    if (lh === 'low') streak.lowStreak++;
    if (lh === 'high') streak.highStreak++;
  } else {
    streak.lastLowHigh = lh;
    streak.lowStreak = lh === 'low' ? 1 : 0;
    streak.highStreak = lh === 'high' ? 1 : 0;
  }
}

export type Signal = { type: 'EVEN' | 'ODD' | 'OVER2' | 'UNDER7'; reason: string } | null;

export function checkSignals(stats: DigitStats, streak: StreakState): Signal {
  if (stats.evenPct > stats.oddPct && streak.lastParity === 'odd' && streak.parityStreak >= 4) {
    return { type: 'EVEN', reason: `Even ${stats.evenPct.toFixed(1)}% > Odd ${stats.oddPct.toFixed(1)}%, ${streak.parityStreak} odds in a row` };
  }
  if (stats.oddPct > stats.evenPct && streak.lastParity === 'even' && streak.parityStreak >= 4) {
    return { type: 'ODD', reason: `Odd ${stats.oddPct.toFixed(1)}% > Even ${stats.evenPct.toFixed(1)}%, ${streak.parityStreak} evens in a row` };
  }
  const under3Pct = stats.digitPct[0] + stats.digitPct[1] + stats.digitPct[2];
  if (under3Pct < 10.5 && streak.lastLowHigh === 'low' && streak.lowStreak >= 2) {
    return { type: 'OVER2', reason: `0/1/2 combined ${under3Pct.toFixed(1)}% < 10.5%, ${streak.lowStreak} low digits in a row` };
  }
  const over6Pct = stats.digitPct[7] + stats.digitPct[8] + stats.digitPct[9];
  if (over6Pct < 10.5 && streak.lastLowHigh === 'high' && streak.highStreak >= 2) {
    return { type: 'UNDER7', reason: `7/8/9 combined ${over6Pct.toFixed(1)}% < 10.5%, ${streak.highStreak} high digits in a row` };
  }
  return null;
}
