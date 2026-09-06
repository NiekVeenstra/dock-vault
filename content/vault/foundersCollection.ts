export type LocalizedCopy = {
  en: string;
  nl: string;
};

export type FounderCollectionRecord = {
  id: string;
  status: "draft" | "published";
  title: LocalizedCopy;
  card: {
    name: string;
    code: string;
    set: string;
  };
  photo: {
    src: string;
    alt: LocalizedCopy;
  } | null;
  referenceImage?: {
    src: string;
    alt: LocalizedCopy;
    note: LocalizedCopy;
  };
  story: {
    en: string[];
    nl: string[];
  };
  preservation: LocalizedCopy;
};

/**
 * Founder stories live here, separate from presentation.
 *
 * Draft records can be reviewed locally or on a dedicated development preview.
 * Public production only receives records marked as published.
 *
 * To publish a record, add the founder's real photograph, verify the copy,
 * and only then change `status` to `published`.
 */
export const foundersCollectionRecords: FounderCollectionRecord[] = [
  {
    id: "luffy-st10-006-first-anniversary",
    status: "draft",
    title: {
      en: "The card that started my collection.",
      nl: "De kaart waarmee ik begon te verzamelen.",
    },
    card: {
      name: "Monkey.D.Luffy",
      code: "ST10-006",
      set: "First Anniversary Set",
    },
    photo: null,
    referenceImage: {
      src: "/vault/founders-collection/reference-image",
      alt: {
        en: "Reference image of the Monkey.D.Luffy ST10-006 First Anniversary Set card",
        nl: "Referentiebeeld van de Monkey.D.Luffy ST10-006-kaart uit de First Anniversary Set",
      },
      note: {
        en: "Reference image only. The founder’s own photographed copy will replace this image before publication.",
        nl: "Alleen als referentiebeeld. De eigen gefotografeerde kaart van de oprichter vervangt dit beeld vóór publicatie.",
      },
    },
    story: {
      en: [
        "I had only just started playing One Piece TCG and was looking for cards to build a deck. A vendor had given me a stack of bulk cards. At that point, my attention was mostly on playing.",
        "At a small card fair, I came across this Luffy. The illustration immediately caught my eye. I simply thought it was a beautiful card; there was something special about the artwork to me.",
        "It cost fifty euros. Back then, that felt like quite a lot for a single card. Thinking about it now makes me laugh. But at the time, it was a serious purchase: the first single card I felt I had really spent more money on.",
        "This card also gave me my first collecting goal. I wanted to put together the entire First Anniversary Set. That never happened, because prices rose quickly. But the desire to complete a set was there.",
        "That is why this card still means something to me. It reminds me of the moment I wanted to build a collection alongside a deck. Of enjoying a special illustration and wanting to find the other cards that belonged with it.",
        "The set remained incomplete. For me, this card remains the beginning.",
      ],
      nl: [
        "Ik was nog maar net begonnen met het spelen van One Piece TCG en was op zoek naar kaarten om een deck te bouwen. Een verkoper had me een stapel bulkkaarten gegeven. Op dat moment lag mijn aandacht vooral bij het spelen.",
        "Op een kleine kaartenbeurs kwam ik deze Luffy tegen. De illustratie trok meteen mijn aandacht. Ik vond het gewoon een prachtige kaart; er was iets bijzonders aan het artwork voor mij.",
        "Hij kostte vijftig euro. Destijds voelde dat als behoorlijk veel voor één kaart. Als ik daar nu aan terugdenk, moet ik erom lachen. Maar op dat moment was het een serieuze aankoop: de eerste losse kaart waarvan ik het gevoel had dat ik er echt meer geld aan uitgaf.",
        "Deze kaart gaf me ook mijn eerste verzameldoel. Ik wilde de volledige First Anniversary Set bij elkaar krijgen. Dat is nooit gelukt, omdat de prijzen snel stegen. Maar de wens om een set compleet te maken was er.",
        "Daarom betekent deze kaart nog steeds iets voor mij. Hij herinnert me aan het moment waarop ik naast een deck ook een verzameling wilde opbouwen. Aan het genieten van een bijzondere illustratie en het willen vinden van de andere kaarten die erbij hoorden.",
        "De set bleef incompleet. Voor mij blijft deze kaart het begin.",
      ],
    },
    preservation: {
      en: "The card is still ungraded. I keep it double-sleeved in a sturdy plastic card holder with a magnetic closure. That is how I protect the copy that marked the beginning of collecting for me.",
      nl: "De kaart is nog steeds niet gegrade. Ik bewaar hem double-sleeved in een stevige kunststof kaarthouder met een magnetische sluiting. Zo bescherm ik het exemplaar dat voor mij het begin van verzamelen markeerde.",
    },
  },
];

export function getFounderCollectionRecords(options: { includeDrafts: boolean }) {
  if (options.includeDrafts) return foundersCollectionRecords;

  return foundersCollectionRecords.filter(
    (record) => record.status === "published" && record.photo !== null,
  );
}
