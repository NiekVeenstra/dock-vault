import { SectionHeading } from "@/components/SectionHeading";

const worldLocations = [
  {
    number: "01",
    image: "/images/world-icons/lighthouse.png",
    title: "Lighthouse",
    description: "Guidance before commerce.",
    linkLabel: "Follow the light",
    href: "#lighthouse",
  },
  {
    number: "02",
    image: "/images/world-icons/harbor.png",
    title: "Harbor",
    description: "The place where every journey begins.",
    linkLabel: "Enter the Harbor",
    href: "#harbor",
  },
  {
    number: "03",
    image: "/images/world-icons/market-hall.png",
    title: "Market Hall",
    description: "For collectors, by collectors.",
    linkLabel: "Visit the Hall",
    href: "#market",
  },
  {
    number: "04",
    image: "/images/world-icons/logbook.png",
    title: "Logbook",
    description: "Stories, updates and the journey together.",
    linkLabel: "Read the Logbook",
    href: "#logbook",
  },
  {
    number: "05",
    image: "/images/world-icons/vault.png",
    title: "Vault",
    description: "Protection for what deserves to remain.",
    linkLabel: "Enter the Vault",
    href: "/vault",
  },
];

export function WorldNavigationSection() {
  return (
    <section className="world-nav-section" id="world">
      <div className="world-nav-section__inner">
        <SectionHeading
          title="Explore Dock Vault"
          className="world-nav-section__heading"
        />

        <div className="world-nav-grid">
          {worldLocations.map((location) => (
            <a
              className="world-nav-card"
              href={location.href}
              key={location.title}
              aria-label={`${location.title}: ${location.description}`}
            >
              <span className="world-nav-card__number">{location.number}</span>

              <img
                className="world-nav-card__image"
                src={location.image}
                alt=""
                aria-hidden="true"
              />

              <h3 className="world-nav-card__title">{location.title}</h3>
              <p>{location.description}</p>
              <span className="world-nav-card__link">{location.linkLabel}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
