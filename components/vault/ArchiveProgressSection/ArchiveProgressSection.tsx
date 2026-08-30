"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "Current journeys",
    intro: "The first projects already being recorded inside The Vault. Their percentages are markers of a journey, not a race to the finish.",
    complete: "complete",
    items: [
      {
        eyebrow: "Current master set",
        title: "OP12 Master Set",
        description: "A complete numbered OP12 collection, including the alternate-art journey, built card by card rather than treated as a single purchase.",
        progress: 35,
        note: "Master Set Journey",
      },
      {
        eyebrow: "Long-term archive",
        title: "Full Playset Project",
        description: "Four copies of every playable card gathered patiently over time — an archive designed around both collecting and the game itself.",
        progress: 18,
        note: "Playset Archive",
      },
      {
        eyebrow: "Personal archive",
        title: "Founder's Collection",
        description: "Pieces and milestones kept because they mark a chapter in the story of Dock Vault. This collection is meant to evolve, not to reach a fixed percentage.",
        status: "Growing",
        note: "Founder's Collection",
      },
    ],
  },
  nl: {
    title: "Huidige reizen",
    intro: "De eerste projecten die al in The Vault worden vastgelegd. De percentages zijn markeringen van een reis, geen wedstrijd naar de finish.",
    complete: "voltooid",
    items: [
      {
        eyebrow: "Huidige master set",
        title: "OP12 Master Set",
        description: "Een complete genummerde OP12-collectie, inclusief de alternate-art reis, kaart voor kaart opgebouwd in plaats van behandeld als één aankoop.",
        progress: 35,
        note: "Master Set Journey",
      },
      {
        eyebrow: "Langlopend archief",
        title: "Full Playset Project",
        description: "Vier exemplaren van iedere speelbare kaart, geduldig door de tijd heen verzameld — een archief rond zowel verzamelen als het spel zelf.",
        progress: 18,
        note: "Playset Archive",
      },
      {
        eyebrow: "Persoonlijk archief",
        title: "Founder's Collection",
        description: "Stukken en mijlpalen die worden bewaard omdat ze een hoofdstuk in het verhaal van Dock Vault markeren. Deze collectie mag blijven groeien en hoeft geen vast eindpercentage te bereiken.",
        status: "Groeit",
        note: "Founder's Collection",
      },
    ],
  },
} as const;

export function ArchiveProgressSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="archive-progress" id="current-journeys">
      <div className="archive-progress__inner">
        <SectionHeading title={copy.title} />
        <p className="archive-progress__intro">{copy.intro}</p>

        <div className="archive-list">
          {copy.items.map((archive) => (
            <article className="archive-record" key={archive.title}>
              <div className="archive-record__heading">
                <div>
                  <span>{archive.eyebrow}</span>
                  <h2>{archive.title}</h2>
                </div>
                <b>{"progress" in archive ? `${archive.progress}%` : archive.status}</b>
              </div>
              <p>{archive.description}</p>
              <small>{archive.note}</small>
              {"progress" in archive ? (
                <div
                  className="archive-track"
                  aria-label={`${archive.progress}% ${copy.complete}`}
                >
                  <i style={{ width: `${archive.progress}%` }} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
