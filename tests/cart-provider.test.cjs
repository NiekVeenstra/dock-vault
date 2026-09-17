const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { randomUUID } = require('node:crypto');
const ts = require('typescript');

const key = 'dock-vault-test-cart-v1';
const id = 'gid://shopify/ProductVariant/1';
const item = (quantity = 1) => ({ slug: 'test-card', variantId: id, quantity });
const saved = (pending = []) => ({ items: [item()], revisions: {}, pending });
const pending = { receipt: 'signed-test-receipt', revisions: {} };
const response = (body, ok = true) => ({ ok, json: async () => body });
const tick = () => new Promise(setImmediate);

// Execute the actual provider with controlled hooks, browser events and network I/O.
// No Next server, Shopify credentials, DOM library or additional dependency is needed.
function mount(initial = saved(), status = async () => response({ paid: false })) {
  const hooks = [], effects = [], cleanups = [], listeners = new Map(), timers = new Map();
  const requests = [];
  let cursor = 0, value, first = true, raw = JSON.stringify(initial), timerId = 0;
  const storage = { getItem: () => raw, setItem: (_, next) => { raw = next; } };
  const events = {
    addEventListener(name, fn) { if (!listeners.has(name)) listeners.set(name, new Set()); listeners.get(name).add(fn); },
    removeEventListener(name, fn) { listeners.get(name)?.delete(fn); },
  };
  const document = { ...events, visibilityState: 'visible' };
  const window = { ...events, setTimeout(fn, delay) { timers.set(++timerId, { fn, delay }); return timerId; } };
  const react = {
    createContext: () => ({ Provider: 'provider' }),
    useState(initialValue) {
      const index = cursor++;
      if (first) hooks[index] = initialValue;
      return [hooks[index], (next) => { hooks[index] = typeof next === 'function' ? next(hooks[index]) : next; }];
    },
    useRef(initialValue) { const index = cursor++; if (first) hooks[index] = { current: initialValue }; return hooks[index]; },
    useEffect(fn) { if (first) effects.push(fn); },
  };
  let cartHandler = async (input) => response({ adjusted: false, lines: input.map((entry) => ({ ...entry, stock: 5, price: { amount: '2', currencyCode: 'EUR' } })) });
  const module = { exports: {} };
  const source = ts.transpileModule(readFileSync(require.resolve('../components/market-hall/TestCart.tsx'), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(source, {
    module, exports: module.exports, localStorage: storage, window, document,
    AbortSignal, crypto: { randomUUID }, clearTimeout: (timer) => timers.delete(timer),
    fetch: async (url, options) => {
      const body = JSON.parse(options.body);
      requests.push({ url, body });
      return url.endsWith('/status') ? status(body) : cartHandler(body);
    },
    require(name) {
      if (name === 'react') return react;
      if (name === 'react/jsx-runtime') return { jsx: (_, props) => props };
      if (name === '@/lib/market-hall/cart-storage') return require('../lib/market-hall/cart-storage.ts');
      if (name === '@/lib/market-hall/cart') return require('../lib/market-hall/cart.ts');
      return {};
    },
  });
  function render() {
    cursor = 0;
    value = module.exports.TestCartProvider({ checkoutEnabled: true, receiptTrackingEnabled: true }).value;
    first = false;
    return value;
  }
  render();
  for (const effect of effects) cleanups.push(effect());
  return {
    requests, storage, document,
    get cart() { return render(); },
    get stored() { return JSON.parse(raw); },
    setStored(next) { raw = JSON.stringify(next); },
    setCartHandler(fn) { cartHandler = fn; },
    emit(name, event = {}) { for (const fn of listeners.get(name) ?? []) fn(event); },
    async retry(delay) { for (const timer of [...timers.values()]) if (timer.delay === delay) timer.fn(); await tick(); },
    unmount() { for (const cleanup of cleanups) cleanup?.(); },
    get timerCount() { return timers.size; },
    get listenerCount() { return [...listeners.values()].reduce((sum, entries) => sum + entries.size, 0); },
  };
}
const cartCalls = (app) => app.requests.filter(({ url }) => url.endsWith('/cart')).length;

test('initial restore checks stock once; focus, visibility, pageshow and unrelated storage do not repeat it', async () => {
  const app = mount();
  await tick();
  assert.equal(cartCalls(app), 1);
  assert.equal(app.cart.notice, null);
  for (const name of ['focus', 'pageshow', 'visibilitychange']) { app.emit(name); await tick(); }
  app.emit('storage', { storageArea: app.storage, key: 'language' });
  for (const delay of [3000, 10000, 30000]) await app.retry(delay);
  assert.equal(cartCalls(app), 1);
  assert.equal(app.cart.busy, false);
  app.unmount();
  assert.equal(app.timerCount, 0);
  assert.equal(app.listenerCount, 0);
});

test('add, quantity change and manual refresh still check authoritative stock', async () => {
  const app = mount();
  await tick();
  app.cart.add('test-card', id, 1);
  assert.equal(app.cart.busy, true);
  await tick();
  assert.equal(app.cart.lines[0].quantity, 2);
  app.cart.update(id, 3); await tick();
  app.cart.refresh(); await tick();
  assert.equal(cartCalls(app), 4);
  assert.equal(app.cart.lines[0].quantity, 3);
});

test('unpaid and failed automatic payment retries do not fetch stock or change the product loading state', async () => {
  let fail = false, finish;
  const app = mount(saved([pending]), async () => fail ? new Promise((resolve) => { finish = resolve; }) : response({ paid: false }));
  await tick();
  const before = cartCalls(app);
  await app.retry(3000);
  assert.equal(app.cart.notice, null);
  fail = true;
  app.emit('focus');
  assert.equal(app.cart.checkingPayment, true);
  assert.equal(app.cart.busy, false);
  finish(response({}, false)); await tick();
  assert.equal(cartCalls(app), before);
  assert.equal(app.cart.notice, null);
  assert.equal(app.stored.pending.length, 1);
});

test('confirmed payment removes purchased lines without refreshing stock', async () => {
  let paid = false;
  const app = mount(saved([pending]), async () => response({ paid, lines: [item()] }));
  await tick();
  paid = true;
  await app.retry(3000);
  assert.equal(cartCalls(app), 1);
  assert.equal(app.cart.lines.length, 0);
  assert.equal(app.stored.items.length, 0);
  assert.equal(app.stored.pending.length, 0);
  assert.equal(app.cart.notice, 'paid');
  await app.retry(10000);
  assert.equal(app.requests.filter(({ url }) => url.endsWith('/status')).length, 2);
});

test('add stays usable during payment checks and edits survive a later paid response', async () => {
  let finish;
  let delayed = false;
  const app = mount(saved([pending]), async () => delayed ? new Promise((resolve) => { finish = resolve; }) : response({ paid: false }));
  await tick();
  delayed = true; app.emit('focus');
  app.cart.add('test-card', id, 1); await tick();
  assert.equal(app.cart.lines[0].quantity, 2);
  finish(response({ paid: true, lines: [item()] })); await tick();
  assert.equal(app.cart.lines[0].quantity, 2);
  assert.equal(app.stored.items[0].quantity, 2);
  assert.equal(app.cart.notice, 'paidReview');
});

test('payment response during a stock mutation is deferred, preserving the receipt for retry', async () => {
  let finishPayment, finishCart, delayed = false;
  const app = mount(saved([pending]), async () => delayed ? new Promise((resolve) => { finishPayment = resolve; }) : response({ paid: false }));
  await tick(); delayed = true; app.emit('focus');
  app.setCartHandler((input) => new Promise((resolve) => { finishCart = () => resolve(response({ lines: input.map((entry) => ({ ...entry, stock: 5 })), adjusted: false })); }));
  app.cart.add('test-card', id, 1);
  finishPayment(response({ paid: true, lines: [item()] })); await tick();
  assert.equal(app.stored.pending.length, 1);
  finishCart(); await tick();
  app.emit('focus'); finishPayment(response({ paid: true, lines: [item()] })); await tick();
  assert.equal(app.stored.pending.length, 0);
  assert.equal(app.cart.lines[0].quantity, 2);
});

test('an actual cart edit in another tab is hydrated once, without a false added notice', async () => {
  const app = mount(); await tick();
  app.setStored({ ...saved(), items: [item(2)] });
  app.emit('storage', { storageArea: app.storage, key }); await tick();
  assert.equal(cartCalls(app), 2);
  assert.equal(app.cart.lines[0].quantity, 2);
  assert.equal(app.cart.notice, null);
  app.emit('focus'); await tick();
  assert.equal(cartCalls(app), 2);
});

test('an empty cart performs no stock requests', async () => {
  const app = mount({ ...saved(), items: [] }); await tick();
  app.emit('focus'); await tick();
  assert.equal(cartCalls(app), 0);
  assert.equal(app.cart.busy, false);
});

test('focus during initial payment restoration does not start an early stock check', async () => {
  let finish;
  const app = mount(saved([pending]), () => new Promise((resolve) => { finish = resolve; }));
  app.emit('focus'); app.emit('pageshow'); await app.retry(3000);
  assert.equal(app.requests.length, 1);
  assert.equal(cartCalls(app), 0);
  finish(response({ paid: true, lines: [item()] })); await tick();
  assert.equal(cartCalls(app), 0);
  assert.equal(app.cart.busy, false);
  assert.equal(app.cart.lines.length, 0);
});

test('a new variant added in another tab during payment remains visible after reconciliation', async () => {
  let delayed = false, finish;
  const app = mount(saved([pending]), () => delayed ? new Promise((resolve) => { finish = resolve; }) : response({ paid: false }));
  await tick(); delayed = true; app.emit('focus');
  const second = { ...item(), variantId: 'gid://shopify/ProductVariant/2' };
  app.setStored({ ...saved([pending]), items: [item(), second] });
  app.document.visibilityState = 'hidden';
  app.emit('storage', { storageArea: app.storage, key });
  finish(response({ paid: true, lines: [item()] })); await tick();
  assert.equal(app.cart.lines.length, 1);
  assert.equal(app.cart.lines[0].variantId, second.variantId);
  assert.equal(app.stored.items[0].variantId, second.variantId);
  assert.equal(cartCalls(app), 2);
});
