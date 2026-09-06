export type FounderCollectionRecord = {
  id: string;
  status: "draft" | "published";
  title: { en: string; nl: string } | null;
  photo: {
    src: string;
    alt: { en: string; nl: string };
  } | null;
  meaning: { en: string; nl: string } | null;
  origin: { en: string; nl: string } | null;
  momentOrLesson: { en: string; nl: string } | null;
  preservation: { en: string; nl: string } | null;
};

/**
 * Personal archive records live here, separate from presentation.
 *
 * Only set a record to `published` when the real photo and personal story
 * have been supplied and verified by the founder. Empty fields are kept as
 * null instead of being filled with assumptions.
 */
export const foundersCollectionRecords: FounderCollectionRecord[] = [
  {
    id: "first-record",
    status: "draft",
    title: null,
    photo: null,
    meaning: null,
    origin: null,
    momentOrLesson: null,
    preservation: null,
  },
];
