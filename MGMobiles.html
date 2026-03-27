<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MG Mobiles — We Fix All Problems</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
<style>
 /* ── TOKENS ─────────────────────────────── */
  :root {
    --bg:        #0a0a0f;
    --surface:   #12121a;
    --card:      #1a1a26;
    --border:    rgba(255,255,255,.07);
    --accent:    #00e5ff;
    --accent2:   #7c3aed;
    --gold:      #f59e0b;
    --text:      #f0f0f5;
    --muted:     #6b7280;
    --success:   #10b981;
    --danger:    #ef4444;
    --radius:    16px;
    --radius-sm: 10px;
    --shadow:    0 20px 60px rgba(0,0,0,.6);
    --glow:      0 0 30px rgba(0,229,255,.15);
  }

  /* ── RESET ───────────────────────────────── */
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }
  a { text-decoration:none; color:inherit; }
  button { cursor:pointer; border:none; outline:none; }
  img { max-width:100%; display:block; }

  /* ── SCROLLBAR ───────────────────────────── */
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:var(--bg); }
  ::-webkit-scrollbar-thumb { background:var(--accent2); border-radius:99px; }

  /* ── NOISE OVERLAY ───────────────────────── */
  body::before {
    content:'';
    position:fixed; inset:0; z-index:0; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    opacity:.4;
  }

  /* ── AMBIENT BLOBS ───────────────────────── */
  .blob {
    position:fixed; border-radius:50%; filter:blur(120px); pointer-events:none; z-index:0;
  }
  .blob-1 { width:500px; height:500px; background:rgba(124,58,237,.2); top:-150px; left:-100px; }
  .blob-2 { width:400px; height:400px; background:rgba(0,229,255,.12); bottom:-100px; right:-80px; }
  .blob-3 { width:300px; height:300px; background:rgba(245,158,11,.08); top:40%; left:55%; }

  /* ── LAYOUT ──────────────────────────────── */
  .container { max-width:1200px; margin:0 auto; padding:0 24px; position:relative; z-index:1; }

  /* ── NAVBAR ──────────────────────────────── */
  nav {
    position:sticky; top:0; z-index:100;
    background:rgba(10,10,15,.85);
    backdrop-filter:blur(20px);
    border-bottom:1px solid var(--border);
  }
  .nav-inner {
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 24px; max-width:1200px; margin:0 auto;
  }
  .logo {
    font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem;
    display:flex; align-items:center; gap:10px;
    letter-spacing:-0.5px;
  }
  .logo-icon {
    width:36px; height:36px; background:linear-gradient(135deg,var(--accent2),var(--accent));
    border-radius:10px; display:flex; align-items:center; justify-content:center;
    font-size:.9rem; color:#fff; box-shadow:var(--glow);
  }
  .logo span.accent { color:var(--accent); }
  .nav-links { display:flex; gap:6px; }
  .nav-links a {
    font-size:.9rem; font-weight:500; padding:8px 14px;
    border-radius:8px; transition:all .2s; color:var(--muted);
  }
  .nav-links a:hover { background:var(--card); color:var(--text); }
  .nav-links a.active { color:var(--accent); background:rgba(0,229,255,.08); }
  .nav-actions { display:flex; align-items:center; gap:10px; }
  .cart-btn {
    background:var(--card); border:1px solid var(--border);
    color:var(--text); padding:8px 16px; border-radius:10px;
    font-size:.9rem; display:flex; align-items:center; gap:6px;
    transition:all .2s; font-family:'DM Sans',sans-serif;
  }
  .cart-btn:hover { border-color:var(--accent); color:var(--accent); }
  .cart-count {
    background:var(--accent); color:#000; font-size:.7rem; font-weight:700;
    width:18px; height:18px; border-radius:50%; display:flex;
    align-items:center; justify-content:center;
  }
  .mobile-menu-btn { display:none; background:none; color:var(--text); font-size:1.3rem; }

  /* ── HERO ────────────────────────────────── */
  .hero {
    min-height:calc(100vh - 73px);
    display:flex; align-items:center;
    padding:80px 0 60px;
    position:relative; overflow:hidden;
  }
  .hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
  .hero-badge {
    display:inline-flex; align-items:center; gap:8px;
    background:rgba(0,229,255,.08); border:1px solid rgba(0,229,255,.2);
    color:var(--accent); padding:6px 14px; border-radius:99px;
    font-size:.8rem; font-weight:600; letter-spacing:.5px; text-transform:uppercase;
    margin-bottom:24px; animation:fadeUp .6s ease both;
  }
  .badge-dot { width:6px; height:6px; border-radius:50%; background:var(--accent); animation:pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }

  .hero h1 {
    font-family:'Syne',sans-serif; font-size:clamp(2.8rem,5vw,5rem);
    font-weight:800; line-height:1.08; letter-spacing:-2px;
    margin-bottom:20px; animation:fadeUp .6s .1s ease both;
  }
  .hero h1 .line-accent { color:var(--accent); display:block; }
  .hero p {
    font-size:1.1rem; color:var(--muted); line-height:1.7; max-width:480px;
    margin-bottom:36px; font-weight:300; animation:fadeUp .6s .2s ease both;
  }
  .hero-cta { display:flex; gap:12px; flex-wrap:wrap; animation:fadeUp .6s .3s ease both; }
  .btn-primary {
    background:linear-gradient(135deg,var(--accent2),var(--accent));
    color:#fff; padding:14px 28px; border-radius:12px;
    font-size:1rem; font-weight:600; font-family:'DM Sans',sans-serif;
    box-shadow:0 8px 30px rgba(124,58,237,.35);
    transition:all .25s; display:flex; align-items:center; gap:8px;
  }
  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(124,58,237,.5); }
  .btn-secondary {
    background:var(--card); border:1px solid var(--border);
    color:var(--text); padding:14px 28px; border-radius:12px;
    font-size:1rem; font-weight:500; font-family:'DM Sans',sans-serif;
    transition:all .25s; display:flex; align-items:center; gap:8px;
  }
  .btn-secondary:hover { border-color:var(--accent); color:var(--accent); }

  .hero-stats { display:flex; gap:32px; margin-top:48px; animation:fadeUp .6s .4s ease both; }
  .stat { }
  .stat-num { font-family:'Syne',sans-serif; font-size:1.8rem; font-weight:800; color:var(--text); }
  .stat-label { font-size:.8rem; color:var(--muted); margin-top:2px; }

  /* PHONE MOCKUP */
  .hero-visual { display:flex; justify-content:center; position:relative; animation:fadeUp .6s .2s ease both; }
  .phone-stack { position:relative; width:280px; height:480px; }
  .phone-card {
    position:absolute; width:240px; height:440px;
    background:linear-gradient(145deg,#1e1e2e,#16213e);
    border:1px solid rgba(255,255,255,.1); border-radius:30px;
    box-shadow: 0 30px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(0,229,255,.1);
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;
    overflow:hidden;
  }
  .phone-card.back  { top:20px; right:0; transform:rotate(6deg); opacity:.6; }
  .phone-card.front { top:0; left:0; z-index:2; }
  .phone-notch { width:80px; height:8px; background:rgba(255,255,255,.15); border-radius:99px; position:absolute; top:16px; }
  .phone-screen-content { text-align:center; padding:40px 20px 20px; }
  .phone-brand { font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:700; color:var(--accent); margin-bottom:8px; }
  .phone-price { font-size:1.8rem; font-weight:700; font-family:'Syne',sans-serif; }
  .phone-model { font-size:.8rem; color:var(--muted); margin-top:4px; }
  .phone-glow {
    position:absolute; bottom:-20px; left:50%; transform:translateX(-50%);
    width:180px; height:60px; background:var(--accent2);
    filter:blur(40px); border-radius:50%; opacity:.5;
  }
  .floating-tag {
    position:absolute; background:var(--card); border:1px solid var(--border);
    border-radius:12px; padding:10px 14px; display:flex; align-items:center; gap:8px;
    font-size:.8rem; box-shadow:var(--shadow); animation:float 3s ease-in-out infinite;
  }
  .tag-1 { top:30px; right:-30px; animation-delay:0s; }
  .tag-2 { bottom:60px; right:-40px; animation-delay:1.5s; }
  .tag-3 { bottom:30px; left:-40px; animation-delay:.8s; }
  .tag-icon { font-size:1rem; }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  /* ── MARQUEE STRIP ───────────────────────── */
  .marquee-strip {
    border-top:1px solid var(--border); border-bottom:1px solid var(--border);
    background:var(--surface); overflow:hidden; padding:14px 0;
  }
  .marquee-track { display:flex; gap:48px; animation:marquee 20s linear infinite; white-space:nowrap; }
  .marquee-track:hover { animation-play-state:paused; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .marquee-item { display:flex; align-items:center; gap:10px; font-size:.85rem; color:var(--muted); font-weight:500; }
  .marquee-item .icon { color:var(--accent); font-size:1rem; }

  /* ── SECTION LABELS ──────────────────────── */
  .section { padding:80px 0; }
  .section-label {
    display:inline-flex; align-items:center; gap:8px;
    font-size:.75rem; font-weight:700; letter-spacing:2px;
    text-transform:uppercase; color:var(--accent); margin-bottom:12px;
  }
  .section-label::before { content:''; width:24px; height:2px; background:var(--accent); border-radius:2px; }
  .section-title {
    font-family:'Syne',sans-serif; font-size:clamp(1.8rem,3vw,2.8rem);
    font-weight:800; letter-spacing:-1px; line-height:1.15; margin-bottom:14px;
  }
  .section-sub { color:var(--muted); font-size:1rem; max-width:520px; line-height:1.6; }
  .section-header { margin-bottom:48px; }

  /* ── SEARCH & FILTER ─────────────────────── */
  .search-bar-wrap { margin-bottom:32px; display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
  .search-box {
    flex:1; min-width:240px; background:var(--card); border:1px solid var(--border);
    border-radius:12px; display:flex; align-items:center; gap:10px;
    padding:0 16px; transition:border-color .2s;
  }
  .search-box:focus-within { border-color:var(--accent); box-shadow:0 0 0 3px rgba(0,229,255,.08); }
  .search-box input {
    flex:1; background:none; border:none; outline:none; color:var(--text);
    font-family:'DM Sans',sans-serif; font-size:.95rem; padding:13px 0;
  }
  .search-box input::placeholder { color:var(--muted); }
  .search-icon { color:var(--muted); }
  .filter-chips { display:flex; gap:8px; flex-wrap:wrap; }
  .chip {
    background:var(--card); border:1px solid var(--border);
    color:var(--muted); padding:8px 16px; border-radius:99px;
    font-size:.85rem; font-weight:500; cursor:pointer; transition:all .2s;
    font-family:'DM Sans',sans-serif;
  }
  .chip:hover, .chip.active { background:rgba(0,229,255,.1); border-color:var(--accent); color:var(--accent); }

  /* ── PRODUCT GRID ────────────────────────── */
  .products-grid {
    display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
    gap:24px;
  }
  .product-card {
    background:var(--card); border:1px solid var(--border);
    border-radius:var(--radius); overflow:hidden;
    transition:transform .3s, border-color .3s, box-shadow .3s;
    cursor:pointer; position:relative;
  }
  .product-card:hover { transform:translateY(-6px); border-color:rgba(0,229,255,.3); box-shadow:0 20px 50px rgba(0,0,0,.4),0 0 0 1px rgba(0,229,255,.1); }
  .product-badge {
    position:absolute; top:14px; left:14px; z-index:2;
    font-size:.7rem; font-weight:700; letter-spacing:.5px; text-transform:uppercase;
    padding:4px 10px; border-radius:99px;
  }
  .badge-new  { background:var(--accent2); color:#fff; }
  .badge-hot  { background:var(--gold); color:#000; }
  .badge-sale { background:var(--danger); color:#fff; }
  .badge-best { background:var(--success); color:#fff; }

  .product-img {
    height:200px; background:linear-gradient(145deg,#1a1a2e,#0f0f23);
    display:flex; align-items:center; justify-content:center;
    font-size:4rem; position:relative; overflow:hidden;
  }
  .product-img::after {
    content:''; position:absolute; inset:0;
    background:radial-gradient(circle at center, rgba(124,58,237,.1), transparent 70%);
  }
  .product-img .emoji-phone { transition:transform .3s; }
  .product-card:hover .emoji-phone { transform:scale(1.1) rotate(-3deg); }

  .product-info { padding:18px; }
  .product-brand { font-size:.75rem; color:var(--accent); font-weight:600; text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px; }
  .product-name { font-family:'Syne',sans-serif; font-size:1.05rem; font-weight:700; margin-bottom:8px; }
  .product-specs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; }
  .spec-tag {
    background:rgba(255,255,255,.05); border:1px solid var(--border);
    font-size:.72rem; color:var(--muted); padding:3px 8px; border-radius:6px;
  }
  .product-rating { display:flex; align-items:center; gap:6px; margin-bottom:14px; }
  .stars { color:var(--gold); font-size:.85rem; letter-spacing:2px; }
  .rating-count { font-size:.8rem; color:var(--muted); }
  .product-footer { display:flex; align-items:center; justify-content:space-between; gap:10px; }
  .product-price { font-family:'Syne',sans-serif; font-size:1.3rem; font-weight:800; }
  .price-old { font-size:.8rem; color:var(--muted); text-decoration:line-through; margin-left:4px; font-family:'DM Sans',sans-serif; font-weight:400; }
  .add-cart-btn {
    background:linear-gradient(135deg,var(--accent2),var(--accent));
    color:#fff; padding:9px 16px; border-radius:10px;
    font-size:.85rem; font-weight:600; font-family:'DM Sans',sans-serif;
    transition:all .2s; display:flex; align-items:center; gap:6px;
    white-space:nowrap;
  }
  .add-cart-btn:hover { transform:scale(1.04); box-shadow:0 6px 20px rgba(124,58,237,.4); }
  .add-cart-btn.added { background:var(--success); }

  /* ── SERVICES SECTION ────────────────────── */
  .services-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:20px; }
  .service-card {
    background:var(--card); border:1px solid var(--border);
    border-radius:var(--radius); padding:28px 22px;
    transition:all .3s; position:relative; overflow:hidden;
  }
  .service-card:hover { border-color:rgba(124,58,237,.4); transform:translateY(-4px); }
  .service-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg,var(--accent2),var(--accent));
    transform:scaleX(0); transform-origin:left; transition:transform .3s;
  }
  .service-card:hover::before { transform:scaleX(1); }
  .service-icon { font-size:2rem; margin-bottom:14px; }
  .service-title { font-family:'Syne',sans-serif; font-size:1rem; font-weight:700; margin-bottom:8px; }
  .service-desc { font-size:.85rem; color:var(--muted); line-height:1.6; }
  .service-price { margin-top:14px; font-size:.9rem; font-weight:600; color:var(--accent); }

  /* ── PROMO BANNER ────────────────────────── */
  .promo-banner {
    background:linear-gradient(135deg,rgba(124,58,237,.3),rgba(0,229,255,.15));
    border:1px solid rgba(0,229,255,.2); border-radius:20px;
    padding:48px 40px; display:flex; align-items:center; justify-content:space-between;
    gap:24px; flex-wrap:wrap; position:relative; overflow:hidden;
  }
  .promo-banner::before {
    content:''; position:absolute; inset:-1px;
    background:linear-gradient(135deg,rgba(124,58,237,.15),rgba(0,229,255,.08));
    border-radius:20px; z-index:0;
  }
  .promo-banner > * { position:relative; z-index:1; }
  .promo-text .promo-kicker { font-size:.75rem; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:var(--accent); margin-bottom:8px; }
  .promo-text h2 { font-family:'Syne',sans-serif; font-size:2rem; font-weight:800; letter-spacing:-1px; margin-bottom:10px; }
  .promo-text p { color:var(--muted); max-width:400px; line-height:1.6; }
  .countdown { display:flex; gap:16px; }
  .count-box { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:16px 22px; text-align:center; min-width:72px; }
  .count-num { font-family:'Syne',sans-serif; font-size:2rem; font-weight:800; line-height:1; }
  .count-label { font-size:.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-top:4px; }

  /* ── TESTIMONIALS ────────────────────────── */
  .testimonials-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:20px; }
  .testimonial-card {
    background:var(--card); border:1px solid var(--border);
    border-radius:var(--radius); padding:26px;
    transition:all .3s;
  }
  .testimonial-card:hover { border-color:rgba(0,229,255,.2); }
  .t-stars { color:var(--gold); font-size:1rem; margin-bottom:14px; letter-spacing:2px; }
  .t-text { font-size:.9rem; color:var(--muted); line-height:1.7; font-style:italic; margin-bottom:18px; }
  .t-author { display:flex; align-items:center; gap:12px; }
  .t-avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,var(--accent2),var(--accent)); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.9rem; }
  .t-name { font-weight:600; font-size:.9rem; }
  .t-role { font-size:.75rem; color:var(--muted); }

  /* ── CART SIDEBAR ────────────────────────── */
  .cart-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,.7); z-index:200;
    opacity:0; pointer-events:none; transition:opacity .3s; backdrop-filter:blur(4px);
  }
  .cart-overlay.open { opacity:1; pointer-events:all; }
  .cart-sidebar {
    position:fixed; top:0; right:-420px; width:380px; max-width:100vw;
    height:100vh; background:var(--surface); border-left:1px solid var(--border);
    z-index:201; transition:right .35s cubic-bezier(.25,.8,.25,1);
    display:flex; flex-direction:column;
  }
  .cart-sidebar.open { right:0; }
  .cart-header {
    padding:22px 24px; border-bottom:1px solid var(--border);
    display:flex; align-items:center; justify-content:space-between;
  }
  .cart-header h3 { font-family:'Syne',sans-serif; font-size:1.2rem; font-weight:700; }
  .close-cart { background:var(--card); border:1px solid var(--border); color:var(--text); width:36px; height:36px; border-radius:8px; font-size:1.1rem; display:flex; align-items:center; justify-content:center; transition:all .2s; }
  .close-cart:hover { border-color:var(--danger); color:var(--danger); }
  .cart-items { flex:1; overflow-y:auto; padding:16px 24px; }
  .cart-item { display:flex; gap:14px; padding:14px 0; border-bottom:1px solid var(--border); }
  .cart-item-img { width:56px; height:56px; background:var(--card); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; flex-shrink:0; border:1px solid var(--border); }
  .cart-item-info { flex:1; }
  .cart-item-name { font-weight:600; font-size:.9rem; margin-bottom:4px; }
  .cart-item-price { color:var(--accent); font-weight:700; font-size:.9rem; }
  .cart-item-qty { display:flex; align-items:center; gap:8px; margin-top:8px; }
  .qty-btn { background:var(--card); border:1px solid var(--border); color:var(--text); width:26px; height:26px; border-radius:6px; font-size:.9rem; display:flex; align-items:center; justify-content:center; transition:all .2s; }
  .qty-btn:hover { border-color:var(--accent); color:var(--accent); }
  .qty-num { font-size:.9rem; font-weight:600; min-width:20px; text-align:center; }
  .remove-item { background:none; color:var(--muted); font-size:.85rem; margin-left:auto; transition:color .2s; }
  .remove-item:hover { color:var(--danger); }
  .cart-footer { padding:20px 24px; border-top:1px solid var(--border); }
  .cart-total { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
  .cart-total-label { font-size:.95rem; color:var(--muted); }
  .cart-total-price { font-family:'Syne',sans-serif; font-size:1.4rem; font-weight:800; }
  .checkout-btn {
    width:100%; background:linear-gradient(135deg,var(--accent2),var(--accent));
    color:#fff; padding:15px; border-radius:12px;
    font-size:1rem; font-weight:700; font-family:'DM Sans',sans-serif;
    box-shadow:0 8px 30px rgba(124,58,237,.35); transition:all .25s;
  }
  .checkout-btn:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(124,58,237,.5); }
  .empty-cart { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; color:var(--muted); padding:40px; text-align:center; }
  .empty-cart .big-icon { font-size:3rem; }

  /* ── TOAST ───────────────────────────────── */
  .toast {
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(100px);
    background:var(--surface); border:1px solid var(--border);
    border-radius:12px; padding:14px 22px;
    display:flex; align-items:center; gap:10px;
    box-shadow:var(--shadow); z-index:300; transition:transform .4s cubic-bezier(.25,.8,.25,1);
    font-size:.9rem; font-weight:500;
  }
  .toast.show { transform:translateX(-50%) translateY(0); }
  .toast-icon { color:var(--success); font-size:1rem; }

  /* ── FOOTER ──────────────────────────────── */
  footer {
    background:var(--surface); border-top:1px solid var(--border);
    padding:60px 0 30px; position:relative; z-index:1;
  }
  .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; margin-bottom:40px; }
  .footer-brand .logo { margin-bottom:14px; }
  .footer-desc { font-size:.9rem; color:var(--muted); line-height:1.7; max-width:280px; }
  .footer-col h4 { font-family:'Syne',sans-serif; font-weight:700; font-size:.95rem; margin-bottom:16px; }
  .footer-col ul { list-style:none; display:flex; flex-direction:column; gap:8px; }
  .footer-col ul li a { font-size:.88rem; color:var(--muted); transition:color .2s; }
  .footer-col ul li a:hover { color:var(--accent); }
  .footer-bottom { border-top:1px solid var(--border); padding-top:24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
  .footer-copy { font-size:.82rem; color:var(--muted); }
  .social-links { display:flex; gap:8px; }
  .social-link {
    width:36px; height:36px; background:var(--card); border:1px solid var(--border);
    border-radius:8px; display:flex; align-items:center; justify-content:center;
    font-size:.9rem; color:var(--muted); transition:all .2s;
  }
  .social-link:hover { border-color:var(--accent); color:var(--accent); }

  /* ── MODAL ───────────────────────────────── */
  .modal-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,.8); z-index:300;
    display:flex; align-items:center; justify-content:center; padding:24px;
    opacity:0; pointer-events:none; transition:opacity .3s; backdrop-filter:blur(6px);
  }
  .modal-overlay.open { opacity:1; pointer-events:all; }
  .modal {
    background:var(--surface); border:1px solid var(--border);
    border-radius:20px; padding:32px; max-width:520px; width:100%;
    box-shadow:var(--shadow); transform:scale(.96); transition:transform .3s;
    max-height:90vh; overflow-y:auto;
  }
  .modal-overlay.open .modal { transform:scale(1); }
  .modal-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; }
  .modal-header h3 { font-family:'Syne',sans-serif; font-size:1.4rem; font-weight:800; }
  .modal-img { height:180px; background:linear-gradient(145deg,#1a1a2e,#0f0f23); border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:5rem; margin-bottom:20px; }
  .modal-specs { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px; }
  .modal-spec { background:var(--card); border:1px solid var(--border); border-radius:10px; padding:12px; }
  .modal-spec-label { font-size:.72rem; color:var(--muted); text-transform:uppercase; letter-spacing:.5px; }
  .modal-spec-value { font-size:.92rem; font-weight:600; margin-top:3px; }
  .modal-price { font-family:'Syne',sans-serif; font-size:2rem; font-weight:800; margin-bottom:20px; }
  .modal-add-btn {
    width:100%; background:linear-gradient(135deg,var(--accent2),var(--accent));
    color:#fff; padding:15px; border-radius:12px;
    font-size:1rem; font-weight:700; font-family:'DM Sans',sans-serif;
    transition:all .25s;
  }
  .modal-add-btn:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(124,58,237,.5); }

  /* ── BACK TO TOP ─────────────────────────── */
  .back-top {
    position:fixed; bottom:24px; right:24px; z-index:100;
    width:44px; height:44px; background:var(--card);
    border:1px solid var(--border); border-radius:12px;
    display:flex; align-items:center; justify-content:center;
    color:var(--muted); font-size:1rem; transition:all .25s;
    opacity:0; pointer-events:none;
  }
  .back-top.visible { opacity:1; pointer-events:all; }
  .back-top:hover { border-color:var(--accent); color:var(--accent); }

  /* ── RESPONSIVE ──────────────────────────── */
  @media(max-width:900px) {
    .hero-grid { grid-template-columns:1fr; text-align:center; }
    .hero p { margin:0 auto 36px; }
    .hero-cta { justify-content:center; }
    .hero-stats { justify-content:center; }
    .hero-visual { display:none; }
    .footer-grid { grid-template-columns:1fr 1fr; }
    .nav-links { display:none; }
    .mobile-menu-btn { display:block; }
  }
  @media(max-width:600px) {
    .footer-grid { grid-template-columns:1fr; }
    .promo-banner { flex-direction:column; }
    .countdown { flex-wrap:wrap; }
    .modal-specs { grid-template-columns:1fr; }
  }
</style>
</head>
<body>

<!-- AMBIENT -->
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
<div class="blob blob-3"></div>

<!-- TOAST -->
<div class="toast" id="toast">
  <span class="toast-icon">✓</span>
  <span id="toast-msg">Added to cart!</span>
</div>

<!-- CART OVERLAY -->
<div class="cart-overlay" id="cartOverlay" onclick="toggleCart()"></div>

<!-- CART SIDEBAR -->
<div class="cart-sidebar" id="cartSidebar">
  <div class="cart-header">
    <h3>🛒 Your Cart</h3>
    <button class="close-cart" onclick="toggleCart()">✕</button>
  </div>
  <div class="cart-items" id="cartItems"></div>
  <div class="cart-footer" id="cartFooter" style="display:none">
    <div class="cart-total">
      <span class="cart-total-label">Total</span>
      <span class="cart-total-price" id="cartTotal">$0</span>
    </div>
    <button class="checkout-btn" onclick="checkout()">Checkout →</button>
  </div>
</div>

<!-- PRODUCT MODAL -->
<div class="modal-overlay" id="modalOverlay" onclick="closeModal(event)">
  <div class="modal" id="productModal">
    <div class="modal-header">
      <h3 id="modal-name">Phone Name</h3>
      <button style="background:none;color:var(--muted);font-size:1.2rem;" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-img" id="modal-img"></div>
    <div class="modal-specs" id="modal-specs"></div>
    <div class="modal-price" id="modal-price"></div>
    <button class="modal-add-btn" id="modal-add-btn">Add to Cart</button>
  </div>
</div>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <div class="logo">
      <div class="logo-icon"><img src="https://uploads.onecompiler.io/44dbqa2sw/44hfrqvew/MG%20logo%20copy.png" /></div>
      MG <span class="accent">Mobiles</span>
    </div>
    <div class="nav-links">
      <a href="#products" class="active">Phones</a>
      <a href="#services">Repair</a>
      <a href="#promo">Deals</a>
      <a href="#reviews">Reviews</a>
    </div>
    <div class="nav-actions">
      <button class="cart-btn" onclick="toggleCart()">
        🛒 Cart
        <span class="cart-count" id="cartCount">0</span>
      </button>
      <button class="mobile-menu-btn" onclick="scrollTo('#products')">☰</button>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <div class="hero-badge"><span class="badge-dot"></span> Lebanon's #1 Mobile Store</div>
        <h1>
          Every Device,<br>
          <span class="line-accent">Every Solution.</span>
        </h1>
        <p>Premium smartphones, fast repairs & unbeatable deals — all under one roof. MG Mobiles: <em>We Fix All Problems.</em></p>
        <div class="hero-cta">
          <a href="#products" class="btn-primary">Shop Now →</a>
          <a href="#services" class="btn-secondary">Repair Service 🔧</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-num">5K+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat">
            <div class="stat-num">300+</div>
            <div class="stat-label">Device Models</div>
          </div>
          <div class="stat">
            <div class="stat-num">1hr</div>
            <div class="stat-label">Avg Repair Time</div>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="phone-stack">
          <div class="phone-card back"></div>
          <div class="phone-card front">
            <div class="phone-notch"></div>
            <div class="phone-screen-content">
              <div style="font-size:3.5rem">📱</div>
              <div class="phone-brand">MG Mobiles</div>
              <div class="phone-price">$849</div>
              <div class="phone-model">iPhone 15 Pro Max</div>
            </div>
            <div class="phone-glow"></div>
          </div>
          <div class="floating-tag tag-1">
            <span class="tag-icon">⚡</span>
            <span>Fast Delivery</span>
          </div>
          <div class="floating-tag tag-2">
            <span class="tag-icon">✅</span>
            <span>Warranty Included</span>
          </div>
          <div class="floating-tag tag-3">
            <span class="tag-icon">🔒</span>
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-strip">
  <div class="marquee-track" id="marqueeTrack"></div>
</div>

<!-- PRODUCTS -->
<section class="section" id="products">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Latest Devices</div>
      <h2 class="section-title">Shop Premium Phones</h2>
      <p class="section-sub">Authentic devices with full warranty. All major brands at competitive prices.</p>
    </div>

    <div class="search-bar-wrap">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" placeholder="Search phones…" oninput="filterProducts()">
      </div>
      <div class="filter-chips" id="filterChips"></div>
    </div>

    <div class="products-grid" id="productsGrid"></div>
  </div>
</section>

<!-- SERVICES -->
<section class="section" id="services" style="background:var(--surface)">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Repair Services</div>
      <h2 class="section-title">We Fix All Problems</h2>
      <p class="section-sub">Expert technicians, genuine parts, fast turnaround — your device in safe hands.</p>
    </div>
    <div class="services-grid" id="servicesGrid"></div>
  </div>
</section>

<!-- PROMO -->
<section class="section" id="promo">
  <div class="container">
    <div class="promo-banner">
      <div class="promo-text">
        <div class="promo-kicker">⚡ Limited Time Offer</div>
        <h2>Summer Flash Sale</h2>
        <p>Up to 30% off selected flagship devices. Free screen protector with every purchase. Grab yours before time runs out!</p>
        <a href="#products" class="btn-primary" style="margin-top:20px;display:inline-flex">Shop the Sale →</a>
      </div>
      <div class="countdown" id="countdown"></div>
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="section" id="reviews">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Customer Reviews</div>
      <h2 class="section-title">What Our Clients Say</h2>
      <p class="section-sub">Thousands of satisfied customers. Here's what they love most.</p>
    </div>
    <div class="testimonials-grid" id="reviewsGrid"></div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <div class="logo-icon">📱</div>
          MG <span class="accent">Mobiles</span>
        </div>
        <p class="footer-desc">Lebanon's trusted destination for premium smartphones and professional repair services since 2018.</p>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">iPhones</a></li>
          <li><a href="#">Samsung</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Deals</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Screen Repair</a></li>
          <li><a href="#">Battery Replace</a></li>
          <li><a href="#">Water Damage</a></li>
          <li><a href="#">Diagnostics</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">📍 Bater, Chouf, Mount-Lebanon</a></li>
          <li><a href="#">📞 +961 81 655 238</a></li>
          <li><a href="#">✉️ info@mgmobiles.lb</a></li>
          <li><a href="#">⏰ 10am – 10pm Daily</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 MG Mobiles. We Fix All Problems. All rights reserved.</span>
      <div class="social-links">
        <a href="#" class="social-link">📘</a>
        <a href="#" class="social-link">📸</a>
        <a href="#" class="social-link">🐦</a>
        <a href="#" class="social-link">💬</a>
      </div>
    </div>
  </div>
</footer>

<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>

<script>
// ── DATA ────────────────────────────────────────────
const products = [
  { id:1, brand:'Apple', name:'iPhone 15 Pro Max', emoji:'📱', price:1099, oldPrice:1249, specs:['256GB','Titanium','6.7"','USB-C'], rating:4.9, reviews:342, badge:'new',  category:'Apple' },
  { id:2, brand:'Apple', name:'iPhone 15',         emoji:'📱', price:849,  oldPrice:null, specs:['128GB','Black','6.1"','A16'], rating:4.8, reviews:219, badge:'hot',  category:'Apple' },
  { id:3, brand:'Samsung', name:'Galaxy S24 Ultra',emoji:'📲', price:1199, oldPrice:1399, specs:['256GB','Titanium','6.8"','S Pen'], rating:4.8, reviews:178, badge:'sale', category:'Samsung' },
  { id:4, brand:'Samsung', name:'Galaxy A55',      emoji:'📲', price:399,  oldPrice:null, specs:['128GB','Blue','6.6"','50MP'], rating:4.5, reviews:95,  badge:'best', category:'Samsung' },
  { id:5, brand:'Google', name:'Pixel 8 Pro',      emoji:'🤖', price:999,  oldPrice:null, specs:['128GB','Hazel','6.7"','AI Cam'], rating:4.7, reviews:134, badge:'new',  category:'Google' },
  { id:6, brand:'Xiaomi', name:'14 Ultra',         emoji:'📷', price:799,  oldPrice:899,  specs:['512GB','Black','6.73"','Leica'], rating:4.6, reviews:88,  badge:'sale', category:'Xiaomi' },
  { id:7, brand:'OnePlus', name:'12R',             emoji:'⚡', price:599,  oldPrice:null, specs:['256GB','Iron','6.78"','120Hz'], rating:4.6, reviews:77,  badge:'hot',  category:'OnePlus' },
  { id:8, brand:'Apple', name:'iPhone SE 3rd Gen', emoji:'📱', price:429,  oldPrice:499,  specs:['64GB','Midnight','4.7"','5G'], rating:4.3, reviews:156, badge:'sale', category:'Apple' },
];

const services = [
  { icon:'🖥️', title:'Screen Replacement', desc:'Cracked or unresponsive screens fixed with OEM-grade glass in under 60 minutes.', price:'From $39' },
  { icon:'🔋', title:'Battery Replacement', desc:'Restore 100% battery health with certified cells. All brands supported.', price:'From $29' },
  { icon:'💧', title:'Water Damage Repair', desc:'Emergency drying & corrosion treatment. 85% success rate.', price:'From $49' },
  { icon:'📷', title:'Camera Repair', desc:'Blurry or broken cameras fixed with precision alignment tools.', price:'From $45' },
  { icon:'🔌', title:'Charging Port Fix', desc:'Loose or non-functional charging ports replaced same day.', price:'From $25' },
  { icon:'🔐', title:'Software Unlock', desc:'IMEI & carrier unlock for all major networks worldwide.', price:'From $19' },
  { icon:'💾', title:'Data Recovery', desc:'Lost photos or contacts? Our experts retrieve what matters most.', price:'From $59' },
  { icon:'🎧', title:'Speaker/Mic Fix', desc:'Muffled sound or mic issues resolved. Call quality restored.', price:'From $29' },
];

const testimonials = [
  { stars:'★★★★★', text:'MG Mobiles is the best! They fixed my iPhone screen in 45 minutes at a fair price. The staff is so professional and friendly. Will always come back!', name:'Rami K.', role:'Beirut', avatar:'R' },
  { stars:'★★★★★', text:'Bought a Samsung S24 Ultra here. Authentic device, sealed box, great price. Delivery was super fast to my area. Highly recommend!', name:'Sara M.', role:'Tripoli', avatar:'S' },
  { stars:'★★★★★', text:'My Pixel 8 got water damage and they recovered all my data and repaired it. I thought it was gone forever. These guys are magicians!', name:'Chadi B.', role:'Jounieh', avatar:'C' },
  { stars:'★★★★☆', text:'Great selection of phones and very competitive prices. The warranty process is smooth. A trusted shop for tech purchases in Lebanon.', name:'Lara N.', role:'Saida', avatar:'L' },
  { stars:'★★★★★', text:'Battery replacement done in 20 minutes while I waited. Phone is like new again. Very clean shop and great customer service!', name:'Karim A.', role:'Beirut', avatar:'K' },
  { stars:'★★★★★', text:'Finally found an honest mobile shop. No hidden fees, clear pricing, and genuine parts. MG Mobiles is our family\'s go-to store.', name:'Maya H.', role:'Baabda', avatar:'M' },
];

const marqueeItems = [
  { icon:'📱', text:'iPhone 15 Series In Stock' },
  { icon:'🔋', text:'Same-Day Battery Replacement' },
  { icon:'🚚', text:'Free Delivery Over $100' },
  { icon:'✅', text:'6-Month Repair Warranty' },
  { icon:'💳', text:'Flexible Payment Plans' },
  { icon:'📲', text:'Samsung Galaxy S24 Available' },
  { icon:'🔧', text:'Expert Technicians On-Site' },
  { icon:'⭐', text:'5-Star Rated Service' },
];

const categories = ['All', 'Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus'];
let cart = JSON.parse(localStorage.getItem('mg_cart') || '[]');
let activeCategory = 'All';
let currentProduct = null;

// ── RENDER MARQUEE ───────────────────────────────────
function renderMarquee() {
  const t = document.getElementById('marqueeTrack');
  const doubled = [...marqueeItems, ...marqueeItems];
  t.innerHTML = doubled.map(i => `
    <div class="marquee-item">
      <span class="icon">${i.icon}</span>
      <span>${i.text}</span>
    </div>`).join('');
}

// ── RENDER FILTERS ───────────────────────────────────
function renderFilters() {
  const el = document.getElementById('filterChips');
  el.innerHTML = categories.map(c => `
    <button class="chip ${c===activeCategory?'active':''}" onclick="setCategory('${c}')">${c}</button>
  `).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  renderFilters();
  filterProducts();
}

// ── RENDER PRODUCTS ──────────────────────────────────
function filterProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchQ = !query || p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
    return matchCat && matchQ;
  });
  renderProducts(filtered);
}

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted)">No phones found 😔</div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      ${p.badge ? `<div class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</div>` : ''}
      <div class="product-img"><div class="emoji-phone" style="font-size:4.5rem">${p.emoji}</div></div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-specs">
          ${p.specs.map(s=>`<span class="spec-tag">${s}</span>`).join('')}
        </div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${p.price}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice}</span>` : ''}
          </div>
          <button class="add-cart-btn" id="btn-${p.id}" onclick="event.stopPropagation();addToCart(${p.id})">
            + Cart
          </button>
        </div>
      </div>
    </div>`).join('');
}

// ── RENDER SERVICES ──────────────────────────────────
function renderServices() {
  document.getElementById('servicesGrid').innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
      <div class="service-price">${s.price}</div>
    </div>`).join('');
}

// ── RENDER REVIEWS ───────────────────────────────────
function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="t-stars">${t.stars}</div>
      <div class="t-text">"${t.text}"</div>
      <div class="t-author">
        <div class="t-avatar">${t.avatar}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');
}

// ── CART ─────────────────────────────────────────────
function addToCart(id) {
  const p = products.find(x=>x.id===id);
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({ id:p.id, name:p.name, price:p.price, emoji:p.emoji, qty:1 });
  saveCart(); updateCartCount(); renderCartItems();
  showToast(`${p.name} added to cart!`);
  const btn = document.getElementById('btn-'+id);
  if(btn){ btn.textContent='✓ Added'; btn.classList.add('added'); setTimeout(()=>{btn.textContent='+ Cart';btn.classList.remove('added')},1800); }
}

function removeFromCart(id) {
  cart = cart.filter(x=>x.id!==id);
  saveCart(); updateCartCount(); renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(x=>x.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty < 1) { removeFromCart(id); return; }
  saveCart(); renderCartItems();
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if(!cart.length) {
    el.innerHTML = `<div class="empty-cart"><div class="big-icon">🛒</div><div>Your cart is empty</div><div style="font-size:.82rem">Add some great phones!</div></div>`;
    footer.style.display='none'; return;
  }
  footer.style.display='block';
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>`).join('');
  const total = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  document.getElementById('cartTotal').textContent = '$'+total.toLocaleString();
}

function updateCartCount() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent = total;
}

function saveCart() { localStorage.setItem('mg_cart', JSON.stringify(cart)); }

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  showToast('Checkout coming soon! 🎉');
  toggleCart();
}

// ── MODAL ─────────────────────────────────────────────
function openModal(id) {
  const p = products.find(x=>x.id===id);
  currentProduct = p;
  document.getElementById('modal-name').textContent = `${p.brand} ${p.name}`;
  document.getElementById('modal-img').innerHTML = `<span style="font-size:5rem">${p.emoji}</span>`;
  document.getElementById('modal-specs').innerHTML = p.specs.map((s,i)=>{
    const labels=['Storage','Color','Display','Chip'];
    return `<div class="modal-spec"><div class="modal-spec-label">${labels[i]||'Spec'}</div><div class="modal-spec-value">${s}</div></div>`;
  }).join('');
  document.getElementById('modal-price').innerHTML = `$${p.price}${p.oldPrice?`<span style="font-size:1rem;color:var(--muted);text-decoration:line-through;margin-left:10px">$${p.oldPrice}</span>`:''}`;
  document.getElementById('modal-add-btn').onclick = ()=>{ addToCart(p.id); closeModal(); };
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
  if(!e || e.target === document.getElementById('modalOverlay'))
    document.getElementById('modalOverlay').classList.remove('open');
}

// ── COUNTDOWN ─────────────────────────────────────────
function renderCountdown() {
  const end = new Date(); end.setDate(end.getDate()+2); end.setHours(23,59,59);
  function tick() {
    const diff = end - new Date();
    if(diff < 0) return;
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const d = Math.floor(diff/86400000);
    document.getElementById('countdown').innerHTML = [
      {n:d,l:'Days'},{n:h%24,l:'Hours'},{n:m,l:'Mins'},{n:s,l:'Secs'}
    ].map(x=>`<div class="count-box"><div class="count-num">${String(x.n).padStart(2,'0')}</div><div class="count-label">${x.l}</div></div>`).join('');
  }
  tick(); setInterval(tick,1000);
}

// ── TOAST ─────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'),2600);
}

// ── BACK TO TOP ───────────────────────────────────────
window.addEventListener('scroll', ()=>{
  document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
});

// ── INIT ──────────────────────────────────────────────
renderMarquee();
renderFilters();
filterProducts();
renderServices();
renderReviews();
renderCartItems();
updateCartCount();
renderCountdown();
</script>
</body>
</html>
