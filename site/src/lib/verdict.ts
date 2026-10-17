export type Verdict = 'worth-your-time' | 'worth-it-on-sale' | 'for-fans-only' | 'skip-it';

export const verdictLabels: Record<Verdict, string> = {
  'worth-your-time': 'WORTH YOUR TIME',
  'worth-it-on-sale': 'WORTH IT ON SALE',
  'for-fans-only': 'FOR FANS ONLY',
  'skip-it': 'SKIP IT',
};

/** Pill-kleuren per verdict, zoals in de handoff (paars = WORTH YOUR TIME, de rest gedempt). */
export const verdictPill: Record<Verdict, { vbg: string; vfg: string }> = {
  'worth-your-time': { vbg: '#6C5CE7', vfg: '#fff' },
  'worth-it-on-sale': { vbg: 'rgba(247,245,237,0.92)', vfg: '#081B38' },
  'for-fans-only': { vbg: 'rgba(247,245,237,0.14)', vfg: '#F7F5ED' },
  'skip-it': { vbg: 'rgba(247,245,237,0.14)', vfg: '#F7F5ED' },
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });

/** Nederlandse notatie met één decimaal: 9.5 → "9,5", 9 → "9,0". */
export const formatScore = (n: number) =>
  n.toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** Sterren als tekst, bv. 4 → "★★★★☆". Een halve ster wordt "½" vóór de lege sterren. */
export const starString = (stars: number) => {
  const full = Math.floor(stars);
  const half = stars - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
};

/** Eerste zin (de cursieve tagline in de verdict-kaart) en de rest. */
export const splitFirstSentence = (text: string): [string, string] => {
  const m = text.match(/^(.+?[.!?])\s+([\s\S]*)$/);
  return m ? [m[1], m[2]] : [text, ''];
};

export const parseHours = (h: string) => {
  const m = h.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
};
