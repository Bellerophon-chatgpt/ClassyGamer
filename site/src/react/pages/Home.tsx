import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { DISCOVER_TEASER, RECENT_REVIEWS, WORTH_YOUR_TIME, type RecentReview } from '../data/homeContent';

export interface FeaturedReview {
  title: string;
  subtitle: string;
  href: string;
  verdict: string;
  stars: string;
  meta: string;
  image?: string;
}

export interface HomeCard extends RecentReview {
  href: string;
  image?: string;
}

interface HomeProps {
  featured: FeaturedReview;
  /** Echte reviews uit de content collection; aangevuld met voorbeeldkaarten uit het ontwerp tot er vier zijn. */
  reviews: HomeCard[];
}

export default function Home({ featured, reviews }: HomeProps) {
  const cards: HomeCard[] = [...reviews, ...RECENT_REVIEWS.map((r) => ({ ...r, href: '/reviews' }))].slice(0, 4);

  return (
    <>
      <section className="cg-hero" style={{ minHeight: '82vh' }}>
        <div className="cg-hero-art">
          {featured.image ? <img src={featured.image} alt="" className="cg-cover-img" /> : <ArtPlaceholder label="Sleep full-bleed key-art" game={featured.title} />}
        </div>
        <div className="cg-hero-fade" style={{ background: 'linear-gradient(to top, #06152C 6%, rgba(6,21,44,0.55) 45%, rgba(6,21,44,0.2) 100%)' }} />
        <div className="cg-hero-glow" style={{ background: 'radial-gradient(circle at 78% 30%, rgba(124,92,255,0.16), transparent 55%)' }} />
        <div className="cg-hero-inner" style={{ paddingBottom: 64 }}>
          <div className="cg-hero-kicker-row">
            <span className="cg-badge-solid">{featured.verdict}</span>
            <span className="cg-hero-kicker-label">Uitgelichte review</span>
          </div>
          <h1 className="cg-hero-title" style={{ fontSize: 'clamp(48px,8vw,104px)', maxWidth: '14ch' }}>
            {featured.title}
          </h1>
          <p className="cg-hero-desc" style={{ fontSize: 19, maxWidth: '54ch' }}>
            {featured.subtitle}
          </p>
          <div className="cg-hero-meta-row">
            <a href={featured.href} className="cg-cta-primary">
              Lees de review →
            </a>
            <span className="cg-hero-meta-text">
              <span className="cg-stars">{featured.stars}</span> &nbsp;·&nbsp; {featured.meta}
            </span>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', transform: 'translateY(-40px)' }}>
        <div className="cg-card-grid">
          {cards.map((g) => (
            <a key={g.title} href={g.href} className="cg-card">
              <div className="cg-card-art">
                {g.image ? <img src={g.image} alt="" className="cg-cover-img" /> : <ArtPlaceholder label="Sleep art" game={g.title} />}
                <span className="cg-card-badge-bl" style={{ background: g.vbg, color: g.vfg }}>
                  {g.verdict}
                </span>
              </div>
              <div className="cg-card-body">
                <div className="cg-card-eyebrow">{g.genre}</div>
                <h3 className="cg-card-title">{g.title}</h3>
                <p className="cg-card-desc">{g.teaser}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 24 }}>
        <div className="cg-worth-head-row">
          <span className="cg-badge-solid" style={{ padding: '7px 15px' }}>
            Worth your time
          </span>
          <span className="cg-worth-head-text">De games die zonder twijfel jouw uren verdienen.</span>
        </div>
        <div className="cg-worth-grid">
          {WORTH_YOUR_TIME.map((w) => (
            <a key={w.title} href="/reviews" className="cg-worth-cell">
              <div className="cg-worth-stars">{w.stars}</div>
              <div className="cg-worth-title">{w.title}</div>
              <div className="cg-worth-note">{w.note}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 56 }}>
        <div className="cg-band">
          <div className="cg-band-glow" />
          <div className="cg-band-copy">
            <div className="cg-band-eyebrow">De engine</div>
            <h2 className="cg-band-heading">Wat moet ik spelen?</h2>
            <p className="cg-band-desc">
              Vertel ons wat je leuk vindt en hoeveel tijd je hebt. Wij matchen je met een game die je uren écht waard is — geen hype, alleen eerlijk advies.
            </p>
          </div>
          <a href="/speeladvies" className="cg-band-btn">
            Start de matcher →
          </a>
        </div>
      </section>

      <section className="cg-section">
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Discover</div>
          <h2 className="cg-section-title">Verborgen parels</h2>
          <p className="cg-section-desc">Games die je waarschijnlijk miste — en die je tijd meer dan waard zijn.</p>
        </div>
        <div className="cg-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
          {DISCOVER_TEASER.map((d) => (
            <a key={d.title} href="/reviews" className="cg-card">
              <div className="cg-card-art">
                <ArtPlaceholder label="Sleep art" game={d.title} />
                <span className="cg-card-badge-tr">{d.match} match</span>
              </div>
              <div className="cg-card-body" style={{ padding: '18px 20px', gap: 8 }}>
                <h3 className="cg-card-title" style={{ fontSize: 19 }}>
                  {d.title}
                </h3>
                <div className="cg-card-eyebrow purple">{d.tag}</div>
                <p className="cg-card-desc" style={{ fontSize: 13.5 }}>
                  {d.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cg-section">
        <div className="cg-club-card">
          <div className="cg-club-glow" />
          <div className="cg-club-row">
            <div className="cg-club-copy">
              <div className="cg-club-tag">The Backlog Club · deze maand</div>
              <h2 className="cg-club-title">We spelen samen: Disco Elysium</h2>
              <p className="cg-club-desc">
                Elke maand kiezen we één game uit onze backlogs en spelen 'm samen. Deel je momenten, stem in de polls en lees het gezamenlijke verdict aan het eind van de maand.
              </p>
              <a href="/backlog-club" className="cg-club-btn">
                Doe mee →
              </a>
            </div>
            <div className="cg-club-side">
              <div className="cg-club-side-label">Voortgang</div>
              <div className="cg-club-stat-row">
                <span>Deelnemers</span>
                <strong>248 / 300</strong>
              </div>
              <div className="cg-club-track">
                <div className="cg-club-fill" style={{ width: '83%' }} />
              </div>
              <div className="cg-club-avatars">
                <div className="cg-club-avatar" style={{ background: '#6C5CE7' }} />
                <div className="cg-club-avatar" style={{ background: '#5A4BD0' }} />
                <div className="cg-club-avatar" style={{ background: '#9990c9' }} />
                <div className="cg-club-avatar-more">+245</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
