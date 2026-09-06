"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Guide 03",
    title: "Collecting",
    subtitle: "Build a collection that can grow with you.",
    intro:
      "Collecting can have a clear direction, or it can grow from cards that simply mean something to you. A favourite character, a complete set, an artwork, a memory or an unexpected find can all be equally valid starting points.",
    intro2:
      "There is no single correct way to collect One Piece TCG. The goal of this guide is to help you choose your own route, spend with intention and enjoy the process without letting noise or urgency decide for you.",
    startEyebrow: "Collect with care",
    startTitle: "Four habits that can make collecting easier.",
    startCopy:
      "Structure can help, but it is not a requirement. A budget, simple notes or a small goal are tools you can use when they add calm. You can also collect by intuition, memory and changing interests.",
    principles: [
      {
        number: "01",
        title: "Notice what draws you in",
        text: "A theme can help, but a card may also matter because of its artwork, a pull, a gift, a person or a moment. Not every part of your collection has to fit one system.",
      },
      {
        number: "02",
        title: "Set a budget before the chase begins",
        text: "Decide what you are comfortable spending over a month or release cycle. A budget turns collecting into a deliberate hobby instead of a reaction to hype, scarcity or fear of missing out.",
      },
      {
        number: "03",
        title: "Know when to open and when to buy singles",
        text: "Opening sealed product is part of the experience, but it is not always the most direct route to a specific card. If completion is the goal, singles can often make the path clearer and easier to control.",
      },
      {
        number: "04",
        title: "Track only what helps you",
        text: "A checklist, spreadsheet or collection app can help prevent duplicate purchases and keep an overview of condition or variants. Use as much structure as is useful to you; the hobby does not need a perfect database.",
      },
    ],
    firstGoalEyebrow: "A possible first collecting goal",
    firstGoalTitle: "A small goal can help you begin. You may change it along the way.",
    firstGoalCopy: "If structure gives you calm, try one sentence: 'For now, I collect ___.' Leave the end open unless a fixed finish line genuinely adds to the enjoyment.",
    firstGoalExamples: [
      ["Character", "For now, I follow cards of a favourite Straw Hat. Which versions matter to me may change."],
      ["Set", "I would like to work through the numbered main set. Alternate arts can stay optional."],
      ["Memory", "I keep cards that remind me of pulls, gifts, events or people I shared the hobby with."],
    ],
    pathsEyebrow: "Ways to collect",
    pathsTitle: "There are many ways to give a collection shape, and none are required.",
    pathsCopy:
      "These are tools you can use when structure feels helpful. Follow one route, mix several, change them later or ignore them entirely. The collection should remain yours, not somebody else's checklist.",
    paths: [
      {
        label: "Character & crew",
        title: "Collect around what you care about most",
        text: "Follow a favourite character, Straw Hat, crew or theme across sets, rarities and special releases. This keeps the collection personal even when the card pool keeps growing.",
      },
      {
        label: "Master set",
        title: "Complete a defined release",
        text: "If completing a set appeals to you, decide for now what you want to count: perhaps the numbered main set, or also alternate arts, parallels and promos. You can broaden or simplify that definition later.",
      },
      {
        label: "Playset archive",
        title: "Collect with the game in mind",
        text: "Keep enough copies of playable cards for deck building while separating those cards from display pieces. A playset-focused collection can be practical, organised and still visually satisfying.",
      },
      {
        label: "Sealed collection",
        title: "Preserve a release as an unopened object",
        text: "Boxes, decks and special products can represent a moment in the game's history. Keep them sealed when the unopened object itself matters to you, and when you have a safe place to store it.",
      },
    ],
    noteTitle: "A Dock Vault principle",
    noteText:
      "A collection can grow with your interests and memories. What the cards mean to you is what gives it character.",
    roadmapEyebrow: "The guide will grow",
    roadmapTitle: "The chapters ahead.",
    roadmapCopy:
      "This page is the foundation. The next chapters will turn each part of the collecting process into a practical route you can actually use.",
    roadmap: [
      ["Using a collecting goal when it helps", "How a small boundary can provide structure without locking your collection into a fixed finish line."],
      ["Master sets & variants", "Choosing what counts: base cards, alternate arts, parallels, promos, reprints and later versions."],
      ["Singles vs sealed product", "When opening is part of the experience and when buying the exact card may make more sense."],
      ["Budgeting without killing the fun", "Setting limits, planning larger purchases and leaving room for spontaneous finds."],
      ["Tracking your collection", "Simple systems for checklists, condition notes, duplicates, values and missing cards."],
      ["Buying with patience", "Comparing condition and price, avoiding urgency and recognising when waiting is the better choice."],
      ["Displaying & rotating a collection", "How to enjoy the cards you own without exposing everything to unnecessary handling or light."],
      ["Knowing when a collection feels enough", "Why enough can mean a finished checklist, a pause, or simply being content with what is already there."],
    ],
    coming: "Coming chapter",
    closing:
      "Collect slowly enough to notice why a card matters to you. A collection does not have to be perfect or easy to explain. It only has to remain yours.",
    previousLabel: "Previous Lighthouse guide",
    previousTitle: "Grading",
    previousStatus: "Open guide",
    nextLabel: "Next Lighthouse guide",
    nextTitle: "Begin the journey",
    nextStatus: "Open guide",
  },
  nl: {
    back: "← Terug naar de Vuurtoren",
    eyebrow: "De Vuurtoren · Gids 03",
    title: "Verzamelen",
    subtitle: "Bouw een verzameling die met je mee mag groeien.",
    intro:
      "Verzamelen kan een duidelijke richting hebben, maar mag ook groeien vanuit kaarten die gewoon iets voor jou betekenen. Een favoriet personage, complete set, artwork, herinnering of onverwachte vondst kan allemaal een goed beginpunt zijn.",
    intro2:
      "Er bestaat niet één juiste manier om One Piece TCG te verzamelen. Deze gids helpt je jouw eigen route te kiezen, bewust geld uit te geven en van het proces te genieten zonder dat hype of haast voor jou beslist.",
    startEyebrow: "Verzamel met aandacht",
    startTitle: "Vier gewoontes die verzamelen makkelijker kunnen maken.",
    startCopy:
      "Structuur kan helpen, maar is geen vereiste. Een budget, simpele notities of een klein doel zijn hulpmiddelen als ze rust geven. Je mag ook verzamelen op gevoel, herinnering en veranderende interesses.",
    principles: [
      {
        number: "01",
        title: "Merk op waar je naar wordt getrokken",
        text: "Een thema kan helpen, maar een kaart kan ook belangrijk zijn door het artwork, een pull, een cadeau, een persoon of een herinnering. Niet ieder onderdeel van je collectie hoeft in één systeem te passen.",
      },
      {
        number: "02",
        title: "Bepaal je budget vóór de jacht begint",
        text: "Bedenk vooraf wat je per maand of release comfortabel kunt uitgeven. Een budget maakt verzamelen bewust in plaats van een reactie op hype, schaarste of fear of missing out.",
      },
      {
        number: "03",
        title: "Weet wanneer je opent en wanneer je singles koopt",
        text: "Sealed producten openen hoort bij de ervaring, maar is niet altijd de meest directe route naar één specifieke kaart. Als compleet maken het doel is, geven singles vaak meer controle over de weg ernaartoe.",
      },
      {
        number: "04",
        title: "Houd alleen bij wat jou helpt",
        text: "Een checklist, spreadsheet of collectie-app kan dubbele aankopen helpen voorkomen en overzicht geven over conditie of varianten. Gebruik alleen zoveel structuur als nuttig voelt; de hobby heeft geen perfecte database nodig.",
      },
    ],
    firstGoalEyebrow: "Een mogelijk eerste verzameldoel",
    firstGoalTitle: "Een klein verzameldoel kan je helpen beginnen. Je mag het onderweg aanpassen.",
    firstGoalCopy: "Geeft structuur je rust, probeer dan één zin: 'Voor nu verzamel ik ___.' Laat het eindpunt open als een vaste grens niets aan het plezier toevoegt.",
    firstGoalExamples: [
      ["Personage", "Voor nu volg ik kaarten van een favoriete Straw Hat. Welke versies belangrijk zijn mag onderweg veranderen."],
      ["Set", "Ik wil rustig door de genummerde hoofdset werken. Alternate arts mogen optioneel blijven."],
      ["Herinnering", "Ik bewaar kaarten die me herinneren aan pulls, cadeaus, events of mensen met wie ik de hobby deel."],
    ],
    pathsEyebrow: "Manieren om te verzamelen",
    pathsTitle: "Er zijn veel manieren om een collectie vorm te geven, en geen daarvan is verplicht.",
    pathsCopy:
      "Dit zijn hulpmiddelen voor momenten waarop structuur prettig voelt. Volg één route, combineer er meerdere, verander ze later of gebruik ze helemaal niet. De collectie moet van jou blijven, niet van de checklist van iemand anders.",
    paths: [
      {
        label: "Personage & crew",
        title: "Verzamel rond wat jij het belangrijkst vindt",
        text: "Volg een favoriet personage, Straw Hat, crew of thema door verschillende sets, rarities en speciale releases. Zo blijft de collectie persoonlijk terwijl het aantal kaarten blijft groeien.",
      },
      {
        label: "Master set",
        title: "Maak één duidelijke release compleet",
        text: "Spreekt het compleet maken van een set je aan, bepaal dan voorlopig wat je wilt meetellen: bijvoorbeeld alleen de genummerde hoofdset, of ook alternate arts, parallels en promo's. Je mag die definitie later verbreden of eenvoudiger maken.",
      },
      {
        label: "Playset-archief",
        title: "Verzamel met het spel in gedachten",
        text: "Bewaar genoeg exemplaren van speelbare kaarten voor deckbuilding en houd die los van je displaystukken. Een playsetcollectie kan praktisch, overzichtelijk en toch mooi opgebouwd zijn.",
      },
      {
        label: "Sealed collectie",
        title: "Bewaar een release als ongeopend object",
        text: "Boxen, decks en speciale producten kunnen een moment uit de geschiedenis van het spel vertegenwoordigen. Bewaar ze sealed wanneer het ongeopende product zelf iets voor je betekent en je er een veilige plek voor hebt.",
      },
    ],
    noteTitle: "Een Dock Vault-principe",
    noteText:
      "Een verzameling mag meegroeien met jouw interesses en herinneringen. Wat de kaarten voor jou betekenen, geeft haar karakter.",
    roadmapEyebrow: "De gids groeit verder",
    roadmapTitle: "De hoofdstukken die volgen.",
    roadmapCopy:
      "Deze pagina is de basis. De volgende hoofdstukken maken van ieder onderdeel van het verzamelproces een praktische route die je echt kunt gebruiken.",
    roadmap: [
      ["Een verzameldoel gebruiken wanneer het helpt", "Hoe een kleine grens structuur kan geven zonder je collectie aan een vast eindpunt te binden."],
      ["Master sets & varianten", "Bepalen wat meetelt: base cards, alternate arts, parallels, promo's, reprints en latere versies."],
      ["Singles versus sealed", "Wanneer openen onderdeel is van de ervaring en wanneer de exacte kaart kopen logischer kan zijn."],
      ["Budgetteren zonder de lol weg te halen", "Grenzen stellen, grotere aankopen plannen en ruimte houden voor spontane vondsten."],
      ["Je collectie bijhouden", "Simpele systemen voor checklists, conditie, dubbelen, waardes en ontbrekende kaarten."],
      ["Geduldig kopen", "Conditie en prijs vergelijken, haast vermijden en herkennen wanneer wachten de betere keuze is."],
      ["Je collectie tonen en roteren", "Genieten van je kaarten zonder alles onnodig vaak vast te pakken of aan licht bloot te stellen."],
      ["Weten wanneer een collectie genoeg voelt", "Waarom genoeg een afgevinkte checklist, een pauze of simpelweg tevredenheid met wat er al is kan betekenen."],
    ],
    coming: "Volgt later",
    closing:
      "Verzamel langzaam genoeg om te merken waarom een kaart voor jou iets betekent. Een collectie hoeft niet perfect of makkelijk uit te leggen te zijn. Ze hoeft alleen van jou te blijven.",
    previousLabel: "Vorige Lighthouse-gids",
    previousTitle: "Grading",
    previousStatus: "Bekijk gids",
    nextLabel: "Volgende Lighthouse-gids",
    nextTitle: "Begin de reis",
    nextStatus: "Bekijk gids",
  },
} as const;

export function CollectingGuide() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="collecting-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="collecting-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-interior.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="collecting-hero__veil" aria-hidden="true" />

        <div className="collecting-hero__content">
          <a className="collecting-back-link" href="/#lighthouse">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>{copy.title}</h1>
          <p className="collecting-hero__subtitle">{copy.subtitle}</p>
          <div className="collecting-hero__intro">
            <p>{copy.intro}</p>
            <p>{copy.intro2}</p>
          </div>
        </div>
      </section>

      <article className="collecting-guide">
        <section className="collecting-guide__section">
          <div className="collecting-guide__lead">
            <p className="eyebrow">{copy.startEyebrow}</p>
            <h2>{copy.startTitle}</h2>
            <p>{copy.startCopy}</p>
          </div>

          <div className="collecting-principles">
            {copy.principles.map((principle) => (
              <div className="collecting-principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="collecting-guide__section" id="first-goal">
          <div className="collecting-guide__lead">
            <p className="eyebrow">{copy.firstGoalEyebrow}</p>
            <h2>{copy.firstGoalTitle}</h2>
            <p>{copy.firstGoalCopy}</p>
          </div>

          <div className="collecting-first-goal">
            {copy.firstGoalExamples.map(([label, text]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="collecting-guide__lead collecting-guide__lead--paths">
            <p className="eyebrow">{copy.pathsEyebrow}</p>
            <h2>{copy.pathsTitle}</h2>
            <p>{copy.pathsCopy}</p>
          </div>

          <div className="collecting-path-grid">
            {copy.paths.map((item) => (
              <div className="collecting-path-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <aside className="collecting-note">
            <p>{copy.noteTitle}</p>
            <blockquote>{copy.noteText}</blockquote>
          </aside>
        </section>

        <section className="collecting-guide__section">
          <div className="collecting-guide__lead">
            <p className="eyebrow">{copy.roadmapEyebrow}</p>
            <h2>{copy.roadmapTitle}</h2>
            <p>{copy.roadmapCopy}</p>
          </div>

          <div className="collecting-roadmap">
            {copy.roadmap.map(([title, text], index) => (
              <div className="collecting-roadmap__item" key={title}>
                <span className="collecting-roadmap__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="collecting-roadmap__status">{copy.coming}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="collecting-guide__closing">
          <blockquote>{copy.closing}</blockquote>
          <div className="collecting-guide__navigation">
            <a className="collecting-guide__nav-card" href="/lighthouse/grading">
              <span>{copy.previousLabel}</span>
              <strong>{copy.previousTitle}</strong>
              <small>{copy.previousStatus} →</small>
            </a>
            <a className="collecting-guide__nav-card" href="/lighthouse/begin-the-journey">
              <span>{copy.nextLabel}</span>
              <strong>{copy.nextTitle}</strong>
              <small>{copy.nextStatus} →</small>
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
