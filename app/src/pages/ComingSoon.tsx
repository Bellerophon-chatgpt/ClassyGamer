import { Link } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
}

/** Placeholder for the pages that come after Speeladvies + Mijn Backlog in the build order. */
export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="cg-placeholder">
      <div className="cg-eyebrow">Binnenkort</div>
      <h1>{title}</h1>
      <p>Dit onderdeel van de handoff staat nog op de planning. Begin ondertussen bij Speeladvies of Mijn Backlog.</p>
      <div className="cg-placeholder-links">
        <Link to="/speeladvies" className="cg-pill-cta">
          Wat moet ik spelen?
        </Link>
        <Link to="/mijn-backlog" className="cg-cta-primary">
          Mijn Backlog →
        </Link>
      </div>
    </div>
  );
}
