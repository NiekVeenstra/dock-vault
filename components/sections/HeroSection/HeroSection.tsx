"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { LighthouseIcon } from "@/components/Icons";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrowTop: "The lighthouse",
    eyebrowBottom: "has been lit",
    welcome: "Welcome to",
    copy: "A Harbor for One Piece collectors. Built on care, guided by trust, and created to protect what deserves to remain.",
    primary: "Follow the Light",
    secondary: "Learn our philosophy",
  },
  nl: {
    eyebrowTop: "De vuurtoren",
    eyebrowBottom: "is ontstoken",
    welcome: "Welkom bij",
    copy: "Een haven voor One Piece-verzamelaars. Gebouwd met zorg, geleid door vertrouwen en gemaakt om te beschermen wat bewaard mag blijven.",
    primary: "Volg het Licht",
    secondary: "Lees onze filosofie",
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="hero-shell" id="home">
      <HarborHeader />
      <HarborDivider />

      <div className="hero">
        <div className="hero__content">
          <p className="eyebrow">
            {copy.eyebrowTop}
            <br />
            {copy.eyebrowBottom}
          </p>

          <div className="small-rule" aria-hidden="true">
            <span />
          </div>

          <h1>
            {copy.welcome}
            <br />
            <em>Dock Vault.</em>
          </h1>

          <p className="hero__copy">{copy.copy}</p>

          <a className="primary-cta" href="#lighthouse">
            <LighthouseIcon />
            <span>{copy.primary}</span>
          </a>

          <a className="text-link" href="#philosophy">
            {copy.secondary} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
