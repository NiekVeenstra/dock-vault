import { AnchorIcon, DiamondIcon, LighthouseIcon, LogbookIcon, MarketIcon } from './Icons';

const items = [
  { label: 'Harbor', href: '#harbor', Icon: AnchorIcon },
  { label: 'Lighthouse', href: '#lighthouse', Icon: LighthouseIcon },
  { label: 'Collection', href: '#collection', Icon: DiamondIcon },
  { label: 'Market Hall', href: '#market', Icon: MarketIcon },
  { label: 'Logbook', href: '#logbook', Icon: LogbookIcon },
];

export function HarborNav() {
  return <nav className="harbor-nav" aria-label="Dock Vault sections">{items.map(({ label, href, Icon }, index) => <a href={href} key={href} className={index === 0 ? 'is-active' : ''}><Icon className="harbor-nav__icon"/><span>{label}</span></a>)}</nav>;
}
