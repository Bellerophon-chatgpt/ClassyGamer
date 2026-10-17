import { useState } from 'react';
import { ArtPlaceholder } from '../components/ArtPlaceholder';
import { CHANNELS, COMMUNITY_RULES, SPOTLIGHT_MEMBERS, THREADS } from '../data/communityContent';

export default function Community() {
  const [sort, setSort] = useState<'trending' | 'new'>('trending');

  return (
    <>
      <section className="cg-hero" style={{ minHeight: '66vh' }}>
        <div className="cg-hero-art">
          <ArtPlaceholder label="Sleep sfeerbeeld (full-bleed)" />
        </div>
        <div className="cg-hero-fade" style={{ background: 'linear-gradient(to top, #06152C 8%, rgba(6,21,44,0.6) 52%, rgba(6,21,44,0.2) 100%)' }} />
        <div className="cg-hero-glow" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(124,92,255,0.14), transparent 55%)' }} />
        <div className="cg-hero-inner" style={{ paddingBottom: 56 }}>
          <div className="cg-badge-outline" style={{ marginBottom: 20 }}>
            Discussie van de week
          </div>
          <h1 className="cg-hero-title" style={{ fontSize: 'clamp(34px,5.5vw,76px)', maxWidth: '20ch' }}>
            "Korte games zijn de beste games."
          </h1>
          <div className="cg-hero-meta-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="cg-thread-avatar" style={{ background: '#9990c9', width: 40, height: 40, fontSize: 16 }}>
                F
              </div>
              <div>
                <div style={{ fontFamily: 'var(--cg-sans)', fontSize: 14, fontWeight: 600, color: 'var(--cg-ink)', lineHeight: 1.2 }}>Fenna</div>
                <div style={{ fontFamily: 'var(--cg-sans)', fontSize: 12.5, color: 'var(--cg-text-2)' }}>Losse chat · 73 reacties</div>
              </div>
            </div>
            <a href="#thread" className="cg-cta-primary" style={{ padding: '13px 24px', fontSize: 14 }}>
              Lees de discussie →
            </a>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 44 }}>
        <div className="cg-section-eyebrow">Community</div>
        <h2 className="cg-section-title" style={{ fontSize: 'clamp(26px,3.6vw,40px)', maxWidth: '18ch' }}>
          Praat mee met gamers zoals jij
        </h2>
        <p className="cg-hero-desc" style={{ fontSize: 17, maxWidth: '58ch', color: 'var(--cg-text-2)' }}>
          Geen toxische comments, geen console-oorlogen. Een rustige plek voor mensen die van games houden en van hun tijd. Deel wat je speelt, vraag om advies, en vind je volgende favoriet.
        </p>
        <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
          <div className="cg-stat-pair">
            <span className="cg-stat-pair-value">4.200+</span>
            <span className="cg-stat-pair-label">Leden</span>
          </div>
          <div className="cg-stat-pair">
            <span className="cg-stat-pair-value">180</span>
            <span className="cg-stat-pair-label">Discussies deze week</span>
          </div>
          <div className="cg-stat-pair">
            <span className="cg-stat-pair-value">0</span>
            <span className="cg-stat-pair-label">Tolerantie voor onzin</span>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 48 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ flex: 2, minWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 10 }}>
              <h2 style={{ fontFamily: 'var(--cg-serif)', fontWeight: 800, fontSize: 24, color: 'var(--cg-ink)', margin: 0 }}>
                Populaire discussies
              </h2>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" className={`cg-filter-chip${sort === 'trending' ? ' active' : ''}`} style={{ padding: '7px 14px', fontSize: 12.5 }} onClick={() => setSort('trending')}>
                  Trending
                </button>
                <button type="button" className={`cg-filter-chip${sort === 'new' ? ' active' : ''}`} style={{ padding: '7px 14px', fontSize: 12.5 }} onClick={() => setSort('new')}>
                  Nieuw
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }} id="thread">
              {THREADS.map((t) => (
                <a key={t.title} href="#thread" className="cg-thread-row">
                  <div className="cg-thread-avatar" style={{ background: t.avatar }}>
                    {t.initial}
                  </div>
                  <div className="cg-thread-body">
                    <div className="cg-thread-meta-row">
                      <span className="cg-thread-tag" style={{ background: t.tagbg, color: t.tagfg }}>
                        {t.tag}
                      </span>
                      <span className="cg-thread-meta">
                        {t.author} · {t.time}
                      </span>
                    </div>
                    <h3 className="cg-thread-title">{t.title}</h3>
                    <p className="cg-thread-snippet">{t.snippet}</p>
                  </div>
                  <div className="cg-thread-replies">
                    <div className="cg-thread-replies-num">{t.replies}</div>
                    <div className="cg-thread-replies-label">reacties</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div className="cg-side-card">
              <h3 className="cg-side-card-title">Nieuw hier?</h3>
              <p className="cg-side-card-desc">Stel jezelf voor, kies je platforms en vertel wat er bovenaan je backlog staat.</p>
              <button type="button" className="cg-btn-block">
                Word lid →
              </button>
            </div>

            <div className="cg-side-card">
              <div className="cg-side-card-label">Leden in de spotlight</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {SPOTLIGHT_MEMBERS.map((m) => (
                  <div key={m.name} className="cg-member-row">
                    <div className="cg-member-avatar" style={{ background: m.avatar }}>
                      {m.initial}
                    </div>
                    <div>
                      <div className="cg-member-name">{m.name}</div>
                      <div className="cg-member-role">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cg-side-card">
              <div className="cg-side-card-label" style={{ marginBottom: 14 }}>
                Actieve kanalen
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {CHANNELS.map((c) => (
                  <span key={c} className="cg-chip-static">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72 }}>
        <div className="cg-glow-card">
          <div className="cg-glow-card-glow" style={{ background: 'radial-gradient(circle at 12% 20%, rgba(124,92,255,0.16), transparent 55%)' }} />
          <div className="cg-glow-card-inner">
            <div className="cg-section-eyebrow">Huisregels</div>
            <h2 className="cg-section-title" style={{ fontSize: 'clamp(24px,3vw,34px)' }}>
              Vriendelijk, spoilervrij, en menselijk
            </h2>
            <div className="cg-promise-list">
              {COMMUNITY_RULES.map((r) => (
                <div key={r} className="cg-promise-item">
                  <div className="cg-promise-dot yes">✓</div>
                  <p className="cg-promise-text yes">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cg-section" style={{ paddingTop: 72, paddingBottom: 8 }}>
        <div className="cg-newsletter-band" style={{ background: 'var(--cg-footer)' }}>
          <div className="cg-newsletter-band-copy">
            <p className="cg-newsletter-tagline" style={{ margin: '0 0 6px' }}>
              Better games. More time.
            </p>
            <h2 className="cg-newsletter-title" style={{ fontSize: 'clamp(26px,3.4vw,40px)', margin: '0 0 10px' }}>
              Kom erbij
            </h2>
            <p className="cg-newsletter-desc" style={{ fontSize: 16, margin: 0, maxWidth: '42ch' }}>
              4.200 mensen die van games houden en respect hebben voor jouw tijd. Gratis, altijd.
            </p>
          </div>
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
            <div className="cg-club-avatars">
              <div className="cg-club-avatar" style={{ background: '#6C5CE7', width: 40, height: 40 }} />
              <div className="cg-club-avatar" style={{ background: '#5A4BD0', width: 40, height: 40 }} />
              <div className="cg-club-avatar" style={{ background: '#284A7A', width: 40, height: 40 }} />
              <div className="cg-club-avatar" style={{ background: '#9990c9', width: 40, height: 40 }} />
              <div className="cg-club-avatar-more" style={{ width: 40, height: 40 }}>
                +4k
              </div>
            </div>
            <button type="button" className="cg-newsletter-btn" style={{ padding: '16px 30px', fontSize: 15 }}>
              Maak een account →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
