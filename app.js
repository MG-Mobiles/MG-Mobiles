/**
 * app.js — Application entry point
 *
 * Responsibilities:
 *  - Bootstrap: load data, render initial UI
 *  - Tab switching
 *  - Clock
 *  - Toast notifications
 */

/* ── Tab switching ── */

const TAB_SECTIONS = {
  sell:    'sec-sell',
  stock:   'sec-stock',
  history: 'sec-history',
  reports: 'sec-reports',
};

function switchTab(name) {
  // Update tab buttons
  document.querySelectorAll('.tab').forEach((btn, i) => {
    const key = Object.keys(TAB_SECTIONS)[i];
    btn.classList.toggle('active', key === name);
    btn.setAttribute('aria-selected', key === name ? 'true' : 'false');
  });

  // Show/hide sections
  Object.entries(TAB_SECTIONS).forEach(([key, sectionId]) => {
    const el = document.getElementById(sectionId);
    if (el) el.classList.toggle('active', key === name);
  });

  // Show/hide sidebar (only relevant on Sell tab)
  const sidebar = document.getElementById('order-sidebar');
  if (sidebar) sidebar.style.display = name === 'sell' ? 'flex' : 'none';

  // Lazy-render sections that need fresh data
  if (name === 'stock')   renderStock();
  if (name === 'history') renderHistory();
  if (name === 'reports') renderReports();
}

/* ── Clock ── */

function updateClock() {
  const now     = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  const el      = document.getElementById('clock');
  if (el) el.textContent = `${timeStr} · ${dateStr}`;
}

/* ── Toast notifications ── */

let toastTimer = null;

function showToast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ── Bootstrap ── */

document.addEventListener('DOMContentLoaded', () => {
  loadData();

  // Initial render
  renderCatFilters();
  renderProducts();
  renderCart();

  // Ensure only the Sell tab is visible on load
  switchTab('sell');

  // Clock
  updateClock();
  setInterval(updateClock, 1000);
});
