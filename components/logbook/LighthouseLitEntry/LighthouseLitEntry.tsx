"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Logbook",
    eyebrow: "The Logbook · First entry",
    title1: "The Lighthouse",
    title2: "has been lit.",
    lead:
      "Dock Vault has taken its first real step beyond an idea. The Lighthouse is now open — a place built to help collectors understand before they decide.",
    intro:
      "A collection can begin with excitement, nostalgia, a favourite character or a single card. But as it grows, the questions grow with it. How should a card be protected? When is grading worthwhile? What makes a collection feel intentional instead of endless? And where should a new collector even begin?",
    section1Eyebrow: "Why a Lighthouse?",
    section1Title: "Guidance before commerce.",
    section1Copy1:
      "Dock Vault was never meant to begin with a shelf of products. It begins with knowledge. The Lighthouse exists so that a collector can slow down, understand the choices in front of them and move forward with more confidence.",
    section1Copy2:
      "That does not mean there is one correct way to collect. Quite the opposite. A good guide should make the options clearer without deciding the journey for you.",
    section2Eyebrow: "The first guides",
    section2Title: "Four paths are now open.",
    guides: [
      [
        "01",
        "Preservation",
        "The foundations of handling, sleeving, storing and protecting cards and sealed products over time.",
        "/lighthouse/preservation",
      ],
      [
        "02",
        "Grading",
        "A calm introduction to condition, pre-grading and deciding when professional grading actually makes sense.",
        "/lighthouse/grading",
      ],
      [
        "03",
        "Collecting",
        "Different ways to build a collection with purpose — from characters and master sets to playsets and sealed products.",
        "/lighthouse/collecting",
      ],
      [
        "04",
        "Begin the Journey",
        "A starting point for anyone entering the One Piece Card Game as a collector, player or a little of both.",
        "/lighthouse/begin-the-journey",
      ],
    ],
    section3Eyebrow: "What this means",
    section3Title: "The light is a starting point, not a finish line.",
    section3Copy1:
      "These first pages are deliberately foundations. They are not meant to pretend that every subject can be solved in a few paragraphs. Each guide will grow with deeper chapters, practical references and clearer examples.",
    section3Copy2:
      "The standard is simple: information should be useful before it is impressive. If a page cannot help someone make a calmer, better-informed decision, it does not belong in the Lighthouse yet.",
    noteTitle: "A note from the Harbor",
    note:
      "The Lighthouse is not here to tell collectors what they should own. It is here to make sure they can see the waters clearly enough to choose for themselves.",
    section4Eyebrow: "From here",
    section4Title: "The Harbor is still taking shape.",
    section4Copy:
      "The Lighthouse is only the first room to become active. The Logbook will record what follows: new guides, deeper chapters, collection milestones, lessons learned and the gradual opening of the Market Hall and Vault.",
    closing:
      "For now, the first light is on. There is more coastline ahead, but Dock Vault has a direction.",
    cta: "Enter the Lighthouse",
  },
  nl: {
    back: "← Terug naar het Logboek",
    eyebrow: "Het Logboek · Eerste bericht",
    title1: "De Vuurtoren",
    title2: "is ontstoken.",
    lead:
      "Dock Vault heeft de eerste echte stap voorbij het idee gezet. De Vuurtoren is nu open — een plek die verzamelaars helpt eerst te begrijpen en daarna pas te beslissen.",
    intro:
      "Een verzameling kan beginnen met enthousiasme, nostalgie, een favoriet personage of één bijzondere kaart. Maar wanneer de collectie groeit, groeien de vragen mee. Hoe bescherm je een kaart goed? Wanneer heeft grading zin? Wat maakt een verzameling bewust in plaats van eindeloos? En waar begint een nieuwe verzamelaar eigenlijk?",
    section1Eyebrow: "Waarom een Vuurtoren?",
    section1Title: "Begeleiding vóór handel.",
    section1Copy1:
      "Dock Vault was nooit bedoeld om te beginnen met een plank vol producten. Het begint met kennis. De Vuurtoren bestaat zodat een verzamelaar kan vertragen, de keuzes voor zich kan begrijpen en met meer vertrouwen verder kan.",
    section1Copy2:
      "Dat betekent niet dat er één juiste manier van verzamelen bestaat. Juist niet. Een goede gids maakt de mogelijkheden duidelijker zonder de reis voor jou te bepalen.",
    section2Eyebrow: "De eerste gidsen",
    section2Title: "Vier routes zijn nu open.",
    guides: [
      [
        "01",
        "Behoud",
        "De basis van zorgvuldig omgaan met kaarten, sleeven, opslaan en het langdurig beschermen van kaarten en sealed producten.",
        "/lighthouse/preservation",
      ],
      [
        "02",
        "Grading",
        "Een rustige introductie tot conditie, pre-grading en de vraag wanneer professioneel graden daadwerkelijk zinvol is.",
        "/lighthouse/grading",
      ],
      [
        "03",
        "Verzamelen",
        "Verschillende manieren om doelgericht een collectie op te bouwen — van personages en master sets tot playsets en sealed producten.",
        "/lighthouse/collecting",
      ],
      [
        "04",
        "Begin de Reis",
        "Een startpunt voor iedereen die de One Piece Card Game binnenkomt als verzamelaar, speler of een combinatie van beide.",
        "/lighthouse/begin-the-journey",
      ],
    ],
    section3Eyebrow: "Wat dit betekent",
    section3Title: "Het licht is een beginpunt, geen eindpunt.",
    section3Copy1:
      "Deze eerste pagina's zijn bewust fundamenten. Ze doen niet alsof ieder onderwerp in een paar alinea's volledig kan worden opgelost. Iedere gids groeit verder met diepere hoofdstukken, praktische referenties en duidelijkere voorbeelden.",
    section3Copy2:
      "De standaard is eenvoudig: informatie moet nuttig zijn voordat ze indrukwekkend probeert te zijn. Als een pagina iemand niet helpt om rustiger en beter geïnformeerd te beslissen, hoort die nog niet in de Vuurtoren thuis.",
    noteTitle: "Een bericht vanuit de Haven",
    note:
      "De Vuurtoren is er niet om verzamelaars te vertellen wat zij moeten bezitten. Hij is er om het water helder genoeg te maken zodat zij zelf hun koers kunnen kiezen.",
    section4Eyebrow: "Vanaf hier",
    section4Title: "De Haven krijgt nog steeds vorm.",
    section4Copy:
      "De Vuurtoren is pas de eerste ruimte die echt actief wordt. Het Logboek legt vast wat daarna volgt: nieuwe gidsen, diepere hoofdstukken, mijlpalen in collecties, geleerde lessen en het geleidelijk openen van de Markthal en de Kluis.",
    closing:
      "Voor nu brandt het eerste licht. Er ligt nog veel kustlijn voor ons, maar Dock Vault heeft een richting.",
    cta: "Ga naar de Vuurtoren",
  },
} as const;

export function LighthouseLitEntry() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="logbook-entry-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="logbook-entry-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-interior.png" alt="" />
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
            {copy.guides.map(([number, title, text, href]) => (
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
            <p>{copy.section4Copy}</p>
            <p className="logbook-entry-closing">{copy.closing}</p>
            <a className="primary-cta" href="/#lighthouse">
              <span>{copy.cta}</span>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
