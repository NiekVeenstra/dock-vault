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
        text: "Start with a playable deck around a Leader you like. Learn how it feels to play before you spend time chasing upgrades.",
        action: "Help me start playing",
      },
      {
        label: "I want to collect",
        title: "Start with something that matters to you.",
        text: "A small goal can help you begin, but it does not have to define the collection. Follow a character, artwork, memory or whatever keeps your interest.",
        action: "Help me find a starting point",
      },
      {
        label: "I want both",
        title: "Let playing and collecting support each other.",
        text: "Keep one playable deck and let your collection follow what interests you. The two can overlap, stay separate and change over time.",
        action: "Help me combine both",
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
        title: "Your first deck can teach you the game.",
        intro:
          "For a new player, a complete deck is more useful than a stack of random booster pulls. Official deck products are designed as ready-to-play starting points, so you can learn how cards work together before deciding what to change.",
        steps: [
          {
            title: "Choose a Leader you actually like",
            text: "Pick a Leader, colour or play style that makes you want to sit down and play. A beginner does not need the strongest tournament deck to learn well.",
          },
          {
            title: "Start from a complete, playable deck",
            text: "Standard play uses exactly 1 Leader, a 50-card deck and 10 DON!! cards. Your main deck normally follows the colours on your Leader and can contain up to 4 cards with the same card number unless a card changes deck construction rules.",
          },
          {
            title: "Play a few games before upgrading",
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
        title: "A small collecting goal can help you begin.",
        intro:
          "Structure can make some choices quieter, but it is only a tool. You can collect by theme, intuition or memory, change direction when your interests change, or leave the collection open without a fixed finish line.",
        steps: [
          {
            title: "Start with what means something to you",
            text: "That might be a favourite character, artwork, set, a card you pulled with someone, a gift or a moment you want to remember. Personal meaning is already enough reason for a card to belong.",
          },
          {
            title: "Use a boundary only if it helps",
            text: "If a checklist or small goal gives you calm, write it down for now. You can widen it, simplify it or let it go later. A collecting rule should support the hobby, not trap it.",
          },
          {
            title: "Let the collection change with you",
            text: "Interests change, new memories are added and one unexpected card can become important. Changing direction is not failing a collection. It is part of letting it become yours.",
          },
        ],
        nextTitle: "Your useful next step",
        nextText:
          "Choose one starting point that feels useful today: a card, character, memory, theme or small goal. Set a comfortable budget and give the cards a safe place. You can change the rest later.",
        primaryLabel: "Explore ways to collect",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Set up basic protection",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
      {
        id: "both",
        number: "03",
        eyebrow: "Route 03 · Both",
        title: "One hobby can hold two different ways to enjoy it.",
        intro:
          "Playing gives cards a job at the table. Collecting can hold what interests you, what you find beautiful or what carries a memory. The two can overlap without needing to follow the same rules.",
        steps: [
          {
            title: "Start with one playable deck and one collecting starting point",
            text: "If structure helps, keep the start small: one deck for learning the game and one collecting idea that interests you today. The collecting side can stay open and change as you discover more.",
          },
          {
            title: "Give both sides room in the budget",
            text: "A simple split between play upgrades and collection pieces can help you spend with care. It is a guide, not a rule, and you can adjust it when one side matters more for a while.",
          },
          {
            title: "Let cards change roles",
            text: "Keep cards you use for play easy to access and protect display or memory pieces in a way that suits them. A card can move between those roles whenever your use or attachment changes.",
          },
        ],
        nextTitle: "Your useful next step",
        nextText:
          "Get a playable deck ready, choose a collecting starting point if that helps, and give both a safe place. Then let experience decide what you want to grow next.",
        primaryLabel: "Explore collecting your way",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Protect cards and deck",
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
        text: "Explore structure, intuition and personal meaning without turning the hobby into a checklist.",
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
        text: "Begin met een speelbaar deck rond een Leader die je leuk vindt. Ontdek eerst hoe het speelt voordat je upgrades gaat najagen.",
        action: "Help mij beginnen met spelen",
      },
      {
        label: "Ik wil verzamelen",
        title: "Begin met iets dat voor jou betekenis heeft.",
        text: "Een klein verzameldoel kan helpen om te beginnen, maar hoeft je collectie niet te bepalen. Volg een personage, artwork, herinnering of gewoon wat je interesse vasthoudt.",
        action: "Help mij een beginpunt kiezen",
      },
      {
        label: "Ik wil allebei",
        title: "Laat spelen en verzamelen elkaar aanvullen.",
        text: "Houd één speelbaar deck en laat je collectie volgen wat je interesseert. De twee mogen overlappen, los van elkaar bestaan en onderweg veranderen.",
        action: "Help mij beide combineren",
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
        title: "Je eerste deck kan je het spel leren.",
        intro:
          "Voor een nieuwe speler is een compleet deck nuttiger dan een stapel willekeurige kaarten uit boosters. Officiële deckproducten zijn bedoeld als direct speelbare start, zodat je eerst leert hoe kaarten samenwerken voordat je bepaalt wat je wilt veranderen.",
        steps: [
          {
            title: "Kies een Leader die je echt leuk vindt",
            text: "Kies een Leader, kleur of speelstijl waardoor je zin krijgt om te spelen. Als beginner heb je niet het sterkste toernooideck nodig om het spel goed te leren.",
          },
          {
            title: "Begin met een compleet speelbaar deck",
            text: "Standaard speel je met precies 1 Leader, een deck van 50 kaarten en 10 DON!!-kaarten. Je hoofddeck volgt normaal de kleuren van je Leader en bevat maximaal 4 kaarten met hetzelfde kaartnummer, tenzij een kaart de deckbouwregels verandert.",
          },
          {
            title: "Speel eerst een paar potjes voordat je gaat upgraden",
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
        title: "Een klein verzameldoel kan je helpen beginnen.",
        intro:
          "Structuur kan sommige keuzes rustiger maken, maar het blijft een hulpmiddel. Je mag op thema, gevoel of herinnering verzamelen, van richting veranderen wanneer je interesses verschuiven, of je collectie open laten zonder vast eindpunt.",
        steps: [
          {
            title: "Begin met wat voor jou iets betekent",
            text: "Dat kan een favoriet personage, artwork, set, een kaart uit een mooie pull, een cadeau of een herinnering aan iemand zijn. Persoonlijke betekenis is al genoeg reden om een kaart te bewaren.",
          },
          {
            title: "Gebruik alleen een grens als die helpt",
            text: "Geeft een checklist of klein doel je rust, schrijf het dan voorlopig op. Je mag het later verbreden, eenvoudiger maken of loslaten. Een verzamelregel moet de hobby ondersteunen, niet vastzetten.",
          },
          {
            title: "Laat de collectie met je meegroeien",
            text: "Interesses veranderen, nieuwe herinneringen komen erbij en één onverwachte kaart kan opeens belangrijk worden. Van richting veranderen is geen mislukking van je collectie. Het hoort bij het persoonlijk maken ervan.",
          },
        ],
        nextTitle: "Je bruikbare vervolgstap",
        nextText:
          "Kies één beginpunt dat vandaag nuttig voelt: een kaart, personage, herinnering, thema of klein doel. Kies een prettig budget en geef je kaarten een veilige plek. De rest mag later veranderen.",
        primaryLabel: "Ontdek manieren om te verzamelen",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Regel basisbescherming",
        secondaryHref: "/lighthouse/preservation#first-protection",
      },
      {
        id: "both",
        number: "03",
        eyebrow: "Route 03 · Allebei",
        title: "Eén hobby kan twee verschillende manieren van genieten bevatten.",
        intro:
          "Spelen geeft kaarten een functie aan tafel. Verzamelen kan ruimte geven aan wat je interesseert, mooi vindt of aan een herinnering koppelt. De twee mogen overlappen zonder dezelfde regels te hoeven volgen.",
        steps: [
          {
            title: "Begin met één speelbaar deck en één verzamelbeginpunt",
            text: "Als structuur helpt, houd de start klein: één deck om het spel te leren en één verzamelidee dat je nu aanspreekt. De verzamelkant mag open blijven en veranderen terwijl je meer ontdekt.",
          },
          {
            title: "Geef beide kanten ruimte in je budget",
            text: "Een eenvoudige verdeling tussen speelupgrades en verzamelstukken kan helpen om bewust uit te geven. Het is een hulpmiddel, geen regel, en je mag het aanpassen wanneer één kant tijdelijk belangrijker voelt.",
          },
          {
            title: "Laat kaarten van functie veranderen",
            text: "Houd kaarten waarmee je speelt makkelijk bereikbaar en bescherm display- of herinneringsstukken op een manier die bij ze past. Een kaart mag van functie veranderen wanneer je gebruik of gevoel erbij verandert.",
          },
        ],
        nextTitle: "Je bruikbare vervolgstap",
        nextText:
          "Maak een speelbaar deck klaar, kies een verzamelbeginpunt als dat helpt en geef beide een veilige plek. Laat daarna je ervaring bepalen wat je verder wilt laten groeien.",
        primaryLabel: "Ontdek jouw manier van verzamelen",
        primaryHref: "/lighthouse/collecting#first-goal",
        secondaryLabel: "Bescherm kaarten en deck",
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
        text: "Ontdek structuur, intuïtie en persoonlijke betekenis zonder van de hobby een checklist te maken.",
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
