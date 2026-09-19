export interface VerdictStyle {
  verdict: string;
  vbg: string;
  vfg: string;
}

export const V_WORTH: VerdictStyle = { verdict: 'WORTH YOUR TIME', vbg: '#6C5CE7', vfg: '#fff' };
export const V_SALE: VerdictStyle = { verdict: 'WORTH IT ON SALE', vbg: 'rgba(247,245,237,0.92)', vfg: '#081B38' };
export const V_FANS: VerdictStyle = { verdict: 'FOR FANS ONLY', vbg: 'rgba(247,245,237,0.14)', vfg: '#F7F5ED' };

export interface RecentReview extends VerdictStyle {
  title: string;
  genre: string;
  teaser: string;
}

export const RECENT_REVIEWS: RecentReview[] = [
  { title: 'Elden Ring', genre: 'Action RPG', teaser: 'Onvergeeflijk, maar geen enkele wereld nodigt zo uit tot ontdekken.', ...V_WORTH },
  { title: 'Baldur’s Gate 3', genre: 'RPG', teaser: 'Bijna elke keuze telt. Een van de rijkste rollenspellen ooit gemaakt.', ...V_WORTH },
  { title: 'Starfield', genre: 'Space RPG', teaser: 'Ambitieus, maar dun uitgesmeerd. Wacht tot de prijs zakt.', ...V_SALE },
  { title: 'Final Fantasy XVI', genre: 'Action RPG', teaser: 'Spektakel en drama voor wie de serie een warm hart toedraagt.', ...V_FANS },
];

export interface WorthEntry {
  title: string;
  stars: string;
  note: string;
}

export const WORTH_YOUR_TIME: WorthEntry[] = [
  { title: 'Red Dead Redemption 2', stars: '★★★★★', note: 'Traag-brandend en onvergetelijk.' },
  { title: 'Disco Elysium', stars: '★★★★★', note: 'Het beste schrijfwerk in games.' },
  { title: 'Hades', stars: '★★★★☆', note: 'Verslavend, elke run een verhaal.' },
];

export interface DiscoverTeaser {
  title: string;
  tag: string;
  match: string;
  desc: string;
}

export const DISCOVER_TEASER: DiscoverTeaser[] = [
  { title: 'Outer Wilds', tag: 'Mystery / Exploratie', match: '88%', desc: 'Een zonnestelsel-mysterie dat je maar één keer voor het eerst kunt ontrafelen.' },
  { title: 'Pentiment', tag: 'Narratief / Historisch', match: '84%', desc: 'Een middeleeuws moordmysterie dat aanvoelt als een levend handschrift.' },
  { title: 'Tunic', tag: 'Adventure / Puzzel', match: '81%', desc: 'Een schattig avontuur met geheimen die je nog dagen bezighouden.' },
  { title: 'Signalis', tag: 'Survival Horror', match: '79%', desc: 'Strakke retro-horror met een sfeer die onder je huid kruipt.' },
];
