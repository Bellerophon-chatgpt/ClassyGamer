import { Link } from 'react-router-dom';
import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { AXES, METHOD_VERDICTS, NOTS, PROMISES } from '../data/methodContent';

export default function ZoBeoordeelIk() {
  return (
    <>
      <section className="cg-section" style={{ paddingTop: 60 }}>
        <div className="cg-eyebrow" style={{ marginBottom: 14 }}>
          De methode
        </div>
        <h1 className="cg-hero-title" style={{ fontSize: 'clamp(38px,6vw,72px)', maxWidth: '15ch', marginBottom: 18 }}>
          Zo beoordeel ik een game
        </h1>
        <p className="cg-hero-desc" style={{ fontSize: 18, maxWidth: '58ch', margin: 0 }}>
          Eén vraag stuurt alles: is dit je tijd waard? Geen cijferoorlogen, geen hype, geen sponsors. Hieronder lees je precies hoe ik tot een verdict kom.
        </p>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-glow-card">
          <div className="cg-glow-card-glow" style={{ background: 'radial-gradient(circle at 85% 20%, rgba(124,92,255,0.16), transparent 55%)' }} />
          <div className="cg-glow-card-inner">
            <div className="cg-glow-card-kicker">De enige vraag die telt</div>
            <h2 className="cg-glow-card-title">Is dit je tijd waard?</h2>
            <p className="cg-glow-card-desc">
              Een game van 100 uur die je nooit uitspeelt is geen goede deal. Een game van 6 uur die je nooit vergeet wel. Ik beoordeel niet of iets technisch imponeert, maar of de uren die je erin stopt de moeite waard zijn — voor een speler met een leven buiten games.
            </p>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Vijf assen</div>
          <h2 className="cg-section-title" style={{ marginBottom: 0 }}>
            Waar ik op let
          </h2>
        </div>
        <div className="cg-tile-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {AXES.map((a) => (
            <div key={a.n} className="cg-tile-cell">
              <div className="cg-tile-num">{a.n}</div>
              <h3 className="cg-tile-title">{a.title}</h3>
              <p className="cg-tile-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Het verdict</div>
          <h2 className="cg-section-title">Vijf uitkomsten, geen cijfers</h2>
          <p className="cg-section-desc" style={{ fontSize: 16, maxWidth: '52ch' }}>
            Een 7,8 zegt niks. Elke review eindigt in één van deze vijf oordelen — helder genoeg om een beslissing op te baseren.
          </p>
        </div>
        <div className="cg-verdict-tile-grid">
          {METHOD_VERDICTS.map((v) => (
            <div key={v.label} className="cg-verdict-tile" style={{ background: v.bg, border: `1px solid ${v.border}` }}>
              <div className="cg-verdict-tile-label" style={{ color: v.labelfg }}>
                {v.label}
              </div>
              <h3 className="cg-verdict-tile-title" style={{ color: v.fg }}>
                {v.title}
              </h3>
              <p className="cg-verdict-tile-desc" style={{ color: v.subfg }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch' }}>
          <div className="cg-promise-panel">
            <div className="cg-promise-kicker">Mijn belofte</div>
            <h3 className="cg-promise-heading">Waar je op kunt rekenen</h3>
            <div className="cg-promise-list">
              {PROMISES.map((p) => (
                <div key={p} className="cg-promise-item">
                  <div className="cg-promise-dot yes">✓</div>
                  <p className="cg-promise-text yes">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cg-promise-panel">
            <div className="cg-promise-kicker">Wat ik weglaat</div>
            <h3 className="cg-promise-heading">Wat je bij mij niet krijgt</h3>
            <div className="cg-promise-list">
              {NOTS.map((n) => (
                <div key={n} className="cg-promise-item">
                  <div className="cg-promise-dot no">×</div>
                  <p className="cg-promise-text no">{n}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-curator-split">
          <div className="cg-curator-split-art">
            <ArtPlaceholder label="Sleep een portret van de curator" />
          </div>
          <div className="cg-curator-split-body">
            <div className="cg-section-eyebrow">Wie beoordeelt</div>
            <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.2vw,36px)' }}>
              Eén mens, geen redactie
            </h2>
            <p>
              Ik ben The Curator. Al twintig jaar speel ik alles van AAA-epossen tot piepkleine indies, en ik ben de vriend geworden aan wie iedereen vraagt: "moet ik dit spelen?" Deze site is dat antwoord, opgeschreven.
            </p>
            <p>Ik koop mijn games zelf, speel ze uit voordat ik oordeel, en zeg het eerlijk als iets je tijd niet waard is — hoe groot de hype ook.</p>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72, paddingBottom: 8 }}>
        <div className="cg-newsletter">
          <p className="cg-newsletter-tagline">Better games. More time.</p>
          <h2 className="cg-newsletter-title">Zie het oordeel in actie</h2>
          <p className="cg-newsletter-desc">Lees een volledige review en zie precies hoe deze methode tot een verdict komt.</p>
          <Link to="/reviews" className="cg-cta-primary" style={{ display: 'inline-flex' }}>
            Lees een review →
          </Link>
        </div>
      </section>
    </>
  );
}
