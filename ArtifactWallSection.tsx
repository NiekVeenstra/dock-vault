import { SectionHeading } from "@/components/SectionHeading";

export function VaultSection() {
  return (
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
        <SectionHeading title="The Vault" className="vault-portal__heading" />

        <div className="vault-portal__layout">
          <div className="vault-portal__content">
            <p className="vault-portal__kicker">A quieter room lies beyond</p>
            <h2>
              Some collections deserve
              <span>more than ownership.</span>
            </h2>

            <p>
              The Vault is not built to hide treasures. It exists to protect the
              stories, milestones and patient work that deserve to remain.
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
  );
}
