# The Classy Gamer — site

De publieke site van The Classy Gamer, gebouwd naar de Claude Design-handoff in
[`../design_handoff_classy_gamer/`](../design_handoff_classy_gamer/README.md).
Statisch (Astro), gratis te hosten, en een nieuwe review is één `.mdx`-bestand.

## Lokaal draaien

Vereist Node 22.22 of nieuwer.

```sh
cd site
npm install
npm run dev       # http://localhost:4321
npm run build     # statische site in dist/
npm run preview   # bekijk de build
```

In een GitHub Codespace opent `npm run dev` een doorgestuurde poort (4321); open die en ga naar `/`.

## Pagina's

| URL | Wat | JavaScript |
|---|---|---|
| `/` | Home: uitgelichte (nieuwste) review, reviewkaarten, engine-band, Discover-teaser, Backlog Club, nieuwsbrief | geen |
| `/reviews/` | Overzicht van alle reviews | geen |
| `/reviews/<slug>/` | Reviewpagina, gegenereerd uit `src/content/reviews/<slug>.mdx` | klein script voor de backlog-knop |
| `/discover/` | Discover | geen |
| `/speeladvies/` | "Wat moet ik spelen?" — de 3-vragen-engine | React-eiland |
| `/mijn-backlog/` | Persoonlijk backlog-dashboard (localStorage `tcg_backlog`) | React-eiland |
| `/guides/`, `/backlog-club/`, `/community/` | Redactionele en community-pagina's | geen |
| `/zo-beoordeel-ik/` | Uitleg van de reviewmethode en verdicts | geen |
| `/over/`, `/statuut/` | Over The Curator, redactiestatuut (placeholder-tekst) | geen |
| `/kit/` | Brand kit: monogram + YouTube-thumbnailsjabloon (niet in de navigatie, `noindex`) | geen |

## Een nieuwe review toevoegen

1. Kopieer [`review-template.mdx`](review-template.mdx) naar `src/content/reviews/<slug>.mdx`.
   De bestandsnaam wordt de URL: `elden-ring.mdx` → `/reviews/elden-ring/`.
2. Vul de frontmatter in en schrijf de review eronder in Markdown.
3. Klaar. Geen code aanpassen. De review verschijnt automatisch op Home (de nieuwste wordt uitgelicht) en in `/reviews/`.

Het schema staat in [`src/content.config.ts`](src/content.config.ts). Een veld vergeten of verkeerd type? Dan stopt
`npm run build` met een duidelijke foutmelding.

Handige details:

- **`verdictText`**: de eerste zin wordt de cursieve tagline in de verdict-kaart, de rest de toelichting.
- **`priceTiers`**: de balken lopen automatisch af; de laatste (duurste) tier wordt gedempt weergegeven.
- **`related`**: geef een `href` mee zodra je van die game ook een review hebt.
- **Afbeelding**: zie *Game-art* hieronder. Wil je voor één review een andere hero dan de standaard game-art, zet dan het bestand in `public/img/` en vul `heroImage: "/img/<bestand>"` in.
- **In de body** kun je zonder import `<Figure>`, `<Quote>` en `<Spoiler>` gebruiken (zie het sjabloon).

## Game-art

Alle afbeeldingen van games staan in [`src/assets/games/`](src/assets/games/), met de gamenaam als bestandsnaam:
kleine letters, spaties en leestekens worden een streepje, apostrofs vallen weg.

| Game | Bestand |
|---|---|
| The Witcher 3: Wild Hunt | `the-witcher-3-wild-hunt.webp` |
| Baldur's Gate 3 | `baldurs-gate-3.webp` |
| The Legend of Zelda: Breath of the Wild | `the-legend-of-zelda-breath-of-the-wild.webp` |

Eén bestand verschijnt automatisch overal waar die game een afbeeldingsvak heeft: de hero van de review, de kaarten
op Home en `/reviews/`, Discover, Backlog Club, Guides, Mijn Backlog en de Kit-thumbnails. Zonder bestand blijft de
placeholder uit het ontwerp staan. Gebruik liggende afbeeldingen (16:9 of 3:2), bij voorkeur `.webp`, zo'n 1600–1920 px breed.

## Nieuwsbrief (Beehiiv)

De nieuwsbrief is een Beehiiv-embed; er is bewust geen eigen e-mailsysteem. Er zijn twee plekken, allebei
gemarkeerd met `BEEHIIV EMBED HIER`:

- [`src/components/NewsletterSignup.astro`](src/components/NewsletterSignup.astro) — het grote blok op Home.
- [`src/components/Footer.astro`](src/components/Footer.astro) — het compacte blok in de footer van reviewpagina's.

Vervang daar het (nu uitgeschakelde) formulier door de embedcode van Beehiiv. **Doe dit vóór livegang**:
tot die tijd kan niemand zich aanmelden.

## Voorbeeldcontent uit het ontwerp

Een deel van de content komt nog letterlijk uit de handoff en hoort bij het ontwerp, niet bij echte reviews:

- `src/react/data/*.ts` — o.a. de reviewkaarten op Home (Elden Ring, Baldur's Gate 3, …), Discover, Guides,
  Backlog Club, Community, de games in de Speeladvies-engine en het voorbeeldbord van Mijn Backlog.
- Home vult de rij reviewkaarten aan met deze voorbeelden tot er vier echte reviews zijn.
- De sync-strip ("Log in om te syncen") is alleen ontwerp; er zijn (nog) geen accounts.

Vervang of verwijder deze voorbeelden naarmate er echte content is.

## Structuur

```
site/
├── review-template.mdx        # leeg sjabloon voor een nieuwe review
├── src/
│   ├── assets/games/          # game-art, bestandsnaam = gamenaam (zie Game-art)
│   ├── content/reviews/       # één .mdx per review
│   ├── content.config.ts      # schema van de reviews (zod)
│   ├── pages/                 # routes (Astro)
│   ├── layouts/BaseLayout.astro
│   ├── components/            # Header, Footer, nieuwsbrief, tekstpagina, MDX-onderdelen
│   ├── react/                 # pagina's uit de handoff als React-componenten
│   │   ├── pages/             #   statisch gerenderd, behalve Speeladvies en Mijn Backlog
│   │   └── data/              #   voorbeeldcontent + backlog-opslag (localStorage)
│   ├── lib/                   # verdict-labels, navigatie
│   └── styles/global.css      # design-tokens en alle stijlen uit de handoff
└── public/                    # favicon, later afbeeldingen
```

Design-tokens (kleuren, fonts) staan als CSS-variabelen bovenaan [`src/styles/global.css`](src/styles/global.css).
Fonts (Fraunces, Inter, Caveat) worden zelf gehost via `@fontsource`. Er gaan geen verzoeken naar Google.

## Deployen

De build is een map statische bestanden (`dist/`), dus elke statische host werkt.

**Cloudflare Pages** (aanbevolen): koppel de GitHub-repo en stel in:

| Instelling | Waarde |
|---|---|
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `22` |

[`wrangler.toml`](wrangler.toml) bevat dezelfde instellingen voor `wrangler pages deploy`.

**Vercel**: importeer de repo, zet *Root Directory* op `site`. [`vercel.json`](vercel.json) regelt de rest.
