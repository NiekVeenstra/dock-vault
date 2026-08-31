"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Logbook",
    eyebrow: "The Logbook · Founding note",
    title1: "Dock Vault Alpha",
    title2: "begins.",
    lead:
      "Dock Vault now has a shape you can step into. Alpha is not a finished destination — it is the first working version of the Harbor, built to be used, tested and refined with care.",
    intro:
      "The idea behind Dock Vault was never to launch a conventional card shop and decorate it afterwards. The place comes first. Its language, standards and rooms need to make sense before shelves are filled and commerce begins.",
    section1Eyebrow: "What alpha means",
    section1Title: "Build the place before filling the shelves.",
    section1Copy1:
      "Alpha is the stage where the foundations become visible. The structure is here, the first routes work and the character of Dock Vault is beginning to feel consistent — but many details are still deliberately open to change.",
    section1Copy2:
      "That is a feature, not a flaw. It gives the Harbor room to improve slowly instead of pretending that every decision was correct on day one.",
    section2Eyebrow: "The first rooms",
    section2Title: "Five parts, one Harbor.",
    rooms: [
      [
        "01",
        "The Lighthouse",
        "The knowledge side of Dock Vault. The first guides are live and will grow into deeper references for preservation, grading, collecting and getting started.",
        "/#lighthouse",
      ],
      [
        "02",
        "The Harbor",
        "The philosophy at the centre of the project: care before commerce, a slower pace and a place where collections are treated with dignity.",
        "/#harbor",
      ],
      [
        "03",
        "The Market Hall",
        "The future commercial room. It stays quiet during alpha while the standards for condition, selection, presentation and trust are established first.",
        "/#market",
      ],
      [
        "04",
        "The Logbook",
        "The record of the build itself — decisions, milestones, lessons and changes while Dock Vault is still becoming what it is meant to be.",
        "/#logbook",
      ],
      [
        "05",
        "The Vault",
        "A quieter archive for collections, milestones and long-term projects that deserve to be preserved as more than inventory.",
        "/vault",
      ],
    ],
    section3Eyebrow: "Why open now?",
    section3Title: "A place becomes better when people can actually use it.",
    section3Copy1:
      "Keeping Dock Vault hidden until every page is perfect would make the project look finished, but it would also remove the most useful part of alpha: learning how the place feels in real use.",
    section3Copy2:
      "Navigation, mobile layouts, the English and Dutch versions, the Lighthouse guides and the way the different rooms connect can now be tested as one experience. The small frictions are easier to see once the doors are open.",
    noteTitle: "A note from the Harbor",
    note:
      "Alpha is not permission to lower the standard. It is permission to improve the standard before pretending the work is finished.",
    section4Eyebrow: "The next tide",
    section4Title: "Small releases. Clear standards.",
    section4Copy1:
      "The next phase is not about adding everything at once. The Lighthouse will deepen, the Logbook will continue to record the build and the Market Hall will only move closer to opening when the foundations behind it are ready.",
    section4Copy2:
      "Some things will change during alpha. Wording will sharpen. Routes may move. Sections will grow or disappear. What should remain consistent is the reason behind those changes: make Dock Vault calmer, clearer and more useful for collectors.",
    closing:
      "The Harbor is no longer only an idea on paper. The first version exists. Now it can earn its shape, one considered detail at a time.",
    cta: "Explore Dock Vault",
  },
  nl: {
    back: "← Terug naar het Logboek",
    eyebrow: "Het Logboek · Oprichtingsnotitie",
    title1: "Dock Vault Alpha",
    title2: "begint.",
    lead:
      "Dock Vault heeft nu een vorm waar je echt doorheen kunt bewegen. Alpha is geen eindbestemming — het is de eerste werkende versie van de Haven, gemaakt om gebruikt, getest en zorgvuldig verfijnd te worden.",
    intro:
      "Het idee achter Dock Vault was nooit om eerst een gewone kaartwinkel te lanceren en die daarna aan te kleden. De plek komt eerst. De taal, standaarden en ruimtes moeten kloppen voordat de planken worden gevuld en de handel begint.",
    section1Eyebrow: "Wat alpha betekent",
    section1Title: "Bouw eerst de plek, vul daarna pas de planken.",
    section1Copy1:
      "Alpha is de fase waarin de fundering zichtbaar wordt. De structuur staat, de eerste routes werken en het karakter van Dock Vault begint consistent te voelen — maar veel details mogen bewust nog veranderen.",
    section1Copy2:
      "Dat is geen tekortkoming maar juist het doel. Het geeft de Haven ruimte om rustig beter te worden, zonder te doen alsof iedere keuze op dag één meteen de juiste was.",
    section2Eyebrow: "De eerste ruimtes",
    section2Title: "Vijf delen, één Haven.",
    rooms: [
      [
        "01",
        "De Vuurtoren",
        "De kenniszijde van Dock Vault. De eerste gidsen zijn live en groeien verder uit tot diepere informatie over behoud, grading, verzamelen en beginnen.",
        "/#lighthouse",
      ],
      [
        "02",
        "De Haven",
        "De filosofie in het midden van het project: zorg vóór handel, een rustiger tempo en een plek waar collecties met waardigheid worden behandeld.",
        "/#harbor",
      ],
      [
        "03",
        "De Markthal",
        "De toekomstige commerciële ruimte. Tijdens alpha blijft deze rustig terwijl eerst de standaarden voor conditie, selectie, presentatie en vertrouwen worden opgebouwd.",
        "/#market",
      ],
      [
        "04",
        "Het Logboek",
        "Het verslag van de bouw zelf — beslissingen, mijlpalen, lessen en veranderingen terwijl Dock Vault nog wordt wat het uiteindelijk moet zijn.",
        "/#logbook",
      ],
      [
        "05",
        "De Kluis",
        "Een stiller archief voor collecties, mijlpalen en langlopende projecten die meer verdienen dan alleen de status van voorraad.",
        "/vault",
      ],
    ],
    section3Eyebrow: "Waarom nu openen?",
    section3Title: "Een plek wordt beter wanneer mensen hem echt kunnen gebruiken.",
    section3Copy1:
      "Dock Vault verborgen houden totdat iedere pagina perfect is, zou het project afgewerkt laten lijken, maar haalt ook het nuttigste deel van alpha weg: leren hoe de plek in echt gebruik aanvoelt.",
    section3Copy2:
      "Navigatie, mobiele layouts, de Engelse en Nederlandse versie, de Vuurtoren-gidsen en de verbinding tussen de verschillende ruimtes kunnen nu als één ervaring worden getest. Kleine fricties worden pas echt zichtbaar wanneer de deuren openstaan.",
    noteTitle: "Een notitie vanuit de Haven",
    note:
      "Alpha is geen toestemming om de standaard te verlagen. Het is toestemming om de standaard te verbeteren voordat we doen alsof het werk af is.",
    section4Eyebrow: "De volgende vloed",
    section4Title: "Kleine releases. Duidelijke standaarden.",
    section4Copy1:
      "De volgende fase draait niet om alles tegelijk toevoegen. De Vuurtoren wordt dieper, het Logboek blijft de bouw vastleggen en de Markthal komt pas dichter bij opening wanneer de fundering erachter klaar is.",
    section4Copy2:
      "Tijdens alpha zullen dingen veranderen. Teksten worden scherper. Routes kunnen verschuiven. Secties groeien of verdwijnen. Wat hetzelfde moet blijven is de reden achter die veranderingen: Dock Vault rustiger, duidelijker en nuttiger maken voor verzamelaars.",
    closing:
      "De Haven is niet langer alleen een idee op papier. De eerste versie bestaat. Nu kan hij zijn vorm verdienen, één doordacht detail tegelijk.",
    cta: "Ontdek Dock Vault",
  },
} as const;

export function AlphaBeginsEntry() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="logbook-entry-hero logbook-entry-hero--alpha" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="logbook-entry-hero__image" aria-hidden="true">
          <img src="/images/harbor-introduction.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="logbook-entry-hero__veil" aria-hidden="true" />

        <div className="logbook-entry-hero__content">
          <a className="logbook-entry-back" href="/logbook">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>
            {copy.title1}
            <em>{copy.title2}</em>
          </h1>
          <p className="logbook-entry-hero__lead">{copy.lead}</p>
        </div>
      </section>

      <article className="logbook-entry-article">
        <section className="logbook-entry-intro">
          <p>{copy.intro}</p>
        </section>

        <section className="logbook-entry-section">
          <div className="logbook-entry-section__heading">
            <p className="eyebrow">{copy.section1Eyebrow}</p>
            <h2>{copy.section1Title}</h2>
          </div>
          <div className="logbook-entry-section__copy">
            <p>{copy.section1Copy1}</p>
            <p>{copy.section1Copy2}</p>
          </div>
        </section>

        <section className="logbook-entry-section logbook-entry-section--guides">
          <div className="logbook-entry-section__heading">
            <p className="eyebrow">{copy.section2Eyebrow}</p>
            <h2>{copy.section2Title}</h2>
          </div>

          <div className="logbook-entry-guides">
            {copy.rooms.map(([number, title, text, href]) => (
              <a className="logbook-entry-guide" href={href} key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        </section>

        <section className="logbook-entry-section">
          <div className="logbook-entry-section__heading">
            <p className="eyebrow">{copy.section3Eyebrow}</p>
            <h2>{copy.section3Title}</h2>
          </div>
          <div className="logbook-entry-section__copy">
            <p>{copy.section3Copy1}</p>
            <p>{copy.section3Copy2}</p>
          </div>
        </section>

        <aside className="logbook-entry-note">
          <p>{copy.noteTitle}</p>
          <blockquote>{copy.note}</blockquote>
        </aside>

        <section className="logbook-entry-section logbook-entry-section--closing">
          <div className="logbook-entry-section__heading">
            <p className="eyebrow">{copy.section4Eyebrow}</p>
            <h2>{copy.section4Title}</h2>
          </div>
          <div className="logbook-entry-section__copy">
            <p>{copy.section4Copy1}</p>
            <p>{copy.section4Copy2}</p>
            <p className="logbook-entry-closing">{copy.closing}</p>
            <a className="primary-cta" href="/#world">
              <span>{copy.cta}</span>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
