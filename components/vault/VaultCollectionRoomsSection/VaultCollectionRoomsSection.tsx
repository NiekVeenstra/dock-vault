"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "Archive rooms",
    heading1: "One room is open.",
    heading2: "Others will follow.",
    intro:
      "The Vault grows slowly. The Founder’s Collection is the first room ready to enter. The remaining directions stay visible as a quiet look ahead.",
    enter: "Enter the room",
    rooms: [
      {
        number: "01",
        title: "Founder’s Collection",
        description:
          "The personal archive of Dock Vault’s founder, built around the pieces, memories and care that genuinely belong to his collecting story.",
        status: "Open",
        href: "/vault/founders-collection",
      },
      {
        number: "02",
        title: "Master Set Journeys",
        description:
          "A future home for documented master-set journeys once their source data and stories are ready to be maintained properly.",
        status: "In preparation",
        href: null,
      },
      {
        number: "03",
        title: "Playset Archive",
        description:
          "A future record for playset collecting, with progress shown only when it can be supported by maintained collection data.",
        status: "In preparation",
        href: null,
      },
      {
        number: "04",
        title: "The Archive",
        description:
          "A later room for selected objects and records that help preserve the wider story of Dock Vault over time.",
        status: "In preparation",
        href: null,
      },
    ],
  },
  nl: {
    eyebrow: "Archiefruimtes",
    heading1: "Eén ruimte is open.",
    heading2: "De rest volgt later.",
    intro:
      "De Kluis groeit langzaam. De Oprichterscollectie is de eerste ruimte die klaar is om te betreden. De andere richtingen blijven zichtbaar als rustige vooruitblik.",
    enter: "Betreed de ruimte",
    rooms: [
      {
        number: "01",
        title: "Oprichterscollectie",
        description:
          "Het persoonlijke archief van de oprichter van Dock Vault, opgebouwd rond de stukken, herinneringen en zorg die werkelijk bij zijn verzamelverhaal horen.",
        status: "Geopend",
        href: "/vault/founders-collection",
      },
      {
        number: "02",
        title: "Master Set Journeys",
        description:
          "Een toekomstige plek voor gedocumenteerde master-setreizen zodra de brongegevens en verhalen goed onderhoudbaar zijn vastgelegd.",
        status: "In voorbereiding",
        href: null,
      },
      {
        number: "03",
        title: "Playset Archive",
        description:
          "Een toekomstig archief voor playset-verzamelen, met voortgang pas zichtbaar wanneer die door bijgehouden collectiegegevens kan worden onderbouwd.",
        status: "In voorbereiding",
        href: null,
      },
      {
        number: "04",
        title: "The Archive",
        description:
          "Een latere ruimte voor geselecteerde objecten en records die het bredere verhaal van Dock Vault door de tijd heen helpen bewaren.",
        status: "In voorbereiding",
        href: null,
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
          src="/images/vault-gate.webp"
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
          {copy.rooms.map((room) => {
            const content = (
              <>
                <div className="vault-room__topline">
                  <span>{room.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="vault-room__footer">
                  <small>{room.status}</small>
                  {room.href ? (
                    <span className="vault-room__action">
                      {copy.enter}<b aria-hidden="true">→</b>
                    </span>
                  ) : null}
                </div>
              </>
            );

            return room.href ? (
              <a className="vault-room vault-room--available" href={room.href} key={room.number}>
                {content}
              </a>
            ) : (
              <article className="vault-room vault-room--pending" key={room.number}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
