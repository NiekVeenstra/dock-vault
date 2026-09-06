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

## Market Hall availability

The Market Hall catalogue is protected by a server-side runtime setting and is
closed by default. It is intentionally independent from `NODE_ENV`, because a
test environment may also run a production build.

```bash
# Public/production default: preparation page only
MARKET_HALL_ENABLED=false npm run start

# Test environment: test catalogue and direct test-product routes available
MARKET_HALL_ENABLED=true npm run start
```

When the value is missing or differs from the exact value `true`, visitors see
the preparation page. Category and product URLs apply the same gate and do not
render test records or product metadata while closed. Test catalogue URLs are
not included in the sitemap and their open-state metadata is marked `noindex`.

The repository does not currently define a separate deployment or access
control layer for `develop`. Before enabling the catalogue on an internet-facing
test host, protect that entire host with real authentication or an IP allowlist.
`noindex` is not access protection.
