import { Link } from 'react-router-dom';
import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { FILTERS, GEMS, MOODS } from '../data/discoverContent';

export default function Discover() {
  return (
    <>
      <section className="cg-hero" style={{ minHeight: '72vh' }}>
        <div className="cg-hero-art">
          <ArtPlaceholder label="Sleep full-bleed key-art (curatorkeuze)" />
        </div>
        <div className="cg-hero-fade" style={{ background: 'linear-gradient(to top, #06152C 8%, rgba(6,21,44,0.5) 50%, rgba(6,21,44,0.15) 100%)' }} />
        <div className="cg-hero-glow" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(124,92,255,0.14), transparent 55%)' }} />
        <div className="cg-hero-inner" style={{ paddingBottom: 60 }}>
          <div className="cg-badge-outline" style={{ marginBottom: 18 }}>
            Deze week gekozen door de curator
          </div>
          <h1 className="cg-hero-title" style={{ fontSize: 'clamp(40px,7vw,88px)', maxWidth: '14ch', marginBottom: 16 }}>
            Outer Wilds
          </h1>
          <p className="cg-hero-desc" style={{ fontSize: 18, maxWidth: '52ch' }}>
            Een zonnestelsel-mysterie dat je maar één keer voor het eerst kunt ontrafelen. Twintig uur die je nog jaren bijblijven.
          </p>
          <div className="cg-hero-meta-row">
            <Link to="/reviews" className="cg-cta-primary" style={{ padding: '14px 26px', fontSize: 14 }}>
              Lees waarom →
            </Link>
            <span className="cg-hero-meta-text" style={{ fontSize: 13.5 }}>
              <span className="cg-stars">★★★★★</span> &nbsp;·&nbsp; Mystery · 20 uur
            </span>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-section-eyebrow">Discover</div>
        <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.6vw,40px)', maxWidth: '18ch' }}>
          Vind je volgende favoriet
        </h2>
        <p className="cg-hero-desc" style={{ fontSize: 17, maxWidth: '58ch', color: 'var(--cg-text-2)', margin: 0 }}>
          Geen oneindige scroll of algoritme dat je hype verkoopt. Filter op hoeveel tijd je hebt, welke stemming je zoekt en wat je platform is — wij tonen alleen games die het waard zijn.
        </p>
      </section>

      <section className="cg-section" style={{ paddingTop: 34 }}>
        <div className="cg-filter-row">
          {FILTERS.map((f, i) => (
            <button key={f} type="button" className={`cg-filter-chip${i === 0 ? ' active' : ''}`}>
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
          {GEMS.map((g) => (
            <Link key={g.title} to="/reviews" className="cg-card">
              <div className="cg-card-art">
                <ArtPlaceholder label="Sleep art" />
                <span className="cg-card-badge-bl" style={{ background: g.vbg, color: g.vfg }}>
                  {g.verdict}
                </span>
              </div>
              <div className="cg-card-body" style={{ padding: '18px 20px', gap: 8 }}>
                <div className="cg-card-eyebrow purple">{g.tag}</div>
                <h3 className="cg-card-title" style={{ fontSize: 19 }}>
                  {g.title}
                </h3>
                <p className="cg-card-desc" style={{ fontSize: 13.5, flex: 1 }}>
                  {g.desc}
                </p>
                <div className="cg-gem-quote-row">
                  <div className="cg-gem-quote-avatar">C</div>
                  <p className="cg-gem-quote-text">{g.why}</p>
                </div>
                <div className="cg-gem-footer">
                  <span>{g.length}</span>
                  <span>·</span>
                  <span>{g.platform}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Browse op stemming</div>
          <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.4vw,36px)', marginBottom: 0 }}>
            Waar ben je vanavond voor in de stemming?
          </h2>
        </div>
        <div className="cg-mood-grid">
          {MOODS.map((m) => (
            <div key={m.n} className="cg-mood-card" style={{ background: m.bg }}>
              <div className="cg-mood-glow" />
              <div className="cg-mood-num" style={{ color: m.fg }}>
                {m.n}
              </div>
              <h3 className="cg-mood-title" style={{ color: m.fg }}>
                {m.title}
              </h3>
              <p className="cg-mood-sub" style={{ color: m.subfg }}>
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72, paddingBottom: 8 }}>
        <div className="cg-band">
          <div className="cg-band-glow" />
          <div className="cg-band-copy">
            <div className="cg-band-eyebrow">Laat de matcher kiezen</div>
            <h2 className="cg-band-heading">Twijfel je nog?</h2>
            <p className="cg-band-desc" style={{ maxWidth: '46ch' }}>
              Vertel ons je smaak en beschikbare tijd. Wij matchen je met de game die je uren écht waard is.
            </p>
          </div>
          <Link to="/speeladvies" className="cg-band-btn">
            Start de matcher →
          </Link>
        </div>
      </section>
    </>
  );
}
