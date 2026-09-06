"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { SiteFooter } from "@/components/sections";
import { useLanguage } from "@/components/LanguageProvider";
import {
  FounderCollectionRecord,
  foundersCollectionRecords,
} from "@/content/vault/foundersCollection";

const translations = {
  en: {
    back: "← Return to The Vault",
    eyebrow: "The first open room",
    title: "Founder’s Collection",
    lead: "A personal archive of the pieces that come to matter along the way.",
    intro:
      "This room will hold the founder’s own collection stories: not as a display of status, but as a record of meaning, memory and care. The first complete record is still being prepared.",
    statusLabel: "Archive status",
    status: "First record in preparation",
    statusCopy:
      "No personal story or collection claim is published here until the real piece, photograph and context have been added.",
    returnVault: "Return to The Vault",
    devEyebrow: "Development blueprint",
    devTitle: "Structure for the first record",
    devIntro:
      "This framework is visible in local development only. It shows what can be added later without inventing any personal history.",
    fields: {
      photo: ["Real photograph", "A photo of the actual card, object or collection."],
      meaning: ["Why it matters", "The personal meaning this piece has for the founder."],
      origin: ["How it arrived", "How the piece entered the collection or the founder’s life."],
      lesson: ["Moment or lesson", "A genuine moment, memory or lesson connected to it."],
      preservation: ["Care and preservation", "How the piece is stored, handled and protected."],
    },
    missing: "To be supplied by the founder",
    publishedEyebrow: "Archive record",
  },
  nl: {
    back: "← Terug naar De Kluis",
    eyebrow: "De eerste geopende ruimte",
    title: "Oprichterscollectie",
    lead: "Een persoonlijk archief van de stukken die onderweg betekenis krijgen.",
    intro:
      "Deze ruimte wordt het persoonlijke verzamelarchief van de oprichter: niet als etalage van status, maar als verslag van betekenis, herinnering en zorg. Het eerste volledige record wordt nog voorbereid.",
    statusLabel: "Status van het archief",
    status: "Eerste record in voorbereiding",
    statusCopy:
      "Er wordt hier geen persoonlijk verhaal of bezit als feit gepubliceerd totdat het echte stuk, de foto en de context zijn toegevoegd.",
    returnVault: "Terug naar De Kluis",
    devEyebrow: "Development-concept",
    devTitle: "Structuur voor het eerste record",
    devIntro:
      "Dit raamwerk is alleen zichtbaar in lokale development. Het laat zien wat later kan worden toegevoegd zonder persoonlijke geschiedenis te verzinnen.",
    fields: {
      photo: ["Echte foto", "Een foto van de daadwerkelijke kaart, het object of de collectie."],
      meaning: ["Waarom het betekenis heeft", "De persoonlijke betekenis die dit stuk voor de oprichter heeft."],
      origin: ["Hoe het erbij kwam", "Hoe het stuk in de collectie of in het leven van de oprichter terechtkwam."],
      lesson: ["Moment of les", "Een echt moment, herinnering of geleerde les die ermee verbonden is."],
      preservation: ["Zorg en bescherming", "Hoe het stuk wordt bewaard, behandeld en beschermd."],
    },
    missing: "Nog aan te leveren door de oprichter",
    publishedEyebrow: "Archiefrecord",
  },
} as const;

function PublishedRecord({
  record,
  language,
}: {
  record: FounderCollectionRecord;
  language: "en" | "nl";
}) {
  const copy = translations[language];
  const title = record.title?.[language];

  if (
    record.status !== "published" ||
    !title ||
    !record.photo ||
    !record.meaning ||
    !record.origin ||
    !record.momentOrLesson ||
    !record.preservation
  ) {
    return null;
  }

  const details = [
    [copy.fields.meaning[0], record.meaning[language]],
    [copy.fields.origin[0], record.origin[language]],
    [copy.fields.lesson[0], record.momentOrLesson[language]],
    [copy.fields.preservation[0], record.preservation[language]],
  ];

  return (
    <article className="founders-record">
      <div className="founders-record__photo">
        <img src={record.photo.src} alt={record.photo.alt[language]} />
      </div>
      <div className="founders-record__story">
        <p className="eyebrow">{copy.publishedEyebrow}</p>
        <h2>{title}</h2>
        {details.map(([label, value]) => (
          <section key={label}>
            <h3>{label}</h3>
            <p>{value}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export function FoundersCollection() {
  const { language } = useLanguage();
  const copy = translations[language];
  const publishedRecords = foundersCollectionRecords.filter(
    (record) => record.status === "published",
  );
  const showDevelopmentBlueprint = process.env.NODE_ENV === "development";

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

      {publishedRecords.length > 0 ? (
        <section className="founders-records">
          <div className="founders-records__inner">
            {publishedRecords.map((record) => (
              <PublishedRecord key={record.id} record={record} language={language} />
            ))}
          </div>
        </section>
      ) : (
        <section className="founders-empty-state" aria-labelledby="founders-status-title">
          <div className="founders-empty-state__inner">
            <p className="eyebrow">{copy.statusLabel}</p>
            <h2 id="founders-status-title">{copy.status}</h2>
            <p>{copy.statusCopy}</p>
            <a className="primary-cta" href="/vault">
              <span>{copy.returnVault}</span>
              <b aria-hidden="true">←</b>
            </a>
          </div>
        </section>
      )}

      {showDevelopmentBlueprint ? (
        <section className="founders-blueprint" aria-labelledby="founders-blueprint-title">
          <div className="founders-blueprint__inner">
            <p className="eyebrow">{copy.devEyebrow}</p>
            <h2 id="founders-blueprint-title">{copy.devTitle}</h2>
            <p className="founders-blueprint__intro">{copy.devIntro}</p>
            <div className="founders-blueprint__grid">
              {Object.values(copy.fields).map(([title, description]) => (
                <article key={title}>
                  <span>{title}</span>
                  <p>{description}</p>
                  <small>{copy.missing}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}
