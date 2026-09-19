# Handoff: The Classy Gamer — reviewsite, Speeladvies-engine & Backlog

## Overview
The Classy Gamer is een onafhankelijke game-reviewsite met één redacteur ("The Curator"). Kernbelofte: *Better games. More time.* De site helpt bezoekers (1) kwaliteitsgames ontdekken, (2) beslissen of een game hun tijd waard is via een eerlijk verdict-systeem, en (3) hun eigen speelstapel ("backlog") beheren in tijd uitgedrukt.

Twee interactieve features staan centraal:
- **Speeladvies** ("Wat moet ik spelen?") — een 3-vragen-engine die een percentage-match + verdict + onderbouwing geeft, plus twee alternatieven.
- **Mijn Backlog** — een persoonlijk dashboard met drie kolommen (Wil ik spelen / Aan het spelen / Uitgespeeld) en een live tijdsbudget (uren & weken resterend op je eigen speeltempo).

De twee zijn gekoppeld: vanaf een engine-resultaat kun je een game op je backlog zetten; die verschijnt daar bovenaan.

## About the Design Files
De bestanden in dit pakket zijn **ontwerpreferenties, gemaakt in HTML** — prototypes die het bedoelde uiterlijk en gedrag tonen, geen productiecode om direct te kopiëren. Elk bestand is een "Design Component" (`.dc.html`) dat draait op een intern preview-runtime (`support.js`) en is **niet** representatief voor de doelarchitectuur.

De opdracht is om deze ontwerpen **na te bouwen in de bestaande omgeving van de doelcodebase** (React, Vue, Svelte, etc.) met de daar gangbare patronen, componentbibliotheek en routing. Bestaat er nog geen omgeving, kies dan het meest passende framework (aanbeveling: React + een router; de logica is al in React-achtige class-componenten geschreven en vertaalt direct naar functiecomponenten met hooks).

Negeer bij het overzetten: de `<x-dc>`/`<helmet>`/`<sc-for>`/`<sc-if>` tags, `support.js` en `image-slot.js` — dat is preview-plumbing. Neem wél over: de HTML-structuur, alle inline styles (kleuren, typografie, spacing), en de logica in het `class Component`-blok onderaan elk bestand.

## Fidelity
**High-fidelity (hifi).** Definitieve kleuren, typografie, spacing en interacties. Bouw de UI pixel-nauwkeurig na met de bibliotheken en patronen van de codebase. Alle hex-waarden, fontgroottes en gedragingen hieronder zijn de bron van waarheid.

## Design Tokens

### Kleuren
| Rol | Hex |
|---|---|
| Achtergrond (basis, donker navy) | `#06152C` |
| Achtergrond (kaart / paneel) | `#0b2038` |
| Achtergrond (footer) | `#040E1E` |
| Primaire tekst / ink | `#F7F5ED` |
| Secundaire tekst | `#C4CBD6` |
| Tertiaire tekst / muted | `#8fa0bb` |
| Zeer muted / captions | `#5b6b84` |
| Primair paars (accent, CTA) | `#6C5CE7` |
| Paars licht (links, labels, actief) | `#b3a9f0` |
| Paars lichter (hover / highlight) | `#8B7CFF` / `#c9c1f5` |
| Groen (voltooid / bevestiging) | `#3fbf8f` / `#5fd6a8` |
| Teal (alternatieve home-variant primair) | `#00A6A1` |
| Randen op donker | `rgba(247,245,237,0.1)` – `0.2` |

### Typografie
- **Fraunces** (serif) — koppen, titels, verdict-cijfers, logo. Gewichten 400/600/700/800/900; optisch variabel (`opsz 9..144`). Koppen gebruiken `letter-spacing:-0.015em` en `line-height:0.95–1.1`.
- **Inter** (sans) — body, nav, knoppen, labels. Gewichten 400/500/600/700. Uppercase labels: `font-size:11–12px; font-weight:700; letter-spacing:0.12–0.16em; text-transform:uppercase`.
- **Caveat** (handschrift) — alleen de tagline "Better games. More time." (26–27px).
- Fonts via Google Fonts.

### Spacing & vorm
- Contentbreedte: `max-width:1200px` (pagina's), `760px` (engine, leeskolom). Horizontale padding `32px`.
- Border-radius: knoppen/pills `999px`; kaarten `14–22px`; kleine badges `8–10px`.
- Schaduw kaarten: `0 30px 60px -30px rgba(0,0,0,0.7)`.
- Sticky header met `backdrop-filter:blur(10px)` en `background:rgba(6,21,44,0.9)`.
- Nav breekt naar burgermenu op `max-width:860px`.

## Navigatie (alle pagina's)
Sticky header met logo-lockup (THE / CLASSY / GAMER in een border-box) links, daarna de nav, en rechts een zoek-icoon + paarse pill-CTA **"Wat moet ik spelen?"** die naar Speeladvies linkt.

Nav-volgorde: **Home · Reviews · Discover · Speeladvies · Guides · Mijn Backlog · Backlog Club · Community**. "Mijn Backlog" (persoonlijk dashboard) en "Backlog Club" (community) staan bewust naast elkaar. De actieve pagina is `font-weight:600; color:#b3a9f0`; inactief `font-weight:500; color:#C4CBD6`. Onder 860px verdwijnt de desktop-nav en verschijnt een burger (`<details>`-dropdown) met dezelfde links. Footer heeft een "Ontdek"-kolom met dezelfde links + een Curator-blok.

## Screens / Views

### 1. Home (C-variant, canoniek) — `The Classy Gamer - Home C.dc.html`
Landingspagina. Hero met belofte, uitgelichte reviews, verdict-uitleg, engine- en backlog-instappunten. Er is ook een **teal-variant** (`Home C teal`, primair `#00A6A1`, donkere tekst voor contrast) als alternatieve merkrichting.

### 2. Reviewpagina — `The Classy Gamer - Reviewpagina.dc.html`
Individuele game-review met verdict, score-onderbouwing en (onder 760px) een sticky verdict+backlog-balk.

### 3. Zo beoordeel ik — `The Classy Gamer - Zo beoordeel ik C.dc.html`
Uitleg van de reviewmethode en de verdict-tiers.

### 4. Discover — `The Classy Gamer - Discover C.dc.html`
Bladeren/filteren door reviews.

### 5. Speeladvies ("Wat moet ik spelen?") — `The Classy Gamer - Wat moet ik spelen C.dc.html` ⭐ interactief
De aanbevelingsengine. Zie "Interacties" en "State" hieronder — dit is het belangrijkste te repliceren gedrag.

**Layout:** gecentreerde kolom `max-width:760px`. Hero (label "DE ENGINE" + kop + subkop), daaronder één kaart (`#0b2038`, radius 22px) die per stap de vraag óf het resultaat toont. Bovenin de kaart: stap-label links + drie voortgangsstipjes rechts (`26×5px` pills; gedaan `#6C5CE7`, actief `#8B7CFF`, toekomstig `rgba(247,245,237,0.14)`).

**Vraagweergave:** kop (Fraunces 24–32px) + subkop, dan een grid van keuze-knoppen (`repeat(auto-fit,minmax(220px,1fr))`, gap 12px). Elke knop: titel (Fraunces 18px) + subtitel (Inter 13px, muted). Hover → `background:rgba(108,92,231,0.16); border-color:rgba(108,92,231,0.6)`. Vanaf vraag 2 een "← Vorige vraag"-tekstknop.

**Resultaatweergave:** label "JOUW MATCH", dan een resultaatkaart (`#06152C`, radius 18px) met: verdict-pill + match-percentage ("XX% match"), gametitel (Fraunces 26–38px), meta (genre · uren), blurb, sectie **"Waarom deze match"** (chips: positief = paars `rgba(108,92,231,0.16)/#b3a9f0`, negatief/context = grijs `rgba(247,245,237,0.05)/#8fa0bb`), en een actierij: paarse pill **"Lees de review →"** + secundaire knop **"+ Zet op mijn backlog"**. Daaronder "Ook de moeite waard" (twee alternatieven als rijen: match% + titel + reden + verdict), dan de **sync-strip** (zie hieronder), dan "↺ Opnieuw beginnen". Disclaimer onderaan: "Aanbevelingen komen uit reviews van The Curator — nooit gesponsord, nooit algoritmisch opgevuld."

### 6. Mijn Backlog — `The Classy Gamer - Mijn Backlog C.dc.html` ⭐ interactief
Persoonlijk dashboard. Zie "Interacties" en "State".

**Layout:** `max-width:1200px`. Hero. Dan een **stats-strip** (kaart `#0b2038`): "Nog te spelen" (totaal uren + aantal games), een stepper "Mijn tempo per week" (− / getal / +, 1–40 u), en "Zo leeg is je stapel" (weken/maanden resterend + voortgangsbalk uitgespeeld%). Dan de **sync-strip**. Dan drie kolommen (`repeat(auto-fit,minmax(280px,1fr))`, gap 20px): Wil ik spelen (dot `#b3a9f0`) / Aan het spelen (`#6C5CE7`) / Uitgespeeld (`#3fbf8f`). Elke gamekaart: coverart-slot 52×70px, titel, genre, uren-label + verdict-badge, en onderaan verplaatsknoppen "← [vorige kolom]" / "[volgende kolom] →". Games toegevoegd via de engine krijgen een klein label **"via Speeladvies"**. Onderaan een CTA-blok terug naar de engine.

### 7. Guides — `The Classy Gamer - Guides C.dc.html`
Redactionele gidsen/lijstjes.

### 8. Backlog Club — `The Classy Gamer - Backlog Club C.dc.html`
Community-feature (gedeeld backlog-initiatief) — onderscheiden van het persoonlijke "Mijn Backlog".

### 9. Community — `The Classy Gamer - Community C.dc.html`
Community-hub.

### 10. Kit — `The Classy Gamer - Kit C.dc.html`
Merk/asset-pagina: TCG-monogram-behandelingen + een 1280×720 YouTube-thumbnailtemplate.

## Interactions & Behavior

### Verdict-tiers (5, in volgorde)
1. **WORTH YOUR TIME** — primair paars pill (`#6C5CE7` bg, witte tekst).
2. **HIDDEN GEM** — tier-2, "waarom Discover bestaat"; outline-pill (`rgba(108,92,231,0.16)` bg, `#b3a9f0` tekst, paarse rand).
3. **WORTH IT ON SALE** — muted/grijs.
4. (verdere lagere tiers volgen hetzelfde muted patroon.)
Verdict bepaalt zowel pill-styling als sortering/positionering in Discover.

### Speeladvies-engine (flow)
- 3 vragen, elk met 3–4 opties. Vragen: **mood** (verhaal/uitdaging/verkennen/ontspannen), **tijd** (kort <15u / midden 15–40u / lang 40u+), **moeilijkheid** (toegankelijk/pittig/zwaar).
- Klik op een optie slaat het antwoord op en gaat naar de volgende vraag. "Vorige vraag" gaat terug. Na vraag 3 → resultaat.
- **Scoring** (per game t.o.v. antwoorden): mood-match +3; tijd- en moeilijkheidsafstand via een 0/1/2-ordinale schaal (`Math.abs`): afstand 0 → +2, 1 → +1, 2 → 0. Games gesorteerd op score; hoogste = primaire match, #2 en #3 = alternatieven.
- **Match-percentage:** `Math.min(97, 71 + score*3) + '%'` — nooit 100% (bewust eerlijk, geen hype).
- **"Waarom deze match"-onderbouwing:** twee vaste positieve punten van de game + één contextregel afgeleid van de antwoorden (bv. "− vraagt meer tijd dan je hebt", "− korter dan je zocht", "− andere sfeer dan je koos", anders "+ past bij je tijd"). Dit is opzettelijk om "black box AI-gevoel" te vermijden — repliceer deze transparantie.
- Zie de `games`-array in het bestand voor de zes seed-games met hun `mood/time/diff/verdict/pos`-velden.

### Engine → Backlog koppeling
- Knop "+ Zet op mijn backlog" op het resultaat schrijft de game naar `localStorage` key **`tcg_backlog`** (dedupe op titel). Na toevoegen wordt de knop groen: label "Op je backlog gezet ✓", `bg rgba(63,191,143,0.14)`, `fg #5fd6a8`, rand `rgba(63,191,143,0.5)`.
- Opgeslagen object: `{ id, title, genre, hours (number), verdict }`. `hours` wordt uit de urenstring geparsed (eerste getal, bv. "~15u" → 15, "80u+" → 80).
- Mijn Backlog leest bij mount `tcg_backlog`, filtert dubbele titels eruit en zet de rest bovenaan kolom 0 ("Wil ik spelen") met vlag `imported:true` → toont "via Speeladvies"-label en telt mee in het tijdsbudget.

### Backlog-dashboard (gedrag)
- Games verplaatsen tussen de drie kolommen met de ← / → knoppen (kolomindex geklemd 0–2).
- **Tempo-stepper:** 1–40 u/week.
- **Live budget:** "Nog te spelen" = som uren in kolom 0. "Uitgespeeld%" = uren kolom 2 / totaal. Weken resterend = `ceil(queueHours / pace)`; ≤4 weken toont weken, anders "N weken · M mnd" (`weken/4.34`). Leeg = "Wachtrij leeg 🎉".

### Cross-device sync (nu alleen ONTWERP)
Op zowel het engine-resultaat als Mijn Backlog staat een **sync-strip**: cloud-icoon + "Opgeslagen op dit apparaat. Log in om je backlog te syncen naar telefoon, laptop en console-browser." + paarse knop "Log in om te syncen".

**Belangrijk voor de developer:** in het prototype is opslag localStorage — dus per browser én per apparaat, niet gedeeld. De sync-strip is bewust alleen visueel; hij zet de échte oplossing alvast neer. **Voor productie:** vervang localStorage door accounts + server-persistentie (de backlog hoort bij een gebruiker, niet bij een browser). De strip → echte login (evt. Google/Steam OAuth). Behoud de localStorage-laag eventueel als offline/gast-cache die bij login naar de server migreert. Toon een echte "gesynct"-status i.p.v. de statische knop.

### Responsive
- Nav → burger onder 860px.
- Reviewpagina: sticky verdict+backlog-balk verschijnt onder 760px (gebouwd, nog niet op echt telefoonformaat getest — testpunt voor de developer).
- Grids gebruiken `auto-fit/minmax` en wrappen vanzelf.

## State Management
Alle logica staat in het `class Component`-blok onderaan elk `.dc.html` (React class-achtig; vertaalt 1-op-1 naar hooks).

**Speeladvies:**
- `step` (0..3), `answers` ({mood,time,diff}), `added` ({[title]:bool}).
- Afgeleid in render: voortgangsstipjes, huidige vraag/opties, of het resultaat toont, gesorteerde matches, percentages, onderbouwing.
- Handlers: `choose(value)`, `back()`, `restart()`, `addToBacklog(game)`.

**Mijn Backlog:**
- `pace` (u/week), `games` (array: `{id,title,genre,hours,verdict,col,slot,imported}`).
- `componentDidMount`: importeert `tcg_backlog` uit localStorage.
- Handlers: `inc()`, `dec()`, `move(id,dir)`.
- Afgeleid: kolommen, uren/weken-budget, percentages.

**Data:** in het prototype hardcoded seed-arrays. Voor productie: reviews/games uit CMS of API; backlog uit gebruikersaccount. Match-scoring kan client- of serverside — de heuristiek is bewust simpel en uitlegbaar; houd 'm zo.

## Assets
- Fonts: Google Fonts (Fraunces, Inter, Caveat).
- Coverart: placeholder drop-slots (`image-slot.js` is preview-plumbing; vervang door echte `<img>`/CMS-assets). Eén echte afbeelding zit in het project (`the-witcher-3-...webp`) als voorbeeld.
- Iconen: inline SVG (zoek, burger, cloud) — vervang door je eigen icon-set.
- Logo: puur typografisch (Fraunces in een border-box), geen bitmizbestand nodig.

## Files
Canonieke huidige set (C-variant):
- `The Classy Gamer - Home C.dc.html` (+ `Home C teal` alternatief)
- `The Classy Gamer - Reviewpagina.dc.html`
- `The Classy Gamer - Zo beoordeel ik C.dc.html`
- `The Classy Gamer - Discover C.dc.html`
- `The Classy Gamer - Wat moet ik spelen C.dc.html` ⭐
- `The Classy Gamer - Mijn Backlog C.dc.html` ⭐
- `The Classy Gamer - Guides C.dc.html`
- `The Classy Gamer - Backlog Club C.dc.html`
- `The Classy Gamer - Community C.dc.html`
- `The Classy Gamer - Kit C.dc.html`

Oudere varianten (`Home`, `Home B`) zijn superseded — negeren tenzij je merkrichtingen wilt vergelijken.


## Screenshots
Referentie-afbeeldingen in `screenshots/` (het bedoelde eindresultaat — bouw hiernaar toe):

| Bestand | Scherm |
|---|---|
| `01-home.png` | Home (C, canoniek) |
| `01b-home-teal.png` | Home — teal merkvariant (#00A6A1) |
| `02-reviewpagina.png` | Reviewpagina |
| `03-zo-beoordeel-ik.png` | Zo beoordeel ik (verdict-methode) |
| `04-discover.png` | Discover |
| `05-engine-vraag.png` | Speeladvies — vraagweergave |
| `06-engine-resultaat.png` | Speeladvies — resultaat (verdict + match%) |
| `07-engine-resultaat-detail.png` | Speeladvies — onderbouwing, "Zet op backlog", alternatieven, sync-strip |
| `08-backlog.png` | Mijn Backlog — hero + stats-strip (tempo, budget) |
| `09-backlog-kolommen.png` | Mijn Backlog — drie kolommen + verplaatsknoppen |
| `10-guides.png` | Guides |
| `11-backlog-club.png` | Backlog Club (community) |
| `12-community.png` | Community |
| `13-kit.png` | Kit (merk/assets) |

De screenshots tonen coverart nog als placeholder-slots ("art / browse files") — dat is preview-plumbing; in productie vervangen door echte cover-images uit CMS/API.
