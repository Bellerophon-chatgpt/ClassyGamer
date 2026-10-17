export const GUIDE_CATEGORIES = ['Alles', 'Startgidsen', 'Speelvolgorde', 'Tips & tricks', 'Instellingen'];

export interface GuideKind {
  kind: string;
  bg: string;
  fg: string;
}

const K_START: GuideKind = { kind: 'Startgids', bg: '#6C5CE7', fg: '#fff' };
const K_ORDER: GuideKind = { kind: 'Speelvolgorde', bg: 'rgba(247,245,237,0.92)', fg: '#081B38' };
const K_TIPS: GuideKind = { kind: 'Tips & tricks', bg: 'rgba(247,245,237,0.14)', fg: '#F7F5ED' };

export interface Guide extends GuideKind {
  title: string;
  /** Game voor de afbeelding (zie src/assets/games/). */
  game?: string;
  desc: string;
  read: string;
}

export const GUIDES: Guide[] = [
  { title: 'Beginnen met Elden Ring zonder te breken', game: 'Elden Ring', desc: 'De eerste tien uur bepalen alles. Waar je heen loopt, wat je oppikt, en wanneer je gewoon wegrent.', read: '9 min lezen', ...K_START },
  { title: 'Baldur’s Gate 3: welke klasse voor je eerste run?', game: 'Baldur’s Gate 3', desc: 'Zes klassen die vergevingsgezind zijn voor nieuwkomers, zonder dat je iets mist van het verhaal.', read: '7 min lezen', ...K_START },
  { title: 'De Yakuza-serie in de juiste volgorde', game: 'Yakuza', desc: 'Acht hoofdgames, twee spin-offs en één remake. We tekenen de route die logisch loopt.', read: '11 min lezen', ...K_ORDER },
  { title: 'Final Fantasy: waar begin je in 2026?', game: 'Final Fantasy', desc: 'Geen enkele game vereist de vorige. We wijzen de vier beste instappunten aan.', read: '10 min lezen', ...K_ORDER },
  { title: 'Stardew Valley: je eerste jaar zonder stress', game: 'Stardew Valley', desc: 'Wat je écht moet doen per seizoen, en wat gewoon kan wachten tot volgend jaar.', read: '8 min lezen', ...K_TIPS },
  { title: 'Betere framerates zonder je game lelijk te maken', desc: 'De vijf instellingen die het meeste kosten en het minste opleveren — zet ze uit.', read: '6 min lezen', ...K_TIPS },
];
