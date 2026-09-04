# Dock Vault

Dock Vault is a component-based Next.js website with Dutch/English content, Lighthouse guides, the Logbook and the Vault.

## Branch workflow

- `develop`: active development and testing
- `main`: stable/live releases only

Typical development flow:

```bash
git checkout develop
git pull origin develop
npm install
npm run dev
```

Before pushing or merging a release:

```bash
npm run build
```

## Styling structure

- `app/globals.scss` contains global tokens, typography, shared utility styles and the central SCSS import list.
- Each visual component keeps its own `.scss` file next to its `.tsx` file.
- Component styles use BEM-style class names rather than CSS Modules.
- Legacy `.module.scss` copies are intentionally not used.

## Main structure

```text
app/                    Next.js App Router pages
components/             Shared components
components/sections/    Homepage sections
components/lighthouse/  Lighthouse guides
components/logbook/     Logbook overview and entries
components/vault/       Vault page sections
components/legal/       Privacy / terms views
components/system/      System views such as 404
public/                  Optimized static assets
```

## Deployment

The production deployment workflow in `.github/workflows/deploy.yml` deploys `main` to the configured server. Development work should stay on `develop` until it is ready to merge.
