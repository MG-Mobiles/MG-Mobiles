/**
 * modals.js — All modal dialogs
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
            <label for="f-price">Selling price ($)</label>
            <input id="f-price" type="number" step="0.01" min="0" placeholder="0.00" />
          </div>
          <div class="form-group">
            <label for="f-cost">Cost price ($)</label>
            <input id="f-cost" type="number" step="0.01" min="0" placeholder="0.00" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="f-stock">Initial stock</label>
            <input id="f-stock" type="number" min="0" placeholder="0" />
          </div>
          <div class="form-group">
            <label for="f-minstock">Min. stock alert</label>
            <input id="f-minstock" type="number" min="0" placeholder="5" />
          </div>
        </div>

        <div class="form-group">
          <label for="f-barcode">Barcode (optional)</label>
          <input id="f-barcode" type="text" placeholder="Auto-assigned if blank" />
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
  const price     = parseFloat(document.getElementById('f-price').value)      || 0;
  const costPrice = parseFloat(document.getElementById('f-cost').value)       || 0;
  const stock     = parseInt(document.getElementById('f-stock').value, 10)    || 0;
  const minStock  = parseInt(document.getElementById('f-minstock').value, 10) || 5;
  const barcode   = document.getElementById('f-barcode').value.trim() || String(getNextId());

  if (!name) { showToast('Product name is required'); return; }
  if (!cat)  { showToast('Category is required');     return; }

  const id = getNextId();
  bumpNextId();
  addProduct({ id, name, category: cat, price, costPrice, stock, minStock, barcode });

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
            <label for="e-barcode">Barcode</label>
            <input id="e-barcode" type="text" value="${p.barcode}" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="e-price">Selling price ($)</label>
            <input id="e-price" type="number" step="0.01" value="${p.price}" />
          </div>
          <div class="form-group">
            <label for="e-cost">Cost price ($)</label>
            <input id="e-cost" type="number" step="0.01" value="${p.costPrice || 0}" />
          </div>
        </div>

        <div class="form-group">
          <label for="e-minstock">Min. stock alert</label>
          <input id="e-minstock" type="number" min="0" value="${p.minStock}" />
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

  const name      = document.getElementById('e-name').value.trim()           || p.name;
  const category  = document.getElementById('e-cat').value.trim()            || p.category;
  const price     = parseFloat(document.getElementById('e-price').value)     || p.price;
  const costPrice = parseFloat(document.getElementById('e-cost').value)      ?? p.costPrice ?? 0;
  const minStock  = parseInt(document.getElementById('e-minstock').value, 10) || p.minStock;
  const barcode   = document.getElementById('e-barcode').value.trim()         || p.barcode;

  updateProduct({ ...p, name, category, price, costPrice, minStock, barcode });

  renderStock();
  renderProducts();
  renderCatFilters();
  closeModal();
  showToast('Product updated');
}

/* ── Restock ── */

function openRestock(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()">
        <h2><i class="ti ti-package" aria-hidden="true"></i> Restock</h2>
        <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:1rem">
          <strong>${p.name}</strong> — current stock: <strong>${p.stock}</strong> units
        </p>
        <div class="form-group">
          <label for="r-qty">Units to add</label>
          <input id="r-qty" type="number" min="1" placeholder="0" autofocus
            onkeydown="if(event.key==='Enter') confirmRestock(${id})" />
        </div>
        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Cancel</button>
          <button class="btn-sm btn-primary" onclick="confirmRestock(${id})">
            <i class="ti ti-plus" aria-hidden="true"></i> Add stock
          </button>
        </div>
      </div>
    </div>`);
}

function confirmRestock(id) {
  const qty = parseInt(document.getElementById('r-qty').value, 10);
  if (!qty || qty <= 0) { showToast('Enter a valid quantity'); return; }

  const p = getProducts().find(x => x.id === id);
  if (!p) return;
  updateProduct({ ...p, stock: p.stock + qty });

  renderStock();
  renderProducts();
  closeModal();
  showToast(`Added ${qty} unit${qty !== 1 ? 's' : ''} to "${p.name}"`);
}

/* ── Payment ── */

function openPayment() {
  if (!cart.length) return;

  const sub   = cartSubtotal();
  const tax   = cartTax();
  const total = cartTotal();

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
          <select id="pay-method" onchange="onPayMethodChange(${total.toFixed(4)})">
            <option>Cash</option>
            <option>Debit card</option>
            <option>Credit card</option>
            <option>Mobile pay</option>
          </select>
        </div>

        <!-- Cash: amount received + change -->
        <div id="cash-group" class="form-group">
          <label for="cash-received">Cash received ($)</label>
          <input id="cash-received" type="number" min="0" step="0.01"
            placeholder="${total.toFixed(2)}"
            oninput="calcChange(${total.toFixed(4)})"
            onkeydown="if(event.key==='Enter') confirmPayment()" />
        </div>
        <div id="change-display" style="display:none" class="change-info"></div>

        <!-- Debit: customer name + amount paid + remaining -->
        <div id="debit-group" style="display:none">
          <div class="form-group">
            <label for="debit-customer">Customer name</label>
            <input id="debit-customer" type="text" placeholder="e.g. John Doe" autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="debit-paid">Amount paid now ($)</label>
            <input id="debit-paid" type="number" min="0" step="0.01"
              placeholder="${total.toFixed(2)}"
              oninput="calcDebitBalance(${total.toFixed(4)})" />
          </div>
          <div id="debit-balance-display" style="display:none" class="change-info"></div>
        </div>

        <hr class="receipt-divider" />
        <p class="card-title" style="margin-bottom:6px">Order summary</p>
        ${itemsHtml}
        <hr class="receipt-divider" />
        <div class="receipt-line"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
        <div class="receipt-line"><span>Tax</span><span>$${tax.toFixed(2)}</span></div>
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

function onPayMethodChange(total) {
  const method = document.getElementById('pay-method').value;
  document.getElementById('cash-group').style.display         = method === 'Cash'        ? 'block' : 'none';
  document.getElementById('change-display').style.display     = 'none';
  document.getElementById('debit-group').style.display        = method === 'Debit card'  ? 'block' : 'none';
  document.getElementById('debit-balance-display').style.display = 'none';
  document.getElementById('confirm-pay-btn').disabled         = false;
}

function calcChange(total) {
  const received = parseFloat(document.getElementById('cash-received').value) || 0;
  const cd  = document.getElementById('change-display');
  const btn = document.getElementById('confirm-pay-btn');
  cd.style.display = received > 0 ? 'block' : 'none';
  if (received >= total) {
    cd.className   = 'change-info change-ok';
    cd.textContent = `Change: $${(received - total).toFixed(2)}`;
    btn.disabled   = false;
  } else if (received > 0) {
    cd.className   = 'change-info change-short';
    cd.textContent = `Short by: $${(total - received).toFixed(2)}`;
    btn.disabled   = true;
  }
}

function calcDebitBalance(total) {
  const paid    = parseFloat(document.getElementById('debit-paid').value) || 0;
  const bd      = document.getElementById('debit-balance-display');
  const balance = total - paid;
  bd.style.display = paid > 0 ? 'block' : 'none';
  if (balance <= 0) {
    bd.className   = 'change-info change-ok';
    bd.textContent = `Paid in full${balance < 0 ? ' — change: $' + Math.abs(balance).toFixed(2) : ''}`;
  } else {
    bd.className   = 'change-info change-short';
    bd.textContent = `Remaining balance owed: $${balance.toFixed(2)}`;
  }
}

function confirmPayment() {
  const method = document.getElementById('pay-method')?.value || 'Cash';
  let amountPaid   = undefined;
  let customerName = '';

  if (method === 'Cash') {
    const received = parseFloat(document.getElementById('cash-received')?.value);
    if (!isNaN(received)) amountPaid = received;
  } else if (method === 'Debit card') {
    const paid = parseFloat(document.getElementById('debit-paid')?.value);
    customerName = document.getElementById('debit-customer')?.value.trim() || '';
    if (!isNaN(paid)) amountPaid = paid;
    const total = cartTotal();
    if (!isNaN(paid) && paid < total && !customerName) {
      showToast('Please enter a customer name for partial payment');
      return;
    }
  }

  const tx = finaliseCart(method, amountPaid, customerName);
  closeModal();
  showToast(`Payment of $${tx.total.toFixed(2)} confirmed — ${method}`);
  renderHistory();

  // Offer to print receipt
  openReceiptPrint(tx);
}

/* ── Receipt print modal ── */

function openReceiptPrint(tx) {
  const d         = new Date(tx.date);
  const dateStr   = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr   = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const balance   = tx.balance || 0;
  const paid      = tx.paid   !== undefined ? tx.paid : tx.total;

  const itemsHtml = tx.items.map(i => `
    <div class="receipt-line">
      <span>${i.name} ×${i.qty}</span>
      <span>$${(i.price * i.qty).toFixed(2)}</span>
    </div>`).join('');

  const debtLine = balance > 0 ? `
    <div class="receipt-line" style="color:var(--color-text-danger);font-weight:600">
      <span>Outstanding balance</span><span>$${balance.toFixed(2)}</span>
    </div>` : '';

  const customerLine = tx.customerName ? `
    <div class="receipt-line"><span>Customer</span><span>${tx.customerName}</span></div>` : '';

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()" style="max-width:420px">
        <h2><i class="ti ti-printer" aria-hidden="true"></i> Print receipt</h2>

        <div class="print-choice-btns">
          <button class="print-choice-btn" onclick="doPrint('full', ${JSON.stringify(tx).replace(/"/g,'&quot;')})">
            <i class="ti ti-receipt" aria-hidden="true"></i>
            <span>Full receipt</span>
            <small>Items + totals + customer info</small>
          </button>
          <button class="print-choice-btn" onclick="doPrint('summary', ${JSON.stringify(tx).replace(/"/g,'&quot;')})">
            <i class="ti ti-file-text" aria-hidden="true"></i>
            <span>Summary only</span>
            <small>Total + payment method</small>
          </button>
          <button class="print-choice-btn" onclick="doPrint('items', ${JSON.stringify(tx).replace(/"/g,'&quot;')})">
            <i class="ti ti-list" aria-hidden="true"></i>
            <span>Items list</span>
            <small>Itemised list only</small>
          </button>
        </div>

        <div class="receipt-preview" id="receipt-preview">
          <div style="text-align:center;margin-bottom:10px">
            <strong style="font-size:16px">MG POS</strong><br>
            <small>${dateStr} · ${timeStr}</small><br>
            <small>Ref: ${tx.id}</small>
          </div>
          <hr class="receipt-divider" />
          ${itemsHtml}
          <hr class="receipt-divider" />
          <div class="receipt-line"><span>Subtotal</span><span>$${tx.subtotal.toFixed(2)}</span></div>
          <div class="receipt-line"><span>Tax</span><span>$${tx.tax.toFixed(2)}</span></div>
          <div class="receipt-line" style="font-weight:700"><span>Total</span><span>$${tx.total.toFixed(2)}</span></div>
          <div class="receipt-line"><span>Paid</span><span>$${paid.toFixed(2)}</span></div>
          ${debtLine}
          ${customerLine}
          <div class="receipt-line"><span>Method</span><span>${tx.method}</span></div>
          <hr class="receipt-divider" />
          <div style="text-align:center;font-size:11px;color:var(--color-text-secondary)">Thank you!</div>
        </div>

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>`);
}

function doPrint(type, tx) {
  const d       = new Date(tx.date);
  const dateStr = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const paid    = tx.paid !== undefined ? tx.paid : tx.total;
  const balance = tx.balance || 0;

  let body = '';

  const header = `
    <div style="text-align:center;margin-bottom:12px">
      <strong style="font-size:18px">MG POS</strong><br>
      <span>${dateStr} · ${timeStr}</span><br>
      <span style="font-size:11px;color:#888">Ref: ${tx.id}</span>
    </div>
    <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">`;

  const itemsList = tx.items.map(i =>
    `<div style="display:flex;justify-content:space-between;padding:3px 0">
      <span>${i.name} ×${i.qty}</span>
      <span>$${(i.price * i.qty).toFixed(2)}</span>
    </div>`).join('');

  const totals = `
    <hr style="border:none;border-top:1px dashed #ccc;margin:8px 0">
    <div style="display:flex;justify-content:space-between;padding:3px 0"><span>Subtotal</span><span>$${tx.subtotal.toFixed(2)}</span></div>
    <div style="display:flex;justify-content:space-between;padding:3px 0"><span>Tax</span><span>$${tx.tax.toFixed(2)}</span></div>
    <div style="display:flex;justify-content:space-between;font-weight:700;font-size:15px;padding:4px 0"><span>Total</span><span>$${tx.total.toFixed(2)}</span></div>
    <div style="display:flex;justify-content:space-between;padding:3px 0"><span>Paid</span><span>$${paid.toFixed(2)}</span></div>
    ${balance > 0 ? `<div style="display:flex;justify-content:space-between;padding:3px 0;color:red;font-weight:600"><span>Balance owed</span><span>$${balance.toFixed(2)}</span></div>` : ''}
    ${tx.customerName ? `<div style="display:flex;justify-content:space-between;padding:3px 0"><span>Customer</span><span>${tx.customerName}</span></div>` : ''}
    <div style="display:flex;justify-content:space-between;padding:3px 0"><span>Method</span><span>${tx.method}</span></div>`;

  if (type === 'full') {
    body = header + itemsList + totals + `<hr style="border:none;border-top:1px dashed #ccc;margin:8px 0"><div style="text-align:center;font-size:11px">Thank you!</div>`;
  } else if (type === 'summary') {
    body = header + totals;
  } else {
    body = header + itemsList;
  }

  const win = window.open('', '_blank', 'width=380,height=600');
  win.document.write(`<!DOCTYPE html><html><head><title>Receipt ${tx.id}</title>
    <style>body{font-family:monospace;font-size:13px;padding:20px;max-width:320px;margin:0 auto}</style>
    </head><body>${body}</body></html>`);
  win.document.close();
  win.focus();
  win.print();
}

/* ── Debtors modal ── */

function openDebtors() {
  const list = getDebtors();
  const rows = list.length
    ? list.map((d, i) => `
        <tr>
          <td>${d.name}</td>
          <td style="color:var(--color-text-danger);font-weight:600">$${d.amount.toFixed(2)}</td>
          <td style="font-size:11px;color:var(--color-text-tertiary)">${new Date(d.date).toLocaleDateString()}</td>
          <td style="font-size:11px;color:var(--color-text-tertiary)">${d.txId}</td>
          <td>
            <button class="btn-sm btn-primary" style="padding:2px 8px;font-size:11px" onclick="settleDebtor(${i})">
              Settle
            </button>
          </td>
        </tr>`).join('')
    : '<tr><td colspan="5" style="color:var(--color-text-tertiary);text-align:center">No outstanding debts</td></tr>';

  const total = list.reduce((s, d) => s + d.amount, 0);

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()" style="width:520px">
        <h2><i class="ti ti-users" aria-hidden="true"></i> Outstanding balances</h2>
        ${list.length ? `<p style="font-size:12px;color:var(--color-text-secondary);margin-bottom:.75rem">Total owed: <strong style="color:var(--color-text-danger)">$${total.toFixed(2)}</strong></p>` : ''}
        <div class="table-wrap">
          <table>
            <thead><tr><th>Customer</th><th>Owed</th><th>Date</th><th>Ref</th><th></th></tr></thead>
            <tbody id="debtors-tbody">${rows}</tbody>
          </table>
        </div>
        <div class="modal-actions">
          <button class="btn-sm btn-primary" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>`);
}

function settleDebtor(index) {
  const d = getDebtors()[index];
  if (!d) return;
  if (!confirm(`Mark $${d.amount.toFixed(2)} from "${d.name}" as settled?`)) return;
  // call storage layer
  const debtors = getDebtors();
  debtors.splice(index, 1);
  persistDebtors();
  openDebtors();
  showToast('Debt settled');
}

/* ── Transaction detail modal ── */

function openTransactionDetail(txId) {
  const tx = getTransactions().find(t => t.id === txId);
  if (!tx) return;

  const d       = new Date(tx.date);
  const dateStr = d.toLocaleDateString(undefined, { weekday:'long', day:'2-digit', month:'long', year:'numeric' });
  const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const paid    = tx.paid !== undefined ? tx.paid : tx.total;
  const balance = tx.balance || 0;

  const itemsHtml = tx.items.map(i => `
    <tr>
      <td>${i.name}</td>
      <td style="text-align:center">${i.qty}</td>
      <td>$${i.price.toFixed(2)}</td>
      <td style="font-weight:600">$${(i.price * i.qty).toFixed(2)}</td>
    </tr>`).join('');

  showModal(`
    <div class="modal-overlay">
      <div class="modal" onclick="event.stopPropagation()" style="width:480px">
        <h2><i class="ti ti-receipt" aria-hidden="true"></i> ${tx.id}</h2>
        <p style="font-size:12px;color:var(--color-text-secondary);margin-bottom:1rem">${dateStr} · ${timeStr} · ${tx.method}</p>

        <table>
          <thead><tr><th>Item</th><th style="text-align:center">Qty</th><th>Unit</th><th>Total</th></tr></thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <hr class="receipt-divider" style="margin:12px 0" />
        <div class="receipt-line"><span>Subtotal</span><span>$${tx.subtotal.toFixed(2)}</span></div>
        <div class="receipt-line"><span>Tax</span><span>$${tx.tax.toFixed(2)}</span></div>
        <div class="receipt-line" style="font-weight:700;font-size:15px"><span>Total</span><span>$${tx.total.toFixed(2)}</span></div>
        <div class="receipt-line"><span>Paid</span><span>$${paid.toFixed(2)}</span></div>
        ${balance > 0 ? `<div class="receipt-line" style="color:var(--color-text-danger);font-weight:600"><span>Balance owed</span><span>$${balance.toFixed(2)}</span></div>` : ''}
        ${tx.customerName ? `<div class="receipt-line"><span>Customer</span><span>${tx.customerName}</span></div>` : ''}

        <div class="modal-actions">
          <button class="btn-sm" onclick="closeModal()">Close</button>
          <button class="btn-sm btn-primary" onclick="closeModal(); doPrint('full', ${JSON.stringify(tx).replace(/"/g,'&quot;')})">
            <i class="ti ti-printer" aria-hidden="true"></i> Print
          </button>
        </div>
      </div>
    </div>`);
}
