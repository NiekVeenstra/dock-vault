# Dock Vault - Vault / Founder's Collection review

Suggested feature branch: `feature/vault-founders-archive`

## What changed

- Simplified `/vault` to four purposeful stages: entry, archive principle, archive rooms and closing quote.
- Removed the old Current Journeys and Vault Records sections to avoid repetition and unsupported progress claims.
- Removed the hard-coded OP12 35% and Playset 18% claims from the active Vault implementation.
- Made Founder’s Collection the only currently available archive room, linking to `/vault/founders-collection`.
- Kept Master Set Journeys, Playset Archive and The Archive visible as `In preparation`, without links or click actions.
- Added a bilingual Founder’s Collection page with an honest public empty state until a real personal record is ready.
- Added a maintenance-friendly data model in `content/vault/foundersCollection.ts` for real photo, meaning, origin, moment/lesson and preservation details.
- Added a development-only blueprint showing the fields that still need real founder input. Production output does not expose placeholder personal stories.
- Added `/vault/founders-collection` to the sitemap.

## Data / truthfulness check

The previous Vault UI contained hard-coded values for:

- OP12 Master Set: 35%
- Full Playset Project: 18%

No maintained inventory/source calculation was present in the reviewed project files to substantiate those figures. They are therefore no longer rendered as factual collection data in this version.

No personal memory, ownership claim, purchase history or photograph has been invented.

## Static checks performed

- Checked that `/vault/founders-collection` exists and is included in the sitemap.
- Checked that only the Founder’s Collection room has a link/action.
- Checked that no `35%`, `18%`, `OP12 Master Set` or `Full Playset Project` copy remains in active Vault components.
- Checked bilingual copy paths for the Vault overview and Founder’s Collection.
- Checked visible focus styling for the available archive-room link.
- Checked mobile breakpoints in the Vault rooms and Founder’s Collection styles.

## Still required before merge / publish

Run locally on the feature branch:

```powershell
npm install
npm run build
npm run dev
```

Then visually verify on desktop and a real phone:

1. Homepage `#vault` -> `/vault`.
2. `/vault` -> Founder’s Collection.
3. Founder’s Collection -> back to `/vault`.
4. Dutch / English switching on both pages.
5. Keyboard focus through header, archive-room link and return buttons.
6. Header/fixed navigation does not cover headings or controls.
7. Founder’s Collection development blueprint is visible in `npm run dev`, but absent from a production build while no real record is published.

## Personal content still needed for the first real record

1. Which real card, collection or object will be the first record.
2. A real photograph of that exact piece or collection.
3. Why it matters personally to the founder.
4. How it entered the founder’s life or collection.
5. A genuine moment, memory or lesson connected to it.
6. How it is currently stored, handled and protected.

Do not set the record status to `published` until these details are supplied and checked.
