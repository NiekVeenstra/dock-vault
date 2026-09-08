# Validatie

Uitgevoerd op de featurebranch `feature/shopify-product-catalog` vanaf develop-commit `3e3491d`.

- `npm run test:shopify`: 12 tests geslaagd.
- `npm run build`: productiebuild geslaagd; Markthal-routes blijven dynamisch.
- `npm run test:market-http`: geslaagd voor gesloten/open/gesloten runtime, directe links, RSC, sitemap, lege categorie, ontbrekend product, ontbrekende sleutel, foutmelding, gewijzigde titel/foto/prijs/beschikbaarheid en afwezigheid van Shopify-verzoeken in gesloten toestand.
- Browser-preview: overzicht geopend en DOM gecontroleerd op navigatie, testbanner, categorieën, productkaart en testprijs. De preview-infrastructuur vereiste één compatibiliteitsreparatie aan de geïsoleerde QA-kopie (dependencies binnen de preview-root); de productiebron is daardoor niet gewijzigd.

Niet uitgevoerd: live API-aanvraag tegen de Shopify-winkel, omdat het privé-token bewust niet is gedeeld. De definitieve live controle voer je lokaal uit volgens `docs/SHOPIFY.md`.

Mobiel en toetsenbord zijn statisch gecontroleerd via de responsive SCSS en semantische links/select/knoppen; een echte fysieke telefoon is niet beschikbaar in deze omgeving.
