export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/discover', label: 'Discover' },
  { href: '/speeladvies', label: 'Speeladvies' },
  { href: '/guides', label: 'Guides' },
  { href: '/mijn-backlog', label: 'Mijn Backlog' },
  { href: '/backlog-club', label: 'Backlog Club' },
  { href: '/community', label: 'Community' },
];

export const isActive = (href: string, path: string) => (href === '/' ? path === '/' : path === href || path.startsWith(href + '/'));
