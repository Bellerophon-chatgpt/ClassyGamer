export const REVIEW_GAME = {
  title: 'The Witcher 3: Wild Hunt',
  genre: 'RPG',
  verdict: 'WORTH YOUR TIME',
  hours: 50,
  timeValue: '8,5',
};

export interface ScoreRow {
  label: string;
  score: string;
  pct: string;
}

export const SCORES: ScoreRow[] = [
  { label: 'Verhaal', score: '9,5', pct: '95%' },
  { label: 'Wereld', score: '9,8', pct: '98%' },
  { label: 'Gameplay', score: '7,5', pct: '75%' },
  { label: 'Exploratie', score: '9,0', pct: '90%' },
  { label: 'Personages', score: '9,5', pct: '95%' },
  { label: 'Progressie', score: '8,0', pct: '80%' },
  { label: 'Toegankelijkheid', score: '7,0', pct: '70%' },
  { label: 'Value', score: '9,5', pct: '95%' },
];

export interface PriceTier {
  price: string;
  pct: string;
  tag: string;
}

export const PRICE_TIERS: PriceTier[] = [
  { price: '€10', pct: '100%', tag: 'Absolute no-brainer' },
  { price: '€20', pct: '78%', tag: 'Worth your time' },
  { price: '€30', pct: '60%', tag: 'Nog steeds de moeite' },
  { price: '€50+', pct: '34%', tag: 'Wacht op de sale' },
];

export interface RevRec {
  title: string;
  match: string;
  tag: string;
  desc: string;
}

export const REVIEW_RECS: RevRec[] = [
  { title: 'Red Dead Redemption 2', match: '89%', tag: 'Worth your time', desc: 'Dezelfde traag-brandende, geleefde wereld en personages die je bijblijven.' },
  { title: 'Kingdom Come: Deliverance', match: '91%', tag: 'Worth your time', desc: 'Realistische middeleeuwse RPG met dezelfde nadruk op keuzes en sfeer.' },
  { title: 'Zelda: Breath of the Wild', match: '82%', tag: 'Worth your time', desc: 'Minder verhaal, meer ontdekking — dezelfde drang om over de volgende heuvel te kijken.' },
];

export const RELATED = [
  { tag: 'Recommendation', title: '7 games als je The Witcher 3 mist' },
  { tag: 'Opinion', title: 'Waarom je backlog geen to-do-list is' },
  { tag: 'Discover', title: "De beste RPG's voor gamers met weinig tijd" },
  { tag: 'Guide', title: 'The Witcher 3 — Beginner Guide' },
];
