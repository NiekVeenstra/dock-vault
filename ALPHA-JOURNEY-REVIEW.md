# Dock Vault Alpha: Lighthouse first visitor journey

Intended review branch: `feature/lighthouse-first-journey`

## What changed

- The Lighthouse on the homepage now contains a clear `New here? / Nieuw hier?` starting point that links to Begin the Journey.
- Begin the Journey now starts with exactly three directions: play, collect, or both.
- Each direction contains concrete guidance and a usable next step.
- The play route explains a safe first-deck approach and the standard deck structure.
- The collecting route links directly to a new first collecting goal section in the Collecting guide.
- The preservation route now includes a playable-deck storage option and exposes a direct `#first-protection` anchor.
- Long future-roadmap content was removed from Begin the Journey so the first visitor journey stays focused.
- Dutch and English copy were updated together.

## Current information checked

Checked against the official ONE PIECE CARD GAME website on 2026-09-06:

- Rules page: https://en.onepiece-cardgame.com/rules/
- Products page: https://en.onepiece-cardgame.com/products/

The official site currently describes deck products as ready to play and booster products as products that add cards to a deck or collection. The current rules page lists the January 16, 2026 Comprehensive Rules and Tournament Rules Manual. The visitor guide therefore avoids naming a specific competitive deck or current meta product and instead points beginners toward a complete deck and the current official rules.

## Checks performed

- Internal route and anchor review for the new visitor journey.
- Matching Dutch and English route structure.
- Responsive CSS review for desktop, tablet and mobile breakpoints.
- TypeScript parser check on the modified TSX files. The isolated parser check returned only expected unresolved alias imports because project dependencies were not available in the review environment; no syntax errors were reported.
- CSS block/brace sanity check.

## Still to check before merge

Run these on the actual branch with dependencies installed:

```powershell
npm install
npm run build
npm run dev
```

Then review at desktop and mobile widths:

1. Home -> Follow the Light -> Begin the Journey.
2. All three route cards and their anchor scroll positions.
3. Play -> Preservation `#first-protection`.
4. Collect -> Collecting `#first-goal`.
5. Both -> Collecting and Preservation.
6. Dutch/English toggle on every page in the route.
7. Header, back links, footer and return to Lighthouse.
8. External official rules link opens correctly.

Do not merge to `main` until this review is complete.
