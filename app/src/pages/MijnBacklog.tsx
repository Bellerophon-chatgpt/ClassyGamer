import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEED_BACKLOG } from '../data/backlogSeed';
import { readBacklog } from '../data/backlog';
import { SyncStrip } from '../components/SyncStrip';
import type { BacklogGame, Verdict } from '../types';

const COLUMN_META: { title: string; dot: string; empty: string }[] = [
  { title: 'Wil ik spelen', dot: '#b3a9f0', empty: 'Sleep hier je volgende avontuur.' },
  { title: 'Aan het spelen', dot: '#6C5CE7', empty: 'Niks onderhanden — tijd om te starten.' },
  { title: 'Uitgespeeld', dot: '#3fbf8f', empty: 'Nog niks afgerond. Komt goed.' },
];

function verdictStyle(v: Verdict) {
  if (v === 'WORTH YOUR TIME') return { bg: '#6C5CE7', fg: '#fff' };
  if (v === 'HIDDEN GEM') return { bg: 'rgba(108,92,231,0.2)', fg: '#b3a9f0' };
  return { bg: 'rgba(247,245,237,0.08)', fg: '#8fa0bb' };
}

/** Merges games added via Speeladvies (tcg_backlog) on top of the seed board, deduped on title. */
function initialGames(): BacklogGame[] {
  const imported = readBacklog();
  if (!imported.length) return SEED_BACKLOG;
  const have = new Set(SEED_BACKLOG.map((g) => g.title));
  const toAdd: BacklogGame[] = imported
    .filter((a) => !have.has(a.title))
    .map((a) => ({ ...a, col: 0, imported: true }));
  return toAdd.length ? [...toAdd, ...SEED_BACKLOG] : SEED_BACKLOG;
}

export default function MijnBacklog() {
  const [pace, setPace] = useState(6);
  const [games, setGames] = useState<BacklogGame[]>(initialGames);

  const inc = () => setPace((p) => Math.min(40, p + 1));
  const dec = () => setPace((p) => Math.max(1, p - 1));
  const move = (id: string, dir: 1 | -1) =>
    setGames((cur) => cur.map((g) => (g.id === id ? { ...g, col: Math.max(0, Math.min(2, g.col + dir)) as 0 | 1 | 2 } : g)));

  const columns = useMemo(() => COLUMN_META.map((m, ci) => ({ ...m, games: games.filter((g) => g.col === ci) })), [games]);

  const queue = useMemo(() => games.filter((g) => g.col === 0), [games]);
  const queueHours = queue.reduce((a, g) => a + g.hours, 0);
  const doneHours = games.filter((g) => g.col === 2).reduce((a, g) => a + g.hours, 0);
  const totalHours = games.reduce((a, g) => a + g.hours, 0);
  const donePct = totalHours > 0 ? Math.round((doneHours / totalHours) * 100) : 0;

  const weeks = queueHours > 0 ? Math.ceil(queueHours / pace) : 0;
  let weeksLabel: string;
  if (queueHours === 0) weeksLabel = 'Wachtrij leeg 🎉';
  else if (weeks <= 4) weeksLabel = `${weeks} ${weeks === 1 ? 'week' : 'weken'}`;
  else weeksLabel = `${weeks} weken · ${Math.round((weeks / 4.34) * 10) / 10} mnd`;

  const labels = COLUMN_META.map((m) => m.title);

  return (
    <>
      <section className="cg-backlog-hero">
        <div className="cg-eyebrow">Persoonlijk</div>
        <h1>Mijn Backlog</h1>
        <p>Je stapel, eerlijk in tijd uitgedrukt. Verplaats games tussen de kolommen en zie meteen hoeveel avonden je nog te gaan hebt.</p>
      </section>

      <section className="cg-stats-wrap">
        <div className="cg-stats-strip">
          <div className="cg-stats-glow" />
          <div className="cg-stats-row">
            <div className="cg-stat-block">
              <div className="cg-stat-label">Nog te spelen</div>
              <div className="cg-stat-value">
                {queueHours}
                <span> uur</span>
              </div>
              <div className="cg-stat-sub">{queue.length} games in de wachtrij</div>
            </div>

            <div className="cg-stat-divider" />

            <div className="cg-pace-block">
              <div className="cg-pace-label">Mijn tempo per week</div>
              <div className="cg-pace-row">
                <button type="button" className="cg-pace-btn" onClick={dec} aria-label="Minder uren per week">
                  −
                </button>
                <div className="cg-pace-value">
                  {pace}
                  <span> u</span>
                </div>
                <button type="button" className="cg-pace-btn" onClick={inc} aria-label="Meer uren per week">
                  +
                </button>
              </div>
            </div>

            <div className="cg-stat-divider" />

            <div className="cg-budget-block">
              <div className="cg-stat-label">Zo leeg is je stapel</div>
              <div className="cg-budget-value">{weeksLabel}</div>
              <div className="cg-progress-track">
                <div className="cg-progress-fill" style={{ width: `${donePct}%` }} />
              </div>
              <div className="cg-progress-caption">
                {doneHours} van {totalHours} uur uitgespeeld · {donePct}%
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cg-sync-wrap">
        <SyncStrip compact />
      </section>

      <section className="cg-columns-wrap">
        <div className="cg-columns">
          {columns.map((col, ci) => (
            <div key={col.title} className="cg-column">
              <div className="cg-column-header">
                <div className="cg-column-title-row">
                  <span className="cg-column-dot" style={{ background: col.dot }} />
                  <span className="cg-column-title">{col.title}</span>
                </div>
                <span className="cg-column-count">{col.games.length}</span>
              </div>

              {col.games.map((g) => {
                const vs = verdictStyle(g.verdict);
                const canLeft = ci > 0;
                const canRight = ci < 2;
                return (
                  <div key={g.id} className="cg-game-card">
                    <div className="cg-game-card-top">
                      <div className="cg-game-cover">
                        <span className="cg-game-cover-placeholder">art</span>
                      </div>
                      <div className="cg-game-info">
                        <div className="cg-game-title">{g.title}</div>
                        <div className="cg-game-genre">{g.genre}</div>
                        <div className="cg-game-meta-row">
                          <span className="cg-game-hours">~{g.hours}u</span>
                          <span className="cg-game-verdict-badge" style={{ background: vs.bg, color: vs.fg }}>
                            {g.verdict}
                          </span>
                        </div>
                        {g.imported && <div className="cg-game-imported">via Speeladvies</div>}
                      </div>
                    </div>
                    <div className="cg-game-actions">
                      {canLeft && (
                        <button
                          type="button"
                          className="cg-game-move-btn left"
                          title={`Terug naar ${labels[ci - 1]}`}
                          onClick={() => move(g.id, -1)}
                        >
                          ← {labels[ci - 1].split(' ')[0]}
                        </button>
                      )}
                      {canRight && (
                        <button
                          type="button"
                          className="cg-game-move-btn right"
                          title={`Naar ${labels[ci + 1]}`}
                          onClick={() => move(g.id, 1)}
                        >
                          {labels[ci + 1].split(' ')[0]} →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {col.games.length === 0 && <div className="cg-column-empty">{col.empty}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="cg-cta-band-wrap">
        <div className="cg-cta-band">
          <div className="cg-cta-band-glow" />
          <div className="cg-cta-band-copy">
            <p className="cg-cta-band-tagline">Better games. More time.</p>
            <h2 className="cg-cta-band-heading">Weet je niet wat je hierna moet pakken?</h2>
          </div>
          <Link to="/speeladvies" className="cg-cta-band-link">
            Wat moet ik spelen? →
          </Link>
        </div>
      </section>
    </>
  );
}
