import {
  AnchorIcon,
  DiamondIcon,
  LighthouseIcon,
  LogbookIcon,
  MarketIcon,
} from "./Icons";

const items = [
  { label: "Lighthouse", href: "#lighthouse", Icon: LighthouseIcon },
  { label: "Harbor", href: "#harbor", Icon: AnchorIcon },
  { label: "Market Hall", href: "#market", Icon: MarketIcon },
  { label: "Logbook", href: "#logbook", Icon: LogbookIcon },
  { label: "Vault", href: "#vault", Icon: DiamondIcon },
];

export function HarborNav() {
  return (
    <nav className="harbor-nav" aria-label="Dock Vault sections">
      {items.map(({ label, href, Icon }, index) => (
        <a href={href} key={href} className={index === 0 ? "is-active" : ""}>
          <Icon className="harbor-nav__icon" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
