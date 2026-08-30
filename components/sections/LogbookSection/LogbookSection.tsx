import { SectionHeading } from "@/components/SectionHeading";
import { AnchorIcon, DiamondIcon, LogbookIcon } from "@/components/Icons";

export function LogbookSection() {
  return (
    <section className="logbook-section" id="logbook">
      <div className="logbook-section__atmosphere" aria-hidden="true" />

      <figure className="logbook-section__visual" aria-hidden="true">
        <img src="/images/logbook-interior.png" alt="" />
      </figure>

      <div className="logbook-section__inner">
        <SectionHeading
          title="The Logbook"
          className="logbook-section__heading"
        />

        <div className="logbook-section__layout">
          <div className="logbook-section__content">
            <p className="logbook-section__kicker">The build, in real time</p>

            <h2>
              Every chapter
              <span>is written here.</span>
            </h2>

            <div className="logbook-section__copy">
              <p>
                The Logbook records the process behind Dock Vault — the
                decisions, lessons, arrivals and small milestones that shape what
                the Harbor becomes.
              </p>

              <p>
                It is a quieter look behind the scenes. Not polished history,
                but the journey while it is still being written.
              </p>
            </div>

            <div className="logbook-entries" id="logbook-entries">
              <article>
                <LogbookIcon />
                <div>
                  <time>First entry</time>
                  <h3>The Lighthouse has been lit.</h3>
                  <p>A place for collectors begins to find its direction.</p>
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

              <article>
                <AnchorIcon />
                <div>
                  <time>Build note</time>
                  <h3>The Market Hall takes shape.</h3>
                  <p>Commerce is introduced slowly, with standards first.</p>
                </div>
              </article>
            </div>

            <div className="logbook-section__actions">
              <a className="primary-cta" href="#logbook-entries">
                <span>Read the Logbook</span>
              </a>

              <span className="status-seal">More entries on the way</span>
            </div>
          </div>
        </div>

        <blockquote className="logbook-section__quote">
          “A logbook does not chase attention. It records what matters.”
        </blockquote>
      </div>
    </section>
  );
}
