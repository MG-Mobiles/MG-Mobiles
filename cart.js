/**
 * cart.js — Shopping cart state & DOM rendering
 *
 * The cart is an array of line items:
 *   { id, name, price, qty }
 *
 * All mutations go through the functions below so the UI stays
 * in sync via renderCart().
 */

let cart = [];

/* ── Helpers ── */

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartTax() {
  return cartSubtotal() * TAX_RATE;
}

function cartTotal() {
  return cartSubtotal() + cartTax();
}

function cartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* ── Mutations ── */

function addToCart(productId) {
  const product = getProducts().find(p => p.id === productId);
  if (!product || product.stock === 0) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty >= product.stock) {
      showToast('Not enough stock');
      return;
    }
    existing.qty++;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, qty: 1 });
  }
  renderCart();
}

function changeQty(index, delta) {
  const item    = cart[index];
  const product = getProducts().find(p => p.id === item.id);
  item.qty += delta;
  if (item.qty <= 0) {
    cart.splice(index, 1);
  } else if (product && item.qty > product.stock) {
    item.qty = product.stock;
    showToast('Max stock reached');
  }
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

/**
 * finaliseCart()
 * Deducts sold quantities from stock, records a transaction,
 * and empties the cart.
 * @param {string} paymentMethod
 */
function finaliseCart(paymentMethod) {
  const tx = {
    id:       'TX' + Date.now(),
    date:     new Date().toISOString(),
    items:    cart.map(item => ({ ...item })),
    subtotal: cartSubtotal(),
    tax:      cartTax(),
    total:    cartTotal(),
    method:   paymentMethod,
  };

  // Deduct from stock
  cart.forEach(item => {
    const products = getProducts();
    const product  = products.find(p => p.id === item.id);
    if (product) {
      product.stock = Math.max(0, product.stock - item.qty);
    }
  });
  persistProducts();

  addTransaction(tx);
  clearCart();
  renderProducts();
  renderStock();
  return tx;
}

/* ── Rendering ── */

function renderCart() {
  const el = document.getElementById('cart-items');
  if (!el) return;

  if (!cart.length) {
    el.innerHTML = `
      <div class="cart-empty">
        <i class="ti ti-shopping-cart" aria-hidden="true"></i>
        Cart is empty
      </div>`;
  } else {
    el.innerHTML = cart.map((item, i) => `
      <div class="cart-item" role="listitem">
        <div class="ci-info">
          <div class="ci-name" title="${item.name}">${item.name}</div>
          <div class="ci-unit">$${item.price.toFixed(2)} each</div>
        </div>
        <div class="qty-ctrl" aria-label="Quantity controls">
          <button class="qty-btn" onclick="changeQty(${i}, -1)" aria-label="Decrease quantity">−</button>
          <span class="qty-num" aria-label="${item.qty} units">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i},  1)" aria-label="Increase quantity">+</button>
        </div>
        <div class="ci-total">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="del-btn" onclick="removeFromCart(${i})" aria-label="Remove ${item.name}">
          <i class="ti ti-x" aria-hidden="true" style="font-size:14px"></i>
        </button>
      </div>`).join('');
  }

  document.getElementById('subtotal').textContent  = '$' + cartSubtotal().toFixed(2);
  document.getElementById('tax').textContent        = '$' + cartTax().toFixed(2);
  document.getElementById('total').textContent      = '$' + cartTotal().toFixed(2);
  document.getElementById('cart-count').textContent = cartItemCount() + ' items';
  document.getElementById('pay-btn').disabled       = cart.length === 0;
}
