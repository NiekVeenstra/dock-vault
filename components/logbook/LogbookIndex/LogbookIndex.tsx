"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "The Logbook",
    title1: "The Harbor",
    title2: "as it is written.",
    lead:
      "The Logbook records Dock Vault while it is still taking shape — the decisions, milestones and lessons that turn an idea into a place.",
    introEyebrow: "Recorded, not polished",
    introTitle: "A living record of the build.",
    introCopy:
      "These entries are not a finished history written afterwards. They are notes from the journey itself: what opened, why choices were made and what the next tide may bring.",
    entriesEyebrow: "Entries",
    entriesTitle: "From the first light onward.",
    entries: [
      {
        label: "First entry",
        title: "The Lighthouse has been lit.",
        description:
          "Why Dock Vault begins with guidance, and how the first four Lighthouse guides give collectors a clearer place to start.",
        href: "/logbook/the-lighthouse-has-been-lit",
        image: "/images/lighthouse-interior.webp",
        action: "Read entry",
        status: "Published",
      },
      {
        label: "Founding note",
        title: "Dock Vault Alpha begins.",
        description:
          "The first working version of the Harbor is open. A note on building the place before filling the shelves.",
        href: "/logbook/dock-vault-alpha-begins",
        image: "/images/harbor-introduction.webp",
        action: "Read entry",
        status: "Published",
      },
      {
        label: "Build note",
        title: "The Market Hall takes shape.",
        description:
          "Commerce will enter Dock Vault slowly. This entry will document the standards being set before the Market Hall opens.",
        href: "",
        image: "/images/market-hall-scene.webp",
        action: "In preparation",
        status: "Upcoming",
      },
    ],
    noteEyebrow: "From the Harbor",
    note:
      "The Logbook will grow alongside Dock Vault. New guides, collection milestones, Market Hall progress and changes to the Harbor will be recorded here as they happen.",
    back: "Return to Dock Vault",
  },
  nl: {
    eyebrow: "Het Logboek",
    title1: "De Haven",
    title2: "terwijl hij wordt geschreven.",
    lead:
      "Het Logboek legt Dock Vault vast terwijl het nog vorm krijgt — de beslissingen, mijlpalen en lessen die een idee langzaam veranderen in een plek.",
    introEyebrow: "Vastgelegd, niet opgepoetst",
    introTitle: "Een levend verslag van de bouw.",
    introCopy:
      "Deze berichten zijn geen achteraf geschreven, afgeronde geschiedenis. Het zijn notities uit de reis zelf: wat er opende, waarom keuzes werden gemaakt en wat de volgende vloed kan brengen.",
    entriesEyebrow: "Berichten",
    entriesTitle: "Vanaf het eerste licht.",
    entries: [
      {
        label: "Eerste bericht",
        title: "De Vuurtoren is ontstoken.",
        description:
          "Waarom Dock Vault begint met begeleiding en hoe de eerste vier Vuurtoren-gidsen verzamelaars een duidelijker startpunt geven.",
        href: "/logbook/the-lighthouse-has-been-lit",
        image: "/images/lighthouse-interior.webp",
        action: "Lees bericht",
        status: "Gepubliceerd",
      },
      {
        label: "Oprichtingsnotitie",
        title: "Dock Vault Alpha begint.",
        description:
          "De eerste werkende versie van de Haven is open. Een notitie over eerst de plek bouwen en daarna pas de planken vullen.",
        href: "/logbook/dock-vault-alpha-begins",
        image: "/images/harbor-introduction.webp",
        action: "Lees bericht",
        status: "Gepubliceerd",
      },
      {
        label: "Bouwnotitie",
        title: "De Markthal krijgt vorm.",
        description:
          "Handel komt langzaam Dock Vault binnen. Dit bericht gaat de standaarden vastleggen die worden opgebouwd voordat de Markthal opent.",
        href: "",
        image: "/images/market-hall-scene.webp",
        action: "In voorbereiding",
        status: "Binnenkort",
      },
    ],
    noteEyebrow: "Vanuit de Haven",
    note:
      "Het Logboek groeit mee met Dock Vault. Nieuwe gidsen, mijlpalen in collecties, voortgang van de Markthal en veranderingen aan de Haven worden hier vastgelegd wanneer ze plaatsvinden.",
    back: "Terug naar Dock Vault",
  },
} as const;

export function LogbookIndex() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="logbook-index-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="logbook-index-hero__image" aria-hidden="true">
          <img src="/images/logbook-interior.webp" alt="" decoding="async" />
        </div>
        <div className="logbook-index-hero__veil" aria-hidden="true" />

        <div className="logbook-index-hero__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>
            {copy.title1}
            <em>{copy.title2}</em>
          </h1>
          <p>{copy.lead}</p>
        </div>
      </section>

      <section className="logbook-index-intro">
        <div className="logbook-index-shell logbook-index-intro__grid">
          <p className="eyebrow">{copy.introEyebrow}</p>
          <div>
            <h2>{copy.introTitle}</h2>
            <p>{copy.introCopy}</p>
          </div>
        </div>
      </section>

      <section className="logbook-index-entries">
        <div className="logbook-index-shell">
          <header className="logbook-index-entries__heading">
            <p className="eyebrow">{copy.entriesEyebrow}</p>
            <h2>{copy.entriesTitle}</h2>
          </header>

          <div className="logbook-index-list">
            {copy.entries.map((entry, index) => {
              const content = (
                <article className={`logbook-index-card${entry.href ? "" : " is-upcoming"}`}>
                  <div className="logbook-index-card__image" aria-hidden="true">
                    <img src={entry.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="logbook-index-card__veil" aria-hidden="true" />

                  <div className="logbook-index-card__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="logbook-index-card__content">
                    <div className="logbook-index-card__meta">
                      <span>{entry.label}</span>
                      <span>{entry.status}</span>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <span className="logbook-index-card__action">
                      {entry.action}
                      {entry.href ? <b aria-hidden="true">→</b> : null}
                    </span>
                  </div>
                </article>
              );

              return entry.href ? (
                <a className="logbook-index-card-link" href={entry.href} key={entry.title}>
                  {content}
                </a>
              ) : (
                <div className="logbook-index-card-link" key={entry.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="logbook-index-note">
        <div className="logbook-index-shell">
          <p className="eyebrow">{copy.noteEyebrow}</p>
          <blockquote>{copy.note}</blockquote>
          <a className="primary-cta" href="/#logbook">
            <span>{copy.back}</span>
            <b aria-hidden="true">→</b>
          </a>
        </div>
      </section>
    </>
  );
}
