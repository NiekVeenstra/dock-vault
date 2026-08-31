"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Lighthouse",
    eyebrow: "The Lighthouse · Guide 02",
    title: "Grading",
    subtitle: "Understand the card before you chase the number.",
    intro:
      "Grading can protect a card, document an independent opinion of its condition and make certain cards easier to compare or trade. But a slab and a number do not automatically make every card better.",
    intro2:
      "The first step is learning what graders look for, what a grade can — and cannot — tell you, and when submitting a card actually fits your collection.",
    startEyebrow: "Start here",
    startTitle: "Four ideas to understand before submitting.",
    startCopy:
      "A good grading decision begins long before a card is packed for submission. Purpose, condition and realistic expectations matter more than hoping for a perfect score.",
    principles: [
      {
        number: "01",
        title: "Know why you are grading",
        text: "Grade with a reason: long-term protection, authentication, presentation, resale or simply because the card matters to you. The right answer can be different for every collection.",
      },
      {
        number: "02",
        title: "Inspect the card honestly",
        text: "Look carefully at centering, corners, edges and surface under good light. Small flaws can matter, and factory-fresh does not automatically mean gem mint.",
      },
      {
        number: "03",
        title: "Prepare without creating damage",
        text: "Handle the card as little as possible, use a clean sleeve and the holder recommended by the grading company. Avoid aggressive cleaning, polishing or attempts to alter the card.",
      },
      {
        number: "04",
        title: "Treat the grade as an opinion",
        text: "Professional grading follows standards, but condition assessment still involves judgement. A specific grade is never guaranteed, even when a card looks excellent to the owner.",
      },
    ],
    conditionEyebrow: "What graders examine",
    conditionTitle: "Condition is more than one perfect surface.",
    conditionCopy:
      "Different grading companies use their own standards and weighting, but these four areas are a useful starting point when evaluating a trading card yourself.",
    condition: [
      {
        label: "Centering",
        title: "How the print sits within the borders",
        text: "Compare the visible borders on the front and back. Noticeably uneven placement can affect the final assessment, especially at the highest grades.",
      },
      {
        label: "Corners",
        title: "Sharpness, wear and small impacts",
        text: "Check all corners from multiple angles. Whitening, softness, bends and tiny knocks are easier to see under direct, controlled light.",
      },
      {
        label: "Edges",
        title: "Chipping, whitening and cutting quality",
        text: "Inspect every edge on both sides. Dark card backs can make small white marks especially visible, while factory cutting can also leave imperfections.",
      },
      {
        label: "Surface",
        title: "Scratches, print defects and impressions",
        text: "Tilt the card under light to reveal scratches, dents, print lines, stains or other defects that can disappear when viewed straight on.",
      },
    ],
    noteTitle: "A Dock Vault principle",
    noteText:
      "Grade the card because the slab adds something to your collection — not because every valuable card is expected to live inside one.",
    roadmapEyebrow: "The guide will grow",
    roadmapTitle: "The chapters ahead.",
    roadmapCopy:
      "This is only the foundation. Grading becomes much easier to navigate once condition, companies, submission and value are considered separately.",
    roadmap: [
      ["Condition in detail", "A closer look at centering, corners, edges, surfaces and common manufacturing flaws."],
      ["PSA, BGS & CGC", "How the major grading approaches, labels and holder styles differ."],
      ["Pre-grading at home", "A repeatable inspection routine before deciding whether a card is worth submitting."],
      ["Submission preparation", "Sleeving, semi-rigid holders, packing and following the grader's current instructions."],
      ["Costs & turnaround", "How fees, shipping, insurance and waiting time affect the decision."],
      ["Value after grading", "Why a higher grade can change liquidity or value — and why it sometimes does not."],
      ["Buying graded cards", "Checking the certification, holder, price premium and the card itself before buying."],
    ],
    coming: "Coming chapter",
    closing:
      "The best grading decision is not the one that produces the highest number. It is the one that matches the card, the purpose and the collection behind it.",
    previousLabel: "Previous Lighthouse guide",
    previousTitle: "Preservation",
    previousStatus: "Open guide",
    nextLabel: "Next Lighthouse guide",
    nextTitle: "Collecting",
    nextStatus: "Open guide",
  },
  nl: {
    back: "← Terug naar de Vuurtoren",
    eyebrow: "De Vuurtoren · Gids 02",
    title: "Grading",
    subtitle: "Begrijp de kaart voordat je achter het cijfer aan gaat.",
    intro:
      "Grading kan een kaart beschermen, een onafhankelijke beoordeling van de conditie vastleggen en bepaalde kaarten makkelijker vergelijkbaar of verhandelbaar maken. Maar een slab en een cijfer maken niet automatisch iedere kaart beter.",
    intro2:
      "De eerste stap is begrijpen waar graders naar kijken, wat een grade je wel en niet vertelt en wanneer insturen daadwerkelijk bij jouw verzameling past.",
    startEyebrow: "Begin hier",
    startTitle: "Vier dingen om te begrijpen vóór je instuurt.",
    startCopy:
      "Een goede gradingkeuze begint lang voordat een kaart wordt ingepakt. Het doel, de conditie en realistische verwachtingen zijn belangrijker dan hopen op een perfecte score.",
    principles: [
      {
        number: "01",
        title: "Weet waarom je wilt graden",
        text: "Grade met een reden: langdurige bescherming, authenticatie, presentatie, verkoop of simpelweg omdat de kaart belangrijk voor je is. Het juiste antwoord verschilt per verzameling.",
      },
      {
        number: "02",
        title: "Beoordeel de kaart eerlijk",
        text: "Bekijk centering, hoeken, randen en oppervlak zorgvuldig onder goed licht. Kleine imperfecties kunnen tellen en pack fresh betekent niet automatisch gem mint.",
      },
      {
        number: "03",
        title: "Bereid voor zonder schade te veroorzaken",
        text: "Raak de kaart zo weinig mogelijk aan en gebruik een schone sleeve plus de houder die het gradingbedrijf adviseert. Vermijd agressief schoonmaken, polijsten of andere pogingen om de kaart te veranderen.",
      },
      {
        number: "04",
        title: "Zie de grade als een beoordeling",
        text: "Professionele graders werken met standaarden, maar conditiebeoordeling bevat nog steeds menselijke beoordeling. Een specifieke grade is daarom nooit gegarandeerd.",
      },
    ],
    conditionEyebrow: "Waar graders naar kijken",
    conditionTitle: "Conditie is meer dan één perfect oppervlak.",
    conditionCopy:
      "Gradingbedrijven gebruiken hun eigen standaarden en weging, maar deze vier onderdelen vormen een goede basis wanneer je zelf een trading card beoordeelt.",
    condition: [
      {
        label: "Centering",
        title: "Hoe de print binnen de randen staat",
        text: "Vergelijk de zichtbare randen aan de voor- en achterkant. Duidelijk ongelijke plaatsing kan de beoordeling beïnvloeden, vooral bij de hoogste grades.",
      },
      {
        label: "Hoeken",
        title: "Scherpte, slijtage en kleine beschadigingen",
        text: "Bekijk alle hoeken vanuit meerdere richtingen. Whitening, zachte hoekjes, buigingen en kleine tikjes worden onder gericht licht makkelijker zichtbaar.",
      },
      {
        label: "Randen",
        title: "Whitening, chipjes en snijkwaliteit",
        text: "Controleer iedere rand aan beide zijden. Op donkere kaartachterkanten vallen kleine witte plekjes extra op en ook het snijproces kan imperfecties achterlaten.",
      },
      {
        label: "Oppervlak",
        title: "Krasjes, printdefecten en indrukken",
        text: "Kantel de kaart onder licht om krasjes, deukjes, printlijnen, vlekken en andere afwijkingen zichtbaar te maken die recht van voren nauwelijks opvallen.",
      },
    ],
    noteTitle: "Een Dock Vault-principe",
    noteText:
      "Grade een kaart omdat de slab iets toevoegt aan jouw verzameling — niet omdat iedere waardevolle kaart automatisch in plastic zou moeten verdwijnen.",
    roadmapEyebrow: "De gids groeit verder",
    roadmapTitle: "De hoofdstukken die volgen.",
    roadmapCopy:
      "Dit is alleen de basis. Grading wordt veel overzichtelijker wanneer conditie, bedrijven, insturen en waarde afzonderlijk worden bekeken.",
    roadmap: [
      ["Conditie in detail", "Een diepere blik op centering, hoeken, randen, oppervlak en veelvoorkomende productiefoutjes."],
      ["PSA, BGS & CGC", "Hoe de grote gradingbedrijven verschillen in aanpak, labels en slabs."],
      ["Zelf pre-graden", "Een vaste inspectieroutine voordat je beslist of een kaart het insturen waard is."],
      ["Voorbereiden op verzending", "Sleeves, semi-rigide houders, verpakken en de actuele instructies van de grader volgen."],
      ["Kosten & doorlooptijd", "Hoe gradingkosten, verzending, verzekering en wachttijd de keuze beïnvloeden."],
      ["Waarde na grading", "Waarom een hogere grade waarde of verkoopbaarheid kan veranderen — en waarom dat soms niet gebeurt."],
      ["Graded kaarten kopen", "Certificering, slab, prijspremie en de kaart zelf controleren voordat je koopt."],
    ],
    coming: "Volgt later",
    closing:
      "De beste gradingkeuze is niet degene die het hoogste cijfer oplevert. Het is de keuze die past bij de kaart, het doel en de verzameling erachter.",
    previousLabel: "Vorige Lighthouse-gids",
    previousTitle: "Behoud",
    previousStatus: "Bekijk gids",
    nextLabel: "Volgende Lighthouse-gids",
    nextTitle: "Verzamelen",
    nextStatus: "Bekijk gids",
  },
} as const;

export function GradingGuide() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <>
      <section className="grading-hero" id="home">
        <HarborHeader />
        <HarborDivider />

        <div className="grading-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-interior.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="grading-hero__veil" aria-hidden="true" />

        <div className="grading-hero__content">
          <a className="grading-back-link" href="/#lighthouse">
            {copy.back}
          </a>
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true">
            <span />
          </div>
          <h1>{copy.title}</h1>
          <p className="grading-hero__subtitle">{copy.subtitle}</p>
          <div className="grading-hero__intro">
            <p>{copy.intro}</p>
            <p>{copy.intro2}</p>
          </div>
        </div>
      </section>

      <article className="grading-guide">
        <section className="grading-guide__section">
          <div className="grading-guide__lead">
            <p className="eyebrow">{copy.startEyebrow}</p>
            <h2>{copy.startTitle}</h2>
            <p>{copy.startCopy}</p>
          </div>

          <div className="grading-principles">
            {copy.principles.map((principle) => (
              <div className="grading-principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grading-guide__section">
          <div className="grading-guide__lead">
            <p className="eyebrow">{copy.conditionEyebrow}</p>
            <h2>{copy.conditionTitle}</h2>
            <p>{copy.conditionCopy}</p>
          </div>

          <div className="grading-condition-grid">
            {copy.condition.map((item) => (
              <div className="grading-condition-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <aside className="grading-note">
            <p>{copy.noteTitle}</p>
            <blockquote>{copy.noteText}</blockquote>
          </aside>
        </section>

        <section className="grading-guide__section">
          <div className="grading-guide__lead">
            <p className="eyebrow">{copy.roadmapEyebrow}</p>
            <h2>{copy.roadmapTitle}</h2>
            <p>{copy.roadmapCopy}</p>
          </div>

          <div className="grading-roadmap">
            {copy.roadmap.map(([title, text], index) => (
              <div className="grading-roadmap__item" key={title}>
                <span className="grading-roadmap__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="grading-roadmap__status">{copy.coming}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grading-guide__closing">
          <blockquote>{copy.closing}</blockquote>
          <div className="grading-guide__navigation">
            <a className="grading-guide__nav-card" href="/lighthouse/preservation">
              <span>{copy.previousLabel}</span>
              <strong>{copy.previousTitle}</strong>
              <small>{copy.previousStatus} →</small>
            </a>
            <a className="grading-guide__nav-card" href="/lighthouse/collecting">
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
