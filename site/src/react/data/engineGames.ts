import type { Difficulty, EngineAnswers, EngineGame, Mood, TimeBudget } from '../types';

export const GAMES: EngineGame[] = [
  {
    title: 'Outer Wilds',
    genre: 'Mystery / Exploratie',
    hours: '~15u',
    time: 'short',
    diff: 'medium',
    mood: ['explore', 'story'],
    verdict: 'WORTH YOUR TIME',
    gem: false,
    blurb:
      'Een zonnestelsel-mysterie dat je maar één keer voor het eerst kunt ontrafelen. Pure nieuwsgierigheid als spelmechaniek.',
    pos: ['+ wereld om te ontrafelen', '+ beloont nieuwsgierigheid'],
  },
  {
    title: 'Hades',
    genre: 'Roguelike / Action',
    hours: '~25u',
    time: 'short',
    diff: 'hard',
    mood: ['challenge', 'relax'],
    verdict: 'WORTH YOUR TIME',
    gem: false,
    blurb: 'Verslavend en eindeloos herspeelbaar. Elke run duurt twintig minuten en vertelt zijn eigen verhaal.',
    pos: ['+ perfecte korte sessies', '+ elke run een verhaal'],
  },
  {
    title: 'Disco Elysium',
    genre: 'RPG / Narratief',
    hours: '~30u',
    time: 'mid',
    diff: 'easy',
    mood: ['story'],
    verdict: 'WORTH YOUR TIME',
    gem: false,
    blurb: 'Het beste schrijfwerk in games, punt. Een detectiveverhaal waarin bijna elke keuze telt.',
    pos: ['+ ongeëvenaard schrijfwerk', '+ keuzes tellen echt'],
  },
  {
    title: 'Elden Ring',
    genre: 'Action RPG',
    hours: '80u+',
    time: 'long',
    diff: 'hard',
    mood: ['challenge', 'explore'],
    verdict: 'WORTH YOUR TIME',
    gem: false,
    blurb: 'Onvergeeflijk, maar geen enkele open wereld nodigt zo sterk uit tot ontdekken. Een reis van tientallen uren.',
    pos: ['+ enorme wereld', '+ diepe uitdaging'],
  },
  {
    title: 'Stardew Valley',
    genre: 'Sim / Cozy',
    hours: '60u+',
    time: 'long',
    diff: 'easy',
    mood: ['relax'],
    verdict: 'WORTH YOUR TIME',
    gem: false,
    blurb: 'Eindeloos ontspannend. Bouw je boerderij op je eigen tempo, zonder ooit gehaast te worden.',
    pos: ['+ eindeloos ontspannend', '+ jouw tempo'],
  },
  {
    title: 'Pentiment',
    genre: 'Narratief / Historisch',
    hours: '~20u',
    time: 'mid',
    diff: 'easy',
    mood: ['story', 'explore'],
    verdict: 'HIDDEN GEM',
    gem: true,
    blurb: 'Een middeleeuws moordmysterie dat aanvoelt als een levend handschrift. Onterecht door bijna iedereen gemist.',
    pos: ['+ uniek handschrift-verhaal', '+ levende middeleeuwen'],
  },
];

interface Question {
  key: keyof EngineAnswers;
  title: string;
  sub: string;
  opts: { v: Mood | TimeBudget | Difficulty; label: string; sub: string }[];
}

export const QUESTIONS: Question[] = [
  {
    key: 'mood',
    title: 'Waar ben je vanavond voor in de stemming?',
    sub: 'Kies wat het dichtst in de buurt komt.',
    opts: [
      { v: 'story', label: 'Verhaal & sfeer', sub: 'Meeslepen, personages, wereld' },
      { v: 'challenge', label: 'Uitdaging & mastery', sub: 'Vaardigheid, spanning, triomf' },
      { v: 'explore', label: 'Ontdekken & verkennen', sub: 'Nieuwsgierigheid, geheimen' },
      { v: 'relax', label: 'Ontspannen', sub: 'Rustig tempo, geen druk' },
    ],
  },
  {
    key: 'time',
    title: 'Hoeveel tijd heb je?',
    sub: 'Eerlijk zijn helpt de match.',
    opts: [
      { v: 'short', label: 'Een avondje', sub: 'Onder de 15 uur' },
      { v: 'mid', label: 'Een paar weken', sub: '15 – 40 uur' },
      { v: 'long', label: 'Een grote reis', sub: '40 uur en meer' },
    ],
  },
  {
    key: 'diff',
    title: 'Hoeveel moeite mag het kosten?',
    sub: 'Er is geen fout antwoord.',
    opts: [
      { v: 'easy', label: 'Toegankelijk', sub: 'Ik wil vooral genieten' },
      { v: 'medium', label: 'Pittig maar eerlijk', sub: 'Een gezonde uitdaging' },
      { v: 'hard', label: 'Breek me maar', sub: 'Geef me je zwaarste' },
    ],
  },
];

const ORDER: Record<TimeBudget | Difficulty, number> = { short: 0, mid: 1, long: 2, easy: 0, medium: 1, hard: 2 };

export function score(g: EngineGame, a: EngineAnswers): number {
  let s = 0;
  if (a.mood && g.mood.includes(a.mood)) s += 3;
  if (a.time) {
    const d = Math.abs(ORDER[g.time] - ORDER[a.time]);
    s += d === 0 ? 2 : d === 1 ? 1 : 0;
  }
  if (a.diff) {
    const d = Math.abs(ORDER[g.diff] - ORDER[a.diff]);
    s += d === 0 ? 2 : d === 1 ? 1 : 0;
  }
  return s;
}

export function matchPct(g: EngineGame, a: EngineAnswers): string {
  return Math.min(97, 71 + score(g, a) * 3) + '%';
}

export interface Reason {
  text: string;
  bg: string;
  fg: string;
  border: string;
}

const POS_STYLE = { bg: 'rgba(108,92,231,0.16)', fg: '#b3a9f0', border: 'rgba(108,92,231,0.5)' };
const NEG_STYLE = { bg: 'rgba(247,245,237,0.05)', fg: '#8fa0bb', border: 'rgba(247,245,237,0.16)' };

export function reasons(g: EngineGame, a: EngineAnswers): Reason[] {
  const out: Reason[] = g.pos.slice(0, 2).map((t) => ({ text: t, ...POS_STYLE }));
  let ctx: Reason;
  if (g.time === 'long' && a.time === 'short') ctx = { text: '− vraagt meer tijd dan je hebt', ...NEG_STYLE };
  else if (g.time === 'short' && a.time === 'long') ctx = { text: '− korter dan je zocht', ...NEG_STYLE };
  else if (a.mood && !g.mood.includes(a.mood)) ctx = { text: '− andere sfeer dan je koos', ...NEG_STYLE };
  else ctx = { text: '+ past bij je tijd', ...POS_STYLE };
  out.push(ctx);
  return out;
}
