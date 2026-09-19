import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="cg-footer">
      <div className="cg-footer-inner">
        <div className="cg-footer-cols">
          <div className="cg-footer-brand">
            <div className="cg-name">The Classy Gamer</div>
            <p className="cg-footer-tagline">Better games. More time.</p>
            <div className="cg-footer-tricol">
              <span>DISCOVER</span>
              <span>DECIDE</span>
              <span>DISCUSS</span>
            </div>
          </div>

          <div className="cg-footer-links">
            <span className="cg-footer-heading">Ontdek</span>
            <Link to="/reviews">Reviews</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/speeladvies">Speeladvies</Link>
            <Link to="/guides">Guides</Link>
            <Link to="/mijn-backlog">Mijn Backlog</Link>
            <Link to="/backlog-club">Backlog Club</Link>
            <Link to="/community">Community</Link>
          </div>

          <div className="cg-footer-curator">
            <div className="cg-curator-row">
              <div className="cg-curator-avatar">C</div>
              <div>
                <div className="cg-curator-name">The Curator</div>
                <div className="cg-curator-sub">Onafhankelijk · nooit gesponsord</div>
              </div>
            </div>
            <p className="cg-curator-blurb">Eén mens die eerlijk zegt of een game je tijd waard is. Kwaliteit boven hype.</p>
            <Link to="/zo-beoordeel-ik" className="cg-curator-link">
              Zo beoordeel ik →
            </Link>
          </div>
        </div>
        <div className="cg-footer-bottom">© 2026 The Classy Gamer</div>
      </div>
    </footer>
  );
}
