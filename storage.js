/**
 * storage.js — Persistence layer (localStorage)
 *
 * All reads/writes go through this module so the rest of the app
 * never touches localStorage directly. Swap this file out to use
 * IndexedDB, a REST API, or another backend.
 */

const KEYS = {
  PRODUCTS:     'superpos_products',
  TRANSACTIONS: 'superpos_transactions',
  NEXT_ID:      'superpos_next_id',
};

/** In-memory state (single source of truth during a session). */
let products     = [];
let transactions = [];
let nextId       = DEFAULT_NEXT_ID;

/* ── Read helpers ── */

function getProducts()     { return products; }
function getTransactions() { return transactions; }
function getNextId()       { return nextId; }
function bumpNextId()      { nextId++; persistNextId(); }

/* ── Write helpers ── */

function persistProducts() {
  try { localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products)); }
  catch (e) { console.warn('Could not save products:', e); }
}

function persistTransactions() {
  try { localStorage.setItem(KEYS.TRANSACTIONS, JSON.stringify(transactions)); }
  catch (e) { console.warn('Could not save transactions:', e); }
}

function persistNextId() {
  try { localStorage.setItem(KEYS.NEXT_ID, String(nextId)); }
  catch (e) { console.warn('Could not save nextId:', e); }
}

/* ── Mutation API ── */

function setProducts(list) {
  products = list;
  persistProducts();
}

function addProduct(product) {
  products.push(product);
  persistProducts();
}

function updateProduct(updated) {
  const idx = products.findIndex(p => p.id === updated.id);
  if (idx !== -1) {
    products[idx] = updated;
    persistProducts();
  }
}

function removeProduct(id) {
  products = products.filter(p => p.id !== id);
  persistProducts();
}

function addTransaction(tx) {
  transactions.unshift(tx);   // newest first
  persistTransactions();
}

/* ── Bootstrap ── */

/**
 * loadData()
 * Called once at startup. Tries to read from localStorage;
 * falls back to DEFAULT_PRODUCTS if nothing is stored yet.
 */
function loadData() {
  // --- products ---
  const rawProducts = localStorage.getItem(KEYS.PRODUCTS);
  if (rawProducts) {
    try {
      products = JSON.parse(rawProducts);
    } catch {
      products = [...DEFAULT_PRODUCTS];
      persistProducts();
    }
  } else {
    products = structuredClone(DEFAULT_PRODUCTS);
    persistProducts();
  }

  // --- transactions ---
  const rawTx = localStorage.getItem(KEYS.TRANSACTIONS);
  if (rawTx) {
    try { transactions = JSON.parse(rawTx); }
    catch { transactions = []; }
  }

  // --- next id ---
  const rawId = localStorage.getItem(KEYS.NEXT_ID);
  if (rawId) {
    nextId = parseInt(rawId, 10) || DEFAULT_NEXT_ID;
  } else {
    nextId = products.length
      ? Math.max(...products.map(p => p.id)) + 1
      : DEFAULT_NEXT_ID;
    persistNextId();
  }
}

/**
 * resetData()
 * Clears localStorage and reloads defaults.
 * Useful for development / demos.
 */
function resetData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  loadData();
}
