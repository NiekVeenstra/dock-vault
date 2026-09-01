"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Guide 03",
    title: "Collecting",
    subtitle: "Build a collection with a reason behind every addition.",
    intro:
      "Collecting becomes more rewarding when the collection has a direction. That direction can be a favourite character, a complete set, a playable archive, sealed history or simply cards that mean something to you.",
    intro2:
      "There is no single correct way to collect One Piece TCG. The goal of this guide is to help you choose your own route, spend with intention and enjoy the process without letting noise or urgency decide for you.",
    startEyebrow: "Start with intention",
    startTitle: "Four habits that make a collection easier to build.",
    startCopy:
      "A collection does not need to be large to feel complete. Clear goals, a sensible budget and a simple way to track progress are often more useful than chasing every new release.",
    principles: [
      {
        number: "01",
        title: "Choose what the collection is about",
        text: "Start with a theme you genuinely care about: a character, crew, set, rarity, artist, playset or era. A clear focus makes it easier to decide what belongs in the collection and what does not.",
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
        title: "Record what you already own",
        text: "A checklist, spreadsheet or collection app prevents duplicate purchases and makes progress visible. It also gives you a better overview of condition, variants and the gaps that still matter.",
      },
    ],
    pathsEyebrow: "Choose your route",
    pathsTitle: "Different collections can have completely different goals.",
    pathsCopy:
      "These are common ways to give a collection structure. You can follow one route or combine several, as long as the result still feels like your collection rather than somebody else's checklist.",
    paths: [
      {
        label: "Character & crew",
        title: "Collect around what you care about most",
        text: "Follow a favourite character, Straw Hat, crew or theme across sets, rarities and special releases. This keeps the collection personal even when the card pool keeps growing.",
      },
      {
        label: "Master set",
        title: "Complete a defined release",
        text: "Build toward a clear finish line by collecting the cards that belong to one set. Decide at the start whether your definition includes alternate arts, parallels, promos or only the numbered main set.",
      },
      {
        label: "Playset archive",
        title: "Collect with the game in mind",
        text: "Keep enough copies of playable cards for deck building while separating those cards from display pieces. A playset-focused collection can be practical, organised and still visually satisfying.",
      },
      {
        label: "Sealed collection",
        title: "Preserve a release as an unopened object",
        text: "Boxes, decks and special products can represent a moment in the game's history. Sealed collecting needs patience, storage discipline and a clear reason for what deserves shelf space.",
      },
    ],
    noteTitle: "A Dock Vault principle",
    noteText:
      "A good collection is not defined by how much it contains. It is defined by how clearly the pieces belong together.",
    roadmapEyebrow: "The guide will grow",
    roadmapTitle: "The chapters ahead.",
    roadmapCopy:
      "This page is the foundation. The next chapters will turn each part of the collecting process into a practical route you can actually use.",
    roadmap: [
      ["Defining a collecting goal", "How to turn a broad interest into a collection with clear boundaries and a finish line."],
      ["Master sets & variants", "Choosing what counts: base cards, alternate arts, parallels, promos, reprints and later versions."],
      ["Singles vs sealed product", "When opening is part of the experience and when buying the exact card may make more sense."],
      ["Budgeting without killing the fun", "Setting limits, planning larger purchases and leaving room for spontaneous finds."],
      ["Tracking your collection", "Simple systems for checklists, condition notes, duplicates, values and missing cards."],
      ["Buying with patience", "Comparing condition and price, avoiding urgency and recognising when waiting is the better choice."],
      ["Displaying & rotating a collection", "How to enjoy the cards you own without exposing everything to unnecessary handling or light."],
      ["Knowing when a collection is complete", "Why completion can mean a finished checklist or simply reaching the point where nothing needs to be added."],
    ],
    coming: "Coming chapter",
    closing:
      "Collect slowly enough that every addition still feels chosen. The strongest collection is the one you can explain without mentioning its price.",
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
    subtitle: "Bouw een verzameling met een reden achter iedere toevoeging.",
    intro:
      "Verzamelen wordt leuker wanneer je collectie een richting heeft. Dat kan een favoriet personage zijn, een complete set, een speelbaar archief, sealed geschiedenis of simpelweg kaarten die voor jou iets betekenen.",
    intro2:
      "Er bestaat niet één juiste manier om One Piece TCG te verzamelen. Deze gids helpt je jouw eigen route te kiezen, bewust geld uit te geven en van het proces te genieten zonder dat hype of haast voor jou beslist.",
    startEyebrow: "Begin doelbewust",
    startTitle: "Vier gewoontes die een collectie makkelijker maken om op te bouwen.",
    startCopy:
      "Een verzameling hoeft niet groot te zijn om compleet te voelen. Duidelijke doelen, een verstandig budget en een simpele manier om je voortgang bij te houden zijn vaak waardevoller dan iedere nieuwe release najagen.",
    principles: [
      {
        number: "01",
        title: "Bepaal waar je verzameling over gaat",
        text: "Begin met een thema waar je echt om geeft: een personage, crew, set, rarity, artiest, playset of periode. Met een duidelijke focus wordt het makkelijker om te bepalen wat wel en niet in jouw collectie hoort.",
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
        title: "Houd bij wat je al bezit",
        text: "Een checklist, spreadsheet of collectie-app voorkomt dubbele aankopen en maakt je voortgang zichtbaar. Je ziet bovendien beter welke condities, varianten en ontbrekende kaarten nog echt belangrijk zijn.",
      },
    ],
    pathsEyebrow: "Kies je route",
    pathsTitle: "Verschillende collecties kunnen totaal verschillende doelen hebben.",
    pathsCopy:
      "Dit zijn een paar logische manieren om structuur aan je verzameling te geven. Je kunt één route volgen of meerdere combineren, zolang het resultaat jouw collectie blijft en niet de checklist van iemand anders.",
    paths: [
      {
        label: "Personage & crew",
        title: "Verzamel rond wat jij het belangrijkst vindt",
        text: "Volg een favoriet personage, Straw Hat, crew of thema door verschillende sets, rarities en speciale releases. Zo blijft de collectie persoonlijk terwijl het aantal kaarten blijft groeien.",
      },
      {
        label: "Master set",
        title: "Maak één duidelijke release compleet",
        text: "Werk naar een heldere eindstreep door de kaarten van één set te verzamelen. Bepaal vooraf of jouw definitie alternate arts, parallels, promo's bevat of alleen de genummerde hoofdset.",
      },
      {
        label: "Playset-archief",
        title: "Verzamel met het spel in gedachten",
        text: "Bewaar genoeg exemplaren van speelbare kaarten voor deckbuilding en houd die los van je displaystukken. Een playsetcollectie kan praktisch, overzichtelijk en toch mooi opgebouwd zijn.",
      },
      {
        label: "Sealed collectie",
        title: "Bewaar een release als ongeopend object",
        text: "Boxen, decks en speciale producten kunnen een moment uit de geschiedenis van het spel vertegenwoordigen. Sealed verzamelen vraagt geduld, goede opslag en een duidelijke reden voor wat ruimte verdient.",
      },
    ],
    noteTitle: "Een Dock Vault-principe",
    noteText:
      "Een goede verzameling wordt niet bepaald door hoeveel erin zit. Ze wordt bepaald door hoe duidelijk de onderdelen bij elkaar horen.",
    roadmapEyebrow: "De gids groeit verder",
    roadmapTitle: "De hoofdstukken die volgen.",
    roadmapCopy:
      "Deze pagina is de basis. De volgende hoofdstukken maken van ieder onderdeel van het verzamelproces een praktische route die je echt kunt gebruiken.",
    roadmap: [
      ["Een verzameldoel bepalen", "Van een brede interesse naar een collectie met duidelijke grenzen en een eindpunt."],
      ["Master sets & varianten", "Bepalen wat meetelt: base cards, alternate arts, parallels, promo's, reprints en latere versies."],
      ["Singles versus sealed", "Wanneer openen onderdeel is van de ervaring en wanneer de exacte kaart kopen logischer kan zijn."],
      ["Budgetteren zonder de lol weg te halen", "Grenzen stellen, grotere aankopen plannen en ruimte houden voor spontane vondsten."],
      ["Je collectie bijhouden", "Simpele systemen voor checklists, conditie, dubbelen, waardes en ontbrekende kaarten."],
      ["Geduldig kopen", "Conditie en prijs vergelijken, haast vermijden en herkennen wanneer wachten de betere keuze is."],
      ["Je collectie tonen en roteren", "Genieten van je kaarten zonder alles onnodig vaak vast te pakken of aan licht bloot te stellen."],
      ["Weten wanneer een collectie compleet is", "Waarom compleet zowel een afgevinkte checklist kan zijn als het moment waarop niets meer toegevoegd hoeft te worden."],
    ],
    coming: "Volgt later",
    closing:
      "Verzamel langzaam genoeg om iedere toevoeging nog als een bewuste keuze te laten voelen. De sterkste collectie is degene die je kunt uitleggen zonder de prijs te noemen.",
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

        <section className="collecting-guide__section">
          <div className="collecting-guide__lead">
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
