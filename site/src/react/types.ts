export type Verdict = 'WORTH YOUR TIME' | 'HIDDEN GEM' | 'WORTH IT ON SALE';

export type Mood = 'story' | 'challenge' | 'explore' | 'relax';
export type TimeBudget = 'short' | 'mid' | 'long';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface EngineGame {
  title: string;
  genre: string;
  hours: string;
  time: TimeBudget;
  diff: Difficulty;
  mood: Mood[];
  verdict: Verdict;
  gem: boolean;
  blurb: string;
  pos: [string, string];
}

export interface EngineAnswers {
  mood?: Mood;
  time?: TimeBudget;
  diff?: Difficulty;
}

/** A game as stored in the shared `tcg_backlog` localStorage key. */
export interface BacklogEntry {
  id: string;
  title: string;
  genre: string;
  hours: number;
  verdict: Verdict;
}

/** A game as tracked on the Mijn Backlog board (0 = Wil ik spelen, 1 = Aan het spelen, 2 = Uitgespeeld). */
export interface BacklogGame extends BacklogEntry {
  col: 0 | 1 | 2;
  imported?: boolean;
}
