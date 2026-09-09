# Shopify-productkoppeling — eerste testfase

Deze versie haalt uitsluitend productgegevens op uit de gratis Shopify Dev store.
De bestaande Next.js-website, vormgeving, TransIP-hosting en domeinen blijven behouden.
Er zijn geen winkelmand, checkout, betalingen, bestellingen of reserveringen toegevoegd.

## Eerst lokaal aansluiten

1. Kopieer `.env.example` naar `.env.local` in de projectmap, naast `package.json`.
2. Vul in die lokale kopie het **privé-toegangstoken van de Storefront API** in.
   Je vindt het onder Headless → Dock Vault Test Headless → Storefront API → Beheren.
   Gebruik geen Admin API-token. Deel de waarde niet in chat of screenshots.
3. Zet uitsluitend in deze lokale testkopie `MARKET_HALL_ENABLED=true`.
4. Start of herstart met `npm run dev`. Open `/market-hall` op localhost.

```dotenv
MARKET_HALL_ENABLED=true
SHOPIFY_STORE_DOMAIN=dock-vault-test.myshopify.com
SHOPIFY_STOREFRONT_PRIVATE_TOKEN=VUL_HIER_ALLEEN_LOKAAL_JE_PRIVETOKEN_IN
SHOPIFY_TRUST_PROXY_IP=false
```

De placeholder hierboven is geen werkend token. De echte sleutel hoort uitsluitend
in `.env.local` of de serveromgeving, nooit in broncode, Git of een `NEXT_PUBLIC_`-variabele.
Alle `.env*`-bestanden worden genegeerd, behalve het lege voorbeeld `.env.example`.

De echte winkelnaam is overgenomen uit het Shopify-scherm: `dock-vault-test.myshopify.com`.
De koppeling accepteert uitsluitend een `myshopify.com`-winkelnaam, zonder `https://`,
pad of poort. De API-versie staat vast op `2026-07` in `lib/commerce/shopify/client.ts`.

## Shopify-instellingen voor dit product

De aangeleverde schermen tonen Nederland, EUR en een gratis Dev store. Het product
`[TEST] Dock Vault – voorbeeldkaart` staat actief op **Dock Vault Test Headless**,
met een afbeelding, €1,00 en drie stuks testvoorraad. De andere verkoopkanalen zijn
voor dit product niet geselecteerd. Agentic-catalogustoegang en automatisch aanmelden
zijn in het aangeleverde scherm uitgezet.

Benodigde Storefront-rechten:

- `unauthenticated_read_product_listings`
- `unauthenticated_read_product_inventory`
- `unauthenticated_read_product_tags`

Producten moeten voor Headless gepubliceerd zijn en de tag `dock-vault-test` hebben,
plus precies één categorietag: `singles`, `playsets`, `sealed` of `protection`.
Deze regel geldt ook voor directe productlinks. Een ontbrekende of dubbelzinnige
categorietag maakt het product onzichtbaar in deze testfase.

De Shopify-taxonomie en de collectie `Home page` bepalen de Markthal-categorie niet.
Het huidige product heeft de juiste tags. Het verwachte pad is
`/market-hall/product/test-dock-vault-voorbeeldkaart`.

## Gegevens en talen

`lib/commerce/types.ts` bevat het presentatiemodel. `lib/commerce/shopify/` doet de
Storefront GraphQL-aanvragen en vertaalt Shopify-data naar dat model.
`lib/market-hall/data.ts` is de afgeschermde ingang voor pagina's en eventuele latere API's.
Componenten ontvangen geen tokens of verbindingsinstellingen.

Product- en variant-ID's, geselecteerde opties, SKU, afbeeldingen, decimale prijzen,
valuta en beschikbaarheid worden bewaard. De productpagina toont de prijs en voorraad
van de gekozen variant. `availableForSale` bepaalt de beschikbaarheid;
`quantityAvailable: null` betekent onbekend en wordt niet als nul behandeld.
Nabestelbaarheid wordt apart weergegeven. Meer dan één pagina producten, varianten
of afbeeldingen wordt met Shopify-cursors opgehaald.

De interface heeft Nederlands en Engels. Shopify wordt in beide talen opgevraagd,
met Nederland als landcontext. Shopify-vertalingen worden gebruikt zodra ze in de winkel
beschikbaar zijn; anders blijft de oorspronkelijke producttekst staan. De koppeling
verzint geen Engelse productvertaling. Voor een volledig vertaald aanbod moeten de
Engelse titel, beschrijving en eventuele kenmerken nog in Shopify worden toegevoegd.

Aanvullende kaartgegevens zijn optioneel. Maak hiervoor bij producten (en indien nodig
varianten) tekstmetavelden aan met namespace `dock_vault` en deze sleutels:

| Sleutel | Weergave |
| --- | --- |
| `set` | Set |
| `card_number` | Kaartnummer |
| `language` | Kaarttaal |
| `edition` | Uitvoering |
| `condition` | Conditie |
| `contents` | Inhoud |

Geef deze definities Storefront-leestoegang (`PUBLIC_READ`). Variantwaarden gaan voor
productwaarden. Ontbrekende kenmerken krijgen de tekst “Nog niet opgegeven” / “Not
specified yet”. Voor het eerste testproduct zijn deze metavelden geen vereiste.

## Verversing en storingen

Shopify-aanvragen gebruiken `cache: no-store`; de Markthal-routes zijn dynamisch.
Er is geen tijdcache en er hoeft geen nieuwe build te worden gemaakt na een productwijziging.
Herlaad de pagina: zodra Shopify de wijziging via de API teruggeeft, wordt die getoond.
Een al geopende pagina ververst niet vanzelf. Shopify kan enige verwerkingstijd nodig
hebben; die vertraging is nog niet tegen de echte winkel gemeten.

Een onbekend of niet toegelaten product geeft een rustige 404-weergave. Een lege
categorie krijgt een lege toestand. Ontbrekende sleutels, een mislukte verbinding of
GraphQL-fouten geven een melding met een nieuwe poging. Er wordt nooit teruggevallen
op de oude hardcoded voorbeeldproducten of op eerder gecachte voorraad.
Elke aanvraag heeft een timeout van acht seconden. Serverlogs bevatten alleen een
algemene foutcategorie (`configuration`, `connection`, `response` of `pagination`).

## Testserver bij TransIP

De repository bevat alleen een automatische deployment van **main**. Er is geen aparte
develop-deployment of toegangsbeveiliging aantoonbaar in de repository. De externe
testhost en zijn beveiliging zijn niet bezocht of geverifieerd. Bescherm die hele host
met echte authenticatie, VPN of een IP-allowlist vóór het openzetten. `noindex` is geen
toegangsbeveiliging.

Vul op de afzonderlijke testserver dezelfde variabelen in via de bestaande beheerde
serveromgeving of een alleen voor de servicegebruiker leesbare `.env.local` naast
`package.json`. Herstart de Next.js/PM2-testservice na wijzigingen. Bij gewijzigde
PM2-procesvariabelen is ook `--update-env` nodig. Gebruik de naam van de **testservice**;
de bestaande productieservice heet `dockvault`.

Shopify vraagt bij bezoekersverkeer met een privé-token ook het echte bezoekers-IP.
De adapter verstuurt `Shopify-Storefront-Buyer-IP` alleen als
`SHOPIFY_TRUST_PROXY_IP=true` en een geldig `X-Real-IP` aanwezig is. Activeer dit op
de testserver pas nadat de vertrouwde reverse proxy die header zelf overschrijft,
bijvoorbeeld met Nginx `proxy_set_header X-Real-IP $remote_addr;`, en de Next-poort
uitsluitend via die proxy bereikbaar is. Bij meerdere proxy's moet eerst de echte
client-IP-keten correct zijn ingesteld. Er wordt geen willekeurige `X-Forwarded-For`
vertrouwd en geen bezoekers-IP verzonnen. Lokaal blijft deze optie uit.

## Productie blijft gesloten

Op de publieke server blijft `MARKET_HALL_ENABLED=false` of ontbreekt de instelling.
`NODE_ENV` is hiervoor niet bepalend. De poort wordt vóór configuratie en Shopify-data
gecontroleerd, ook op categorie- en productroutes. Een gesloten server toont alleen
de voorbereidingspagina; Shopify wordt dan niet benaderd. Productgegevens ontbreken
ook uit de HTML/RSC-antwoorden, productmetadata en sitemap. Er zijn geen product-API's
toegevoegd. De open testpagina's en ontbrekende testproducten hebben `noindex`.

Een Git-merge verandert een bestaande servervariabele niet. Controleer dus vóór een
latere release expliciet dat de **productieservice** gesloten staat. Neem geen
test-`.env.local` over naar productie. Herstart de service na een wijziging.

Publiek openen is een latere bewuste release: eerst het echte assortiment, vertalingen,
verzending en verkoopvoorwaarden voorbereiden, de Dev-store/testtag-selectie vervangen,
een passend winkelplan en de verkooppaden beoordelen, en pas daarna de publieke poort
openen. Deze fase biedt daarvoor nog geen verkoopklare winkel.

## Controles opnieuw uitvoeren

```bash
npm run test:shopify
npm run build
npm run test:market-http
```

De tests gebruiken expliciet gesimuleerde Storefront-antwoorden uit `tests/` en hebben
geen echte sleutel nodig. De HTTP-test start dezelfde productiebuild achtereenvolgens
gesloten, open, zonder sleutel en opnieuw gesloten. Zij controleert ook HTML/RSC,
directe links, 404, lege categorie, sitemap, browserbundels en gewijzigde gegevens.

De definitieve acceptatie tegen **jouw Shopify-winkel** staat nog open:

1. Voer zelf het privé-token lokaal in en laad overzicht en productpagina in beide talen.
2. Wijzig de titel en prijs (bijvoorbeeld van €1,00 naar €2,00), vervang de hoofdfoto en
   zet de voorraad op nul terwijl doorverkopen bij nul uit blijft. Sla op in Shopify.
3. Herlaad beide websitepagina's en controleer titel, foto, prijs en “Niet beschikbaar”.
4. Herstel de gewenste testwaarden en controleer opnieuw. Sluit daarna de Markthal
   met `MARKET_HALL_ENABLED=false`, herstart en open dezelfde directe productlink.

Er zijn tijdens deze oplevering geen echte Shopify-mutaties of live API-controles gedaan.

## Officiële bronnen

- [Storefront API bouwen](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api)
- [Storefront API: authenticatie en privé-token](https://shopify.dev/docs/api/storefront/latest)
- [Producten en varianten opvragen](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/getting-started)
- [Variantvelden en beschikbaarheid](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)
- [Metavelden beschikbaar maken](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/metafields)

## Testwinkelmand

De testwinkelmand is beschikbaar op `/market-hall/cart` wanneer
`MARKET_HALL_ENABLED=true`. De bestaande Shopify-instellingen blijven voldoende;
er zijn geen extra tokens nodig. Voor de optionele testcheckout: zie hieronder.

- De productpagina voegt de geselecteerde variant toe. Dezelfde variant wordt
  samengevoegd; verschillende varianten blijven aparte regels.
- Alleen producthandle, variant-ID en aantal worden lokaal bewaard onder
  `dock-vault-test-cart-v1`. Prijs, omschrijving en voorraad komen bij herstel,
  toevoegen, wijzigen en opnieuw controleren van de server.
- `POST /api/market-hall/cart` gebruikt de bestaande afgeschermde catalogus.
  De route is gesloten (404, zonder Shopify-verzoek) als de Markthal uit staat.
  Antwoorden zijn `no-store`. Ongeldige invoer geeft 400; een verbindingsfout 503.
- Voorraadverlagingen beperken het aantal. Verwijderde, uitgesloten,
  uitverkochte en nabestelbare varianten, of varianten zonder bekend aantal,
  worden niet opgenomen. De gebruiker krijgt een melding bij aanpassingen.
- Maximaal 20 verschillende varianten en 99 eenheden per variant. Een playset
  telt als één verkoopeenheid. De winkelmand reserveert geen voorraad.
- Bij een verbindingsfout blijft de bestaande mand bewaard en verschijnt een
  foutmelding. Verwijderen/leegmaken kan na het verzoek ook offline.
- Het subtotaal betreft uitsluitend producten, met aparte subtotalen per valuta.
  De lokale winkelmand zelf maakt geen betalingen of bestellingen aan.

Controle: `npm run test:cart`, `npm run test:shopify`, daarna `npm run build`
en `npm run test:market-http`. De HTTP-test gebruikt expliciete synthetische
Shopify-responses, geen echte winkelgegevens.

Handmatige controle met echte testproducten: voeg A en B toe, voeg A nogmaals
 toe, wijzig aantallen, verwijder een regel en ververs de pagina. Verlaag daarna
 de Shopify-voorraad en kies opnieuw controleren. Controleer ook de Engelse
 weergave. De winkelmand en API moeten gesloten blijven met de vlag uit.

### Bediening van de testwinkelmand

De winkelmand staat rechtsboven in de Markthal-header. Op smallere schermen
blijven het icoon en aantal zichtbaar; de toegankelijke naam blijft volledig.
De productpagina biedt een aantalkeuze, beperkt tot de bevestigde voorraad
minus wat al in de mand zit (en het maximum van 99 per variant).

Het overzicht vraagt de eerste twee varianten op. Alleen bij precies één
variant zonder vervolgpagina verschijnt direct toevoegen met aantalkeuze.
Bij meerdere of onbekende varianten leidt “Kies uitvoering” naar de detailpagina.
De toevoegknoppen staan buiten de productlink. Iedere toevoeging blijft via de
server gecontroleerd, ook wanneer de weergegeven voorraad inmiddels verouderd is.

Bij updates via een ZIP: voeg de bestanden samen met de bestaande projectmap,
bijvoorbeeld met PowerShell `Expand-Archive -LiteralPath <zip> -DestinationPath . -Force`.
Verwijder of vervang nooit de volledige mappen app, components of lib: de update
bevat uitsluitend toegevoegde en gewijzigde bestanden.

## Shopify-testcheckout

De knop “Naar Shopify-testcheckout” maakt via Storefront `cartCreate` een Shopify
cart en opent de door Shopify teruggegeven checkout. De bestelling ontstaat pas
na afronden bij Shopify. Deze implementatie is geen productiecheckout.

### Lokaal inschakelen

1. Controleer in **Dock Vault Test → Instellingen → Betalingen** dat Shopify's
   **Test payment gateway** actief is, of dat de bestaande betaalprovider
   expliciet in testmodus staat. Alleen de websitevlag maakt betalingen niet tot
   testbetalingen: Storefront kan de betaalmodus niet verifiëren.
2. Voeg in `.env.local` toe: `SHOPIFY_TEST_CHECKOUT_ENABLED=true`.
3. Behoud `MARKET_HALL_ENABLED=true` en
   `SHOPIFY_STORE_DOMAIN=dock-vault-test.myshopify.com` en herstart de server.
   Beide vlaggen en precies deze winkel zijn nodig. De openbare productieomgeving
   houdt de vlaggen uit; met een andere winkeldomeinnaam blijft checkout gesloten.
4. Voeg testproducten toe en klik in de mand op de checkoutknop. Controleer de
   varianten, aantallen, taal, verzending en het totaal op Shopify.
5. Gebruik uitsluitend de gegevens van je testbetaalmethode. Voor Shopify's
   Test payment gateway: naam `Test payment gateway`, kaartnummer `1` voor
   succes, CVV `111`, een toekomstige vervaldatum. Deze gegevens gelden niet
   voor Shopify Payments-testmodus.
6. Voor automatisch opruimen na een geslaagde betaling: maak in Shopify een
   custom app met alleen de Admin API-scope `read_orders` en voeg het token lokaal
   toe als `SHOPIFY_ADMIN_ACCESS_TOKEN`. Genereer daarnaast een willekeurige geheime
   waarde van minimaal 32 tekens als `SHOPIFY_CHECKOUT_RECEIPT_SECRET`. Deze waarden
   horen alleen in `.env.local` en mogen nooit in Git of in de browser terechtkomen.
   Herstart daarna de server. Zonder deze twee instellingen blijft de lokale mand
   bewust behouden en kun je hem handmatig leegmaken.
7. Na een geslaagde testbetaling controleert Dock Vault de bijbehorende Shopify-order.
   Alleen een betaalde testorder met dezelfde checkout en aantallen wordt verwerkt.
   De gekochte regels verdwijnen daarna uit de lokale mand. Bij een afgebroken of
   mislukte betaling blijven ze staan. Als je tijdens checkout een regel wijzigt,
   blijft die regel staan zodat je hem zelf kunt controleren.

### Gedrag en beperkingen

- `POST /api/market-hall/checkout` is standaard gesloten. De route valideert
  invoer, producttoegang, variant-ID, aantal en de actuele prijs/voorraad.
- Bij een afwijking van de getoonde prijs of voorraad volgt 409 met de bijgewerkte
  mand, zonder cartCreate. De gebruiker bekijkt de wijziging en klikt opnieuw.
- Shopify krijgt uitsluitend de gevalideerde variant-ID's/aantallen, NL als
  kopersland, de geselecteerde taal en een testnotitie. De notitie schakelt geen
  betaalprovider in testmodus.
- Shopify-warnings, userErrors, ontbrekende regels of afwijkende aantallen/prijzen
  stoppen de doorverwijzing. Verbindingsfouten behouden de lokale mand.
- De checkout-URL moet HTTPS gebruiken en een checkoutpad zijn op exact de
  geconfigureerde testwinkel. Tokens en upstream-foutdetails worden niet getoond.
- Verzendkosten en het definitieve totaal komen van Shopify. Voorraad kan nog
  veranderen na controle; toevoegen aan de lokale mand reserveert niets.
- Er worden geen betaalgegevens, klantadressen of e-mails door Dock Vault verwerkt
  in deze stap. Die worden door de gebruiker rechtstreeks bij Shopify ingevuld.
- De automatische controle gebruikt Shopify Admin API alleen wanneer de testcheckout
  actief is en beide lokale instellingen aanwezig zijn. Er worden geen klantgegevens
  of betaalgegevens opgehaald.
- Controle: `npm run test:checkout`, bestaande cart/catalogustests,
  `npm run build` en `npm run test:market-http`. HTTP-tests vervangen Shopify
  expliciet door synthetische antwoorden; de echte testbestelling blijft een
  handmatige controle in de dev store.

Bronnen:
- https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate
- https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage
- https://help.shopify.com/en/partners/manage-clients-stores/test-orders
