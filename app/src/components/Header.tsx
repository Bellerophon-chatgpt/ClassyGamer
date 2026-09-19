import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/discover', label: 'Discover' },
  { to: '/speeladvies', label: 'Speeladvies' },
  { to: '/guides', label: 'Guides' },
  { to: '/mijn-backlog', label: 'Mijn Backlog' },
  { to: '/backlog-club', label: 'Backlog Club' },
  { to: '/community', label: 'Community' },
];

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4CBD6" strokeWidth={2} className="cg-search-icon">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F5ED" strokeWidth={2}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="cg-header">
      <div className="cg-header-inner">
        <NavLink to="/" className="cg-logo">
          <div className="cg-logo-box">
            <div className="cg-logo-the">THE</div>
            <div className="cg-logo-word">CLASSY</div>
            <div className="cg-logo-word">GAMER</div>
          </div>
        </NavLink>

        <nav className="cg-nav-desktop">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="cg-header-actions">
          <SearchIcon />
          <NavLink to="/speeladvies" className="cg-pill-cta">
            Wat moet ik spelen?
          </NavLink>
        </div>

        <details className="cg-burger">
          <summary>
            <BurgerIcon />
          </summary>
          <div className="cg-burger-menu">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
