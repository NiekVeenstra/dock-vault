# Dock Vault Alpha: Lighthouse visitor journey refinement

Intended review branch: `feature/lighthouse-journey-refinement`

This review build continues from the first Lighthouse visitor journey and keeps the same Founder’s Edition principles: calm guidance, care, dignity, personal meaning and gradual discovery.

## What changed

### Collecting is now explicitly optional in structure

- Removed wording that made a finish line, fixed theme or tightly connected collection feel required.
- Reframed collecting goals, budgets, checklists and themes as tools that can add calm when useful.
- Added explicit room for intuitive collecting, memories, gifts, artwork, unexpected finds and changing interests.
- Reworked the Collecting guide so a master set is one possible route rather than the model every collection should follow.
- Updated the Dock Vault collecting principle in both languages:
  - NL: `Een verzameling mag meegroeien met jouw interesses en herinneringen. Wat de kaarten voor jou betekenen, geeft haar karakter.`
  - EN: `A collection can grow with your interests and memories. What the cards mean to you is what gives it character.`

### Button promises now match their destination

The three Begin the Journey route cards now say:

- Play: `Help mij beginnen met spelen / Help me start playing`
- Collect: `Help mij een beginpunt kiezen / Help me find a starting point`
- Both: `Help mij beide combineren / Help me combine both`

The collecting follow-up buttons were also softened so they promise guidance rather than a completed result.

### Homepage message refined

The Lighthouse summary for Collecting no longer promises a fixed goal and finish line. It now presents collecting as intentional, curious and able to change with the visitor.

### Keyboard navigation improved

- Added visible focus treatment to the homepage Lighthouse start link, shared CTA links and mobile bottom navigation.
- Added visible focus treatment to the language controls and hamburger navigation.
- Closed drawer links are removed from the keyboard tab order.
- Opening the menu moves focus to the close button.
- Escape closes the menu.
- Closing the menu returns focus to the hamburger button.

## Route and content checks performed

Automated source checks passed for:

- Homepage `#lighthouse` target.
- All three Begin the Journey route anchors: `#play`, `#collect`, `#both`.
- Play -> Preservation `#first-protection`.
- Collect -> Collecting `#first-goal`.
- Both -> Collecting and Preservation follow-up routes.
- Return links from Begin the Journey, Collecting and Preservation back to the homepage Lighthouse.
- Existing Grading route.

Result: no missing local route or anchor targets in the reviewed Lighthouse journey.

## Responsive and accessibility checks performed

Source-level checks confirmed:

- Begin the Journey has dedicated desktop/tablet/mobile layouts at the existing breakpoints.
- Collecting has dedicated desktop/tablet/mobile layouts.
- The homepage Lighthouse has a dedicated mobile layout.
- Journey and guide anchors use scroll margins.
- The Lighthouse subpages do not use the fixed homepage bottom navigation.
- The homepage footer keeps 135 px bottom clearance on mobile, which leaves space for the fixed bottom navigation.
- Route cards, main CTA links, header controls and bottom navigation expose keyboard focus states.

A TypeScript syntax pass was run over all `app` and `components` TS/TSX files using TypeScript 5.8.3.

Result: `61 files checked, 0 syntax diagnostics`.

## Current game information retained

The first visitor journey still uses the game information checked against the official ONE PIECE CARD GAME website on 2026-09-06. It avoids recommending a specific current meta deck and points players to the official rules page for current event and restricted-card rules:

https://en.onepiece-cardgame.com/rules/

## Still open before merge

A full browser-rendered QA and `next build` could not be completed in this review container because the project dependencies were not available and `npm ci` could not complete in the environment.

Before merging the branch, run locally:

```powershell
npm install
npm run build
npm run dev
```

Then visually confirm at desktop and mobile widths:

1. Homepage -> Begin de reis / Begin the Journey.
2. All three route cards and anchor landing positions.
3. Play -> protection and official rules.
4. Collect -> Collecting guide and protection.
5. Both -> Collecting guide and protection.
6. NL/EN switching on every page in the route.
7. Keyboard tab order, hamburger open/close, Escape and focus return.
8. Footer and fixed mobile navigation do not obscure the final visible content.

Do not merge to `main` or publish until this browser review is complete.
