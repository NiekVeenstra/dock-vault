# Founder’s Collection — first personal story review

Suggested feature branch: `feature/vault-first-founder-story`

## What changed

- Added the first Founder’s Collection story for `Monkey.D.Luffy · ST10-006 · First Anniversary Set` as a **draft** record.
- Changed the content model from repeated Q&A-style fields to a continuous localized story (`story.en[]` / `story.nl[]`) plus a separate `preservation` section.
- Kept the supplied €50 memory inside the narrative only. It is not used as a value, price label or collection statistic.
- Did not add a purchase date, condition grade, value, extra possession history, extra memories or any other personal fact.
- The supplied reference card image is **not added to the website** and is not presented as the founder’s own copy.
- Draft preview shows a clear photograph placeholder until the founder’s own photograph is provided.
- Public mode hides draft records and shows the simple message: `Het eerste verhaal krijgt hier binnenkort een plek.`
- Removed visitor-facing explanations about verification, source data and publication rules.
- Kept the direct return route to `/vault`.
- Added a visible keyboard focus state for the Vault return link.

## Draft / public content modes

Local development shows draft content by default.

For a development preview that uses a production build:

```powershell
$env:DOCK_VAULT_CONTENT_MODE="draft"
npm run build
npm start
```

On bash/Linux:

```bash
DOCK_VAULT_CONTENT_MODE=draft npm run build
npm start
```

For the public production build, leave `DOCK_VAULT_CONTENT_MODE` unset or set it explicitly to `public`:

```bash
DOCK_VAULT_CONTENT_MODE=public npm run build
```

`DOCK_VAULT_CONTENT_MODE` is deliberately server-side and does not use a `NEXT_PUBLIC_` variable.

## Personal content still needed before publication

1. The founder’s own photograph of the ST10-006 card in its protective holder.
2. Final approval of the Dutch copy. The request contained the full English story but no separate Dutch story text, so the review build uses a faithful Dutch translation of the supplied English paragraphs.
3. Final confirmation that the story is ready to publish.
4. After adding the real photograph, set the record status from `draft` to `published`.

## QA gates

Run both modes before merge:

### Draft review

```bash
DOCK_VAULT_CONTENT_MODE=draft npm run build
npm start
```

Verify `/vault/founders-collection` in Dutch and English at desktop and mobile widths.

### Public review

```bash
DOCK_VAULT_CONTENT_MODE=public npm run build
npm start
```

Verify that the draft story and draft wording are absent and only the simple coming-soon message is rendered.

Also verify:

- `/` → `#vault` → `/vault` → `/vault/founders-collection` → `/vault`
- language toggle in both directions
- keyboard focus for header controls and the Vault return link
- no fixed header obscures the beginning of readable content
- no horizontal overflow at mobile widths

## Checks actually executed in this review environment

Passed:

- Syntax transpile check for all 65 project `.ts` / `.tsx` source files: **0 syntax errors**.
- Draft/public content filtering logic: draft record visible in draft mode and absent in public mode.
- Exact card identity and bilingual title checks.
- Six story paragraphs present in the supplied order for both languages.
- Photo remains `null`; the supplied reference image is not referenced by the site code.
- Public Dutch and English coming-soon messages are present.
- `/vault` return links are present.
- Draft preview can be enabled with the server-side `DOCK_VAULT_CONTENT_MODE` switch and does not use a public browser environment variable.
- Founder’s Collection SCSS brace-balance check passed.
- ZIP integrity check passed.

Production build status in this sandbox:

- `npm run build` was attempted, but this sandbox does not contain the project `node_modules` and cannot download npm dependencies. The command therefore stops at `next: not found`.
- A full Next.js production build must still be run in the normal Dock Vault development environment before this feature is merged.

This means the requested build gate is **not yet confirmed here** and remains an explicit pre-merge requirement.
