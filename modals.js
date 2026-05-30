/**
 * modals.js — All modal dialogs
 *
 *  openAddProduct()
 *  openEditProduct(id)
 *  openStockAdjust(id)
 *  openPayment()
 *  closeModal()
 */

/* ── Shared helpers ── */

function showModal(html) {
  const mc = document.getElementById('modal-container');
  mc.innerHTML = html;
  mc.querySelector('.modal-overlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  mc.querySelector('input, select, button')?.focus();
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

/* ── Add product ── */

function openAddProduct() {
  const catOptions = getCategories()
    .filter(c => c !== 'All')
    .map(c => `<option value="${c}">${c}</option>`)
    .join('');

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()">
        <h2><i class="ti ti-plus" aria-hidden="true"></i> Add product</h2>

        <div class="form-group">
          <label for="f-name">Product name</label>
          <input id="f-name" type="text" placeholder="e.g. Whole Milk 1L" autocomplete="off" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-cat">Category</label>
            <select id="f-cat" onchange="toggleNewCat()">
              ${catOptions}
              <option value="__new">+ New category…</option>
            </select>
          </div>
          <div class="form-group" id="newcat-group" style="display:none">
            <label for="f-newcat">New category name</label>
            <input id="f-newcat" type="text" placeholder="e.g. Frozen" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-price">Price ($)</label>
            <input id="f-price" type="number" step="0.01" min="0" placeholder="0.00" />
          </div>
          <div class="form-group">
            <label for="f-stock">Initial stock</label>
            <input id="f-stock" type="number" min="0" placeholder="0" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-minstock">Min. stock alert</label>
            <input id="f-minstock" type="number" min="0" placeholder="5" />
          </div>
          <div class="form-group">
            <label for="f-barcode">Barcode (optional)</label>
            <input id="f-barcode" type="text" placeholder="Auto-assigned if blank" />
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn-sm btn-primary" onclick="saveNewProduct()">
            <i class="ti ti-check" aria-hidden="true"></i> Add product
          </button>
        </div>
      </div>
    </div>`);
}

function toggleNewCat() {
  const sel = document.getElementById('f-cat');
  document.getElementById('newcat-group').style.display =
    sel.value === '__new' ? 'block' : 'none';
}

function saveNewProduct() {
  const name = document.getElementById('f-name').value.trim();
  let   cat  = document.getElementById('f-cat').value;
  if (cat === '__new') cat = document.getElementById('f-newcat').value.trim();
  const price    = parseFloat(document.getElementById('f-price').value)    || 0;
  const stock    = parseInt(document.getElementById('f-stock').value, 10)  || 0;
  const minStock = parseInt(document.getElementById('f-minstock').value, 10) || 5;
  const barcode  = document.getElementById('f-barcode').value.trim() || String(getNextId());

  if (!name) { showToast('Product name is required'); return; }
  if (!cat)  { showToast('Category is required');     return; }

  const id = getNextId();
  bumpNextId();
  addProduct({ id, name, category: cat, price, stock, minStock, barcode });

  renderStock();
  renderProducts();
  renderCatFilters();
  closeModal();
  showToast(`"${name}" added`);
}

/* ── Edit product ── */

function openEditProduct(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()">
        <h2><i class="ti ti-edit" aria-hidden="true"></i> Edit product</h2>

        <div class="form-group">
          <label for="e-name">Product name</label>
          <input id="e-name" type="text" value="${p.name}" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="e-cat">Category</label>
            <input id="e-cat" type="text" value="${p.category}" />
          </div>
          <div class="form-group">
            <label for="e-price">Price ($)</label>
            <input id="e-price" type="number" step="0.01" value="${p.price}" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="e-minstock">Min. stock alert</label>
            <input id="e-minstock" type="number" min="0" value="${p.minStock}" />
          </div>
          <div class="form-group">
            <label for="e-barcode">Barcode</label>
            <input id="e-barcode" type="text" value="${p.barcode}" />
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn-sm btn-primary" onclick="saveEditProduct(${id})">
            <i class="ti ti-check" aria-hidden="true"></i> Save changes
          </button>
        </div>
      </div>
    </div>`);
}

function saveEditProduct(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;

  const name     = document.getElementById('e-name').value.trim()         || p.name;
  const category = document.getElementById('e-cat').value.trim()          || p.category;
  const price    = parseFloat(document.getElementById('e-price').value)    || p.price;
  const minStock = parseInt(document.getElementById('e-minstock').value, 10) || p.minStock;
  const barcode  = document.getElementById('e-barcode').value.trim()       || p.barcode;

  updateProduct({ ...p, name, category, price, minStock, barcode });

  renderStock();
  renderProducts();
  renderCatFilters();
  closeModal();
  showToast('Product updated');
}

/* ── Stock Adjustment ── */

let _adjustType = 'add';

function openStockAdjust(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;
  _adjustType = 'add';

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()">
        <h2><i class="ti ti-adjustments" aria-hidden="true"></i> Stock Adjustment</h2>
        <p class="adjust-product-name">
          <strong>${p.name}</strong>
          <span class="adjust-current-label">Current: <strong id="cur-stock-val">${p.stock}</strong> units</span>
        </p>

        <div class="form-group">
          <label>Adjustment type</label>
          <div class="adjust-type-row">
            <button class="adjust-type-btn active" id="adj-btn-add"    onclick="setAdjustType('add',    ${p.stock})">
              <i class="ti ti-plus" aria-hidden="true"></i> Add stock
            </button>
            <button class="adjust-type-btn"         id="adj-btn-remove" onclick="setAdjustType('remove', ${p.stock})">
              <i class="ti ti-minus" aria-hidden="true"></i> Remove stock
            </button>
            <button class="adjust-type-btn"         id="adj-btn-set"    onclick="setAdjustType('set',    ${p.stock})">
              <i class="ti ti-pencil" aria-hidden="true"></i> Set exact
            </button>
          </div>
        </div>

        <div class="form-group">
          <label for="adj-qty" id="adj-qty-label">Units to add</label>
          <input id="adj-qty" type="number" min="0" placeholder="0" autofocus
            oninput="previewAdjust(${p.stock})"
            onkeydown="if(event.key==='Enter') confirmAdjust(${id})" />
        </div>

        <div id="adj-preview" class="adj-preview" style="display:none"></div>

        <div class="form-group">
          <label for="adj-reason">Reason</label>
          <select id="adj-reason">
            <option value="">Select reason (optional)…</option>
            <option>Delivery / Restock</option>
            <option>Stocktake correction</option>
            <option>Damaged goods</option>
            <option>Expired / wasted</option>
            <option>Returned to supplier</option>
            <option>Theft / shrinkage</option>
            <option>Other</option>
          </select>
        </div>

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn-sm btn-primary" onclick="confirmAdjust(${id})">
            <i class="ti ti-check" aria-hidden="true"></i> Apply adjustment
          </button>
        </div>
      </div>
    </div>`);
}

function setAdjustType(type, currentStock) {
  _adjustType = type;
  document.querySelectorAll('.adjust-type-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`adj-btn-${type}`)?.classList.add('active');

  const labels = {
    add:    'Units to add',
    remove: 'Units to remove',
    set:    'Set stock to (exact count)',
  };
  const label = document.getElementById('adj-qty-label');
  if (label) label.textContent = labels[type];

  previewAdjust(currentStock);
}

function previewAdjust(currentStock) {
  const qty     = parseInt(document.getElementById('adj-qty')?.value, 10);
  const preview = document.getElementById('adj-preview');
  if (!preview) return;

  if (!qty && qty !== 0) {
    preview.style.display = 'none';
    return;
  }

  let newStock;
  if (_adjustType === 'add')    newStock = currentStock + qty;
  if (_adjustType === 'remove') newStock = Math.max(0, currentStock - qty);
  if (_adjustType === 'set')    newStock = Math.max(0, qty);

  const delta = newStock - currentStock;
  const sign  = delta >= 0 ? '+' : '';
  const cls   = delta > 0 ? 'adj-preview-up' : delta < 0 ? 'adj-preview-down' : 'adj-preview-neutral';

  preview.className     = `adj-preview ${cls}`;
  preview.style.display = 'block';
  preview.innerHTML     = `
    <span>New stock level: <strong>${newStock}</strong> units</span>
    <span class="adj-delta">${sign}${delta}</span>
  `;
}

function confirmAdjust(id) {
  const p   = getProducts().find(x => x.id === id);
  if (!p) return;

  const qty = parseInt(document.getElementById('adj-qty')?.value, 10);
  if (isNaN(qty) || qty < 0) { showToast('Enter a valid quantity'); return; }

  let newStock;
  if (_adjustType === 'add')    newStock = p.stock + qty;
  if (_adjustType === 'remove') newStock = Math.max(0, p.stock - qty);
  if (_adjustType === 'set')    newStock = Math.max(0, qty);

  const delta  = newStock - p.stock;
  const reason = document.getElementById('adj-reason')?.value;
  updateProduct({ ...p, stock: newStock });

  renderStock();
  renderProducts();
  closeModal();

  const sign = delta > 0 ? '+' : '';
  const msg  = reason
    ? `"${p.name}" stock adjusted ${sign}${delta} → ${newStock} (${reason})`
    : `"${p.name}" stock adjusted ${sign}${delta} → ${newStock}`;
  showToast(msg);
}

/* Keep openRestock as an alias for backwards compat */
function openRestock(id) { openStockAdjust(id); }

/* ── Payment ── */

function openPayment() {
  if (!cart.length) return;

  const sub     = cartSubtotal();
  const tax     = cartTax();
  const total   = cartTotal();
  const itemsHtml = cart.map(i => `
    <div class="receipt-line">
      <span>${i.name} ×${i.qty}</span>
      <span>$${(i.price * i.qty).toFixed(2)}</span>
    </div>`).join('');

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()">
        <h2><i class="ti ti-credit-card" aria-hidden="true"></i> Payment — $${total.toFixed(2)}</h2>

        <div class="form-group">
          <label for="pay-method">Payment method</label>
          <select id="pay-method" onchange="onPayMethodChange()">
            <option>Cash</option>
            <option>Credit card</option>
            <option>Debit card</option>
            <option>Mobile pay</option>
          </select>
        </div>

        <div id="cash-group" class="form-group">
          <label for="cash-received">Cash received ($)</label>
          <input id="cash-received" type="number" min="0" step="0.01"
            placeholder="${total.toFixed(2)}"
            oninput="calcChange(${total.toFixed(4)})"
            onkeydown="if(event.key==='Enter') confirmPayment()" />
        </div>

        <div id="change-display" style="display:none" class="change-info"></div>

        <hr class="receipt-divider" />
        <p class="card-title" style="margin-bottom:6px">Order summary</p>
        ${itemsHtml}
        <hr class="receipt-divider" />
        <div class="receipt-line"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
        <div class="receipt-line"><span>Tax (${(TAX_RATE*100).toFixed(0)}%)</span><span>$${tax.toFixed(2)}</span></div>
        <div class="receipt-line" style="font-weight:600;font-size:15px;margin-top:4px">
          <span>Total</span><span>$${total.toFixed(2)}</span>
        </div>

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn-sm btn-primary" id="confirm-pay-btn" onclick="confirmPayment()">
            <i class="ti ti-check" aria-hidden="true"></i> Confirm payment
          </button>
        </div>
      </div>
    </div>`);
}

function onPayMethodChange() {
  const method   = document.getElementById('pay-method').value;
  const isCash   = method === 'Cash';
  document.getElementById('cash-group').style.display    = isCash ? 'block' : 'none';
  document.getElementById('change-display').style.display = 'none';
  document.getElementById('confirm-pay-btn').disabled    = false;
}

function calcChange(total) {
  const received = parseFloat(document.getElementById('cash-received').value) || 0;
  const cd       = document.getElementById('change-display');
  const btn      = document.getElementById('confirm-pay-btn');

  cd.style.display = received > 0 ? 'block' : 'none';
  if (received >= total) {
    cd.className     = 'change-info change-ok';
    cd.textContent   = `Change: $${(received - total).toFixed(2)}`;
    btn.disabled     = false;
  } else if (received > 0) {
    cd.className     = 'change-info change-short';
    cd.textContent   = `Short by: $${(total - received).toFixed(2)}`;
    btn.disabled     = true;
  }
}

function confirmPayment() {
  const method = document.getElementById('pay-method')?.value || 'Cash';
  const tx     = finaliseCart(method);
  closeModal();
  showToast(`Payment of $${tx.total.toFixed(2)} confirmed — ${method}`);
  renderHistory();
}
