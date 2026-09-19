import { Link } from 'react-router-dom';
import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { GUIDES, GUIDE_CATEGORIES } from '../data/guidesContent';

export default function Guides() {
  return (
    <>
      <section className="cg-hero" style={{ minHeight: '72vh' }}>
        <div className="cg-hero-art">
          <ArtPlaceholder label="Sleep full-bleed key-art (uitgelichte gids)" />
        </div>
        <div className="cg-hero-fade" style={{ background: 'linear-gradient(to top, #06152C 8%, rgba(6,21,44,0.5) 50%, rgba(6,21,44,0.15) 100%)' }} />
        <div className="cg-hero-glow" style={{ background: 'radial-gradient(circle at 78% 28%, rgba(124,92,255,0.14), transparent 55%)' }} />
        <div className="cg-hero-inner" style={{ paddingBottom: 60 }}>
          <div className="cg-badge-outline" style={{ marginBottom: 18 }}>
            Uitgelichte gids
          </div>
          <h1 className="cg-hero-title" style={{ fontSize: 'clamp(36px,5.5vw,72px)', maxWidth: '18ch' }}>
            In welke volgorde speel je de Witcher-serie?
          </h1>
          <p className="cg-hero-desc" style={{ fontSize: 18, maxWidth: '54ch' }}>
            Boeken, games en Netflix door elkaar. We ontwarren waar je begint, wat je kunt overslaan, en hoe je bij deel 3 belandt zonder verdwaald te raken.
          </p>
          <div className="cg-hero-meta-row">
            <Link to="/reviews" className="cg-cta-primary">
              Lees de gids →
            </Link>
            <span className="cg-hero-meta-text">
              <span style={{ color: 'var(--cg-purple-light)', fontWeight: 600 }}>Startgids</span> &nbsp;·&nbsp; 12 min lezen &nbsp;·&nbsp; Spoilervrij
            </span>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-section-eyebrow">Guides</div>
        <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.6vw,40px)', maxWidth: '18ch' }}>
          Begin goed. Speel slim.
        </h2>
        <p className="cg-hero-desc" style={{ fontSize: 17, maxWidth: '58ch', color: 'var(--cg-text-2)', margin: 0 }}>
          Praktische gidsen zonder spoilers of grind-nonsens: waar je begint, in welke volgorde je een serie speelt, en hoe je het meeste haalt uit de tijd die je erin stopt.
        </p>
      </section>

      <section className="cg-section" style={{ paddingTop: 46 }}>
        <div className="cg-filter-row">
          {GUIDE_CATEGORIES.map((c, i) => (
            <button key={c} type="button" className={`cg-filter-chip${i === 0 ? ' active' : ''}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 34 }}>
        <div className="cg-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
          {GUIDES.map((g) => (
            <Link key={g.title} to="/reviews" className="cg-card">
              <div className="cg-card-art" style={{ aspectRatio: '16 / 9' }}>
                <ArtPlaceholder label="Sleep art" />
                <span className="cg-card-badge-tl" style={{ background: g.bg, color: g.fg }}>
                  {g.kind}
                </span>
              </div>
              <div className="cg-card-body" style={{ padding: '20px 22px', gap: 9 }}>
                <h3 className="cg-card-title" style={{ fontSize: 20 }}>
                  {g.title}
                </h3>
                <p className="cg-card-desc" style={{ flex: 1 }}>
                  {g.desc}
                </p>
                <div className="cg-card-footer">
                  <span>{g.read}</span>
                  <span>·</span>
                  <span style={{ color: 'var(--cg-purple-light)' }}>Spoilervrij</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-glow-card">
          <div className="cg-glow-card-glow" style={{ background: 'radial-gradient(circle at 88% 20%, rgba(124,92,255,0.16), transparent 55%)' }} />
          <div className="cg-glow-card-inner">
            <div className="cg-section-eyebrow">De filosofie</div>
            <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}>
              Gidsen die je tijd besparen, niet vullen
            </h2>
            <p className="cg-glow-card-desc">
              We schrijven geen 40-uur completionist-checklists. Onze gidsen vertellen je wat écht de moeite waard is, wat je gerust kunt overslaan, en hoe je een game speelt zoals hij bedoeld is — zodat je meer beleeft in minder tijd.
            </p>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72, paddingBottom: 8 }}>
        <div className="cg-newsletter-band">
          <div className="cg-newsletter-band-copy">
            <p className="cg-newsletter-tagline" style={{ margin: '0 0 6px' }}>
              Better games. More time.
            </p>
            <h2 className="cg-newsletter-title" style={{ fontSize: 'clamp(26px,3.2vw,38px)', margin: '0 0 8px' }}>
              Nieuwe gids in je inbox
            </h2>
            <p className="cg-newsletter-desc" style={{ fontSize: 15.5, margin: 0, maxWidth: '42ch' }}>
              Elke week één praktische gids die je helpt slimmer te spelen. Geen hype, geen spam.
            </p>
          </div>
          <form className="cg-newsletter-band-form" onSubmit={(e) => e.preventDefault()}>
            <input className="cg-newsletter-input" placeholder="jouw@email.nl" type="email" />
            <button className="cg-newsletter-btn" type="submit">
              Inschrijven
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
