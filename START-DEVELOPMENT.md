# Dock Vault — Shopify developmentversie

Deze broncode is gebaseerd op de nieuwste opgehaalde develop-commit **3e3491d**
(`add market hall beginning`, gecontroleerd op 8 september 2026). Het werk staat
op de aparte featurebranch **feature/shopify-product-catalog**. Er is niets
gepusht, gemerged of gedeployd.

## Eerstvolgende stap

1. Pak de ZIP uit en open de map `dock-vault` in je editor.
2. Voer `npm ci` uit.
3. Kopieer `.env.example` naar `.env.local`, naast `package.json`.
4. Zet daar `MARKET_HALL_ENABLED=true` en vul zelf
   `SHOPIFY_STOREFRONT_PRIVATE_TOKEN` in met het privé-token van het Headless-kanaal.
   De winkelnaam `dock-vault-test.myshopify.com` is al ingevuld.
5. Start `npm run dev` en bezoek `http://localhost:3000/market-hall`.

De sleutel hoort niet in Git, de chat of screenshots. De voorbeeldinstelling blijft
standaard gesloten. Lokale instellingen, dependencies en buildbestanden ontbreken
bewust in deze broncode-ZIP.

## Wat is gebouwd

- Shopify-producten op het bestaande overzicht en de categorie- en productpagina's.
- Echte product-/variant-ID's, foto's, prijzen, valuta en beschikbaarheid in een
  afzonderlijke gegevenslaag. Keuze tussen varianten en foto's waar aanwezig.
- Nederlandse en Engelse interface; productvertalingen worden uit Shopify gebruikt.
  Ontbrekende vertalingen vallen terug op de oorspronkelijke producttekst.
- Optionele kaartkenmerken via metavelden; geen verzonnen conditie of taal.
- Rustige weergaven voor ontbrekende producten, lege categorieën en verbindingsfouten.
- Een gesloten Markthal die Shopify niet benadert en geen productdata uitlevert.

Deze versie bevat geen winkelmand, betalingen, bestellingen of reserveringen.

## Controle en overdracht

Zie `docs/VALIDATION-SHOPIFY.md` voor de daadwerkelijk uitgevoerde controles.
De echte Shopify-verbinding en ververssnelheid kunnen pas worden bevestigd nadat
je het privé-token zelf hebt ingesteld. Een paginaherlading doet telkens een nieuwe
API-aanvraag; er is geen tijdcache of automatische verversing van open pagina's.

De repository bevat alleen de automatische deployment van main, geen aantoonbare
beveiligde develop-deployment. Bescherm de hele externe testomgeving vóór het openen.
`noindex` voorkomt geen bezoek. Laat de publieke service op
`MARKET_HALL_ENABLED=false` en herstart na wijziging van de serverinstelling.

Gedeelde wijzigingen in deze feature raken `package.json` (testcommando's),
`.gitignore`, `.env.example` en de documentatie. De bestaande header, footer,
homepage, LanguageProvider, globale imports, sitemap en deploymentworkflow zijn
niet gewijzigd. Vergelijk de Markthal-bestanden en documentatie bij integratie
met eventuele andere lopende wijzigingen.

De volledige aansluitinstructies, metafieldnamen, serverinstellingen en live
acceptatiestappen staan in `docs/SHOPIFY.md`.
