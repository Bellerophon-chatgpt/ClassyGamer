import type { BacklogEntry } from '../types';

const KEY = 'tcg_backlog';

export function parseHours(h: string): number {
  const m = String(h).match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

export function readBacklog(): BacklogEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as BacklogEntry[]) : [];
  } catch {
    return [];
  }
}

/** Adds a game to the shared backlog, deduping on title. Returns false if it was already there. */
export function addToBacklog(entry: Omit<BacklogEntry, 'id'>): boolean {
  try {
    const arr = readBacklog();
    if (arr.some((x) => x.title === entry.title)) return false;
    arr.push({ id: 'eng-' + Date.now(), ...entry });
    localStorage.setItem(KEY, JSON.stringify(arr));
    return true;
  } catch {
    return false;
  }
}

export function isInBacklog(title: string): boolean {
  return readBacklog().some((x) => x.title === title);
}

/** Undoes an accidental add from a review page's backlog toggle. */
export function removeFromBacklog(title: string): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(readBacklog().filter((x) => x.title !== title)));
  } catch {
    /* ignore */
  }
}
