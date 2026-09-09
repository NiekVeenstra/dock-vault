const {test, afterEach} = require('node:test');
const assert = require('node:assert/strict');
const {createTestCheckout, validateCheckoutUrl, CheckoutChanged} = require('../lib/commerce/shopify/checkout.ts');
const {isTestCheckoutEnabled} = require('../lib/market-hall/config.ts');
const originalFetch = global.fetch;
const previous = {...process.env};
afterEach(()=>{global.fetch=originalFetch; for(const key of ['SHOPIFY_STORE_DOMAIN','SHOPIFY_STOREFRONT_PRIVATE_TOKEN','MARKET_HALL_ENABLED','SHOPIFY_TEST_CHECKOUT_ENABLED']) { if(previous[key]===undefined) delete process.env[key]; else process.env[key]=previous[key]; }});
const line = {slug:'test-card',variantId:'gid://shopify/ProductVariant/2001',quantity:2,price:{amount:'1.00',currencyCode:'EUR'}};
function configure() {process.env.SHOPIFY_STORE_DOMAIN='dock-vault-test.myshopify.com';process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN='fixture-token';}
function payload() {return {cartCreate:{cart:{checkoutUrl:'https://dock-vault-test.myshopify.com/cart/c/test?key=example',lines:{nodes:[{quantity:2,merchandise:{id:line.variantId,price:line.price}}],pageInfo:{hasNextPage:false}}},userErrors:[],warnings:[]}};}
test('test checkout requires both flags and the specific test store',()=>{
 configure(); process.env.MARKET_HALL_ENABLED='true';
 assert.equal(isTestCheckoutEnabled(),false);
 process.env.SHOPIFY_TEST_CHECKOUT_ENABLED='true';assert.equal(isTestCheckoutEnabled(),true);
 process.env.SHOPIFY_STORE_DOMAIN='production.myshopify.com';assert.equal(isTestCheckoutEnabled(),false);
 configure();process.env.MARKET_HALL_ENABLED='false';assert.equal(isTestCheckoutEnabled(),false);
});
test('checkout sends only merchandise IDs and quantities with NL country and chosen language',async()=>{
 configure();global.fetch=async(url,init)=>{const request=JSON.parse(init.body);assert.equal(request.variables.language,'EN');assert.equal(request.variables.input.buyerIdentity.countryCode,'NL');assert.deepEqual(request.variables.input.lines,[{merchandiseId:line.variantId,quantity:2}]);assert.equal(init.headers['Shopify-Storefront-Buyer-IP'],'127.0.0.1');return Response.json({data:payload()});};
 assert.match(await createTestCheckout([line],'en','127.0.0.1'),/https:\/\/dock-vault-test/);
});
test('Shopify warnings, errors, missing lines and changed quantities or prices block redirect',async()=>{
 configure();
 for(const modify of [p=>p.cartCreate.warnings.push({code:'stock'}),p=>p.cartCreate.userErrors.push({code:'invalid'}),p=>p.cartCreate.cart=null,p=>p.cartCreate.cart.lines.nodes=[],p=>p.cartCreate.cart.lines.nodes[0].quantity=1,p=>p.cartCreate.cart.lines.nodes[0].merchandise.price={amount:'3.00',currencyCode:'EUR'},p=>p.cartCreate.cart.lines.pageInfo.hasNextPage=true]) {
  const data=payload();modify(data);global.fetch=async()=>Response.json({data});await assert.rejects(createTestCheckout([line],'nl'),CheckoutChanged);
 }
});
test('redirect URLs are HTTPS checkout paths on exactly the test store',()=>{
 const domain='dock-vault-test.myshopify.com';
 for(const url of ['https://evil.com/cart/c/x','https://dock-vault-test.myshopify.com.evil.com/cart/c/x','http://dock-vault-test.myshopify.com/cart/c/x','https://user@dock-vault-test.myshopify.com/cart/c/x','https://dock-vault-test.myshopify.com/admin','javascript:alert(1)']) assert.throws(()=>validateCheckoutUrl(url,domain));
 assert.equal(validateCheckoutUrl(`https://${domain}/checkouts/cn/abc`,domain),`https://${domain}/checkouts/cn/abc`);
});
