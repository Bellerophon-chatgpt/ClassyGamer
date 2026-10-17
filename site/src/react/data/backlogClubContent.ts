export const CLUB_STEPS = [
  { n: '1', title: 'Doe mee', desc: 'Meld je gratis aan voor de game van de maand. Je krijgt de leesplanning in je inbox.' },
  { n: '2', title: 'Speel in tempo', desc: 'We verdelen de game in vier weken, zodat niemand achterloopt of spoilert.' },
  { n: '3', title: 'Deel onderweg', desc: 'Post je momenten in de spoilervrije zones en stem in de wekelijkse polls.' },
  { n: '4', title: 'Lees het verdict', desc: 'Aan het eind bundelen we de meningen tot één eerlijk clubverdict.' },
];

export interface Milestone {
  label: string;
  when: string;
  dot: string;
  mark: string;
  fg: string;
}

const DONE = { dot: '#6C5CE7', mark: '✓', fg: '#C4CBD6' };
const NOW = { dot: '#b3a9f0', mark: '●', fg: '#F7F5ED' };
const TODO = { dot: 'rgba(247,245,237,0.2)', mark: '', fg: '#8fa0bb' };

export const MILESTONES: Milestone[] = [
  { label: 'Week 1 · Aankomst in Martinaise', when: 'Afgerond', ...DONE },
  { label: 'Week 2 · Het onderzoek begint', when: 'Afgerond', ...DONE },
  { label: 'Week 3 · Diep de politiek in', when: 'Nu bezig', ...NOW },
  { label: 'Week 4 · Het verdict', when: '19 sept', ...TODO },
];

export const POLL = [
  { name: 'Outer Wilds', pct: '41%' },
  { name: 'Return of the Obra Dinn', pct: '28%' },
  { name: 'Pentiment', pct: '19%' },
  { name: 'Citizen Sleeper', pct: '12%' },
];

export const PAST_GAMES = [
  { title: 'Outer Wilds', month: 'Augustus 2026', stars: '★★★★★', empty: '' },
  { title: 'Hades', month: 'Juli 2026', stars: '★★★★', empty: '☆' },
  { title: 'Return of the Obra Dinn', month: 'Juni 2026', stars: '★★★★★', empty: '' },
  { title: 'Citizen Sleeper', month: 'Mei 2026', stars: '★★★★', empty: '☆' },
];
