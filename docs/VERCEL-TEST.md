# Dock Vault op Vercel: afzonderlijke testomgeving

Gebruik een afzonderlijk Vercel-project `dock-vault-test`. De branch `develop`
blijft voor ontwikkeling; een bewuste merge naar `vercel` publiceert een testversie.
De bestaande GitHub Actions-workflow deployt uitsluitend `main` naar de VPS.
Gebruik het toegewezen vercel.app-adres; een extra domein is niet nodig.

## 1. Configuratie en branch

Begin met een schone werkmap op de nieuwste `develop`. Voeg `vercel.json` en deze
handleiding toe, commit en push ze op `develop`. Maak vervolgens branch `vercel`
vanaf die commit en push die naar GitHub. Voeg geen lokale env-bestanden toe.

`vercel.json` schakelt automatische Git-deployments alleen in voor `vercel`, ook
wanneer andere branchnamen een slash bevatten. De header voorkomt indexering;
dit is geen toegangsbeveiliging.

## 2. Vercel-project instellen

Importeer de GitHub-repository als afzonderlijk project. Gebruik Next.js als
framework, de repositoryroot als Root Directory, `npm ci` als Install Command
en `npm run build` als Build Command. Laat de Output Directory op de standaard.

Selecteer `vercel` als bron voor de eerste deployment waar de import dit toestaat.
Controleer daarna **Settings > Environments > Production > Branch Tracking**:
dit moet `vercel` zijn. Vercel noemt de vaste omgeving van dit project Production,
maar voor Dock Vault blijft dit uitsluitend de Shopify-testomgeving.

Stel bij **Settings > Build and Deployment > Ignored Build Step** de volgende
Custom-opdracht in:

```sh
if [ "$VERCEL_GIT_COMMIT_REF" = "vercel" ]; then exit 1; else exit 0; fi
```

Zorg dat Automatically Expose System Environment Variables aan staat. Deze
projectinstelling beschermt ook tegen builds van branches die `vercel.json` nog
niet bevatten, zoals `main`. Een overgeslagen build kan nog in het overzicht
verschijnen. Stel dit in voordat je verder naar andere branches pusht.
De regel geldt voor automatische builds; een handmatige redeploy kan de
Ignored Build Step overslaan.

## 3. Omgevingsvariabelen

Voeg onderstaande waarden toe voor de Production-omgeving van dit testproject.
Neem de twee tokens over uit de werkende lokale testconfiguratie. Deel ze niet in
screenshots en zet ze niet in Git of in variabelen met NEXT_PUBLIC_.

| Variabele | Waarde |
| --- | --- |
| MARKET_HALL_ENABLED | true |
| SHOPIFY_TEST_CHECKOUT_ENABLED | true |
| SHOPIFY_STORE_DOMAIN | dock-vault-test.myshopify.com |
| SHOPIFY_STOREFRONT_PRIVATE_TOKEN | Privétoken van de Shopify-testwinkel |
| SHOPIFY_ADMIN_ACCESS_TOKEN | Admin-token van de testapp met read_orders en read_products |
| SHOPIFY_CHECKOUT_RECEIPT_SECRET | Nieuw willekeurig geheim van minimaal 32 tekens |
| SHOPIFY_TRUST_PROXY_IP | false |

Genereer het ontvangstbewijsgeheim lokaal:

```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Bewaar dit geheim stabiel tussen deployments. Het ondertekent de controle op
afgeronde bestellingen. Vertrouwen op proxy-IP-headers blijft uit totdat de
headerketen voor deze hosting expliciet is gecontroleerd.

Controleer Deployment Protection voor zowel het vaste projectadres als de
deploymentadressen voordat je de link deelt. Beschikbare bescherming hangt af
van het Vercel-plan. Test de toegang in een privévenster. Noindex sluit bezoekers
niet buiten. Houd Shopify op de testbetalingsgateway.

## 4. Eerste controle

Deploy branch `vercel` nadat de instellingen en variabelen zijn opgeslagen.
Controleer de buildlogs. Een eventuele melding over een niet-ondersteunde of
kwetsbare Next.js-versie moet eerst met een gerichte dependency-update worden
opgelost; omzeil die controle niet.

Controleer op het vaste projectadres:

- Producten, variantkeuze, voorraad en aantallen.
- Toevoegen aan en aanpassen van de winkelmand.
- Een Shopify-testbetaling en het verwijderen van de gekochte winkelmandregels.
- De checkout/status-route zonder 503-fouten.

Vervang in de bestaande Shopify theme.liquid-redirect het localhost-adres door
`https://JOUW-VASTE-PROJECTADRES.vercel.app/market-hall`. Gebruik het werkelijk
toegewezen adres. Deze gedeelde Shopify-instelling stuurt daarna ook lokale
testbetalingen terug naar de gehoste testsite. Controleer de terugkeer na betaling.

## 5. Volgende testversie publiceren

Begin met een schone werkmap. Voer elke stap alleen uit als de vorige slaagt:

```sh
git switch develop
git pull --ff-only origin develop
git switch vercel
git pull --ff-only origin vercel
git merge develop
git push origin vercel
git switch develop
```

Los eventuele mergeconflicten op voordat je pusht. Houd Vercel-configuratie ook
op `develop`, zodat volgende merges haar behouden. Controleer eenmaal met een
normale push naar `develop` dat deze geen nieuwe actieve deployment veroorzaakt.

## Documentatie

- [Vercel Git-configuratie](https://vercel.com/docs/project-configuration/git-configuration)
- [Production-branch instellen](https://vercel.com/docs/git)
- [Ignored Build Step](https://vercel.com/kb/guide/how-do-i-use-the-ignored-build-step-field-on-vercel)
- [Deployment Protection](https://vercel.com/docs/deployment-protection)
