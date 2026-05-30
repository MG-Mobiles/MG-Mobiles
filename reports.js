/**
 * reports.js — Transaction history & analytics rendering
 */

/* ── Transaction history — grouped by date, expandable ── */

function renderHistory() {
  const el = document.getElementById('tx-list');
  if (!el) return;

  const txList = getTransactions();
  if (!txList.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--color-text-tertiary);padding:.5rem 0">No transactions recorded yet.</p>';
    return;
  }

  // Group transactions by calendar date
  const groups = {};
  txList.forEach(tx => {
    const key = new Date(tx.date).toDateString();
    if (!groups[key]) groups[key] = [];
    groups[key].push(tx);
  });

  // Render each date group
  el.innerHTML = Object.entries(groups).map(([dateKey, txs], gi) => {
    const d        = new Date(dateKey);
    const label    = d.toLocaleDateString(undefined, { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    const dayTotal = txs.reduce((s, t) => s + t.total, 0);
    const groupId  = `txg-${gi}`;

    const rows = txs.map(tx => {
      const timeStr  = new Date(tx.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const summary  = tx.items.map(i => i.name + (i.qty > 1 ? ` ×${i.qty}` : '')).join(', ');
      const truncated = summary.length > 55 ? summary.slice(0, 55) + '…' : summary;
      const balance  = tx.balance || 0;

      return `
        <div class="tx-row tx-row-clickable" onclick="openTransactionDetail('${tx.id}')" title="Click to view details">
          <div>
            <div class="tx-id">${tx.id} <span style="font-weight:400;color:var(--color-text-tertiary)">· ${timeStr} · ${tx.method}</span>
              ${tx.customerName ? `<span style="font-size:11px;color:var(--color-text-info)"> · ${tx.customerName}</span>` : ''}
              ${balance > 0 ? `<span class="tx-debt-badge">owes $${balance.toFixed(2)}</span>` : ''}
            </div>
            <div class="tx-sub">${truncated}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="tx-amt">$${tx.total.toFixed(2)}</div>
            <i class="ti ti-chevron-right" style="font-size:14px;color:var(--color-text-tertiary)"></i>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="tx-date-group">
        <button class="tx-date-header" onclick="toggleDateGroup('${groupId}')" aria-expanded="true">
          <span><i class="ti ti-calendar" style="font-size:13px;margin-right:5px"></i>${label}</span>
          <span class="tx-date-meta">
            ${txs.length} transaction${txs.length !== 1 ? 's' : ''} &nbsp;·&nbsp;
            <strong>$${dayTotal.toFixed(2)}</strong>
            <i class="ti ti-chevron-down tx-group-chevron" id="chev-${groupId}" style="margin-left:6px;font-size:13px;transition:transform .2s"></i>
          </span>
        </button>
        <div class="tx-group-body" id="${groupId}">${rows}</div>
      </div>`;
  }).join('');
}

function toggleDateGroup(groupId) {
  const body  = document.getElementById(groupId);
  const chev  = document.getElementById('chev-' + groupId);
  const open  = body.style.display !== 'none';
  body.style.display  = open ? 'none' : 'block';
  if (chev) chev.style.transform = open ? 'rotate(-90deg)' : 'rotate(0deg)';
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

  // Total cost for all transactions
  const totalCost = txList.reduce((sum, t) => {
    if (t.totalCost != null) return sum + t.totalCost;
    // fallback: look up current cost prices
    return sum + t.items.reduce((s, i) => {
      const p = products.find(x => x.id === i.id);
      return s + (p ? (p.costPrice || 0) : 0) * i.qty;
    }, 0);
  }, 0);
  const totalProfit = totalRev - totalCost;

  // Outstanding debts
  const totalDebt  = getDebtors().reduce((s, d) => s + d.amount, 0);
  const debtCount  = getDebtors().length;

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
      <div class="stat-label">Total profit</div>
      <div class="stat-val" style="color:${totalProfit >= 0 ? 'var(--color-text-success)' : 'var(--color-text-danger)'}">$${totalProfit.toFixed(2)}</div>
      <div class="stat-sub">Revenue − cost</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Units sold (all time)</div>
      <div class="stat-val">${totalUnits}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Products in catalogue</div>
      <div class="stat-val">${products.length}</div>
      <div class="stat-sub">${outOfStock} out of stock</div>
    </div>
    <div class="stat-card ${debtCount > 0 ? 'stat-card-danger' : ''}">
      <div class="stat-label">Outstanding debts</div>
      <div class="stat-val" style="color:${debtCount > 0 ? 'var(--color-text-danger)' : 'var(--color-text-success)'}">$${totalDebt.toFixed(2)}</div>
      <div class="stat-sub">${debtCount > 0 ? `${debtCount} customer${debtCount !== 1 ? 's' : ''} — <a href="#" onclick="openDebtors();return false" style="color:var(--color-text-info)">View</a>` : 'All clear'}</div>
    </div>`;

  // ── Monthly profit breakdown ──
  renderMonthlyProfit(txList, products);

  // Top-selling products
  const salesMap = {};
  txList.forEach(tx => {
    tx.items.forEach(item => {
      if (!salesMap[item.name]) salesMap[item.name] = { units: 0, revenue: 0, cost: 0 };
      salesMap[item.name].units   += item.qty;
      salesMap[item.name].revenue += item.price * item.qty;
      const p = products.find(x => x.id === item.id);
      salesMap[item.name].cost += (p ? (p.costPrice || 0) : (item.costPrice || 0)) * item.qty;
    });
  });
  const topProducts = Object.entries(salesMap)
    .sort((a, b) => b[1].revenue - a[1].revenue)
    .slice(0, 10);

  document.getElementById('top-products').innerHTML = topProducts.length
    ? topProducts.map(([name, d]) => {
        const profit = d.revenue - d.cost;
        return `<tr>
          <td>${name}</td>
          <td>${d.units}</td>
          <td>$${d.revenue.toFixed(2)}</td>
          <td style="color:${profit >= 0 ? 'var(--color-text-success)' : 'var(--color-text-danger)'}">$${profit.toFixed(2)}</td>
        </tr>`;
      }).join('')
    : '<tr><td colspan="4" style="color:var(--color-text-tertiary)">No sales data yet.</td></tr>';

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

/* ── Monthly profit breakdown ── */

function renderMonthlyProfit(txList, products) {
  const container = document.getElementById('monthly-profit-tbody');
  if (!container) return;

  // Aggregate by year-month
  const monthMap = {};
  txList.forEach(tx => {
    const d   = new Date(tx.date);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    if (!monthMap[key]) monthMap[key] = { revenue: 0, cost: 0, txCount: 0 };
    monthMap[key].revenue  += tx.total;
    monthMap[key].txCount  += 1;

    // cost
    if (tx.totalCost != null) {
      monthMap[key].cost += tx.totalCost;
    } else {
      tx.items.forEach(item => {
        const p = products.find(x => x.id === item.id);
        monthMap[key].cost += (p ? (p.costPrice || 0) : (item.costPrice || 0)) * item.qty;
      });
    }
  });

  const months = Object.keys(monthMap).sort().reverse();

  if (!months.length) {
    container.innerHTML = '<tr><td colspan="5" style="color:var(--color-text-tertiary)">No data yet.</td></tr>';
    return;
  }

  container.innerHTML = months.map(key => {
    const [year, month] = key.split('-');
    const label   = new Date(year, month - 1, 1).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    const d       = monthMap[key];
    const profit  = d.revenue - d.cost;
    const margin  = d.revenue > 0 ? ((profit / d.revenue) * 100).toFixed(1) : '0.0';
    return `
      <tr>
        <td style="font-weight:500">${label}</td>
        <td>$${d.revenue.toFixed(2)}</td>
        <td style="color:var(--color-text-secondary)">$${d.cost.toFixed(2)}</td>
        <td style="color:${profit >= 0 ? 'var(--color-text-success)' : 'var(--color-text-danger)'};font-weight:600">$${profit.toFixed(2)}</td>
        <td style="color:var(--color-text-tertiary)">${margin}%</td>
      </tr>`;
  }).join('');
}
