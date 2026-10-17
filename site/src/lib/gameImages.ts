// Game-art: zet een afbeelding in src/assets/games/ met de gamenaam als bestandsnaam
// (bv. "Baldur's Gate 3" → baldurs-gate-3.webp, of BaldursGate3.webp) en hij verschijnt overal waar die game
// een afbeeldingsvak heeft. Hoofdletters, spaties en streepjes maken voor het matchen niet uit.
const files = import.meta.glob<string>('../assets/games/*.{webp,avif,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const slugify = (title: string) =>
  title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Matchsleutel: alleen letters en cijfers, zodat "citizen-sleeper" en "CitizenSleeper" hetzelfde zijn. */
const key = (name: string) => slugify(name).replace(/-/g, '');

const byKey = new Map(Object.entries(files).map(([path, url]) => [key(path.split('/').pop()!.replace(/\.\w+$/, '')), url]));

/** URL van de afbeelding voor deze game, of undefined als er (nog) geen is. */
export const gameImage = (title?: string) => (title ? byKey.get(key(title)) : undefined);
