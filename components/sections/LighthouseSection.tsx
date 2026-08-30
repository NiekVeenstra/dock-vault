import { SectionHeading } from "@/components/SectionHeading";

export function LighthouseSection() {
  return (
    <section className="lighthouse-section" id="lighthouse">
      <div className="lighthouse-section__glow" aria-hidden="true" />

      <figure className="lighthouse-section__visual">
        <img
          src="/images/lighthouse-interior.png"
          alt="The interior of the Dock Vault Lighthouse, with a spiral staircase, nautical instruments and warm lantern light"
        />
      </figure>

      <div className="lighthouse-section__inner">
        <SectionHeading
          title="The Lighthouse"
          className="lighthouse-section__heading"
        />

        <div className="lighthouse-section__layout">
          <div aria-hidden="true" />

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

            <div
              className="lighthouse-guides"
              aria-label="Lighthouse knowledge areas"
            >
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

            <a className="primary-cta lighthouse-section__cta" href="#world">
              <span>Explore Dock Vault</span>
            </a>
          </div>
        </div>

        <blockquote className="lighthouse-section__quote">
          “Knowledge is the light that lets a collection find its way home.”
        </blockquote>
      </div>
    </section>
  );
}
