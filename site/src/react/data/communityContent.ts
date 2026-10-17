export interface Thread {
  initial: string;
  avatar: string;
  author: string;
  time: string;
  title: string;
  snippet: string;
  replies: string;
  tag: string;
  tagbg: string;
  tagfg: string;
}

const T_REVIEW = { tag: 'Reviews', tagbg: 'rgba(108,92,231,0.22)', tagfg: '#b3a9f0' };
const T_HELP = { tag: 'Hulp gevraagd', tagbg: 'rgba(247,245,237,0.14)', tagfg: '#F7F5ED' };
const T_CLUB = { tag: 'Backlog Club', tagbg: 'rgba(179,169,240,0.22)', tagfg: '#c9c1f5' };
const T_CHAT = { tag: 'Losse chat', tagbg: 'rgba(247,245,237,0.1)', tagfg: '#C4CBD6' };

export const THREADS: Thread[] = [
  { initial: 'M', avatar: '#6C5CE7', author: 'Maartje', time: '2u geleden', title: 'Welke RPG voor iemand met max 5 uur per week?', snippet: 'Ik hou van verhaal en keuzes maar heb geen 100 uur. Wat past hierbij?', replies: '47', ...T_HELP },
  { initial: 'S', avatar: '#5A4BD0', author: 'Sven', time: '4u geleden', title: 'Disco Elysium hoofdstuk 3 — dit is ongelooflijk', snippet: 'Zonder spoilers: de club-keuze van deze maand overtreft al mijn verwachtingen.', replies: '32', ...T_CLUB },
  { initial: 'L', avatar: '#3A2E7A', author: 'Lars', time: '6u geleden', title: 'Mini-review: Pentiment verdient meer aandacht', snippet: 'Vijftien uur pure sfeer. Ik snap niet waarom niemand het hierover heeft.', replies: '28', ...T_REVIEW },
  { initial: 'N', avatar: '#284A7A', author: 'Noor', time: '9u geleden', title: 'Wat speel je terwijl je wacht op de winter-releases?', snippet: 'Mijn backlog is leeg en ik weet niet waar ik moet beginnen. Ideeën?', replies: '61', ...T_CHAT },
  { initial: 'D', avatar: '#6C5CE7', author: 'Daan', time: '1d geleden', title: 'Is Starfield inmiddels de moeite waard?', snippet: 'Na alle updates — is het nu wél je tijd waard of nog steeds wachten?', replies: '54', ...T_HELP },
  { initial: 'F', avatar: '#9990c9', author: 'Fenna', time: '1d geleden', title: 'Onpopulaire mening: korte games zijn de beste games', snippet: 'A Short Hike in twee uur zei me meer dan menig 80-uur epos. Wie is het eens?', replies: '73', ...T_CHAT },
];

export const SPOTLIGHT_MEMBERS = [
  { initial: 'R', avatar: '#6C5CE7', name: 'Renske', role: '128 reviews · Top reviewer' },
  { initial: 'T', avatar: '#5A4BD0', name: 'Thijs', role: 'Backlog Club veteraan' },
  { initial: 'A', avatar: '#284A7A', name: 'Amir', role: 'Spoilervrije held' },
];

export const CHANNELS = ['#reviews', '#hulp-gevraagd', '#backlog-club', '#indie-parels', '#cozy-corner', '#deals', '#off-topic'];

export const COMMUNITY_RULES = [
  'Geen spoilers buiten de gemarkeerde zones. Ooit. Punt.',
  'Speel de bal, niet de speler. Meningen botsen, mensen niet.',
  'Console- en PC-oorlogen laten we bij de deur. Iedereen speelt anders.',
];
