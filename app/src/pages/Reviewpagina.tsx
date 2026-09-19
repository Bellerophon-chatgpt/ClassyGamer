import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToBacklog, isInBacklog, removeFromBacklog } from '../data/backlog';
import { PRICE_TIERS, RELATED, REVIEW_GAME, REVIEW_RECS, SCORES } from '../data/reviewContent';

export default function Reviewpagina() {
  const [spoilerOpen, setSpoilerOpen] = useState(false);
  const [inBacklog, setInBacklog] = useState(() => isInBacklog(REVIEW_GAME.title));

  const toggleBacklog = () => {
    if (inBacklog) {
      removeFromBacklog(REVIEW_GAME.title);
      setInBacklog(false);
    } else {
      addToBacklog({ title: REVIEW_GAME.title, genre: REVIEW_GAME.genre, hours: REVIEW_GAME.hours, verdict: REVIEW_GAME.verdict as 'WORTH YOUR TIME' });
      setInBacklog(true);
    }
  };

  const backlogLabel = inBacklog ? '✓ In mijn backlog' : '+ Voeg toe aan backlog';

  return (
    <div className="cg-rev-page">
      <section className="cg-rev-hero">
        <div className="cg-rev-hero-bg" />
        <span className="cg-rev-hero-label">cinematisch game-artwork</span>
        <div className="cg-rev-hero-fade" />
        <div className="cg-rev-hero-inner">
          <div className="cg-rev-hero-copy">
            <div className="cg-rev-verdict-badge">WORTH YOUR TIME</div>
            <h1 className="cg-rev-title">
              The Witcher 3:
              <br />
              Wild Hunt
            </h1>
            <p className="cg-rev-teaser">Een game die je niet alleen speelt, maar beleeft. Maar is hij na al die jaren nog steeds jouw tijd waard?</p>
            <div className="cg-rev-byline-row">
              <div className="cg-rev-avatar">C</div>
              <span className="cg-rev-byline-text">
                <strong>The Curator</strong> · Gamer, schrijver, ontdekkingsreiziger
              </span>
              <span className="cg-rev-dot">·</span>
              <span className="cg-rev-byline-text">12 april 2026 · 10 min leestijd</span>
              <span className="cg-rev-spoilerfree">Spoilervrij</span>
            </div>
            <p className="cg-rev-disclaimer">
              Zelf gekocht · gespeeld op pc (next-gen versie) · geen gesponsorde review.{' '}
              <Link to="/zo-beoordeel-ik">Zo beoordeel ik →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="cg-rev-facts">
        <div className="cg-rev-facts-grid">
          {[
            ['Speelduur', '50–150 uur'],
            ['Genre', 'RPG'],
            ['Spelers', 'Singleplayer'],
            ['Moeilijkheid', 'Gemiddeld'],
            ['Platform', 'PC · PS · Xbox · Switch'],
            ['Prijs', 'vanaf ~€10'],
            ['Release', '2015'],
          ].map(([label, value]) => (
            <div key={label} className="cg-rev-fact">
              <div className="cg-rev-fact-label">{label}</div>
              <div className="cg-rev-fact-value">{value}</div>
            </div>
          ))}
          <div className="cg-rev-fact highlight">
            <div className="cg-rev-fact-label">Time Value</div>
            <div className="cg-rev-fact-value">{REVIEW_GAME.timeValue} / 10</div>
          </div>
        </div>
      </section>

      <main className="cg-rev-main">
        <div className="cg-rev-main-inner">
          <article className="cg-rev-article">
            <div className="cg-rev-block">
              <div className="cg-rev-kicker">In het kort</div>
              <p className="cg-rev-lede">
                Kort antwoord: ja, voor de meeste mensen wel. Elf jaar na release is dit nog steeds een van de rijkste werelden die je kunt spelen. En met een nieuwe uitbreiding — <em>Songs of the Past</em> — in 2027 en Witcher 4 in 2028, is dit een uitgelezen moment om (opnieuw) in te stappen. Hieronder lees je precies voor wie wél, en voor wie niet.
              </p>
            </div>

            <div className="cg-rev-block-xl">
              <div className="cg-rev-verdict-card">
                <div className="cg-rev-verdict-glow" />
                <div className="cg-rev-verdict-inner">
                  <div className="cg-rev-verdict-kicker">Ons verdict</div>
                  <div className="cg-rev-verdict-label">WORTH YOUR TIME</div>
                  <div className="cg-rev-verdict-stars">★★★★☆</div>
                  <p className="cg-rev-verdict-tagline">Ja — zonder twijfel, zolang je bereid bent er tijd voor te maken.</p>
                  <p className="cg-rev-verdict-desc">
                    Het gevecht is niet z'n sterkste kant, maar het schrijfwerk, de sfeer en de keuzes maken dat ruimschoots goed. Houd je van singleplayer-RPG's en heb je 'm nog niet gespeeld? Begin eraan.
                  </p>
                  <button type="button" className="cg-rev-verdict-btn">
                    Vergelijkbare games →
                  </button>
                </div>
              </div>
            </div>

            <div className="cg-rev-two-col cg-rev-block-xl">
              <div>
                <h2 className="cg-rev-h2">Waarom zou je dit spelen?</h2>
                <div className="cg-rev-why-list">
                  {[
                    ['01', 'Een wereld die iets te vertellen heeft', 'Elke uithoek voelt geleefd, niet neergezet als decor.'],
                    ['02', 'Sidequests die geen opvulling zijn', 'Zelfs kleine missies hebben vaak een echt moreel dilemma.'],
                    ['03', 'Keuzes die ergens toe leiden', 'Grijs, zonder duidelijk goed of fout, met gevolgen die blijven hangen.'],
                  ].map(([n, title, desc]) => (
                    <div key={n} className="cg-rev-why-item">
                      <span className="cg-rev-why-num">{n}</span>
                      <div>
                        <h3 className="cg-rev-why-title">{title}</h3>
                        <p className="cg-rev-why-desc">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="cg-rev-h2" style={{ marginBottom: 12 }}>
                  Waar moet je rekening mee houden?
                </h2>
                <p className="cg-rev-caveat-sub">Eerlijk is eerlijk — geen dealbreakers, maar je weet waar je aan begint.</p>
                <div className="cg-rev-caveat-list">
                  {[
                    ['Combat', 'Prima, maar nooit diep. Veel rollen en tekens gebruiken.'],
                    ['Omvang', 'Kan overweldigen. Niet alles hoeft, en dat voelt soms niet zo.'],
                    ['Leeftijd', "Besturing en menu's zijn hier en daar houterig, en het begin is traag."],
                  ].map(([title, desc]) => (
                    <div key={title} className="cg-rev-caveat-card">
                      <h3 className="cg-rev-caveat-title">{title}</h3>
                      <p className="cg-rev-caveat-desc">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cg-rev-block-xl">
              <h2 className="cg-rev-h2" style={{ marginBottom: 8 }}>
                The Classy Scorecard
              </h2>
              <p className="cg-rev-caveat-sub">Ondersteunend — niet het hoofdverdict.</p>
              <div className="cg-rev-scorecard">
                {SCORES.map((row) => (
                  <div key={row.label} className="cg-rev-score-row">
                    <span className="cg-rev-score-label">{row.label}</span>
                    <span className="cg-rev-score-track">
                      <span className="cg-rev-score-fill" style={{ width: row.pct }} />
                    </span>
                    <span className="cg-rev-score-value">{row.score}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cg-rev-block-xl">
              <div className="cg-rev-tv-card">
                <div className="cg-rev-tv-glow" />
                <div className="cg-rev-tv-row">
                  <div style={{ flex: 'none' }}>
                    <div className="cg-rev-tv-kicker">Time Value</div>
                    <div className="cg-rev-tv-value">
                      {REVIEW_GAME.timeValue}
                      <span> / 10</span>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 260 }}>
                    <p className="cg-rev-tv-quote">
                      "Reken op vijftig uur voor het hoofdverhaal, en het dubbele als je alles wilt zien. Dat is veel — maar je krijgt er een van de beste uitbreidingen ooit voor terug. Weinig tijd? Doe de hoofdlijn en spring dan direct door naar Blood and Wine. Dat scheelt je vijftig uur, en je mist het beste niet."
                    </p>
                    <div className="cg-rev-tv-tags">
                      <span className="cg-rev-tv-tag">● 50–150 uur</span>
                      <span className="cg-rev-tv-tag">◆ Veel content</span>
                      <span className="cg-rev-tv-tag">◇ Hoge betrokkenheid</span>
                    </div>
                    <p className="cg-rev-tv-note">Time Value meet niet hoe lang een game is, maar hoe goed hij jouw tijd beloont.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cg-rev-fit-grid cg-rev-block-xl">
              <div className="cg-rev-fit-card yes">
                <h3 className="cg-rev-fit-title">Dit is jouw game als...</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark yes">✓</span>Je houdt van verhaal, sfeer en keuzes
                  </div>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark yes">✓</span>Je wilt een grote wereld om in te verdwijnen
                  </div>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark yes">✓</span>Je miste 'm destijds
                  </div>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark yes">✓</span>Je wilt klaar zijn voor <em>Songs of the Past</em> (2027) en Witcher 4 (2028)
                  </div>
                </div>
              </div>
              <div className="cg-rev-fit-card no">
                <h3 className="cg-rev-fit-title">Misschien niet voor jou als...</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark no">✕</span>Je zoekt strak, diep actiegevecht
                  </div>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark no">✕</span>Je haakt af op een traag begin en gedateerde menu's
                  </div>
                  <div className="cg-rev-fit-item">
                    <span className="cg-rev-fit-mark no">✕</span>Je hebt écht weinig tijd — al helpt de shortcut hierboven
                  </div>
                </div>
              </div>
            </div>

            <div className="cg-rev-block-xl">
              <h2 className="cg-rev-h2" style={{ fontSize: 'clamp(28px,3.6vw,38px)', marginBottom: 8 }}>
                Wat zou ik ervoor betalen?
              </h2>
              <p className="cg-rev-caveat-sub">Prijsadvies op basis van wat je terugkrijgt.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {PRICE_TIERS.map((tier) => (
                  <div key={tier.price} className="cg-rev-price-row">
                    <span className="cg-rev-price-value">{tier.price}</span>
                    <span className="cg-rev-price-track">
                      <span className="cg-rev-price-fill" style={{ width: tier.pct }} />
                    </span>
                    <span className="cg-rev-price-tag">{tier.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cg-rev-divider" />

            <div className="cg-rev-body cg-rev-block-lg">
              <div className="cg-rev-kicker" style={{ marginBottom: 14 }}>
                De volledige review
              </div>
              <h2 className="cg-rev-h2" style={{ fontSize: 'clamp(30px,4vw,44px)' }}>
                Waarom deze klassieker z'n reputatie nog altijd verdient
              </h2>
              <p>
                De next-gen update en een vaste plek in elke Steam-sale zetten deze game steeds opnieuw op ieders lijstje. De vraag is niet of hij ooit goed was — dat weten we — maar of hij vandaag, naast alles wat er sindsdien uitkwam, jouw uren nog verdient.
              </p>
              <p>
                De eerste uren zijn traag. Witte Gaard is een tutorial-dorp, en de game toont pas z'n ware gezicht wanneer je Velen binnenrijdt: een door oorlog getekend moeras waar elk dorp z'n eigen kleine tragedie herbergt. Vanaf dat punt laat de game je niet meer los.
              </p>

              <figure className="cg-rev-figure">
                <div className="cg-rev-figure-art">
                  <span>screenshot · de wereld van Velen</span>
                </div>
                <figcaption className="cg-rev-figcaption">Dit is waarom rondlopen soms belangrijker voelt dan de volgende quest.</figcaption>
              </figure>

              <p>
                Waar de game werkelijk uitblinkt is het schrijven. Bloed en Wijn, de laatste uitbreiding, is in z'n eentje beter dan de meeste volwaardige releases: een sprookjesachtig hertogdom dat langzaam donker kleurt. Weinig games durven hun beste materiaal in optioneel content te stoppen.
              </p>

              <blockquote className="cg-rev-blockquote">
                <p>"Sommige games wil je niet alleen spelen. Ze zijn herinneringen aan het worden."</p>
                <cite>— The Curator</cite>
              </blockquote>

              <p>
                Niet alles is goud. Het vechten blijft functioneel maar oppervlakkig, en na twintig uur draai je op de automatische piloot door groepen vijanden. De inventaris is omslachtig en de gezichtsanimaties buiten de grote scènes ogen stijf. Toch is niets daarvan een reden om weg te blijven.
              </p>

              <div className="cg-rev-spoiler">
                <div className="cg-rev-spoiler-row">
                  <div className="cg-rev-spoiler-tag">
                    <span className="cg-rev-spoiler-warn">⚠ SPOILER</span>
                    <span className="cg-rev-spoiler-text">Dit gedeelte bespreekt een verhaalontwikkeling.</span>
                  </div>
                  <button type="button" className="cg-rev-spoiler-btn" onClick={() => setSpoilerOpen((s) => !s)}>
                    {spoilerOpen ? 'Verberg' : 'Toon spoiler'}
                  </button>
                </div>
                {spoilerOpen && (
                  <p className="cg-rev-spoiler-content">
                    De keuzes rond Ciri's lot in de laatste act laten precies zien hoe zorgvuldig de game je eerdere beslissingen onthoudt — een kleine attentheid uren eerder bepaalt welk van de eindes je krijgt.
                  </p>
                )}
              </div>

              <p>Is het z'n tijd waard? Reken op zo'n 50 uur voor het hoofdverhaal en 100 tot 150+ met de uitbreidingen — en dat wil je. Tegen de sale-prijs is dat een van de sterkste uur-per-euro-verhoudingen in het genre.</p>
            </div>

            <div className="cg-rev-block-lg">
              <div className="cg-rev-conclusion">
                <div className="cg-rev-conclusion-glow" />
                <div style={{ position: 'relative' }}>
                  <div className="cg-rev-conclusion-kicker">Onze conclusie</div>
                  <div className="cg-rev-conclusion-label">WORTH YOUR TIME</div>
                  <p className="cg-rev-conclusion-quote">
                    "The Witcher 3 is inmiddels een klassieker — niet omdat hij perfect is, maar omdat hij dingen doet die bijna geen andere game zo goed doet. Neem de tijd, of neem 'm niet. Maar als je 'm neemt: neem dan ook Blood and Wine mee."
                  </p>
                  <div className="cg-rev-conclusion-actions">
                    <Link to="/speeladvies" className="cg-rev-btn-solid">
                      Wat moet ik hierna spelen? →
                    </Link>
                    <button type="button" className="cg-rev-btn-outline" style={{ color: inBacklog ? '#5fd6a8' : '#fff' }} onClick={toggleBacklog}>
                      {backlogLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="cg-rev-block-lg">
              <h2 className="cg-rev-h2" style={{ fontSize: 'clamp(26px,3.4vw,36px)', marginBottom: 6 }}>
                Als je dit goed vond...
              </h2>
              <p className="cg-rev-caveat-sub">Aanbevelingen op basis van wat deze game goed doet — niet op genre alleen.</p>
              <div className="cg-rev-recs-grid">
                {REVIEW_RECS.map((g) => (
                  <div key={g.title} className="cg-rev-rec-card">
                    <div className="cg-rev-rec-art">
                      <span className="label">game-art</span>
                      <span className="match">{g.match} match</span>
                    </div>
                    <div className="cg-rev-rec-body">
                      <h3 className="cg-rev-rec-title">{g.title}</h3>
                      <div className="cg-rev-rec-tag">{g.tag}</div>
                      <p className="cg-rev-rec-desc">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cg-rev-block-lg">
              <div className="cg-rev-club-band">
                <div className="cg-rev-club-copy">
                  <h3 className="cg-rev-club-title">Speel je deze mee?</h3>
                  <p className="cg-rev-club-desc">Deze game was onderdeel van The Backlog Club. Bekijk wat onze community ervan vond en doe volgende maand mee.</p>
                </div>
                <Link to="/backlog-club" className="cg-rev-club-btn">
                  Bekijk Backlog Club →
                </Link>
              </div>
            </div>

            <div className="cg-rev-author-row cg-rev-block-lg">
              <div className="cg-rev-author-avatar">C</div>
              <div>
                <div className="cg-rev-author-name">The Curator</div>
                <p className="cg-rev-author-role">Gamer. Ontdekker. Onverbeterlijke backlog-verzamelaar.</p>
                <p className="cg-rev-author-quote">"Op zoek naar de volgende game die écht mijn tijd waard is."</p>
                <a href="#" className="cg-rev-author-link">
                  Meer van The Curator →
                </a>
              </div>
            </div>

            <div>
              <h2 className="cg-rev-h2" style={{ fontSize: 'clamp(24px,3.2vw,32px)', marginBottom: 22 }}>
                Misschien vind je dit ook interessant
              </h2>
              <div className="cg-rev-related-grid">
                {RELATED.map((r) => (
                  <a key={r.title} href="#" className="cg-rev-related-cell">
                    <div className="cg-rev-related-tag">{r.tag}</div>
                    <div className="cg-rev-related-title">{r.title}</div>
                  </a>
                ))}
              </div>
            </div>
          </article>

          <aside className="cg-rev-aside">
            <div className="cg-rev-aside-card">
              <div className="cg-rev-aside-verdict">WORTH YOUR TIME</div>
              <div className="cg-rev-aside-tv">
                <div className="cg-rev-aside-tv-label">Time Value</div>
                <div className="cg-rev-aside-tv-value">
                  {REVIEW_GAME.timeValue}
                  <span> / 10</span>
                </div>
              </div>
              <div className="cg-rev-aside-facts">
                <div className="cg-rev-aside-fact-row">
                  <span>Speelduur</span>
                  <span>50–150 uur</span>
                </div>
                <div className="cg-rev-aside-fact-row">
                  <span>Genre</span>
                  <span>RPG</span>
                </div>
                <div className="cg-rev-aside-fact-row">
                  <span>Spelers</span>
                  <span>Singleplayer</span>
                </div>
              </div>
              <button type="button" className="cg-rev-aside-btn outline" style={{ color: inBacklog ? '#5fd6a8' : '#6C5CE7' }} onClick={toggleBacklog}>
                {backlogLabel}
              </button>
              <Link to="/speeladvies" className="cg-rev-aside-btn solid" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                Wat nu? →
              </Link>
              {inBacklog && <div className="cg-rev-aside-added">✓ Staat nu in je backlog</div>}
            </div>
            <div className="cg-rev-aside-note">
              <strong>Transparant.</strong> Zelf gekocht, geen gesponsorde review. Geen adverteerder had invloed op dit oordeel.
            </div>
          </aside>
        </div>
      </main>

      <div className="cg-rev-mobilebar">
        <div className="cg-rev-mobilebar-info">
          <div className="cg-rev-mobilebar-label">Verdict</div>
          <div className="cg-rev-mobilebar-row">
            <span className="cg-rev-mobilebar-verdict">WORTH YOUR TIME</span>
            <span className="cg-rev-mobilebar-tv">TV {REVIEW_GAME.timeValue}</span>
          </div>
        </div>
        <button type="button" className="cg-rev-mobilebar-btn" style={{ color: inBacklog ? '#5fd6a8' : '#F7F5ED', background: inBacklog ? 'rgba(63,191,143,0.14)' : 'transparent' }} onClick={toggleBacklog}>
          {backlogLabel}
        </button>
      </div>
    </div>
  );
}
