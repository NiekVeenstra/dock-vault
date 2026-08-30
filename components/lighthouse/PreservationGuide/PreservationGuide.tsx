"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Guide 01",
    title: "Preservation",
    subtitle: "Protect the card. Preserve the story.",
    intro:
      "A card does not need to be rare to deserve care. Good preservation starts with simple habits that reduce unnecessary wear and keep a collection stable over time.",
    intro2:
      "This guide will grow into a complete Dock Vault reference. For now, these are the foundations worth getting right from the beginning.",
    startEyebrow: "Start here",
    startTitle: "Four foundations of card care.",
    startCopy:
      "Most damage does not happen in one dramatic moment. It comes from repeated handling, unsuitable storage or an unstable environment. A few consistent choices prevent a great deal of it.",
    principles: [
      {
        number: "01",
        title: "Handle with care",
        text: "Use clean, dry hands and hold cards by the edges whenever possible. Work on a clean surface and avoid unnecessary handling once a card is stored.",
      },
      {
        number: "02",
        title: "Sleeve first",
        text: "A quality sleeve is the first physical barrier against fingerprints, surface wear and small scratches. Never force a card into a sleeve that feels too tight.",
      },
      {
        number: "03",
        title: "Keep the environment stable",
        text: "Store cards away from direct sunlight, strong heat and damp spaces. A stable indoor environment is more important than constantly moving a collection around.",
      },
      {
        number: "04",
        title: "Store without pressure",
        text: "Use binders, card boxes or rigid holders that are designed for trading cards. Avoid overfilling pages, crushing stacks or placing heavy objects on top of a collection.",
      },
    ],
    setupEyebrow: "A simple starting setup",
    setupTitle: "You do not need an archive room to begin well.",
    setupCopy:
      "The right level of protection depends on the card and on how you use your collection. A practical beginner setup can stay simple.",
    setup: [
      {
        label: "Collection cards",
        title: "Sleeve + quality binder or card box",
        text: "A good everyday solution for cards you want to keep protected while still being able to browse your collection.",
      },
      {
        label: "Higher-value raw cards",
        title: "Sleeve + rigid or semi-rigid holder",
        text: "Adds support and helps protect edges and surfaces from bending or accidental pressure during storage and handling.",
      },
      {
        label: "Sealed products",
        title: "Stable shelf + protection where useful",
        text: "Keep sealed items away from sunlight, heat, moisture and heavy pressure. Protective cases can be added when the product or display justifies them.",
      },
    ],
    noteTitle: "A Dock Vault principle",
    noteText:
      "Protection should fit the object. More plastic is not automatically better; thoughtful storage, careful handling and a stable environment matter just as much.",
    roadmapEyebrow: "The guide will grow",
    roadmapTitle: "The chapters ahead.",
    roadmapCopy:
      "Preservation is broader than sleeves and binders. These are the subjects that will be expanded into the full Lighthouse guide.",
    roadmap: [
      ["Sleeves & inner sleeves", "Materials, fit and when double-sleeving makes sense."],
      ["Binders & card boxes", "How to choose storage that supports cards without unnecessary pressure."],
      ["Toploaders & semi-rigid holders", "When extra rigidity is useful and how to use it correctly."],
      ["Light, heat & humidity", "How the storage environment can affect cards over the long term."],
      ["Sealed product storage", "Boxes, booster displays and long-term presentation."],
      ["Long-term archiving", "A more deliberate setup for collections meant to remain for years."],
      ["Moving & shipping", "Keeping cards protected when they leave the shelf."],
    ],
    coming: "Coming guide",
    closing:
      "A collection is built one decision at a time. Preservation simply makes sure those decisions can still be seen years later.",
    nextLabel: "Next Lighthouse guide",
    nextTitle: "Grading",
    nextStatus: "Open guide",
  },
  nl: {
    back: "← Terug naar de Vuurtoren",
    eyebrow: "De Vuurtoren · Gids 01",
    title: "Behoud",
    subtitle: "Bescherm de kaart. Bewaar het verhaal.",
    intro:
      "Een kaart hoeft niet zeldzaam te zijn om goede bescherming te verdienen. Goed behoud begint met eenvoudige gewoontes die onnodige slijtage beperken en een verzameling op lange termijn stabiel houden.",
    intro2:
      "Deze gids groeit uit tot een complete Dock Vault-referentie. Voor nu beginnen we met de basis die je vanaf het eerste moment goed wilt doen.",
    startEyebrow: "Begin hier",
    startTitle: "Vier fundamenten van kaartbescherming.",
    startCopy:
      "De meeste schade ontstaat niet door één groot ongeluk. Het komt vaker door herhaald aanraken, ongeschikte opslag of een instabiele omgeving. Een paar vaste keuzes voorkomen al veel problemen.",
    principles: [
      {
        number: "01",
        title: "Ga zorgvuldig om met kaarten",
        text: "Gebruik schone, droge handen en pak kaarten waar mogelijk bij de randen vast. Werk op een schoon oppervlak en raak een kaart niet onnodig aan zodra deze veilig is opgeborgen.",
      },
      {
        number: "02",
        title: "Eerst een sleeve",
        text: "Een kwalitatieve sleeve vormt de eerste fysieke barrière tegen vingerafdrukken, oppervlakkige slijtage en kleine krasjes. Forceer een kaart nooit in een sleeve die te strak aanvoelt.",
      },
      {
        number: "03",
        title: "Houd de omgeving stabiel",
        text: "Bewaar kaarten uit direct zonlicht en uit de buurt van sterke warmte en vochtige ruimtes. Een stabiele binnenomgeving is belangrijker dan een verzameling voortdurend verplaatsen.",
      },
      {
        number: "04",
        title: "Bewaar zonder druk",
        text: "Gebruik binders, kaartdozen of stevige houders die voor trading cards zijn gemaakt. Vul pagina's niet te vol, druk stapels niet samen en leg geen zware voorwerpen bovenop je verzameling.",
      },
    ],
    setupEyebrow: "Een eenvoudige startopstelling",
    setupTitle: "Je hebt geen archiefruimte nodig om goed te beginnen.",
    setupCopy:
      "De juiste bescherming hangt af van de kaart en van hoe je je verzameling gebruikt. Een praktische beginnersopstelling kan eenvoudig blijven.",
    setup: [
      {
        label: "Verzamelkaarten",
        title: "Sleeve + kwalitatieve binder of kaartdoos",
        text: "Een goede dagelijkse oplossing voor kaarten die je beschermd wilt bewaren, maar die je verzameling wel makkelijk zichtbaar houdt.",
      },
      {
        label: "Waardevolle losse kaarten",
        title: "Sleeve + harde of semi-rigide houder",
        text: "Geeft extra steun en helpt randen en oppervlakken te beschermen tegen buigen of onbedoelde druk tijdens opslag en gebruik.",
      },
      {
        label: "Sealed producten",
        title: "Stabiele plank + bescherming waar nuttig",
        text: "Houd sealed producten uit zonlicht, warmte, vocht en zware druk. Beschermhoezen of cases kun je toevoegen wanneer het product of de presentatie dat waard is.",
      },
    ],
    noteTitle: "Een Dock Vault-principe",
    noteText:
      "Bescherming moet passen bij het object. Meer plastic is niet automatisch beter; doordachte opslag, zorgvuldig gebruik en een stabiele omgeving zijn minstens zo belangrijk.",
    roadmapEyebrow: "De gids groeit verder",
    roadmapTitle: "De hoofdstukken die volgen.",
    roadmapCopy:
      "Behoud gaat verder dan sleeves en binders. Deze onderwerpen worden later uitgebreid tot de volledige Lighthouse-gids.",
    roadmap: [
      ["Sleeves & inner sleeves", "Materialen, pasvorm en wanneer double-sleeving zinvol is."],
      ["Binders & kaartdozen", "Hoe je opslag kiest die kaarten ondersteunt zonder onnodige druk."],
      ["Toploaders & semi-rigide houders", "Wanneer extra stevigheid nuttig is en hoe je deze goed gebruikt."],
      ["Licht, warmte & vocht", "Hoe de opslagomgeving kaarten op lange termijn kan beïnvloeden."],
      ["Opslag van sealed producten", "Boxes, booster displays en presentatie voor langere tijd."],
      ["Langdurig archiveren", "Een bewustere opstelling voor collecties die jarenlang moeten blijven."],
      ["Verplaatsen & verzenden", "Hoe je kaarten beschermt zodra ze de plank verlaten."],
    ],
    coming: "Volgt later",
    closing:
      "Een verzameling wordt keuze voor keuze opgebouwd. Goed behoud zorgt ervoor dat je die keuzes jaren later nog steeds kunt zien.",
    nextLabel: "Volgende Lighthouse-gids",
    nextTitle: "Grading",
    nextStatus: "Bekijk gids",
  },
} as const;

export function PreservationGuide() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="preservation-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="preservation-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-interior.png" alt="" />
        </div>
        <div className="preservation-hero__veil" aria-hidden="true" />

        <div className="preservation-hero__content">
          <a className="preservation-back-link" href="/#lighthouse">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>{copy.title}</h1>
          <p className="preservation-hero__subtitle">{copy.subtitle}</p>
          <div className="preservation-hero__intro">
            <p>{copy.intro}</p>
            <p>{copy.intro2}</p>
          </div>
        </div>
      </section>

      <article className="preservation-guide">
        <section className="preservation-guide__section preservation-guide__section--intro">
          <div className="preservation-guide__lead">
            <p className="eyebrow">{copy.startEyebrow}</p>
            <h2>{copy.startTitle}</h2>
            <p>{copy.startCopy}</p>
          </div>

          <div className="preservation-principles">
            {copy.principles.map((principle) => (
              <div className="preservation-principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="preservation-guide__section preservation-guide__section--setup">
          <div className="preservation-guide__lead">
            <p className="eyebrow">{copy.setupEyebrow}</p>
            <h2>{copy.setupTitle}</h2>
            <p>{copy.setupCopy}</p>
          </div>

          <div className="preservation-setup-grid">
            {copy.setup.map((item) => (
              <div className="preservation-setup-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <aside className="preservation-note">
            <p>{copy.noteTitle}</p>
            <blockquote>{copy.noteText}</blockquote>
          </aside>
        </section>

        <section className="preservation-guide__section preservation-guide__section--roadmap">
          <div className="preservation-guide__lead">
            <p className="eyebrow">{copy.roadmapEyebrow}</p>
            <h2>{copy.roadmapTitle}</h2>
            <p>{copy.roadmapCopy}</p>
          </div>

          <div className="preservation-roadmap">
            {copy.roadmap.map(([title, text], index) => (
              <div className="preservation-roadmap__item" key={title}>
                <span className="preservation-roadmap__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="preservation-roadmap__status">{copy.coming}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="preservation-guide__closing">
          <blockquote>{copy.closing}</blockquote>
          <a className="preservation-guide__next" href="/lighthouse/grading">
            <span>{copy.nextLabel}</span>
            <strong>{copy.nextTitle}</strong>
            <small>{copy.nextStatus} →</small>
          </a>
        </section>
      </article>
    </>
  );
}
