"use client";

import { AnchorIcon } from "@/components/Icons";
import { useLanguage } from "@/components/LanguageProvider";

export function PhilosophySection() {
  const { language } = useLanguage();

  return (
    <section className="philosophy" id="philosophy">
      <AnchorIcon className="philosophy__icon" />

      <blockquote>
        {language === "en" ? "“Build trust slowly." : "“Bouw vertrouwen langzaam."}
        <br />
        {language === "en" ? "Protect it fiercely.”" : "Bescherm het vastberaden.”"}
      </blockquote>

      <p>
        {language === "en"
          ? "The website is not a shop. It is a place."
          : "De website is geen winkel. Het is een plek."}
      </p>
    </section>
  );
}
