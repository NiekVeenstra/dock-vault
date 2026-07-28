import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { HarborNav } from "@/components/HarborNav";
import {
  AnchorIcon,
  DiamondIcon,
  LogbookIcon,
  MarketIcon,
} from "@/components/Icons";

const worldLocations = [
  {
    number: "01",
    image: "/images/world-icons/harbor.png",
    title: "Harbor",
    description: "The place where every journey begins.",
    linkLabel: "You are here",
    href: "#harbor",
  },
  {
    number: "02",
    image: "/images/world-icons/lighthouse.png",
    title: "Lighthouse",
    description: "Guidance before commerce.",
    linkLabel: "Follow the light",
    href: "#lighthouse",
  },
  {
    number: "03",
    image: "/images/world-icons/vault.png",
    title: "Vault",
    description: "Protection for what deserves to remain.",
    linkLabel: "Enter the Vault",
    href: "/vault",
  },
  {
    number: "04",
    image: "/images/world-icons/market-hall.png",
    title: "Market Hall",
    description: "For collectors, by collectors.",
    linkLabel: "Visit the Hall",
    href: "#market",
  },
  {
    number: "05",
    image: "/images/world-icons/logbook.png",
    title: "Logbook",
    description: "Stories, updates and the journey together.",
    linkLabel: "Read the Logbook",
    href: "#logbook",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-shell" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="hero">
          <div className="hero__content">
            <p className="eyebrow">
              The lighthouse
              <br />
              has been lit
            </p>

            <div className="small-rule" aria-hidden="true">
              <span />
            </div>

            <h1>
              Welcome to
              <br />
              <em>Dock Vault.</em>
            </h1>

            <p className="hero__copy">
              A Harbor for One Piece collectors. Built on care, guided by trust,
              and created to protect what deserves to remain.
            </p>

            <a className="primary-cta" href="#harbor">
              <AnchorIcon />
              <span>Enter the Harbor</span>
            </a>

            <a className="text-link" href="#philosophy">
              Learn our philosophy <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="harbor-intro" id="harbor">
        <div className="harbor-intro__inner">
          <div className="harbor-intro__content">
            <p className="eyebrow">The Harbor</p>

            <div className="small-rule" aria-hidden="true">
              <span />
            </div>

            <h2 className="harbor-intro__title">
              Not every collection needs a marketplace.
              <span>Some collections need a harbor.</span>
            </h2>

            <div className="harbor-intro__copy">
              <p>Dock Vault was not created to sell products.</p>

              <p>
                It was created because collecting deserves a place where care
                comes before commerce — a place to slow down, preserve what
                matters and continue the journey with confidence.
              </p>

              <p>
                A harbor where knowledge is shared before decisions are made,
                and where every collection is treated with dignity.
              </p>
            </div>

            <a className="primary-cta harbor-intro__cta" href="#world">
              Enter the Harbor
            </a>
          </div>

          <figure className="harbor-intro__visual">
            <div className="harbor-intro__image-frame">
              <img
                src="/images/harbor-introduction.png"
                alt="Een oud maritiem logboek, kompas en lantaarn op een zeekaart"
              />
            </div>

            <figcaption>
              Care before commerce. Guidance before haste.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="world-nav-section" id="world">
        <div className="world-nav-section__inner">
          <div className="section-heading world-nav-section__heading">
            <p>Explore Dock Vault</p>

            <div
              className="harbor-divider harbor-divider--compact"
              aria-hidden="true"
            >
              <span />
              <i />
              <span />
            </div>
          </div>

          <div className="world-nav-grid">
            {worldLocations.map((location, index) => (
              <a
                className={`world-nav-card${index === 0 ? " is-active" : ""}`}
                href={location.href}
                key={location.title}
                aria-label={`${location.title}: ${location.description}`}
              >
                <span className="world-nav-card__number">
                  {location.number}
                </span>

                <img
                  className="world-nav-card__image"
                  src={location.image}
                  alt=""
                  aria-hidden="true"
                />

                <h3 className="world-nav-card__title">{location.title}</h3>

                <p>{location.description}</p>

                <span className="world-nav-card__link">
                  {location.linkLabel}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="lighthouse-section" id="lighthouse">
        <div className="lighthouse-section__glow" aria-hidden="true" />

        <div className="lighthouse-section__inner">
          <div className="section-heading lighthouse-section__heading">
            <p>The Lighthouse</p>
            <HarborDivider compact />
          </div>

          <div className="lighthouse-section__layout">
            <figure className="lighthouse-section__emblem">
              <div className="lighthouse-section__beam lighthouse-section__beam--left" />
              <div className="lighthouse-section__beam lighthouse-section__beam--right" />
              <img
                src="/images/world-icons/lighthouse.png"
                alt="The Dock Vault Lighthouse emblem"
              />
              <figcaption>Every safe harbor needs a guiding light.</figcaption>
            </figure>

            <div className="lighthouse-section__content">
              <p className="lighthouse-section__kicker">Before the next decision</p>
              <h2>
                Guidance before
                <span>commerce.</span>
              </h2>

              <div className="lighthouse-section__copy">
                <p>
                  A collection should never be built in the dark. The Lighthouse
                  exists to make knowledge visible before a purchase is made.
                </p>
                <p>
                  Preservation notes, grading guidance and collecting stories are
                  gathered here so every decision can be made with patience and
                  confidence.
                </p>
              </div>

              <div className="lighthouse-guides" aria-label="Lighthouse knowledge areas">
                <a href="#preservation" className="lighthouse-guide">
                  <span>01</span>
                  <div>
                    <strong>Preservation</strong>
                    <p>Protect cards, sealed products and the stories they carry.</p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>

                <a href="#grading" className="lighthouse-guide">
                  <span>02</span>
                  <div>
                    <strong>Grading</strong>
                    <p>Understand condition, preparation and expectations.</p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>

                <a href="#collecting" className="lighthouse-guide">
                  <span>03</span>
                  <div>
                    <strong>Collecting</strong>
                    <p>Build with intention rather than noise or haste.</p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>

                <a href="#beginners" className="lighthouse-guide">
                  <span>04</span>
                  <div>
                    <strong>Begin the journey</strong>
                    <p>A calm first route through the world of One Piece TCG.</p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>
              </div>

              <a className="primary-cta lighthouse-section__cta" href="#logbook">
                <span>Discover the Lighthouse</span>
              </a>
            </div>
          </div>

          <blockquote className="lighthouse-section__quote">
            “Knowledge is the light that lets a collection find its way home.”
          </blockquote>
        </div>
      </section>


      <section className="vault-preview" id="vault">
        <div className="vault-preview__atmosphere" aria-hidden="true" />

        <div className="vault-preview__inner">
          <div className="section-heading vault-preview__heading">
            <p>The Vault</p>
            <HarborDivider compact />
          </div>

          <div className="vault-preview__layout">
            <figure className="vault-preview__visual">
              <div className="vault-preview__glow" aria-hidden="true" />
              <img
                src="/images/vault-door.png"
                alt="A monumental steel and brass vault door standing slightly open"
              />
            </figure>

            <div className="vault-preview__content">
              <p className="vault-preview__kicker">A quieter room lies beyond</p>
              <h2>
                Some collections deserve
                <span>more than ownership.</span>
              </h2>

              <div className="vault-preview__copy">
                <p>
                  Not everything inside Dock Vault is meant to be displayed.
                  Some stories deserve a room built around their preservation.
                </p>
                <p>
                  Beyond this door lies the Founder&apos;s Collection, the Master Set
                  journeys and the patient work of building an archive worth keeping.
                </p>
              </div>

              <div className="vault-preview__glimpse" aria-label="A glimpse inside the Vault">
                <span>Founder&apos;s Collection</span>
                <span>Master Set Journeys</span>
                <span>Playset Archive</span>
              </div>

              <a className="primary-cta vault-preview__cta" href="/vault">
                <span>Enter the Vault</span>
                <b aria-hidden="true">→</b>
              </a>
            </div>
          </div>

          <blockquote className="vault-preview__quote">
            “The door opens only for those who choose to look closer.”
          </blockquote>
        </div>
      </section>

      <section className="world-section" id="market">
        <div className="section-heading">
          <p>The Market Hall</p>
          <HarborDivider compact />
        </div>

        <div className="feature-grid feature-grid--reverse">
          <MarketIcon className="feature-icon" />

          <div>
            <h2>Fair cards. Honest trade.</h2>

            <p>
              Bulk, playsets, collection fillers, singles, sealed products and
              carefully chosen protection for One Piece collections.
            </p>

            <span className="status-seal">Opening in a later tide</span>
          </div>
        </div>
      </section>

      <section className="world-section world-section--deep" id="logbook">
        <div className="section-heading">
          <p>The Logbook</p>
          <HarborDivider compact />
        </div>

        <h2>Stories from the Harbor.</h2>

        <div className="logbook-list">
          <article>
            <LogbookIcon />

            <div>
              <time>First entry</time>
              <h3>The Lighthouse has been lit.</h3>
              <p>
                The beginning of a place made for collectors who value care over
                noise.
              </p>
            </div>
          </article>

          <article>
            <DiamondIcon />

            <div>
              <time>Founding note</time>
              <h3>Dock Vault Alpha begins.</h3>
              <p>The Harbor takes form, one considered detail at a time.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <AnchorIcon className="philosophy__icon" />

        <blockquote>
          “Build trust slowly.
          <br />
          Protect it fiercely.”
        </blockquote>

        <p>The website is not a shop. It is a place.</p>
      </section>

      <footer>
        <p>Dock Vault</p>
        <span>The Harbor is yours.</span>
      </footer>

      <HarborNav />
    </main>
  );
}
