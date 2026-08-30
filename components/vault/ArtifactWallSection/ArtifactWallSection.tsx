"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "Vault records",
    intro: "A small set of markers showing where the archive stands today. These records can grow with the collection over time.",
    items: [
      ["Active master set", "OP12"],
      ["Master set progress", "35%"],
      ["Playset archive", "18%"],
      ["Founder's archive", "Growing"],
    ],
  },
  nl: {
    title: "Vault records",
    intro: "Een kleine set markeringen die laat zien waar het archief vandaag staat. Deze gegevens kunnen later met de collectie meegroeien.",
    items: [
      ["Actieve master set", "OP12"],
      ["Master set voortgang", "35%"],
      ["Playset archive", "18%"],
      ["Founder's archive", "Groeit"],
    ],
  },
} as const;

export function ArtifactWallSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="artifact-wall">
      <div className="artifact-wall__inner">
        <SectionHeading title={copy.title} />
        <p className="artifact-wall__intro">{copy.intro}</p>
        <div className="artifact-grid">
          {copy.items.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
