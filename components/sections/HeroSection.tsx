import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { LighthouseIcon } from "@/components/Icons";

export function HeroSection() {
  return (
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

          <a className="primary-cta" href="#lighthouse">
            <LighthouseIcon />
            <span>Follow the Light</span>
          </a>

          <a className="text-link" href="#philosophy">
            Learn our philosophy <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
