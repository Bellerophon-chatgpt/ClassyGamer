interface SyncStripProps {
  compact?: boolean;
}

/** Cross-device sync is design-only for now — see the "Cross-device sync" section of the handoff README. */
export function SyncStrip({ compact }: SyncStripProps) {
  return (
    <div className={`cg-sync-strip${compact ? ' compact' : ''}`}>
      <div className="cg-sync-content">
        <svg width={compact ? 22 : 26} height={compact ? 22 : 26} viewBox="0 0 24 24" fill="none" stroke="#b3a9f0" strokeWidth={1.8} className="cg-sync-icon">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          {!compact && <path d="M12 12v5M9.5 14.5 12 12l2.5 2.5" />}
        </svg>
        {compact ? (
          <div className="cg-sync-title">
            <strong>Opgeslagen op dit apparaat.</strong> Log in om je backlog te syncen naar je telefoon, laptop en console-browser.
          </div>
        ) : (
          <div>
            <div className="cg-sync-title">Bewaar je backlog op al je apparaten</div>
            <div className="cg-sync-sub">
              Nu opgeslagen op dit apparaat. Log in en vind je stapel overal terug — laptop, telefoon, de browser op je console.
            </div>
          </div>
        )}
      </div>
      <button className="cg-sync-btn" type="button">
        Log in om te syncen
      </button>
    </div>
  );
}
