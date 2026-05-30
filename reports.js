/**
 * reports.js — Transaction history & analytics rendering
 */

/* ── Transaction history ── */

function renderHistory() {
  const el = document.getElementById('tx-list');
  if (!el) return;

  const txList = getTransactions();
  if (!txList.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--color-text-tertiary);padding:.5rem 0">No transactions recorded yet.</p>';
    return;
  }

  el.innerHTML = txList.map(tx => {
    const d        = new Date(tx.date);
    const dateStr  = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
    const timeStr  = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const summary  = tx.items.map(i => i.name + (i.qty > 1 ? ` ×${i.qty}` : '')).join(', ');
    const truncated = summary.length > 60 ? summary.slice(0, 60) + '…' : summary;

    return `
      <div class="tx-row">
        <div>
          <div class="tx-id">${tx.id}</div>
          <div class="tx-sub">${dateStr} · ${timeStr} · ${tx.method} · ${truncated}</div>
        </div>
        <div class="tx-amt">$${tx.total.toFixed(2)}</div>
      </div>`;
  }).join('');
}

/* ── Reports / analytics ── */

function renderReports() {
  const txList   = getTransactions();
  const products = getProducts();
  const today    = new Date().toDateString();

  // Summary stats
  const todayTx  = txList.filter(t => new Date(t.date).toDateString() === today);
  const todayRev = todayTx.reduce((sum, t) => sum + t.total, 0);
  const totalRev = txList.reduce((sum, t) => sum + t.total, 0);
  const totalUnits = txList.reduce((sum, t) =>
    sum + t.items.reduce((s, i) => s + i.qty, 0), 0);
  const outOfStock = products.filter(p => p.stock === 0).length;

  document.getElementById('report-stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Today's revenue</div>
      <div class="stat-val">$${todayRev.toFixed(2)}</div>
      <div class="stat-sub">${todayTx.length} transaction${todayTx.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">All-time revenue</div>
      <div class="stat-val">$${totalRev.toFixed(2)}</div>
      <div class="stat-sub">${txList.length} transaction${txList.length !== 1 ? 's' : ''}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Units sold (all time)</div>
      <div class="stat-val">${totalUnits}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Products in catalogue</div>
      <div class="stat-val">${products.length}</div>
      <div class="stat-sub">${outOfStock} out of stock</div>
    </div>`;

  // Top-selling products
  const salesMap = {};
  txList.forEach(tx => {
    tx.items.forEach(item => {
      if (!salesMap[item.name]) salesMap[item.name] = { units: 0, revenue: 0 };
      salesMap[item.name].units   += item.qty;
      salesMap[item.name].revenue += item.price * item.qty;
    });
  });
  const topProducts = Object.entries(salesMap)
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .slice(0, 10);

  document.getElementById('top-products').innerHTML = topProducts.length
    ? topProducts.map(([name, d]) =>
        `<tr>
          <td>${name}</td>
          <td>${d.units}</td>
          <td>$${d.revenue.toFixed(2)}</td>
        </tr>`).join('')
    : '<tr><td colspan="3" style="color:var(--color-text-tertiary)">No sales data yet.</td></tr>';

  // Low stock alerts
  const lowStock = products
    .filter(p => p.stock <= p.minStock)
    .sort((a, b) => a.stock - b.stock);

  const dangerColor  = 'var(--color-text-danger)';
  const warningColor = 'var(--color-text-warning)';

  document.getElementById('low-stock').innerHTML = lowStock.length
    ? lowStock.map(p => `
        <tr>
          <td>${p.name}</td>
          <td><strong style="color:${p.stock === 0 ? dangerColor : warningColor}">${p.stock}</strong></td>
          <td>${p.minStock}</td>
        </tr>`).join('')
    : '<tr><td colspan="3" style="color:var(--color-text-success)">All products are sufficiently stocked.</td></tr>';
}
