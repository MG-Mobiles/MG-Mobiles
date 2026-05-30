# SuperPOS — Supermarket Point of Sale

A lightweight, zero-dependency POS system that runs entirely in the browser.
No server required. Data is persisted in `localStorage`.

---

## Project structure

```
superpos/
├── index.html          ← Single HTML entry point
├── css/
│   └── styles.css      ← All styling (light + dark mode via CSS variables)
└── js/
    ├── data.js         ← Default product catalogue & constants (TAX_RATE, etc.)
    ├── storage.js      ← Persistence layer (localStorage read/write)
    ├── cart.js         ← Cart state & DOM rendering
    ├── products.js     ← Product grid, stock table, CSV export
    ├── modals.js       ← All modal dialogs (add/edit product, restock, payment)
    ├── reports.js      ← Transaction history & analytics
    └── app.js          ← Bootstrap, tab switching, clock, toast
```

---

## Quickstart (no build tools)

### Option 1 — Open directly in browser
1. Download or clone the `superpos/` folder.
2. Double-click **`index.html`** — it opens in your default browser.

> **Note:** Some browsers block localStorage when a file is opened via `file://`.
> If the product grid loads blank, use Option 2.

### Option 2 — Serve with a local static server (recommended)
Any static file server works:

```bash
# Python 3
cd superpos
python -m http.server 8080
# → http://localhost:8080

# Node.js (npx, no install needed)
npx serve .
# → http://localhost:3000

# VS Code
# Install the "Live Server" extension, right-click index.html → "Open with Live Server"
```

---

## Deployment

### Static hosting (recommended for production)

The app is a static site — upload the whole `superpos/` folder to any static host:

| Host | Steps |
|------|-------|
| **Netlify** | Drag-and-drop the folder at netlify.com/drop |
| **Vercel** | `npx vercel` inside the folder |
| **GitHub Pages** | Push to a repo, enable Pages in Settings → Branch: main, folder: / (root) |
| **Cloudflare Pages** | Connect repo or upload zip in the dashboard |
| **AWS S3** | Upload folder, enable "Static website hosting", set `index.html` as the index document |
| **Apache / Nginx** | Copy folder to your web root (e.g. `/var/www/html/superpos`) |

### Self-hosted (LAN / kiosk)

Run on any machine on your local network:

```bash
# Python 3
python -m http.server 8080 --bind 0.0.0.0
```

Access from other devices at `http://<your-machine-ip>:8080`.

---

## Customisation

### Change the tax rate
Open `js/data.js` and update:
```js
const TAX_RATE = 0.10;   // 10% — change to e.g. 0.20 for 20%
```

### Change the currency symbol
The currency symbol is hardcoded as `$`. Search for `$` in `js/cart.js`,
`js/modals.js`, and `js/reports.js` and replace with your symbol (e.g. `€`, `£`, `ل.ل`).

### Add or change default products
Edit the `DEFAULT_PRODUCTS` array in `js/data.js`.
These defaults are loaded only on the very first launch (when localStorage is empty).
To reload them, open the browser console and run `resetData()`.

### Swap localStorage for a real database
All reads and writes go through `js/storage.js`. Replace the
`localStorage.getItem / setItem` calls with `fetch()` calls to your REST API
and the rest of the app needs no changes.

---

## Browser support

Works in any modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+).
Requires JavaScript enabled and localStorage available.

---

## License

MIT — free to use, modify, and deploy.
