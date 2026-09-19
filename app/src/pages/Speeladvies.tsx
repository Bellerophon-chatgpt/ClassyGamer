import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { GAMES, QUESTIONS, matchPct, reasons, score } from '../data/engineGames';
import { addToBacklog, parseHours } from '../data/backlog';
import { SyncStrip } from '../components/SyncStrip';
import type { EngineAnswers, EngineGame } from '../types';

const VERDICT_STYLE = {
  primary: { bg: '#6C5CE7', fg: '#fff', border: '#6C5CE7' },
  gem: { bg: 'rgba(108,92,231,0.16)', fg: '#b3a9f0', border: 'rgba(108,92,231,0.55)' },
};

const ADD_STYLE = {
  idle: { bg: 'rgba(247,245,237,0.05)', fg: '#F7F5ED', border: 'rgba(247,245,237,0.2)' },
  added: { bg: 'rgba(63,191,143,0.14)', fg: '#5fd6a8', border: 'rgba(63,191,143,0.5)' },
};

export default function Speeladvies() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<EngineAnswers>({});
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const total = QUESTIONS.length;
  const showResult = step >= total;

  const choose = (v: EngineAnswers[keyof EngineAnswers]) => {
    const key = QUESTIONS[step].key;
    setAnswers((a) => ({ ...a, [key]: v }));
    setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  const handleAdd = (g: EngineGame) => {
    addToBacklog({ title: g.title, genre: g.genre, hours: parseHours(g.hours), verdict: g.verdict });
    setAdded((a) => ({ ...a, [g.title]: true }));
  };

  const ranked = useMemo(() => {
    if (!showResult) return [];
    return [...GAMES].sort((a, b) => score(b, answers) - score(a, answers));
  }, [showResult, answers]);

  const dots = QUESTIONS.map((_, i) => ({
    key: i,
    background: i < step ? '#6C5CE7' : i === step ? '#8B7CFF' : 'rgba(247,245,237,0.14)',
  }));

  const question = !showResult ? QUESTIONS[step] : null;
  const top = showResult ? ranked[0] : null;
  const alternates = showResult ? ranked.slice(1, 3) : [];

  return (
    <>
      <section className="cg-engine-hero">
        <div className="cg-eyebrow">De engine</div>
        <h1>Wat moet ik spelen?</h1>
        <p>Drie vragen. Geen hype, alleen een eerlijke match — inclusief waarom, zodat je precies weet wat je krijgt.</p>
      </section>

      <section className="cg-engine-wrap">
        <div className="cg-engine-card">
          <div className="cg-engine-glow" />

          <div className="cg-step-row">
            <span className="cg-step-label">{showResult ? 'Klaar' : `Vraag ${step + 1} van ${total}`}</span>
            <div className="cg-dots">
              {dots.map((d) => (
                <div key={d.key} className="cg-dot" style={{ background: d.background }} />
              ))}
            </div>
          </div>

          {question && (
            <div className="cg-question">
              <h2>{question.title}</h2>
              <p>{question.sub}</p>
              <div className="cg-options-grid">
                {question.opts.map((o) => (
                  <button key={o.v} type="button" className="cg-option-btn" onClick={() => choose(o.v)}>
                    <span className="cg-option-label">{o.label}</span>
                    <span className="cg-option-sub">{o.sub}</span>
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button type="button" className="cg-back-btn" onClick={back}>
                  ← Vorige vraag
                </button>
              )}
            </div>
          )}

          {showResult && top && (
            <div className="cg-result">
              <div className="cg-result-label">Jouw match</div>

              <div className="cg-result-card">
                <div className="cg-result-top">
                  <span
                    className="cg-verdict-pill"
                    style={top.gem ? { background: VERDICT_STYLE.gem.bg, color: VERDICT_STYLE.gem.fg, borderColor: VERDICT_STYLE.gem.border } : { background: VERDICT_STYLE.primary.bg, color: VERDICT_STYLE.primary.fg, borderColor: VERDICT_STYLE.primary.border }}
                  >
                    {top.verdict}
                  </span>
                  <span className="cg-match">
                    <span className="cg-match-num">{matchPct(top, answers)}</span> match
                  </span>
                </div>
                <h3 className="cg-result-title">{top.title}</h3>
                <div className="cg-result-meta">
                  {top.genre} · {top.hours}
                </div>
                <p className="cg-result-blurb">{top.blurb}</p>

                <div className="cg-reasons-label">Waarom deze match</div>
                <div className="cg-reasons">
                  {reasons(top, answers).map((r) => (
                    <span key={r.text} className="cg-reason-chip" style={{ background: r.bg, color: r.fg, borderColor: r.border }}>
                      {r.text}
                    </span>
                  ))}
                </div>

                <div className="cg-actions-row">
                  <Link to="/reviews" className="cg-cta-primary">
                    Lees de review →
                  </Link>
                  <button
                    type="button"
                    className="cg-add-btn"
                    style={
                      added[top.title]
                        ? { background: ADD_STYLE.added.bg, color: ADD_STYLE.added.fg, borderColor: ADD_STYLE.added.border }
                        : { background: ADD_STYLE.idle.bg, color: ADD_STYLE.idle.fg, borderColor: ADD_STYLE.idle.border }
                    }
                    onClick={() => handleAdd(top)}
                  >
                    {added[top.title] ? 'Op je backlog gezet ✓' : '+ Zet op mijn backlog'}
                  </button>
                </div>
              </div>

              <div className="cg-alt-label">Ook de moeite waard</div>
              <div className="cg-alternates">
                {alternates.map((g) => (
                  <Link key={g.title} to="/reviews" className="cg-alt-row">
                    <div className="cg-alt-match">{matchPct(g, answers)}</div>
                    <div className="cg-alt-body">
                      <div className="cg-alt-title">{g.title}</div>
                      <div className="cg-alt-why">
                        {g.pos[0].replace('+ ', '')} · {g.hours}
                      </div>
                    </div>
                    <span className="cg-alt-verdict">{g.verdict}</span>
                  </Link>
                ))}
              </div>

              <div style={{ marginBottom: 22 }}>
                <SyncStrip />
              </div>
              <button type="button" className="cg-restart-btn" onClick={restart}>
                ↺ Opnieuw beginnen
              </button>
            </div>
          )}
        </div>
        <p className="cg-disclaimer">Aanbevelingen komen uit reviews van The Curator — nooit gesponsord, nooit algoritmisch opgevuld.</p>
      </section>
    </>
  );
}
