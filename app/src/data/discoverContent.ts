import { V_FANS, V_SALE, V_WORTH } from './homeContent';

/** Static, non-interactive in the prototype too — "Alles" is the only pre-selected filter. */
export const FILTERS = ['Alles', 'Onder 10 uur', 'Weekendklus', 'Verhaalgedreven', 'Coöp', 'Chill', 'Op PC'];

export interface Gem {
  title: string;
  tag: string;
  length: string;
  platform: string;
  desc: string;
  why: string;
  verdict: string;
  vbg: string;
  vfg: string;
}

export const GEMS: Gem[] = [
  { title: 'Pentiment', tag: 'Narratief / Historisch', length: '15 uur', platform: 'PC · Xbox', desc: 'Een middeleeuws moordmysterie dat aanvoelt als een levend handschrift.', why: 'Voor wie van taal en sfeer houdt.', ...V_WORTH },
  { title: 'Tunic', tag: 'Adventure / Puzzel', length: '12 uur', platform: 'Alle platforms', desc: 'Een schattig avontuur met geheimen die je nog dagen bezighouden.', why: 'Voor wie geheimen wil ontrafelen.', ...V_WORTH },
  { title: 'Return of the Obra Dinn', tag: 'Puzzel / Deductie', length: '10 uur', platform: 'Alle platforms', desc: 'Reconstrueer het lot van 60 zeelieden in de scherpste detective-puzzel die er is.', why: 'Voor de detective in je.', ...V_WORTH },
  { title: 'A Short Hike', tag: 'Cozy / Exploratie', length: '2 uur', platform: 'Alle platforms', desc: 'Een middagje bergwandelen dat precies zo lang duurt als het moet.', why: 'Voor als je een middag vrij hebt.', ...V_WORTH },
  { title: 'Inscryption', tag: 'Kaartspel / Horror', length: '14 uur', platform: 'PC · Console', desc: 'Een kaartspel dat steeds weer verandert in iets wat je niet zag aankomen.', why: 'Voor wie van verrassingen houdt.', ...V_WORTH },
  { title: 'Citizen Sleeper', tag: 'Narratief / RPG', length: '8 uur', platform: 'Alle platforms', desc: 'Overleven op een verlaten ruimtestation, verteld met dobbelstenen en hart.', why: 'Voor een rustige avond met een verhaal.', ...V_SALE },
  { title: 'Signalis', tag: 'Survival Horror', length: '9 uur', platform: 'PC · Switch', desc: 'Strakke retro-horror met een sfeer die onder je huid kruipt.', why: 'Voor liefhebbers van klassieke horror.', ...V_FANS },
];

export interface Mood {
  n: string;
  title: string;
  sub: string;
  bg: string;
  fg: string;
  subfg: string;
}

export const MOODS: Mood[] = [
  { n: '01', title: 'Ik wil ontspannen', sub: 'Rustig, geen stress, mooie sfeer.', bg: '#284A7A', fg: '#F7F5ED', subfg: '#C7D4E8' },
  { n: '02', title: 'Laat me nadenken', sub: 'Puzzels, deductie, systemen.', bg: '#6C5CE7', fg: '#0B0F24', subfg: '#1E2246' },
  { n: '03', title: 'Vertel me een verhaal', sub: 'Personages die bijblijven.', bg: '#0b2038', fg: '#F7F5ED', subfg: '#8fa0bb' },
  { n: '04', title: 'Ik heb maar een uur', sub: 'Korte trips, meteen erin.', bg: '#3A2E7A', fg: '#F7F5ED', subfg: '#C4BEEA' },
];
