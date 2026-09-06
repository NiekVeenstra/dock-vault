"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const routeHrefs = ["#play", "#collect", "#both"] as const;

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Start here",
    title: "Begin the Journey",
    subtitle: "Choose one direction. The rest can wait.",
    intro:
      "One Piece TCG can feel crowded when everything arrives at once: leaders, decks, boosters, rarities, alternate arts and sealed products.",
    intro2:
      "You do not need to understand all of it. Start with the part of the hobby you actually want to experience and take one useful step from there.",
    routesEyebrow: "Choose your direction",
    routesTitle: "Play, collect, or do both.",
    routesCopy:
      "There is no test and no wrong answer. Choose the route that feels closest to what brought you here today. You can change direction later.",
    routes: [
      {
        label: "I want to play",
        title: "Learn the game with one complete deck.",
        text: "Start with a coherent deck around a Leader you like. Learn how it feels to play before you spend time chasing upgrades.",
        action: "Show me my first deck",
      },
      {
        label: "I want to collect",
        title: "Give the collection one small purpose.",
        text: "Choose a character, crew, set or other clear theme. A simple goal makes every next card easier to judge.",
        action: "Help me choose a goal",
      },
      {
        label: "I want both",
        title: "Let playing and collecting support each other.",
        text: "Keep one playable deck and one collecting goal. They may overlap, but neither needs to control the other.",
        action: "Build a balanced start",
      },
    ],
    principleTitle: "A Dock Vault principle",
    principleText:
      "Your first step does not need to be perfect. It only needs to teach you enough to make the next decision with more confidence.",
    details: [
      {
        id: "play",
        number: "01",
        eyebrow: "Route 01 · Play",
        title: "Your first deck should teach you the game.",
        intro:
          "For a new player, a complete deck is more useful than a stack of random booster pulls. Official deck products are designed as ready-to-play starting points, so you can learn how cards work together before deciding what to change.",
        steps: [
          {
            title: "Choose a Leader you actually like",
            text: "Pick a Leader, colour or play style that makes you want to sit down and play. A beginner does not need the strongest tournament deck to learn well.",
          },
          {
            title: "Start from a legal, complete deck",
            text: "Standard play uses exactly 1 Leader, a 50-card deck and 10 DON!! cards. Your main deck normally follows the colours on your Leader and can contain up to 4 cards with the same card number unless a card changes deck construction rules.",
          },
          {
            title: "Play three games before upgrading",
            text: "After a few casual games, note which cards you were happy to draw, which cards stayed in your hand and what your deck struggled to do. That gives your first upgrades a reason.",
          },
        ],
        nextTitle: "Your useful next step",
        nextText:
          "Sleeve the complete deck, keep it together in a deck box and learn the turn structure before buying upgrades. If you later play official events, check the current event and banned or restricted card rules first.",
        primaryLabel: "Protect your first deck",
        primaryHref: "/lighthouse/preservation#first-protection",
        secondaryLabel: "View official game rules",
        secondaryHref: "https://en.onepiece-cardgame.com/rules/",
      },
      {
        id: "collect",
        number: "02",
        eyebrow: "Route 02 · Collect",
        title: "A first collection needs a finish line, even a small one.",
        intro:
          "Collecting becomes calmer when you know why a card belongs. Your first goal can be tiny. It only needs to be clear enough to help you say yes to some cards and no to others.",
        steps: [
          {
            title: "Choose one subject",
            text: "Start with a favourite character, crew, set, artist, rarity or another theme that means something to you. Avoid starting with several large goals at once.",
          },
          {
            title: "Define what complete means",
            text: "Write the boundary down. For example: one favourite version of each Straw Hat, the numbered main set without alternate arts, or one binder page built around a single character.",
          },
          {
            title: "Make the first purchase deliberate",
            text: "Begin with a few singles or one product that clearly belongs to the goal. You do not need to open sealed product just because it exists. Opening is an experience; singles give certainty.",
          },
        ],
        nextTitle: "Your useful next step",
        nextText:
          "Write your collecting goal in one sentence, choose a simple budget and decide where those cards will live before the collection grows.",
        primaryLabel: "Build your first collecting goal",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Set up basic protection",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
      {
        id: "both",
        number: "03",
        eyebrow: "Route 03 · Both",
        title: "One hobby can hold two different purposes.",
        intro:
          "Playing and collecting work well together when each has its own job. Your deck is there to be used. Your collection is there to preserve what you have chosen to keep.",
        steps: [
          {
            title: "Choose one deck and one collecting goal",
            text: "Keep the start small: one deck for learning the game and one clear theme for collecting. You can expand either route after you know what you enjoy most.",
          },
          {
            title: "Give each route its own budget",
            text: "Set aside an amount for play upgrades and a separate amount for collection pieces. This keeps one exciting purchase from quietly consuming the other goal.",
          },
          {
            title: "Separate cards by purpose",
            text: "Cards used for play should be easy to access and replace when needed. Display or archive pieces can receive stronger protection and less handling. A card can move between those roles later.",
          },
        ],
        nextTitle: "Your useful next step",
        nextText:
          "Build the playable part first, write down one collecting goal and give both a simple storage place. Then let experience decide which side deserves more attention.",
        primaryLabel: "Choose a collecting goal",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Protect both routes",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
    ],
    continueEyebrow: "Continue in the Lighthouse",
    continueTitle: "Only read what helps your next decision.",
    continueCopy:
      "You do not need to move through every guide in order. Use the Lighthouse as a reference and return when a new question appears.",
    guideLinks: [
      {
        label: "Preservation",
        text: "Sleeves, storage and a practical first protection setup.",
        href: "/lighthouse/preservation#first-protection",
      },
      {
        label: "Collecting",
        text: "Turn a broad interest into a collection with a clear purpose.",
        href: "/lighthouse/collecting#first-goal",
      },
      {
        label: "Grading",
        text: "Understand condition and decide when grading is actually useful.",
        href: "/lighthouse/grading",
      },
    ],
    closing:
      "Choose one light. Follow it until the next decision becomes easier.",
    homeLabel: "Return to Dock Vault",
    homeStatus: "Back to the Lighthouse",
  },
  nl: {
    back: "← Terug naar de Vuurtoren",
    eyebrow: "De Vuurtoren · Begin hier",
    title: "Begin de Reis",
    subtitle: "Kies één richting. De rest mag wachten.",
    intro:
      "One Piece TCG kan druk aanvoelen wanneer alles tegelijk op je afkomt: leaders, decks, boosters, rarities, alternate arts en sealed producten.",
    intro2:
      "Je hoeft niet alles te begrijpen. Begin bij het deel van de hobby dat je echt wilt beleven en zet van daaruit één bruikbare stap.",
    routesEyebrow: "Kies je richting",
    routesTitle: "Spelen, verzamelen of allebei.",
    routesCopy:
      "Er is geen test en geen fout antwoord. Kies de route die het beste past bij waarom je vandaag hier bent. Later mag je altijd van richting veranderen.",
    routes: [
      {
        label: "Ik wil spelen",
        title: "Leer het spel met één compleet deck.",
        text: "Begin met een samenhangend deck rond een Leader die je leuk vindt. Ontdek eerst hoe het speelt voordat je upgrades gaat najagen.",
        action: "Laat mijn eerste deck zien",
      },
      {
        label: "Ik wil verzamelen",
        title: "Geef je collectie één klein doel.",
        text: "Kies een personage, crew, set of ander helder thema. Met een eenvoudig doel wordt iedere volgende kaart makkelijker te beoordelen.",
        action: "Help mij een doel kiezen",
      },
      {
        label: "Ik wil allebei",
        title: "Laat spelen en verzamelen elkaar aanvullen.",
        text: "Houd één speelbaar deck en één verzameldoel aan. Ze mogen overlappen, maar het ene hoeft het andere niet te bepalen.",
        action: "Bouw een gebalanceerde start",
      },
    ],
    principleTitle: "Een Dock Vault-principe",
    principleText:
      "Je eerste stap hoeft niet perfect te zijn. Hij hoeft je alleen genoeg te leren om de volgende keuze met meer vertrouwen te maken.",
    details: [
      {
        id: "play",
        number: "01",
        eyebrow: "Route 01 · Spelen",
        title: "Je eerste deck moet je het spel leren.",
        intro:
          "Voor een nieuwe speler is een compleet deck nuttiger dan een stapel willekeurige kaarten uit boosters. Officiële deckproducten zijn bedoeld als direct speelbare start, zodat je eerst leert hoe kaarten samenwerken voordat je bepaalt wat je wilt veranderen.",
        steps: [
          {
            title: "Kies een Leader die je echt leuk vindt",
            text: "Kies een Leader, kleur of speelstijl waardoor je zin krijgt om te spelen. Als beginner heb je niet het sterkste toernooideck nodig om het spel goed te leren.",
          },
          {
            title: "Begin met een legaal, compleet deck",
            text: "Standaard speel je met precies 1 Leader, een deck van 50 kaarten en 10 DON!!-kaarten. Je hoofddeck volgt normaal de kleuren van je Leader en bevat maximaal 4 kaarten met hetzelfde kaartnummer, tenzij een kaart de deckbouwregels verandert.",
          },
          {
            title: "Speel drie potjes voordat je gaat upgraden",
            text: "Noteer na een paar casual potjes welke kaarten je graag trok, welke kaarten in je hand bleven en waar je deck moeite mee had. Dan heeft je eerste upgrade een duidelijke reden.",
          },
        ],
        nextTitle: "Je bruikbare vervolgstap",
        nextText:
          "Sleeve het volledige deck, bewaar het samen in een deckbox en leer de beurtstructuur voordat je upgrades koopt. Wil je later officiële events spelen, controleer dan eerst de actuele eventregels en de ban- en restrictielijst.",
        primaryLabel: "Bescherm je eerste deck",
        primaryHref: "/lighthouse/preservation#first-protection",
        secondaryLabel: "Bekijk de officiële spelregels",
        secondaryHref: "https://en.onepiece-cardgame.com/rules/",
      },
      {
        id: "collect",
        number: "02",
        eyebrow: "Route 02 · Verzamelen",
        title: "Een eerste collectie heeft een eindpunt nodig, al is het klein.",
        intro:
          "Verzamelen wordt rustiger wanneer je weet waarom een kaart erbij hoort. Je eerste doel mag klein zijn. Het hoeft alleen duidelijk genoeg te zijn om tegen sommige kaarten ja en tegen andere nee te zeggen.",
        steps: [
          {
            title: "Kies één onderwerp",
            text: "Begin met een favoriet personage, crew, set, artiest, rarity of ander thema dat voor jou iets betekent. Start liever niet tegelijk met meerdere grote doelen.",
          },
          {
            title: "Bepaal wat compleet betekent",
            text: "Schrijf de grens op. Bijvoorbeeld: één favoriete versie van iedere Straw Hat, de genummerde hoofdset zonder alternate arts, of één binderpagina rond één personage.",
          },
          {
            title: "Maak je eerste aankoop bewust",
            text: "Begin met een paar singles of één product dat duidelijk bij je doel hoort. Je hoeft sealed producten niet te openen alleen omdat ze bestaan. Openen is een ervaring; singles geven zekerheid.",
          },
        ],
        nextTitle: "Je bruikbare vervolgstap",
        nextText:
          "Schrijf je verzameldoel in één zin op, kies een eenvoudig budget en bepaal waar de kaarten worden bewaard voordat de collectie groeit.",
        primaryLabel: "Bouw je eerste verzameldoel",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Regel basisbescherming",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
      {
        id: "both",
        number: "03",
        eyebrow: "Route 03 · Allebei",
        title: "Eén hobby kan twee verschillende doelen hebben.",
        intro:
          "Spelen en verzamelen werken goed samen wanneer ze ieder een eigen functie hebben. Je deck is er om te gebruiken. Je collectie is er om te bewaren wat je bewust hebt gekozen.",
        steps: [
          {
            title: "Kies één deck en één verzameldoel",
            text: "Houd de start klein: één deck om het spel te leren en één helder thema om te verzamelen. Je kunt beide routes uitbreiden zodra je weet wat je het leukst vindt.",
          },
          {
            title: "Geef iedere route een eigen budget",
            text: "Reserveer een bedrag voor upgrades aan je speelgedeelte en een apart bedrag voor verzamelstukken. Zo slokt één aantrekkelijke aankoop niet ongemerkt het andere doel op.",
          },
          {
            title: "Scheid kaarten op functie",
            text: "Speelkaarten moeten makkelijk bereikbaar en vervangbaar zijn. Display- of archiefstukken kunnen steviger worden beschermd en minder vaak worden aangeraakt. Een kaart kan later van functie veranderen.",
          },
        ],
        nextTitle: "Je bruikbare vervolgstap",
        nextText:
          "Bouw eerst het speelbare deel, schrijf één verzameldoel op en geef beide een eenvoudige opslagplek. Laat daarna je ervaring bepalen welke kant meer aandacht verdient.",
        primaryLabel: "Kies een verzameldoel",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Bescherm beide routes",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
    ],
    continueEyebrow: "Ga verder in de Vuurtoren",
    continueTitle: "Lees alleen wat je volgende keuze helpt.",
    continueCopy:
      "Je hoeft de gidsen niet op volgorde te lezen. Gebruik de Vuurtoren als naslagwerk en kom terug wanneer er een nieuwe vraag ontstaat.",
    guideLinks: [
      {
        label: "Behoud",
        text: "Sleeves, opslag en een praktische eerste beschermingsopstelling.",
        href: "/lighthouse/preservation#first-protection",
      },
      {
        label: "Verzamelen",
        text: "Maak van een brede interesse een collectie met een helder doel.",
        href: "/lighthouse/collecting#first-goal",
      },
      {
        label: "Grading",
        text: "Begrijp conditie en bepaal wanneer grading werkelijk iets toevoegt.",
        href: "/lighthouse/grading",
      },
    ],
    closing:
      "Kies één licht. Volg het totdat de volgende beslissing makkelijker wordt.",
    homeLabel: "Terug naar Dock Vault",
    homeStatus: "Terug naar de Vuurtoren",
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
          <img src="/images/lighthouse-interior.webp" alt="" loading="eager" decoding="async" />
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
        <section className="journey-guide__section journey-guide__section--routes" id="choose-route">
          <div className="journey-guide__lead">
            <p className="eyebrow">{copy.routesEyebrow}</p>
            <h2>{copy.routesTitle}</h2>
            <p>{copy.routesCopy}</p>
          </div>

          <div className="journey-route-grid">
            {copy.routes.map((item, index) => (
              <a className="journey-route-card" href={routeHrefs[index]} key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.action} →</small>
              </a>
            ))}
          </div>

          <aside className="journey-note">
            <p>{copy.principleTitle}</p>
            <blockquote>{copy.principleText}</blockquote>
          </aside>
        </section>

        {copy.details.map((detail) => (
          <section className="journey-guide__section journey-detail" id={detail.id} key={detail.id}>
            <div className="journey-detail__heading">
              <span>{detail.number}</span>
              <div>
                <p className="eyebrow">{detail.eyebrow}</p>
                <h2>{detail.title}</h2>
                <p>{detail.intro}</p>
              </div>
            </div>

            <div className="journey-detail__steps">
              {detail.steps.map((step, index) => (
                <div className="journey-detail__step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="journey-detail__next">
              <div>
                <p>{detail.nextTitle}</p>
                <h3>{detail.nextText}</h3>
              </div>
              <div className="journey-detail__actions">
                <a className="primary-cta" href={detail.primaryHref}>
                  <span>{detail.primaryLabel}</span>
                </a>
                <a
                  className="text-link"
                  href={detail.secondaryHref}
                  {...(detail.secondaryHref.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {detail.secondaryLabel} <span>→</span>
                </a>
              </div>
            </div>
          </section>
        ))}

        <section className="journey-guide__section journey-guide__section--continue">
          <div className="journey-guide__lead">
            <p className="eyebrow">{copy.continueEyebrow}</p>
            <h2>{copy.continueTitle}</h2>
            <p>{copy.continueCopy}</p>
          </div>

          <div className="journey-guide-links">
            {copy.guideLinks.map((guide) => (
              <a href={guide.href} key={guide.href}>
                <strong>{guide.label}</strong>
                <p>{guide.text}</p>
                <span>→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="journey-guide__closing">
          <blockquote>{copy.closing}</blockquote>
          <div className="journey-guide__navigation">
            <a className="journey-guide__nav-card" href="/#lighthouse">
              <span>{copy.homeLabel}</span>
              <strong>{language === "nl" ? "De Vuurtoren" : "The Lighthouse"}</strong>
              <small>{copy.homeStatus} →</small>
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
