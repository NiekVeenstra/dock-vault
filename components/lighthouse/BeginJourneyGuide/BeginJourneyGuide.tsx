"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Guide 04",
    title: "Begin the Journey",
    subtitle: "A clear first route into the world of One Piece TCG.",
    intro:
      "One Piece TCG can feel much larger than it really is when you first arrive. Leaders, colours, starter decks, booster sets, rarities, alternate arts and collector products all appear at once.",
    intro2:
      "You do not need to understand everything before you begin. Start by deciding what you want from the hobby, learn the few product types that matter to that goal and let the rest reveal itself over time.",
    startEyebrow: "Find your bearings",
    startTitle: "Four things to decide before you spend much.",
    startCopy:
      "The easiest first step is not buying more. It is creating a little direction. These four choices remove most of the noise around a new TCG.",
    principles: [
      {
        number: "01",
        title: "Decide whether you want to play, collect or do both",
        text: "A player needs a usable deck and rules knowledge. A collector may care more about characters, artwork, sets or condition. If you want both, keep the two goals separate enough that one does not accidentally consume the budget of the other.",
      },
      {
        number: "02",
        title: "Learn the basic product types",
        text: "Starter Decks are built as an accessible entry into playing. Booster products contain random cards from a set. Singles let you buy the exact card you want. Special products can sit somewhere between play, collecting and presentation.",
      },
      {
        number: "03",
        title: "Choose one small first focus",
        text: "Pick one leader, favourite character, crew, set or collecting theme. A small focus gives you something concrete to learn and prevents the entire card pool from feeling like one enormous shopping list.",
      },
      {
        number: "04",
        title: "Protect and track from the beginning",
        text: "Use sleeves for cards you handle, give valuable cards stronger protection and keep a simple record of what you own. Good habits are much easier to start with ten cards than with a thousand.",
      },
    ],
    routesEyebrow: "Choose your first route",
    routesTitle: "There is more than one good way to enter the hobby.",
    routesCopy:
      "Your first purchases should match what you actually want to experience. These routes can overlap later; they do not need to overlap on day one.",
    routes: [
      {
        label: "I want to play",
        title: "Start with a deck, not a pile of random cards",
        text: "Choose a Starter Deck or a simple beginner-friendly deck built around a leader you like. Learn the turn structure, DON!! system and what your leader is trying to do before worrying about upgrades or the current competitive meta.",
      },
      {
        label: "I want to collect",
        title: "Start with meaning instead of rarity",
        text: "Choose a character, crew or set that genuinely appeals to you. Buy a few singles you would be happy to own even if their market value never changed, then let the collection develop around them.",
      },
      {
        label: "I want both",
        title: "Give playing and collecting separate jobs",
        text: "Use a playable deck for learning the game and a separate collecting goal for display pieces or favourite cards. A card does not need to be expensive to play well, and a beautiful collection does not need to be your deck.",
      },
      {
        label: "I want to open packs",
        title: "Treat opening as the experience, not the guarantee",
        text: "Opening boosters can be enjoyable, but random product is rarely the most controlled route to one exact card. Open because you enjoy the discovery; use singles when you need certainty.",
      },
    ],
    noteTitle: "A Dock Vault principle",
    noteText:
      "You do not need the perfect first purchase. You need a first step that teaches you what you actually enjoy.",
    roadmapEyebrow: "The route continues",
    roadmapTitle: "What a new collector or player can learn next.",
    roadmapCopy:
      "This page is only the map at the harbour entrance. These chapters will gradually turn the first weeks of One Piece TCG into a practical, understandable route.",
    roadmap: [
      ["Understanding a card", "Leaders, Characters, Events, Stages, costs, power, counters, effects and the information printed on a card."],
      ["Colours & leaders", "What the colours broadly represent and why the leader you choose shapes the deck you can build."],
      ["Starter Decks & boosters", "What each product is designed for and when buying one makes sense for a beginner."],
      ["Rarities & alternate arts", "How standard rarities, special artwork and collector versions fit into a set without turning every rarity into a must-have."],
      ["Your first playable deck", "How to move from a Starter Deck toward a coherent deck without replacing everything at once."],
      ["Buying singles", "Comparing listings, checking condition and understanding why the exact card is often the simplest purchase."],
      ["Set codes, promos & reprints", "How card numbers and release codes help you recognise where a card came from and whether another version exists."],
      ["Your first storage setup", "A simple sleeve, binder and stronger-holder system that can grow with the collection."],
      ["Learning through play", "Using casual games, local events and deck testing to discover what you enjoy before making larger purchases."],
    ],
    coming: "Coming chapter",
    closing:
      "The hobby becomes easier the moment you stop trying to understand all of it at once. Choose one light, follow it, and let the map grow around you.",
    previousLabel: "Previous Lighthouse guide",
    previousTitle: "Collecting",
    previousStatus: "Open guide",
    nextLabel: "Continue in the Lighthouse",
    nextTitle: "Preservation",
    nextStatus: "Open guide",
  },
  nl: {
    back: "← Terug naar de Vuurtoren",
    eyebrow: "De Vuurtoren · Gids 04",
    title: "Begin de Reis",
    subtitle: "Een duidelijke eerste route door de wereld van One Piece TCG.",
    intro:
      "One Piece TCG kan in het begin veel groter lijken dan het werkelijk is. Leaders, kleuren, Starter Decks, booster sets, rarities, alternate arts en collectorproducten komen allemaal tegelijk op je af.",
    intro2:
      "Je hoeft niet alles te begrijpen voordat je begint. Bepaal eerst wat je uit de hobby wilt halen, leer alleen de producttypes die daarbij horen en laat de rest zich stap voor stap ontvouwen.",
    startEyebrow: "Vind je richting",
    startTitle: "Vier dingen om te bepalen voordat je veel uitgeeft.",
    startCopy:
      "De makkelijkste eerste stap is niet méér kopen, maar een beetje richting aanbrengen. Met deze vier keuzes verdwijnt het grootste deel van de ruis rond een nieuwe TCG.",
    principles: [
      {
        number: "01",
        title: "Bepaal of je wilt spelen, verzamelen of allebei",
        text: "Een speler heeft een bruikbaar deck en kennis van de regels nodig. Een verzamelaar let misschien meer op personages, artwork, sets of conditie. Wil je beide, houd de doelen dan voldoende apart zodat het ene doel niet ongemerkt het budget van het andere opslokt.",
      },
      {
        number: "02",
        title: "Leer de belangrijkste producttypes kennen",
        text: "Starter Decks zijn bedoeld als toegankelijke ingang tot het spel. Boosterproducten bevatten willekeurige kaarten uit een set. Met singles koop je precies de kaart die je zoekt. Speciale producten kunnen ergens tussen spelen, verzamelen en presentatie in zitten.",
      },
      {
        number: "03",
        title: "Kies één kleine eerste focus",
        text: "Kies één leader, favoriet personage, crew, set of verzamelthema. Een kleine focus geeft je iets concreets om te leren en voorkomt dat de volledige kaartpool aanvoelt als één enorme boodschappenlijst.",
      },
      {
        number: "04",
        title: "Bescherm en registreer vanaf het begin",
        text: "Gebruik sleeves voor kaarten die je hanteert, geef waardevolle kaarten stevigere bescherming en houd simpel bij wat je bezit. Goede gewoontes beginnen veel makkelijker bij tien kaarten dan bij duizend.",
      },
    ],
    routesEyebrow: "Kies je eerste route",
    routesTitle: "Er is meer dan één goede manier om de hobby binnen te stappen.",
    routesCopy:
      "Je eerste aankopen moeten passen bij wat je daadwerkelijk wilt beleven. Deze routes mogen later door elkaar lopen; dat hoeft op dag één nog niet.",
    routes: [
      {
        label: "Ik wil spelen",
        title: "Begin met een deck, niet met een stapel willekeurige kaarten",
        text: "Kies een Starter Deck of een eenvoudig beginnersdeck rond een leader die je leuk vindt. Leer eerst de beurtstructuur, het DON!!-systeem en wat je leader probeert te doen voordat je je druk maakt om upgrades of de actuele competitieve meta.",
      },
      {
        label: "Ik wil verzamelen",
        title: "Begin met betekenis in plaats van rarity",
        text: "Kies een personage, crew of set die je echt aanspreekt. Koop een paar singles die je ook graag zou bezitten als hun marktwaarde nooit veranderde en laat de collectie daar rustig omheen groeien.",
      },
      {
        label: "Ik wil allebei",
        title: "Geef spelen en verzamelen ieder een eigen functie",
        text: "Gebruik een speelbaar deck om het spel te leren en daarnaast een apart verzameldoel voor displaystukken of favoriete kaarten. Een kaart hoeft niet duur te zijn om goed te spelen en een mooie collectie hoeft niet je deck te zijn.",
      },
      {
        label: "Ik wil packs openen",
        title: "Zie openen als ervaring, niet als garantie",
        text: "Boosters openen kan erg leuk zijn, maar willekeurige producten zijn zelden de meest gecontroleerde route naar één specifieke kaart. Open omdat je de ontdekking leuk vindt; gebruik singles wanneer je zekerheid wilt.",
      },
    ],
    noteTitle: "Een Dock Vault-principe",
    noteText:
      "Je hebt geen perfecte eerste aankoop nodig. Je hebt een eerste stap nodig die je leert wat je werkelijk leuk vindt.",
    roadmapEyebrow: "De route gaat verder",
    roadmapTitle: "Wat een nieuwe verzamelaar of speler hierna kan leren.",
    roadmapCopy:
      "Deze pagina is alleen de kaart bij de ingang van de haven. Deze hoofdstukken maken de eerste weken van One Piece TCG stap voor stap praktisch en begrijpelijk.",
    roadmap: [
      ["Een kaart begrijpen", "Leaders, Characters, Events, Stages, costs, power, counters, effecten en de informatie die op een kaart staat."],
      ["Kleuren & leaders", "Wat de kleuren in grote lijnen betekenen en waarom jouw leader bepaalt welk deck je kunt bouwen."],
      ["Starter Decks & boosters", "Waar ieder product voor bedoeld is en wanneer het voor een beginner logisch is om het te kopen."],
      ["Rarities & alternate arts", "Hoe standaard rarities, speciaal artwork en collectorversies binnen een set passen zonder dat iedere rarity een must-have wordt."],
      ["Je eerste speelbare deck", "Hoe je vanuit een Starter Deck naar een samenhangend deck groeit zonder meteen alles te vervangen."],
      ["Singles kopen", "Listings vergelijken, conditie controleren en begrijpen waarom precies de juiste kaart vaak de eenvoudigste aankoop is."],
      ["Setcodes, promo's & reprints", "Hoe kaartnummers en releasecodes je helpen herkennen waar een kaart vandaan komt en of er andere versies bestaan."],
      ["Je eerste opslagopstelling", "Een eenvoudig systeem met sleeves, binder en stevigere houders dat met je verzameling kan meegroeien."],
      ["Leren door te spelen", "Casual games, lokale events en decktesting gebruiken om te ontdekken wat je leuk vindt vóór grotere aankopen."],
    ],
    coming: "Volgt later",
    closing:
      "De hobby wordt makkelijker zodra je stopt alles tegelijk te willen begrijpen. Kies één licht, volg het en laat de kaart onderweg groter worden.",
    previousLabel: "Vorige Lighthouse-gids",
    previousTitle: "Verzamelen",
    previousStatus: "Bekijk gids",
    nextLabel: "Ga verder in de Vuurtoren",
    nextTitle: "Behoud",
    nextStatus: "Bekijk gids",
  },
} as const;

export function BeginJourneyGuide() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="journey-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="journey-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-interior.png" alt="" />
        </div>
        <div className="journey-hero__veil" aria-hidden="true" />

        <div className="journey-hero__content">
          <a className="journey-back-link" href="/#lighthouse">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>{copy.title}</h1>
          <p className="journey-hero__subtitle">{copy.subtitle}</p>
          <div className="journey-hero__intro">
            <p>{copy.intro}</p>
            <p>{copy.intro2}</p>
          </div>
        </div>
      </section>

      <article className="journey-guide">
        <section className="journey-guide__section">
          <div className="journey-guide__lead">
            <p className="eyebrow">{copy.startEyebrow}</p>
            <h2>{copy.startTitle}</h2>
            <p>{copy.startCopy}</p>
          </div>

          <div className="journey-principles">
            {copy.principles.map((principle) => (
              <div className="journey-principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="journey-guide__section">
          <div className="journey-guide__lead">
            <p className="eyebrow">{copy.routesEyebrow}</p>
            <h2>{copy.routesTitle}</h2>
            <p>{copy.routesCopy}</p>
          </div>

          <div className="journey-route-grid">
            {copy.routes.map((item) => (
              <div className="journey-route-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <aside className="journey-note">
            <p>{copy.noteTitle}</p>
            <blockquote>{copy.noteText}</blockquote>
          </aside>
        </section>

        <section className="journey-guide__section">
          <div className="journey-guide__lead">
            <p className="eyebrow">{copy.roadmapEyebrow}</p>
            <h2>{copy.roadmapTitle}</h2>
            <p>{copy.roadmapCopy}</p>
          </div>

          <div className="journey-roadmap">
            {copy.roadmap.map(([title, text], index) => (
              <div className="journey-roadmap__item" key={title}>
                <span className="journey-roadmap__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="journey-roadmap__status">{copy.coming}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="journey-guide__closing">
          <blockquote>{copy.closing}</blockquote>
          <div className="journey-guide__navigation">
            <a className="journey-guide__nav-card" href="/lighthouse/collecting">
              <span>{copy.previousLabel}</span>
              <strong>{copy.previousTitle}</strong>
              <small>{copy.previousStatus} →</small>
            </a>
            <a className="journey-guide__nav-card" href="/lighthouse/preservation">
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
