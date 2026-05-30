/**
 * app.js — Application entry point
 *
 * Responsibilities:
 *  - Bootstrap: load data, render initial UI
 *  - Tab switching
 *  - Clock
 *  - Toast notifications
 *  - PWA install prompt
 *  - Service worker registration
 */

/* ── Tab switching ── */

const TAB_SECTIONS = {
  sell:    'sec-sell',
  stock:   'sec-stock',
  history: 'sec-history',
  reports: 'sec-reports',
};

function switchTab(name) {
  document.querySelectorAll('.tab').forEach((btn, i) => {
    const key = Object.keys(TAB_SECTIONS)[i];
    btn.classList.toggle('active', key === name);
    btn.setAttribute('aria-selected', key === name ? 'true' : 'false');
  });

  Object.entries(TAB_SECTIONS).forEach(([key, sectionId]) => {
    const el = document.getElementById(sectionId);
    if (el) el.classList.toggle('active', key === name);
  });

  const sidebar = document.getElementById('order-sidebar');
  if (sidebar) sidebar.style.display = name === 'sell' ? 'flex' : 'none';

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

/* ── PWA install prompt ── */

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('install-btn');
  if (btn) btn.style.display = 'flex';
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const btn = document.getElementById('install-btn');
  if (btn) btn.style.display = 'none';
  showToast('MG POS installed on this PC!');
});

async function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  if (outcome === 'accepted') {
    showToast('Installing MG POS…');
    const btn = document.getElementById('install-btn');
    if (btn) btn.style.display = 'none';
  }
}

/* ── Service worker registration ── */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        // Check for updates on page focus
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden) reg.update();
        });
      })
      .catch(err => console.warn('SW registration failed:', err));
  });
}

/* ── Handle ?tab= shortcut URLs ── */

function applyUrlTab() {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab && TAB_SECTIONS[tab]) switchTab(tab);
}

/* ── Bootstrap ── */

document.addEventListener('DOMContentLoaded', () => {
  loadData();

  renderCatFilters();
  renderProducts();
  renderCart();

  switchTab('sell');
  applyUrlTab();

  updateClock();
  setInterval(updateClock, 1000);
});
