const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const { signReceipt, readReceipt, checkReceipt, receiptEnabled } = require('../lib/commerce/shopify/receipt.ts');
const { readStoredCart, applyPaidReceipt } = require('../lib/market-hall/cart-storage.ts');
const originalFetch = global.fetch;
const oldEnv = { ...process.env };
afterEach(() => { global.fetch = originalFetch; for (const key of ['SHOPIFY_ADMIN_ACCESS_TOKEN','SHOPIFY_CHECKOUT_RECEIPT_SECRET','MARKET_HALL_ENABLED','SHOPIFY_TEST_CHECKOUT_ENABLED','SHOPIFY_STORE_DOMAIN']) {
  if (oldEnv[key] === undefined) delete process.env[key]; else process.env[key] = oldEnv[key];
}});
const line = { slug: 'card', variantId: 'gid://shopify/ProductVariant/123', quantity: 2 };
function configure() {
  process.env.SHOPIFY_ADMIN_ACCESS_TOKEN = 'test-only-admin';
  process.env.SHOPIFY_CHECKOUT_RECEIPT_SECRET = 'test-only-signing-secret-at-least-32-characters';
  process.env.MARKET_HALL_ENABLED = 'true'; process.env.SHOPIFY_TEST_CHECKOUT_ENABLED = 'true';
  process.env.SHOPIFY_STORE_DOMAIN = 'dock-vault-test.myshopify.com';
}
function order() { return { cartToken: 'test-cart', test: true, cancelledAt: null, displayFinancialStatus: 'PAID',
 lineItems: { nodes: [{ quantity: 2, variant: { id: line.variantId } }], pageInfo: { hasNextPage: false } } }; }
test('receipts reject forged, malformed and expired data, including forged cart tokens', () => {
 configure(); const ticket = signReceipt('test-cart', [line]);
 assert.deepEqual(readReceipt(ticket).lines, [line]);
 assert.throws(() => readReceipt('tampered.' + ticket.split('.')[1]));
 assert.throws(() => readReceipt(ticket + '.extra'));
 assert.throws(() => signReceipt('x OR status:any', [line]));
 const now = Date.now; Date.now = () => now() + 8 * 86400000;
 try { assert.throws(() => readReceipt(ticket)); } finally { Date.now = now; }
});
test('only exact paid test order with purchased quantities confirms; cancelled/failed/missing orders retain cart', async () => {
 configure(); const receipt = readReceipt(signReceipt('test-cart', [line]));
 const modifications = [o => o.cartToken='other', o => o.test=false, o => o.cancelledAt='2026-09-09',
  o => o.displayFinancialStatus='PENDING', o => o.displayFinancialStatus='AUTHORIZED', o => o.displayFinancialStatus='REFUNDED',
  o => o.lineItems.nodes[0].quantity=1, o => o.lineItems.nodes[0].variant=null, o => o.lineItems.pageInfo.hasNextPage=true];
 for (const change of modifications) {
  const data = order(); change(data); global.fetch = async () => Response.json({ data: { orders: { nodes: [data] } } });
  assert.equal(await checkReceipt(receipt), false);
 }
 global.fetch = async (url, options) => {
  assert.match(url, /\/admin\/api\/2026-07\/graphql.json$/);
  assert.equal(options.headers['X-Shopify-Access-Token'], 'test-only-admin');
  assert.deepEqual(JSON.parse(options.body).variables, { search: 'cart_token:test-cart' });
  return Response.json({ data: { orders: { nodes: [order()] } } });
 };
 assert.equal(await checkReceipt(receipt), true);
 global.fetch = async () => Response.json({ data: { orders: { nodes: [] } } });
 assert.equal(await checkReceipt(receipt), false);
 global.fetch = async () => Response.json({ errors: [{ message: 'Access denied' }] });
 await assert.rejects(checkReceipt(receipt));
 global.fetch = async () => new Response('', { status: 503 }); await assert.rejects(checkReceipt(receipt));
});
test('closed/misconfigured tracking never calls Admin API', async () => {
 configure(); global.fetch = () => { throw new Error('unexpected network'); };
 process.env.MARKET_HALL_ENABLED='false'; assert.equal(receiptEnabled(),false);
 await assert.rejects(checkReceipt({token:'test',lines:[line],issued:Date.now()}), /receipt-config/);
 process.env.MARKET_HALL_ENABLED='true'; delete process.env.SHOPIFY_ADMIN_ACCESS_TOKEN; assert.equal(receiptEnabled(),false);
});
test('paid receipt is consumed atomically, repeat receipt cannot clear newly added items', () => {
 const other = { ...line, variantId: 'gid://shopify/ProductVariant/456' };
 const cart = { items: [line, other], revisions: { [line.variantId]: 'original' }, pending: [{ receipt: 'signed', revisions: { [line.variantId]: 'original' } }] };
 const result = applyPaidReceipt(cart, 'signed', [line]);
 assert.deepEqual(result.cart.items,[other]); assert.equal(result.cart.pending.length,0);
 const readded = {...result.cart, items:[line,other]};
 assert.deepEqual(applyPaidReceipt(readded, 'signed', [line]).cart, readded);
});
test('editing or removing/re-adding same variant during checkout preserves it for review', () => {
 const cart = { items: [line], revisions: { [line.variantId]: 'new' }, pending: [{receipt:'signed',revisions:{[line.variantId]:'old'}}] };
 const result = applyPaidReceipt(cart, 'signed', [line]);
 assert.equal(result.review,true); assert.deepEqual(result.cart.items,[line]); assert.deepEqual(result.cart.pending,[]);
});
test('legacy cart storage migrates and new receipt storage round trips without losing pending checkout', () => {
 const old = readStoredCart(JSON.stringify([line])); assert.deepEqual(old.items,[line]); assert.deepEqual(old.pending,[]);
 old.pending.push({receipt:'signed',revisions:{}});
 assert.deepEqual(readStoredCart(JSON.stringify(old)),old);
});
