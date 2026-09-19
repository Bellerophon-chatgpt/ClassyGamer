import { Link } from 'react-router-dom';
import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { CLUB_STEPS, MILESTONES, PAST_GAMES, POLL } from '../data/backlogClubContent';

export default function BacklogClub() {
  return (
    <>
      <section className="cg-hero" style={{ minHeight: '78vh' }}>
        <div className="cg-hero-art">
          <ArtPlaceholder label="Sleep full-bleed key-art (Disco Elysium)" />
        </div>
        <div className="cg-hero-fade" style={{ background: 'linear-gradient(to top, #06152C 8%, rgba(6,21,44,0.55) 52%, rgba(6,21,44,0.18) 100%)' }} />
        <div className="cg-hero-glow" style={{ background: 'radial-gradient(circle at 82% 26%, rgba(124,92,255,0.14), transparent 55%)' }} />
        <div className="cg-hero-inner" style={{ paddingBottom: 56 }}>
          <div className="cg-badge-outline" style={{ marginBottom: 18 }}>
            Deze maand · September · we spelen samen
          </div>
          <h1 className="cg-hero-title" style={{ fontSize: 'clamp(40px,7vw,88px)', marginBottom: 16 }}>
            Disco Elysium
          </h1>
          <p className="cg-hero-desc" style={{ fontSize: 18, maxWidth: '50ch' }}>
            Het meest ambitieuze rollenspel over een detective die zichzelf kwijt is. Geen gevechten, alleen keuzes, gedachten en gevolgen. Perfect om samen te ontleden.
          </p>
          <div className="cg-hero-stats-row">
            <div className="cg-stat-pair">
              <span className="cg-stat-pair-value">~25 uur</span>
              <span className="cg-stat-pair-label">Speeltijd</span>
            </div>
            <div className="cg-stat-pair">
              <span className="cg-stat-pair-value">248</span>
              <span className="cg-stat-pair-label">Deelnemers</span>
            </div>
            <div className="cg-stat-pair">
              <span className="cg-stat-pair-value">12 dgn</span>
              <span className="cg-stat-pair-label">Tot verdict</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="button" className="cg-cta-primary" style={{ border: 'none' }}>
              Doe mee →
            </button>
            <button type="button" className="cg-hero-btn-secondary">
              Bekijk de leesplanning
            </button>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-club-tag" style={{ marginBottom: 16 }}>
          The Backlog Club
        </div>
        <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.6vw,40px)', maxWidth: '16ch' }}>
          Samen die stapel wegspelen
        </h2>
        <p className="cg-hero-desc" style={{ fontSize: 17, maxWidth: '58ch', color: 'var(--cg-text-2)', margin: 0 }}>
          Elke maand kiezen we samen één game uit onze eeuwig groeiende backlogs. We spelen 'm in hetzelfde tempo, delen momenten onderweg, en schrijven aan het eind een gezamenlijk verdict.
        </p>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Zo werkt het</div>
          <h2 className="cg-section-title" style={{ marginBottom: 0 }}>
            Vier stappen, één maand
          </h2>
        </div>
        <div className="cg-tile-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
          {CLUB_STEPS.map((s) => (
            <div key={s.n} className="cg-tile-cell">
              <div className="cg-tile-num" style={{ fontSize: 34, fontWeight: 900 }}>
                {s.n}
              </div>
              <h3 className="cg-tile-title">{s.title}</h3>
              <p className="cg-tile-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ flex: 2, minWidth: 300 }}>
            <div className="cg-section-eyebrow">Voortgang van de club</div>
            <h2 className="cg-section-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>
              We zitten in Hoofdstuk 3
            </h2>
            <div className="cg-milestone-card">
              <div className="cg-milestone-progress-row">
                <span>Gezamenlijke voortgang</span>
                <strong>62%</strong>
              </div>
              <div className="cg-milestone-track">
                <div className="cg-milestone-fill" style={{ width: '62%' }} />
              </div>
              {MILESTONES.map((m) => (
                <div key={m.label} className="cg-milestone-row">
                  <div className="cg-milestone-dot" style={{ background: m.dot }}>
                    {m.mark}
                  </div>
                  <div className="cg-milestone-label" style={{ color: m.fg }}>
                    {m.label}
                  </div>
                  <div className="cg-milestone-when">{m.when}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="cg-section-eyebrow">Poll van de week</div>
            <h2 className="cg-section-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>
              Volgende maand?
            </h2>
            <div className="cg-poll-card">
              {POLL.map((p) => (
                <div key={p.name} className="cg-poll-option">
                  <div className="cg-poll-fill" style={{ width: p.pct }} />
                  <div className="cg-poll-row">
                    <span className="cg-poll-name">{p.name}</span>
                    <span className="cg-poll-pct">{p.pct}</span>
                  </div>
                </div>
              ))}
              <div className="cg-poll-meta">312 stemmen · sluit vrijdag</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-section-head">
          <div className="cg-section-eyebrow">Uit de kast</div>
          <h2 className="cg-section-title" style={{ marginBottom: 0 }}>
            Eerder gespeeld
          </h2>
        </div>
        <div className="cg-past-grid">
          {PAST_GAMES.map((p) => (
            <div key={p.title} className="cg-past-card">
              <div className="cg-past-art">
                <ArtPlaceholder label="Sleep art" />
              </div>
              <div className="cg-past-body">
                <div className="cg-past-month">{p.month}</div>
                <h3 className="cg-past-title">{p.title}</h3>
                <div className="cg-past-stars">
                  {p.stars}
                  <span>{p.empty}</span> <span style={{ color: 'var(--cg-text-3)' }}>clubscore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72, paddingBottom: 8 }}>
        <div className="cg-band" style={{ display: 'block', textAlign: 'center', padding: '52px 44px' }}>
          <div className="cg-band-glow" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.16), transparent 55%)' }} />
          <div style={{ position: 'relative' }}>
            <p className="cg-cta-band-tagline" style={{ color: '#0B0F24' }}>
              Better games. More time.
            </p>
            <h2 className="cg-band-heading" style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>
              Word lid van de club
            </h2>
            <p className="cg-band-desc" style={{ margin: '0 auto 28px', maxWidth: '44ch', textAlign: 'center' }}>
              Elke maand een nieuwe game, samen gespeeld. Gratis, en je stapel wordt eindelijk kleiner.
            </p>
            <Link to="/backlog-club" className="cg-band-btn" style={{ display: 'inline-block' }}>
              Doe mee met September →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
