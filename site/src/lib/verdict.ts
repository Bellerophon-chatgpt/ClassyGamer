export type Verdict = 'worth-your-time' | 'worth-it-on-sale' | 'for-fans-only' | 'skip-it';

export const verdictLabels: Record<Verdict, string> = {
  'worth-your-time': 'WORTH YOUR TIME',
  'worth-it-on-sale': 'WORTH IT ON SALE',
  'for-fans-only': 'FOR FANS ONLY',
  'skip-it': 'SKIP IT',
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

/** Dutch decimal notation with one decimal: 9.5 → "9,5", 9 → "9,0". */
export const formatScore = (n: number) =>
  n.toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
