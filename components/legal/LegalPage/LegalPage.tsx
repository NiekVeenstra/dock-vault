"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

type LegalPageKind = "privacy" | "terms";

const content = {
  privacy: {
    en: {
      eyebrow: "Dock Vault · Legal",
      title: "Privacy",
      intro:
        "Dock Vault is built to be calm and transparent. This page explains what information may be processed when you visit the website in its current Alpha form.",
      updated: "Last updated: 31 August 2026",
      sections: [
        {
          title: "Who is responsible?",
          paragraphs: [
            "Dock Vault is based in the Netherlands and is registered with the Dutch Chamber of Commerce under KVK number 42094293.",
            "For privacy questions, contact dockvaultnl@gmail.com.",
          ],
        },
        {
          title: "What does Dock Vault collect?",
          paragraphs: [
            "The current Alpha website does not offer user accounts, checkout or a contact form. Dock Vault therefore does not intentionally collect names, addresses or payment information through the website.",
            "Your selected language is stored locally in your browser so the website can remember whether you prefer Dutch or English. This preference stays on your device unless you clear it.",
          ],
        },
        {
          title: "Technical data and external services",
          paragraphs: [
            "Like most websites, the hosting provider may process technical information needed to deliver and secure the website, such as an IP address, browser information and request logs.",
            "The website currently loads Google Fonts. Your browser may therefore connect to Google when a page is displayed. External links, such as Instagram, are governed by the privacy practices of those services once you leave Dock Vault.",
          ],
        },
        {
          title: "Cookies and tracking",
          paragraphs: [
            "Dock Vault does not currently use advertising cookies or analytics tracking on the Alpha website. If analytics, a shop or other services are added later, this notice will be updated before those features are treated as part of the live service.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "Where personal data is processed, applicable privacy law may give you rights such as access, correction, deletion or objection. You can contact Dock Vault at dockvaultnl@gmail.com with a privacy request.",
          ],
        },
      ],
      closing:
        "This notice describes the current Alpha website. It will evolve as Dock Vault adds new features.",
      back: "← Return to Dock Vault",
    },
    nl: {
      eyebrow: "Dock Vault · Juridisch",
      title: "Privacy",
      intro:
        "Dock Vault is gebouwd rond rust en transparantie. Op deze pagina lees je welke informatie in de huidige Alpha-versie van de website kan worden verwerkt.",
      updated: "Laatst bijgewerkt: 31 augustus 2026",
      sections: [
        {
          title: "Wie is verantwoordelijk?",
          paragraphs: [
            "Dock Vault is gevestigd in Nederland en staat ingeschreven bij de Kamer van Koophandel onder KVK-nummer 42094293.",
            "Voor vragen over privacy kun je contact opnemen via dockvaultnl@gmail.com.",
          ],
        },
        {
          title: "Welke gegevens verzamelt Dock Vault?",
          paragraphs: [
            "De huidige Alpha-website heeft geen gebruikersaccounts, checkout of contactformulier. Dock Vault verzamelt via de website daarom niet bewust namen, adressen of betaalgegevens.",
            "Je gekozen taal wordt lokaal in je browser opgeslagen, zodat de website kan onthouden of je Nederlands of Engels gebruikt. Deze voorkeur blijft op je eigen apparaat staan totdat je die opslag wist.",
          ],
        },
        {
          title: "Technische gegevens en externe diensten",
          paragraphs: [
            "Zoals bij de meeste websites kan de hostingprovider technische informatie verwerken die nodig is om de website te leveren en te beveiligen, zoals een IP-adres, browserinformatie en serverlogs.",
            "De website laadt op dit moment Google Fonts. Je browser kan daardoor bij het tonen van een pagina verbinding maken met Google. Externe links, zoals Instagram, vallen onder het privacybeleid van die dienst zodra je Dock Vault verlaat.",
          ],
        },
        {
          title: "Cookies en tracking",
          paragraphs: [
            "Dock Vault gebruikt op dit moment geen advertentiecookies of analytics-tracking op de Alpha-website. Als later analytics, een webshop of andere diensten worden toegevoegd, wordt deze verklaring bijgewerkt voordat die functies onderdeel worden van de live dienstverlening.",
          ],
        },
        {
          title: "Jouw rechten",
          paragraphs: [
            "Wanneer persoonsgegevens worden verwerkt, kun je op grond van toepasselijke privacywetgeving onder andere recht hebben op inzage, correctie, verwijdering of bezwaar. Voor een privacyverzoek kun je mailen naar dockvaultnl@gmail.com.",
          ],
        },
      ],
      closing:
        "Deze verklaring beschrijft de huidige Alpha-website en groeit mee wanneer Dock Vault nieuwe functies toevoegt.",
      back: "← Terug naar Dock Vault",
    },
  },
  terms: {
    en: {
      eyebrow: "Dock Vault · Legal",
      title: "Terms",
      intro:
        "These terms apply to the current Dock Vault Alpha website. The Market Hall is not yet an active online shop, so these terms currently focus on website use and published information.",
      updated: "Last updated: 31 August 2026",
      sections: [
        {
          title: "About Dock Vault",
          paragraphs: [
            "Dock Vault is based in the Netherlands and registered with the Dutch Chamber of Commerce under KVK number 42094293. Contact: dockvaultnl@gmail.com.",
          ],
        },
        {
          title: "Using the website",
          paragraphs: [
            "You may use the website for personal, lawful purposes. Please do not attempt to disrupt the website, misuse its content or access systems that are not intended to be public.",
          ],
        },
        {
          title: "Information and guides",
          paragraphs: [
            "Lighthouse guides, Logbook entries, collection progress and other editorial content are provided as general information. Dock Vault aims to keep this material careful and useful, but information can become outdated and individual collecting decisions remain your own responsibility.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "Unless stated otherwise, the Dock Vault name, original written content, layout and original visual presentation on this website may not be copied or commercially reused without permission.",
            "Third-party names, games, trademarks and products remain the property of their respective owners. Dock Vault is an independent collector project and is not presented as an official Bandai or One Piece website.",
          ],
        },
        {
          title: "External links",
          paragraphs: [
            "Dock Vault may link to third-party websites or social platforms. Dock Vault is not responsible for the availability, content or policies of those external services.",
          ],
        },
        {
          title: "The Market Hall",
          paragraphs: [
            "The Market Hall is currently shown as a future part of Dock Vault and does not yet represent a live checkout or binding sales offer. Before online sales are activated, separate customer information and sales terms covering payment, delivery, returns and statutory consumer rights will be added where required.",
          ],
        },
        {
          title: "Changes",
          paragraphs: [
            "Dock Vault is in Alpha and will continue to evolve. These terms may therefore be updated when functionality changes. The most recent version will be published on this page.",
          ],
        },
      ],
      closing:
        "Questions about these terms can be sent to dockvaultnl@gmail.com.",
      back: "← Return to Dock Vault",
    },
    nl: {
      eyebrow: "Dock Vault · Juridisch",
      title: "Voorwaarden",
      intro:
        "Deze voorwaarden gelden voor de huidige Alpha-website van Dock Vault. De Market Hall is nog geen actieve webshop; daarom gaan deze voorwaarden nu vooral over het gebruik van de website en de gepubliceerde informatie.",
      updated: "Laatst bijgewerkt: 31 augustus 2026",
      sections: [
        {
          title: "Over Dock Vault",
          paragraphs: [
            "Dock Vault is gevestigd in Nederland en staat ingeschreven bij de Kamer van Koophandel onder KVK-nummer 42094293. Contact: dockvaultnl@gmail.com.",
          ],
        },
        {
          title: "Gebruik van de website",
          paragraphs: [
            "Je mag de website gebruiken voor persoonlijke en rechtmatige doeleinden. Probeer de website niet te verstoren, inhoud te misbruiken of toegang te krijgen tot systemen die niet openbaar bedoeld zijn.",
          ],
        },
        {
          title: "Informatie en gidsen",
          paragraphs: [
            "Lighthouse-gidsen, Logbook-berichten, collectievoortgang en andere redactionele inhoud zijn bedoeld als algemene informatie. Dock Vault probeert deze informatie zorgvuldig en bruikbaar te houden, maar informatie kan verouderen en keuzes over je eigen verzameling blijven je eigen verantwoordelijkheid.",
          ],
        },
        {
          title: "Intellectueel eigendom",
          paragraphs: [
            "Tenzij anders vermeld, mogen de naam Dock Vault, originele teksten, lay-out en originele visuele presentatie van deze website niet zonder toestemming worden gekopieerd of commercieel hergebruikt.",
            "Namen, spellen, handelsmerken en producten van derden blijven eigendom van hun respectieve rechthebbenden. Dock Vault is een onafhankelijk verzamelproject en presenteert zich niet als een officiële website van Bandai of One Piece.",
          ],
        },
        {
          title: "Externe links",
          paragraphs: [
            "Dock Vault kan verwijzen naar websites of sociale platforms van derden. Dock Vault is niet verantwoordelijk voor de beschikbaarheid, inhoud of het beleid van deze externe diensten.",
          ],
        },
        {
          title: "De Market Hall",
          paragraphs: [
            "De Market Hall wordt op dit moment getoond als een toekomstig onderdeel van Dock Vault en vormt nog geen live checkout of bindend verkoopaanbod. Voordat online verkoop wordt geactiveerd, worden waar nodig aparte klantinformatie en verkoopvoorwaarden toegevoegd over betaling, levering, retourneren en wettelijke consumentenrechten.",
          ],
        },
        {
          title: "Wijzigingen",
          paragraphs: [
            "Dock Vault bevindt zich in Alpha en blijft zich ontwikkelen. Deze voorwaarden kunnen daarom worden bijgewerkt wanneer de functionaliteit verandert. De meest recente versie wordt op deze pagina gepubliceerd.",
          ],
        },
      ],
      closing:
        "Vragen over deze voorwaarden kun je sturen naar dockvaultnl@gmail.com.",
      back: "← Terug naar Dock Vault",
    },
  },
} as const;

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const { language } = useLanguage();
  const t = content[kind][language];

  return (
    <>
      <HarborHeader />
      <section className="legal-page">
        <div className="legal-page__glow" aria-hidden="true" />
        <div className="legal-page__inner">
          <a className="legal-page__back" href="/">
            {t.back}
          </a>

          <p className="eyebrow">{t.eyebrow}</p>
          <div className="small-rule"><span /></div>
          <h1>{t.title}</h1>
          <p className="legal-page__intro">{t.intro}</p>
          <p className="legal-page__updated">{t.updated}</p>

          <HarborDivider />

          <div className="legal-page__sections">
            {t.sections.map((section) => (
              <article className="legal-page__section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <p className="legal-page__closing">{t.closing}</p>
        </div>
      </section>
    </>
  );
}
