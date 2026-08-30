"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "Archive markers",
    items: [
      ["Founding chapter", "In progress"],
      ["Current voyage", "OP12"],
      ["Archive status", "Growing"],
      ["Guiding principle", "Preserve first"],
    ],
  },
  nl: {
    title: "Archiefmarkeringen",
    items: [
      ["Oprichtingshoofdstuk", "In opbouw"],
      ["Huidige reis", "OP12"],
      ["Archiefstatus", "Groeit"],
      ["Leidend principe", "Eerst bewaren"],
    ],
  },
};

export function ArtifactWallSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="artifact-wall">
      <div className="artifact-wall__inner">
        <SectionHeading title={copy.title} />
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
