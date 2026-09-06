# Dock Vault — Markthal developmentversie

Deze ZIP bevat de volledige broncode op basis van develop (ec2c440), met de
wijzigingen uit de lokale featurebranch feature/market-hall-foundation.
Er is niets gepusht, gemerged of gedeployd. Gitgeschiedenis, dependencies,
buildbestanden en lokale instellingen zijn niet opgenomen.

## Lokaal starten

1. Pak de ZIP uit en open een terminal in de map dock-vault.
2. Installeer dependencies met `npm ci`.
3. Kopieer `.env.example` naar `.env.local`.
4. Zet alleen in je development-/testomgeving `MARKET_HALL_ENABLED=true`.
5. Start met `npm run dev` en bezoek http://localhost:3000/market-hall.

De bestaande taalschakelaar biedt Nederlands en Engels. Producten zijn
gemarkeerde testgegevens; betalingen, bestellingen en reserveringen ontbreken.

## Productiebuild en gesloten toestand

Gebruik `npm run build` gevolgd door `npm start` om de productiebuild lokaal
te bekijken. Zonder instelling, of met `MARKET_HALL_ENABLED=false`, toont de
Markthal de voorbereidingspagina. Ook directe categorie- en productlinks
blijven dan gesloten. Herstart de server na wijziging van de instelling.
De instelling is server-side en onafhankelijk van NODE_ENV.

Openen in een testomgeving vereist de expliciete serverinstelling
`MARKET_HALL_ENABLED=true`. Voeg daarnaast toegangsbeveiliging toe: noindex
is geen wachtwoordbeveiliging. De repository bevat geen aantoonbare
afgeschermde develop-deployment; de bestaande workflow deployt main.
Activeer deze testcatalogus niet op de publieke productieserver.

## Overdracht

Builds en HTTP-controles van beide toestanden zijn uitgevoerd. Desktop,
taalschakeling en toetsenbordbediening zijn gecontroleerd. Een volledige
visuele controle op een echt mobiel viewport en controle van de externe
testomgeving staan nog open.

Gedeelde wijzigingen raken navigatie, homepage-links, footer, globale styles,
sitemap, README en het development-startscript. Vergelijk deze bij integratie
met eventuele andere lopende wijzigingen; overschrijf geen serverinstellingen.
Zie README.md voor aanvullende projectinstructies.
