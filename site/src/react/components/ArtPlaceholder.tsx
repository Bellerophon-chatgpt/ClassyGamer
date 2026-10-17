import { gameImage } from '../../lib/gameImages';

interface ArtPlaceholderProps {
  label?: string;
  className?: string;
  /** Gamenaam: als er een afbeelding in src/assets/games/ staat, wordt die getoond i.p.v. de placeholder. */
  game?: string;
}

/** Afbeeldingsvak: echte game-art als die er is, anders de placeholder uit het ontwerp. */
export function ArtPlaceholder({ label = 'art', className, game }: ArtPlaceholderProps) {
  const src = gameImage(game);
  if (src) return <img src={src} alt="" loading="lazy" className={`cg-cover-img${className ? ` ${className}` : ''}`} />;
  return (
    <div className={`cg-art-slot${className ? ` ${className}` : ''}`}>
      <span className="cg-art-slot-label">{label}</span>
    </div>
  );
}
