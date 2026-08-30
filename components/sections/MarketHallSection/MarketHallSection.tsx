import { SectionHeading } from "@/components/SectionHeading";

export function MarketHallSection() {
  return (
    <section className="market-hall-section" id="market">
      <div className="market-hall-section__media" aria-hidden="true">
        <img src="/images/market-hall-scene.png" alt="" />
      </div>

      <div className="market-hall-section__fade" aria-hidden="true" />
      <div className="market-hall-section__ambient" aria-hidden="true" />

      <div className="market-hall-section__inner">
        <SectionHeading
          title="The Market Hall"
          className="market-hall-section__heading"
        />

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
                selected singles, playsets, sealed products and protection pieces
                that feel worthy of the collections they support.
              </p>

              <p>
                It is not meant to feel rushed or crowded. It should feel like a
                room where every card is presented honestly, every condition is
                described clearly and every choice can be made with confidence.
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
  );
}
