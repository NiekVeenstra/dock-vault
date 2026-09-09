const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseCart, resolveCart } = require('../lib/market-hall/cart.ts');
const id = 'gid://shopify/ProductVariant/1';
const input = (quantity = 1) => ({ slug: 'test-card', variantId: id, quantity });
const variant = (overrides = {}) => ({ id, name: { nl: 'A', en: 'A' }, price: { amount: '2.00', currencyCode: 'EUR' }, available: true, backorder: false, quantityAvailable: 3, image: null, ...overrides });
const product = (variants = [variant()]) => ({ name: { nl: 'Kaart', en: 'Card' }, image: null, variants });

test('cart accepts only bounded unique variant references and integer quantities', () => {
  assert.deepEqual(parseCart([{ ...input(), price: '0.01' }]), [input()]);
  for (const value of [null, {}, [input(0)], [input(-1)], [input(1.5)], [input(100)], [input(), input()], [{ ...input(), slug: '../secret' }], [{ ...input(), variantId: 'wrong' }]]) {
    assert.throws(() => parseCart(value));
  }
});
test('prices are authoritative and stock reductions clamp the quantity', async () => {
  const result = await resolveCart([input(5)], async () => product());
  assert.equal(result.adjusted, true);
  assert.equal(result.lines[0].quantity, 3);
  assert.equal(result.lines[0].price.amount, '2.00');
});
test('missing, sold out, unknown stock and backorder lines cannot be added', async () => {
  for (const data of [null, product([]), product([variant({ available: false })]), product([variant({ quantityAvailable: null })]), product([variant({ backorder: true })]), product([variant({ quantityAvailable: 0 })])]) {
    assert.deepEqual(await resolveCart([input()], async () => data), { lines: [], adjusted: true });
  }
});
test('two variants stay separate and each product is fetched only once', async () => {
  let calls = 0;
  const second = variant({ id: 'gid://shopify/ProductVariant/2', price: { amount: '4.00', currencyCode: 'EUR' } });
  const result = await resolveCart([input(), { ...input(2), variantId: second.id }], async () => { calls++; return product([variant(), second]); });
  assert.equal(calls, 1);
  assert.equal(result.adjusted, false);
  assert.deepEqual(result.lines.map((line) => [line.variantId, line.quantity, line.price.amount]), [[id, 1, '2.00'], [second.id, 2, '4.00']]);
});
test('upstream failure propagates instead of silently emptying a saved cart', async () => {
  await assert.rejects(resolveCart([input()], async () => { throw new Error('offline'); }));
});
