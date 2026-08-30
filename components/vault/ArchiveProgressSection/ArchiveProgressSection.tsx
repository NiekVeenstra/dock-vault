"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const archives = {
  en: [
    {
      eyebrow: "Ongoing voyage",
      title: "Full Playset Project",
      description: "Four copies of every playable card, gathered patiently over time.",
      progress: 18,
    },
    {
      eyebrow: "Current master set",
      title: "OP12 Master Set",
      description: "A complete record of the set, from the first card to the final gap.",
      progress: 35,
    },
    {
      eyebrow: "Private archive",
      title: "Founder's Archive",
      description: "Milestones and pieces kept for their story rather than their price.",
      status: "Growing",
    },
  ],
  nl: [
    {
      eyebrow: "Lopende reis",
      title: "Volledig Playset-project",
      description: "Vier exemplaren van iedere speelbare kaart, geduldig verzameld door de tijd heen.",
      progress: 18,
    },
    {
      eyebrow: "Huidige master set",
      title: "OP12 Master Set",
      description: "Een volledig overzicht van de set, van de eerste kaart tot het laatste ontbrekende stuk.",
      progress: 35,
    },
    {
      eyebrow: "Privéarchief",
      title: "Oprichtersarchief",
      description: "Mijlpalen en stukken die worden bewaard om hun verhaal, niet om hun prijs.",
      status: "Groeit",
    },
  ],
};

export function ArchiveProgressSection() {
  const { language } = useLanguage();
  const copy = archives[language];

  return (
    <section className="archive-progress">
      <div className="archive-progress__inner">
        <SectionHeading title={language === "en" ? "The Founder's Collection" : "De Oprichterscollectie"} />

        <div className="archive-list">
          {copy.map((archive) => (
            <article className="archive-record" key={archive.title}>
              <div className="archive-record__heading">
                <div>
                  <span>{archive.eyebrow}</span>
                  <h2>{archive.title}</h2>
                </div>
                <b>{archive.progress !== undefined ? `${archive.progress}%` : archive.status}</b>
              </div>
              <p>{archive.description}</p>
              {archive.progress !== undefined ? (
                <div
                  className="archive-track"
                  aria-label={`${archive.progress}% ${language === "en" ? "complete" : "voltooid"}`}
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
