"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { AnchorIcon, DiamondIcon, LogbookIcon } from "@/components/Icons";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "The Logbook",
    kicker: "The build, in real time",
    heading1: "Every chapter",
    heading2: "is written here.",
    copy1: "The Logbook records the process behind Dock Vault — the decisions, lessons, arrivals and small milestones that shape what the Harbor becomes.",
    copy2: "It is a quieter look behind the scenes. Not polished history, but the journey while it is still being written.",
    entries: [
      ["First entry", "The Lighthouse has been lit.", "A place for collectors begins to find its direction."],
      ["Founding note", "Dock Vault Alpha begins.", "The Harbor takes form, one considered detail at a time."],
      ["Build note", "The Market Hall takes shape.", "Commerce is introduced slowly, with standards first."],
    ],
    status: "More entries on the way",
    cta: "Read the Logbook",
    quote: "“A logbook does not chase attention. It records what matters.”",
  },
  nl: {
    title: "Het Logboek",
    kicker: "De bouw, in realtime",
    heading1: "Ieder hoofdstuk",
    heading2: "wordt hier geschreven.",
    copy1: "Het Logboek legt het proces achter Dock Vault vast — de beslissingen, lessen, aankomsten en kleine mijlpalen die bepalen wat de Haven wordt.",
    copy2: "Het is een rustigere blik achter de schermen. Geen gepolijste geschiedenis, maar de reis terwijl die nog wordt geschreven.",
    entries: [
      ["Eerste bericht", "De Vuurtoren is ontstoken.", "Een plek voor verzamelaars begint richting te vinden."],
      ["Oprichtingsnotitie", "Dock Vault Alpha begint.", "De Haven krijgt vorm, één doordacht detail tegelijk."],
      ["Bouwnotitie", "De Markthal krijgt vorm.", "Handel wordt langzaam geïntroduceerd, met de standaarden voorop."],
    ],
    status: "Meer berichten onderweg",
    cta: "Lees het Logboek",
    quote: "“Een logboek jaagt niet op aandacht. Het legt vast wat ertoe doet.”",
  },
};

const entryIcons = [LogbookIcon, DiamondIcon, AnchorIcon];

export function LogbookSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="logbook-section" id="logbook">
      <div className="logbook-section__atmosphere" aria-hidden="true" />

      <figure className="logbook-section__visual" aria-hidden="true">
        <img src="/images/logbook-interior.png" alt="" />
      </figure>

      <div className="logbook-section__inner">
        <SectionHeading title={copy.title} className="logbook-section__heading" />

        <div className="logbook-section__layout">
          <div className="logbook-section__content">
            <p className="logbook-section__kicker">{copy.kicker}</p>

            <h2>
              {copy.heading1}
              <span>{copy.heading2}</span>
            </h2>

            <div className="logbook-section__copy">
              <p>{copy.copy1}</p>
              <p>{copy.copy2}</p>
            </div>

            <div className="logbook-entries" id="logbook-entries">
              {copy.entries.map(([time, title, description], index) => {
                const Icon = entryIcons[index];
                return (
                  <article key={title}>
                    <Icon />
                    <div>
                      <time>{time}</time>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="logbook-section__actions">
              <span className="status-seal">{copy.status}</span>
              <a className="primary-cta" href="#logbook-entries">
                <span>{copy.cta}</span>
              </a>
            </div>
          </div>
        </div>

        <blockquote className="logbook-section__quote">{copy.quote}</blockquote>
      </div>
    </section>
  );
}
