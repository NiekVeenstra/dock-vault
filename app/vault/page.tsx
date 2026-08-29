import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { HarborNav } from "@/components/HarborNav";

const archives = [
  {
    eyebrow: "Ongoing voyage",
    title: "Full Playset Project",
    description:
      "Four copies of every playable card, gathered patiently over time.",
    progress: 18,
  },
  {
    eyebrow: "Current master set",
    title: "OP12 Master Set",
    description:
      "A complete record of the set, from the first card to the final gap.",
    progress: 35,
  },
  {
    eyebrow: "Private archive",
    title: "Founder&apos;s Archive",
    description:
      "Milestones and pieces kept for their story rather than their price.",
    status: "Growing",
  },
];

export default function VaultPage() {
  return (
    <main className="vault-page">
      <section className="vault-entry">
        <HarborHeader />
        <HarborDivider />

        <div className="vault-entry__mist" aria-hidden="true" />
        <div className="vault-entry__door" aria-hidden="true">
          <div className="vault-entry__light" />
          <img src="/images/vault-door.png" alt="" />
        </div>

        <div className="vault-entry__content">
          <a className="vault-back-link" href="/#vault">
            ← Return to the Harbor
          </a>
          <p className="eyebrow">The door has opened</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>
            Enter
            <br />
            <em>The Vault.</em>
          </h1>
          <p>
            Not everything inside Dock Vault is meant to be sold. Some things
            exist because they deserve to be preserved.
          </p>
        </div>
      </section>

      <section className="vault-manifesto">
        <div className="vault-manifesto__inner">
          <p className="eyebrow">The purpose of the room</p>
          <h2>
            The Vault protects
            <span>stories, not status.</span>
          </h2>
          <div className="vault-manifesto__copy">
            <p>
              This is the personal archive behind Dock Vault: an honest record
              of collections being built, gaps still open and milestones worth
              remembering.
            </p>
            <p>
              Nothing here needs to appear complete. The journey itself is part
              of what is being preserved.
            </p>
          </div>
        </div>
      </section>

      <section className="artifact-wall">
        <div className="artifact-wall__inner">
          <div className="section-heading">
            <p>Archive markers</p>
            <HarborDivider compact />
          </div>
          <div className="artifact-grid">
            <article>
              <span>Founding chapter</span>
              <strong>In progress</strong>
            </article>
            <article>
              <span>Current voyage</span>
              <strong>OP12</strong>
            </article>
            <article>
              <span>Archive status</span>
              <strong>Growing</strong>
            </article>
            <article>
              <span>Guiding principle</span>
              <strong>Preserve first</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="archive-progress">
        <div className="archive-progress__inner">
          <div className="section-heading">
            <p>The Founder&apos;s Collection</p>
            <HarborDivider compact />
          </div>

          <div className="archive-list">
            {archives.map((archive) => (
              <article className="archive-record" key={archive.title}>
                <div className="archive-record__heading">
                  <div>
                    <span>{archive.eyebrow}</span>
                    <h2 dangerouslySetInnerHTML={{ __html: archive.title }} />
                  </div>
                  <b>
                    {archive.progress !== undefined
                      ? `${archive.progress}%`
                      : archive.status}
                  </b>
                </div>
                <p>{archive.description}</p>
                {archive.progress !== undefined ? (
                  <div
                    className="archive-track"
                    aria-label={`${archive.progress}% complete`}
                  >
                    <i style={{ width: `${archive.progress}%` }} />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vault-quote">
        <blockquote>
          “A vault is not defined by what it hides,
          <br />
          but by what it chooses to preserve.”
        </blockquote>
        <a className="quiet-link" href="/#market">
          Continue to the Market Hall <span>→</span>
        </a>
      </section>

      <footer>
        <p>Dock Vault</p>
        <span>The Harbor is yours.</span>
      </footer>
      <HarborNav />
    </main>
  );
}
