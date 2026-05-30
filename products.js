/**
 * products.js — Product grid (sell view) & stock table rendering
 */

let activeCategory = 'All';

/* ── Helpers ── */

function stockStatus(product) {
  if (product.stock === 0)               return 'out';
  if (product.stock <= product.minStock) return 'low';
  return 'ok';
}

function getCategories() {
  const cats = [...new Set(getProducts().map(p => p.category))].sort();
  return ['All', ...cats];
}

/* ── Category filter bar ── */

function renderCatFilters() {
  const el = document.getElementById('cat-filters');
  if (!el) return;
  el.innerHTML = getCategories().map(cat => `
    <button
      class="filter-btn${cat === activeCategory ? ' active' : ''}"
      onclick="setCategory('${cat}')"
      aria-pressed="${cat === activeCategory}"
    >${cat}</button>`).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderCatFilters();
  renderProducts();
}

/* ── Product grid (sell view) ── */

function renderProducts() {
  const query = (document.getElementById('product-search')?.value || '').toLowerCase();
  const list  = getProducts().filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchQ   = !query || p.name.toLowerCase().includes(query) || p.barcode.includes(query);
    return matchCat && matchQ;
  });

  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '<p style="font-size:13px;color:var(--color-text-tertiary);padding:.5rem 0">No products found.</p>';
    return;
  }

  const badgeClass = { ok: 'badge-ok', low: 'badge-low', out: 'badge-out' };
  const badgeLabel = { ok: 'In stock',  low: 'Low',       out: 'Out' };

  grid.innerHTML = list.map(product => {
    const status   = stockStatus(product);
    const disabled = status === 'out';
    return `
      <button
        class="prod-btn"
        onclick="addToCart(${product.id})"
        ${disabled ? 'disabled' : ''}
        role="listitem"
        aria-label="${product.name}, $${product.price.toFixed(2)}, ${badgeLabel[status]}"
      >
        <span class="stock-badge ${badgeClass[status]}">${badgeLabel[status]}</span>
        <div class="name">${product.name}</div>
        <div class="price">$${product.price.toFixed(2)}</div>
      </button>`;
  }).join('');
}

/* ── Stock management table ── */

function renderStock() {
  const query = (document.getElementById('stock-search')?.value || '').toLowerCase();
  const list  = getProducts().filter(p =>
    !query || p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  const tbody = document.getElementById('stock-table');
  if (!tbody) return;

  const tagClass = { ok: 'tag-ok', low: 'tag-low', out: 'tag-out' };
  const tagLabel = { ok: 'In stock', low: 'Low stock', out: 'Out of stock' };

  if (!list.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="color:var(--color-text-tertiary)">No products match your search.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(product => {
    const s = stockStatus(product);
    const cost = product.costPrice != null ? '$' + product.costPrice.toFixed(2) : '—';
    return `
      <tr>
        <td>${product.name}</td>
        <td style="color:var(--color-text-secondary)">${product.category}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td style="color:var(--color-text-secondary)">${cost}</td>
        <td>
          <strong>${product.stock}</strong>
          <span style="font-size:11px;color:var(--color-text-tertiary)"> / min ${product.minStock}</span>
        </td>
        <td><span class="tag ${tagClass[s]}">${tagLabel[s]}</span></td>
        <td style="white-space:nowrap;display:flex;gap:4px;align-items:center">
          <button class="btn-sm" style="padding:3px 8px;font-size:11px" onclick="openRestock(${product.id})">
            <i class="ti ti-plus" aria-hidden="true"></i> Restock
          </button>
          <button class="btn-sm" style="padding:3px 8px;font-size:11px" onclick="openEditProduct(${product.id})" aria-label="Edit ${product.name}">
            <i class="ti ti-edit" aria-hidden="true"></i>
          </button>
          <button class="btn-sm btn-danger" style="padding:3px 8px;font-size:11px" onclick="deleteProduct(${product.id})" aria-label="Delete ${product.name}">
            <i class="ti ti-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>`;
  }).join('');
}

/* ── Stock mutations ── */

function deleteProduct(id) {
  const product = getProducts().find(p => p.id === id);
  if (!product) return;
  if (!confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
  removeProduct(id);
  renderStock();
  renderProducts();
  renderCatFilters();
  showToast('Product deleted');
}

/* ── CSV export ── */

function exportStock() {
  const rows = ['Product,Category,Selling Price,Cost Price,Stock,Min Stock,Status'];
  getProducts().forEach(p => {
    rows.push(`"${p.name}","${p.category}",${p.price.toFixed(2)},${(p.costPrice||0).toFixed(2)},${p.stock},${p.minStock},${stockStatus(p)}`);
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `stock_export_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
