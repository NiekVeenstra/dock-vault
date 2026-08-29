import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { HarborNav } from "@/components/HarborNav";
import { AnchorIcon, DiamondIcon, LogbookIcon } from "@/components/Icons";

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
    linkLabel: "You are here",
    href: "#harbor",
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
              <p className="lighthouse-section__kicker">
                Before the next decision
              </p>
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
                  Preservation notes, grading guidance and collecting stories
                  are gathered here so every decision can be made with patience
                  and confidence.
                </p>
              </div>

              <div
                className="lighthouse-guides"
                aria-label="Lighthouse knowledge areas"
              >
                <a href="#preservation" className="lighthouse-guide">
                  <span>01</span>
                  <div>
                    <strong>Preservation</strong>
                    <p>
                      Protect cards, sealed products and the stories they carry.
                    </p>
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
                    <p>
                      A calm first route through the world of One Piece TCG.
                    </p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>
              </div>

              <a
                className="primary-cta lighthouse-section__cta"
                href="#logbook"
              >
                <span>Discover the Lighthouse</span>
              </a>
            </div>
          </div>

          <blockquote className="lighthouse-section__quote">
            “Knowledge is the light that lets a collection find its way home.”
          </blockquote>
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

      <section className="vault-portal" id="vault">
        <div className="vault-portal__atmosphere" aria-hidden="true" />

        <figure className="vault-portal__visual">
          <div className="vault-portal__image-glow" aria-hidden="true" />
          <img
            src="/images/vault-gate.png"
            alt="A monumental Dock Vault door built into an ancient stone wall, with warm light shining through the opening"
          />
        </figure>

        <div className="vault-portal__inner">
          <div className="section-heading vault-portal__heading">
            <p>The Vault</p>
            <HarborDivider compact />
          </div>

          <div className="vault-portal__layout">
            <div className="vault-portal__content">
              <p className="vault-portal__kicker">A quieter room lies beyond</p>
              <h2>
                Some collections deserve
                <span>more than ownership.</span>
              </h2>

              <p>
                The Vault is not built to hide treasures. It exists to protect
                the stories, milestones and patient work that deserve to remain.
              </p>

              <div
                className="vault-portal__glimpse"
                aria-label="A glimpse inside the Vault"
              >
                <span>Founder&apos;s Collection</span>
                <span>Master Set Journeys</span>
                <span>Playset Archive</span>
              </div>

              <a className="primary-cta vault-portal__cta" href="/vault">
                <span>Enter the Vault</span>
                <b aria-hidden="true">→</b>
              </a>
            </div>
          </div>

          <p className="vault-portal__whisper">
            The door opens only for those who choose to look closer.
          </p>
        </div>
      </section>

      <section className="market-hall-section" id="market">
        <div className="market-hall-section__media" aria-hidden="true">
          <img src="/images/market-hall-scene.png" alt="" />
        </div>

        <div className="market-hall-section__fade" aria-hidden="true" />
        <div className="market-hall-section__ambient" aria-hidden="true" />

        <div className="market-hall-section__inner">
          <div className="section-heading market-hall-section__heading">
            <p>The Market Hall</p>
            <HarborDivider compact />
          </div>

          <div className="market-hall-section__layout">
            <div aria-hidden="true" />

            <div className="market-hall-section__content">
              <p className="market-hall-section__kicker">
                For collectors, by collectors
              </p>

              <h2>
                Trade with care,
                <span>not noise.</span>
              </h2>

              <div className="market-hall-section__copy">
                <p>
                  The Market Hall is where Dock Vault will eventually offer
                  selected singles, playsets, sealed products and protection
                  pieces that feel worthy of the collections they support.
                </p>

                <p>
                  It is not meant to feel rushed or crowded. It should feel like
                  a room where every card is presented honestly, every condition
                  is described clearly and every choice can be made with
                  confidence.
                </p>
              </div>

              <div
                className="market-hall-highlights"
                aria-label="What the Market Hall will offer"
              >
                <article>
                  <strong>Singles</strong>
                  <p>Useful pieces, thoughtfully listed.</p>
                </article>

                <article>
                  <strong>Playsets</strong>
                  <p>Deck building support without the noise.</p>
                </article>

                <article>
                  <strong>Sealed</strong>
                  <p>Selected product handled with care.</p>
                </article>

                <article>
                  <strong>Protection</strong>
                  <p>Accessories chosen to preserve what matters.</p>
                </article>
              </div>

              <div className="market-hall-section__actions">
                <span className="status-seal">Opening in a later tide</span>

                <a className="quiet-link" href="#logbook">
                  Follow the build in the Logbook <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <p className="market-hall-section__whisper">
            The hall is still taking shape. The standards are already in place.
          </p>
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
