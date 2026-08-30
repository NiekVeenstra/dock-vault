"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "What is preserved here",
    heading1: "Four rooms.",
    heading2: "One archive.",
    intro:
      "The Vault is not a catalogue of everything owned. It is a curated record of the collections, projects and pieces that deserve a longer memory.",
    rooms: [
      {
        number: "01",
        title: "Founder's Collection",
        description:
          "The personal core of Dock Vault — milestones and pieces kept because of the story attached to them, not simply their market value.",
        status: "Growing with time",
      },
      {
        number: "02",
        title: "Master Set Journeys",
        description:
          "Long-form collecting projects documented from the first card to the final gap, including progress, discoveries and the patience in between.",
        status: "Current journey · OP12",
      },
      {
        number: "03",
        title: "Playset Archive",
        description:
          "A practical archive built around four copies of playable cards — part collecting project, part record of the game itself.",
        status: "18% underway",
      },
      {
        number: "04",
        title: "The Archive",
        description:
          "Selected records, objects and moments that help explain how Dock Vault developed and what was worth preserving along the way.",
        status: "Opening chapter",
      },
    ],
  },
  nl: {
    eyebrow: "Wat hier wordt bewaard",
    heading1: "Vier ruimtes.",
    heading2: "Eén archief.",
    intro:
      "The Vault is geen catalogus van alles wat in bezit is. Het is een zorgvuldig samengesteld archief van collecties, projecten en stukken die een langer geheugen verdienen.",
    rooms: [
      {
        number: "01",
        title: "Founder's Collection",
        description:
          "De persoonlijke kern van Dock Vault — mijlpalen en stukken die worden bewaard vanwege het verhaal erachter, niet alleen vanwege hun marktwaarde.",
        status: "Groeit met de tijd",
      },
      {
        number: "02",
        title: "Master Set Journeys",
        description:
          "Langlopende verzamelprojecten die worden vastgelegd van de eerste kaart tot het laatste ontbrekende stuk, inclusief voortgang, ontdekkingen en het geduld ertussenin.",
        status: "Huidige reis · OP12",
      },
      {
        number: "03",
        title: "Playset Archive",
        description:
          "Een praktisch archief rond vier exemplaren van speelbare kaarten — deels verzamelproject, deels verslag van het spel zelf.",
        status: "18% onderweg",
      },
      {
        number: "04",
        title: "The Archive",
        description:
          "Geselecteerde verslagen, objecten en momenten die laten zien hoe Dock Vault zich ontwikkelt en wat onderweg het bewaren waard bleek.",
        status: "Eerste hoofdstuk",
      },
    ],
  },
} as const;

export function VaultCollectionRoomsSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="vault-rooms" id="vault-archive">
      <div className="vault-rooms__image" aria-hidden="true">
        <Image
          src="/images/vault-gate.png"
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
        />
      </div>

      <div className="vault-rooms__inner">
        <div className="vault-rooms__intro">
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true"><span /></div>
          <h2>
            {copy.heading1}
            <span>{copy.heading2}</span>
          </h2>
          <p>{copy.intro}</p>
        </div>

        <div className="vault-rooms__grid">
          {copy.rooms.map((room) => (
            <article className="vault-room" key={room.number}>
              <div className="vault-room__topline">
                <span>{room.number}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <small>{room.status}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
