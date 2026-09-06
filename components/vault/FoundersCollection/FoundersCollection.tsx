"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { SiteFooter } from "@/components/sections";
import { useLanguage } from "@/components/LanguageProvider";
import type { FounderCollectionRecord } from "@/content/vault/foundersCollection";

const translations = {
  en: {
    back: "← Return to The Vault",
    eyebrow: "The first open room",
    title: "Founder’s Collection",
    lead: "A personal archive of the pieces that come to matter along the way.",
    intro:
      "This room preserves the founder’s own collection stories. The pieces are kept here for the meaning, memories and care connected to them.",
    emptyEyebrow: "The first record",
    emptyTitle: "The first story will have a place here soon.",
    returnVault: "Return to The Vault",
    draftLabel: "Development concept",
    draftPhoto: "Personal photograph to follow",
    referenceLabel: "Reference image",
    archiveRecord: "Founder’s record",
    careTitle: "Care and preservation",
  },
  nl: {
    back: "← Terug naar De Kluis",
    eyebrow: "De eerste geopende ruimte",
    title: "Oprichterscollectie",
    lead: "Een persoonlijk archief van de stukken die onderweg betekenis krijgen.",
    intro:
      "Deze ruimte bewaart de persoonlijke verzamelverhalen van de oprichter. De stukken krijgen hier een plek vanwege de betekenis, herinneringen en zorg die ermee verbonden zijn.",
    emptyEyebrow: "Het eerste record",
    emptyTitle: "Het eerste verhaal krijgt hier binnenkort een plek.",
    returnVault: "Terug naar De Kluis",
    draftLabel: "Development-concept",
    draftPhoto: "Eigen foto volgt",
    referenceLabel: "Referentiebeeld",
    archiveRecord: "Oprichtersrecord",
    careTitle: "Zorg en bescherming",
  },
} as const;

function FounderRecord({
  record,
  language,
  draftPreview,
}: {
  record: FounderCollectionRecord;
  language: "en" | "nl";
  draftPreview: boolean;
}) {
  const copy = translations[language];
  const isDraft = record.status === "draft";

  return (
    <article className={`founders-record${isDraft ? " founders-record--draft" : ""}`}>
      <div className="founders-record__photo-column">
        {record.photo ? (
          <figure className="founders-record__photo">
            <img src={record.photo.src} alt={record.photo.alt[language]} />
          </figure>
        ) : draftPreview && record.referenceImage ? (
          <figure className="founders-record__photo founders-record__photo--reference">
            <img
              src={record.referenceImage.src}
              alt={record.referenceImage.alt[language]}
            />
            <figcaption className="founders-record__reference-caption">
              <strong>{copy.referenceLabel}</strong>
              <span>{record.referenceImage.note[language]}</span>
            </figcaption>
          </figure>
        ) : (
          <div
            className="founders-record__photo founders-record__photo--placeholder"
            role="img"
            aria-label={copy.draftPhoto}
          >
            <span aria-hidden="true">◇</span>
            <strong>{copy.draftPhoto}</strong>
          </div>
        )}
      </div>

      <div className="founders-record__story">
        <div className="founders-record__heading">
          <p className="eyebrow">
            {isDraft && draftPreview ? copy.draftLabel : copy.archiveRecord}
          </p>
          <h2>{record.title[language]}</h2>
          <p className="founders-record__cardline">
            {record.card.name} <span aria-hidden="true">·</span> {record.card.code}{" "}
            <span aria-hidden="true">·</span> {record.card.set}
          </p>
        </div>

        <div className="founders-record__prose">
          {record.story[language].map((paragraph, index) => (
            <p key={`${record.id}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <section className="founders-record__care" aria-labelledby={`${record.id}-care-title`}>
          <p className="eyebrow">{copy.careTitle}</p>
          <h3 id={`${record.id}-care-title`}>{copy.careTitle}</h3>
          <p>{record.preservation[language]}</p>
        </section>
      </div>
    </article>
  );
}

export function FoundersCollection({
  records,
  draftPreview,
}: {
  records: FounderCollectionRecord[];
  draftPreview: boolean;
}) {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <main className="founders-collection-page">
      <section className="founders-collection-hero">
        <HarborHeader />
        <HarborDivider />

        <div className="founders-collection-hero__scene" aria-hidden="true">
          <img src="/images/vault-interior.webp" alt="" />
        </div>

        <div className="founders-collection-hero__content">
          <a className="vault-back-link" href="/vault">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true"><span /></div>
          <h1>{copy.title}</h1>
          <p className="founders-collection-hero__lead">{copy.lead}</p>
          <p className="founders-collection-hero__intro">{copy.intro}</p>
        </div>
      </section>

      {records.length > 0 ? (
        <section className="founders-records" aria-label={copy.title}>
          <div className="founders-records__inner">
            {records.map((record) => (
              <FounderRecord
                key={record.id}
                record={record}
                language={language}
                draftPreview={draftPreview}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="founders-empty-state" aria-labelledby="founders-status-title">
          <div className="founders-empty-state__inner">
            <p className="eyebrow">{copy.emptyEyebrow}</p>
            <h2 id="founders-status-title">{copy.emptyTitle}</h2>
            <a className="primary-cta" href="/vault">
              <span>{copy.returnVault}</span>
              <b aria-hidden="true">←</b>
            </a>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
