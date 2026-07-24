import { HarborDivider } from '@/components/HarborDivider';
import { HarborHeader } from '@/components/HarborHeader';
import { HarborNav } from '@/components/HarborNav';
import { AnchorIcon, DiamondIcon, LighthouseIcon, LogbookIcon, MarketIcon } from '@/components/Icons';

export default function HomePage() {
  return (
    <main>
      <section className="hero-shell" id="harbor">
        <HarborHeader />
        <HarborDivider />
        <div className="hero">
          <div className="hero__content">
            <p className="eyebrow">The lighthouse<br />has been lit</p>
            <div className="small-rule" aria-hidden="true"><span /></div>
            <h1>Welcome to<br /><em>Dock Vault.</em></h1>
            <p className="hero__copy">A Harbor for One Piece collectors. Built on care, guided by trust, and created to protect what deserves to remain.</p>
            <a className="primary-cta" href="#lighthouse"><AnchorIcon /> <span>Enter the Harbor</span></a>
            <a className="text-link" href="#philosophy">Learn our philosophy <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="harbor-intro" id="harbor">
        <div className="harbor-intro__inner">
          <div className="harbor-intro__content">
            <p className="eyebrow">The Harbor</p>
            <div className="small-rule" aria-hidden="true"><span /></div>
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
            <figcaption>Care before commerce. Guidance before haste.</figcaption>
          </figure>
        </div>
      </section>

      <section className="world-nav-section" id="world">
        <div className="world-nav-section__inner">
          <div className="section-heading world-nav-section__heading">
            <p>Explore Dock Vault</p>
            <div className="harbor-divider harbor-divider--compact" aria-hidden="true">
              <span /><i /><span />
            </div>
          </div>

          <div className="world-nav-grid">
            {[
              ["01", "⚓", "Harbor", "The place where every journey begins.", "You are here", "#harbor"],
              ["02", "♜", "Lighthouse", "Guidance before commerce.", "Follow the light", "#lighthouse"],
              ["03", "◇", "Vault", "Protection for what deserves to remain.", "Enter the Vault", "#vault"],
              ["04", "▥", "Market Hall", "For collectors, by collectors.", "Visit the Hall", "#market-hall"],
              ["05", "▤", "Logbook", "Stories, updates and the journey together.", "Read the Logbook", "#logbook"],
            ].map(([number, icon, title, copy, link, href], index) => (
              <a
                className={`world-nav-card${index === 0 ? " is-active" : ""}`}
                href={href}
                key={title}
              >
                <span className="world-nav-card__number">{number}</span>
                <span className="world-nav-card__icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="world-nav-card__link">{link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>


      <section className="world-section" id="lighthouse">
        <div className="section-heading"><p>The Lighthouse</p><HarborDivider compact /></div>
        <div className="feature-grid">
          <div><h2>Guidance before commerce.</h2><p>Knowledge, preservation notes and collecting stories written to help protect what matters.</p><a className="quiet-link" href="#logbook">Follow the light <span>→</span></a></div>
          <LighthouseIcon className="feature-icon" />
        </div>
      </section>

      <section className="world-section world-section--deep" id="collection">
        <div className="section-heading"><p>The Founder&apos;s Collection</p><HarborDivider compact /></div>
        <h2>The collection that builds the Harbor.</h2>
        <p className="section-intro">A public record of the cards gathered, the gaps still open and the patient work of completing something worth keeping.</p>
        <div className="progress-grid">
          <article className="progress-card"><div><span>Ongoing voyage</span><strong>Full Playset Project</strong></div><b>18%</b><div className="progress-track"><i style={{ width: '18%' }} /></div></article>
          <article className="progress-card"><div><span>Current master set</span><strong>OP12 Master Set</strong></div><b>35%</b><div className="progress-track"><i style={{ width: '35%' }} /></div></article>
        </div>
      </section>

      <section className="world-section" id="market">
        <div className="section-heading"><p>The Market Hall</p><HarborDivider compact /></div>
        <div className="feature-grid feature-grid--reverse">
          <MarketIcon className="feature-icon" />
          <div><h2>Fair cards. Honest trade.</h2><p>Bulk, playsets, collection fillers, singles, sealed products and carefully chosen protection for One Piece collections.</p><span className="status-seal">Opening in a later tide</span></div>
        </div>
      </section>

      <section className="world-section world-section--deep" id="logbook">
        <div className="section-heading"><p>The Logbook</p><HarborDivider compact /></div>
        <h2>Stories from the Harbor.</h2>
        <div className="logbook-list"><article><LogbookIcon /><div><time>First entry</time><h3>The Lighthouse has been lit.</h3><p>The beginning of a place made for collectors who value care over noise.</p></div></article><article><DiamondIcon /><div><time>Founding note</time><h3>Dock Vault Alpha begins.</h3><p>The Harbor takes form, one considered detail at a time.</p></div></article></div>
      </section>

      <section className="philosophy" id="philosophy">
        <AnchorIcon className="philosophy__icon" />
        <blockquote>“Build trust slowly.<br />Protect it fiercely.”</blockquote>
        <p>The website is not a shop. It is a place.</p>
      </section>

      <footer><p>Dock Vault</p><span>The Harbor is yours.</span></footer>
      <HarborNav />
    </main>
  );
}
