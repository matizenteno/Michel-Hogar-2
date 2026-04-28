const PHONE = '56940692667';
const STORAGE_KEY = 'michel-hogar-cart-v1';

/* ---- Catálogo ----
   - category: cortinas | alfombras | cocina | dormitorio | mesa
   - sizes: lista de variantes; si está presente, el usuario debe elegir antes de agregar.
*/
const products = [
  {
    id: 1,
    name: 'Cortina Blackout Premium',
    brand: 'Doral',
    category: 'cortinas',
    price: 24990,
    original: 34990,
    desc: 'Bloquea hasta el 99% de la luz. Tela triple capa de alta calidad. Ideal para dormitorios y salas.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    badge: 'top',
    sizes: ['1.40 x 2.20 m', '2.00 x 2.20 m', '2.80 x 2.20 m']
  },
  {
    id: 2,
    name: 'Visillo Blanco Elegante',
    brand: 'Doral',
    category: 'cortinas',
    price: 13990,
    original: null,
    desc: 'Tejido translúcido que filtra la luz natural protegiendo tu privacidad. Caída perfecta y elegante.',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
    badge: null,
    sizes: ['1.40 x 2.20 m', '2.00 x 2.20 m', '2.80 x 2.20 m']
  },
  {
    id: 3,
    name: 'Alfombra Shaggy Premium',
    brand: 'Michel',
    category: 'alfombras',
    price: 34990,
    original: 44990,
    desc: 'Ultra suave al tacto. Perfecta para sala de estar o dormitorio. Resistente y fácil de limpiar.',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9f0d47dfc?auto=format&fit=crop&w=600&q=80',
    badge: 'sale',
    sizes: ['1.20 x 1.70 m', '1.60 x 2.30 m', '2.00 x 2.90 m']
  },
  {
    id: 4,
    name: 'Juego de Ollas 5 piezas',
    brand: 'Doral',
    category: 'cocina',
    price: 44990,
    original: null,
    desc: 'Set completo antiadherente con distribución de calor uniforme. Incluye tapas de vidrio templado.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e9c8?auto=format&fit=crop&w=600&q=80',
    badge: null
  },
  {
    id: 5,
    name: 'Mantel Antimanchas Premium',
    brand: 'Doral',
    category: 'mesa',
    price: 18990,
    original: null,
    desc: 'Resistente a líquidos y manchas. Diseño elegante para tu comedor. Disponible en varios tamaños.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    badge: null,
    sizes: ['1.40 x 1.40 m (4 puestos)', '1.40 x 2.00 m (6 puestos)', '1.40 x 2.60 m (8 puestos)']
  },
  {
    id: 6,
    name: 'Cortina Romana Lino',
    brand: 'Michel',
    category: 'cortinas',
    price: 27990,
    original: 35990,
    desc: 'Diseño clásico y moderno. Cierre suave y preciso. Fácil instalación en cualquier ventana.',
    img: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80',
    badge: 'sale',
    sizes: ['80 x 160 cm', '120 x 160 cm', '160 x 180 cm']
  },
  {
    id: 7,
    name: 'Alfombra Cocina Vinílica',
    brand: 'Michel',
    category: 'alfombras',
    price: 19990,
    original: null,
    desc: 'Antideslizante y resistente al agua. Ideal para cocina, baño o entrada. Limpieza sencilla.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
    badge: null,
    sizes: ['50 x 80 cm', '60 x 120 cm', '80 x 200 cm']
  },
  {
    id: 8,
    name: 'Sábanas 2 Plazas Doral',
    brand: 'Doral',
    category: 'dormitorio',
    price: 21990,
    original: 28990,
    desc: 'Algodón suave de alta calidad. Juego completo: bajera, encimera y 2 fundas. Varios colores.',
    img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    badge: 'new',
    sizes: ['1.5 plazas', '2 plazas', 'King']
  },
  {
    id: 9,
    name: 'Cortina Blackout Infantil',
    brand: 'Michel',
    category: 'cortinas',
    price: 22990,
    original: null,
    desc: 'Diseños divertidos y coloridos para habitaciones de niños. Bloqueo de luz total para un buen sueño.',
    img: 'https://images.unsplash.com/photo-1566479179817-c0a5a68c93a2?auto=format&fit=crop&w=600&q=80',
    badge: null,
    sizes: ['1.40 x 2.20 m', '2.00 x 2.20 m']
  },
  {
    id: 10,
    name: 'Set Utensilios Cocina 7 pzs',
    brand: 'Doral',
    category: 'cocina',
    price: 14990,
    original: 19990,
    desc: 'Silicona resistente al calor. Incluye espátulas, cuchara, pinzas y más. Diseño ergonómico.',
    img: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?auto=format&fit=crop&w=600&q=80',
    badge: 'sale'
  }
];

const CATEGORIES = [
  { id: 'all',        label: 'Todos' },
  { id: 'cortinas',   label: 'Cortinas' },
  { id: 'alfombras',  label: 'Alfombras' },
  { id: 'cocina',     label: 'Cocina' },
  { id: 'dormitorio', label: 'Dormitorio' },
  { id: 'mesa',       label: 'Mesa' }
];

/* ---- State ---- */
const cart = new Map();        // key: `${id}__${size||''}`  → item
let activeCategory = 'all';
let searchTerm = '';

/* ---- DOM refs ---- */
const $grid       = document.getElementById('products-grid');
const $cartPanel  = document.getElementById('cart-panel');
const $overlay    = document.getElementById('overlay');
const $cartCount  = document.getElementById('cart-count');
const $cartItems  = document.getElementById('cart-items');
const $cartTotal  = document.getElementById('cart-total');
const $toast      = document.getElementById('toast');
const $header     = document.getElementById('header');
const $nav        = document.getElementById('nav');
const $filters    = document.getElementById('product-filters');
const $search     = document.getElementById('product-search');
const $emptyState = document.getElementById('products-empty');

/* ---- Helpers ---- */
function clp(n) {
  return n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
}
function pct(price, orig) {
  return Math.round((1 - price / orig) * 100);
}
function cartKey(id, size) {
  return `${id}__${size || ''}`;
}

let toastTimer;
function showToast(msg) {
  $toast.textContent = msg;
  $toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $toast.classList.remove('show'), 2600);
}

/* ---- Persistencia ---- */
function saveCart() {
  try {
    const arr = [...cart.entries()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch { /* sin localStorage (modo privado, etc.) */ }
}
function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const arr = JSON.parse(raw);
    arr.forEach(([k, v]) => {
      const fresh = products.find(p => p.id === v.id);
      if (fresh) {
        cart.set(k, { ...fresh, qty: v.qty, size: v.size || null });
      }
    });
  } catch { /* JSON inválido */ }
}

/* ---- Filtros y búsqueda ---- */
function getVisibleProducts() {
  const term = searchTerm.trim().toLowerCase();
  return products.filter(p => {
    const catOk = activeCategory === 'all' || p.category === activeCategory;
    const termOk = !term ||
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term);
    return catOk && termOk;
  });
}

function renderFilters() {
  $filters.innerHTML = CATEGORIES.map(c => `
    <button class="filter-chip ${c.id === activeCategory ? 'active' : ''}"
            data-cat="${c.id}"
            aria-pressed="${c.id === activeCategory}">
      ${c.label}
    </button>
  `).join('');
}

/* ---- Render productos ---- */
function renderProducts() {
  const list = getVisibleProducts();

  if (!list.length) {
    $grid.innerHTML = '';
    $emptyState.hidden = false;
    return;
  }
  $emptyState.hidden = true;

  $grid.innerHTML = list.map(p => {
    const badgeMap = {
      top:  ['badge-top',  'Más vendido'],
      sale: ['badge-sale', `${pct(p.price, p.original)}% OFF`],
      new:  ['badge-new',  'Nuevo']
    };
    const badgeHtml = p.badge
      ? `<span class="product-badge ${badgeMap[p.badge][0]}">${badgeMap[p.badge][1]}</span>`
      : '';
    const origHtml = p.original
      ? `<span class="product-original">${clp(p.original)}</span>`
      : '';

    const sizesHtml = p.sizes && p.sizes.length
      ? `
        <div class="product-sizes" role="radiogroup" aria-label="Tamaño de ${p.name}">
          <span class="product-sizes-label">Tamaño</span>
          <div class="product-sizes-options">
            ${p.sizes.map((s, i) => `
              <button class="size-chip ${i === 0 ? 'active' : ''}"
                      data-id="${p.id}" data-size="${s}"
                      role="radio" aria-checked="${i === 0}">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>`
      : '';

    return `
      <article class="product-card">
        <div class="product-card-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          ${badgeHtml}
          <span class="product-brand">${p.brand}</span>
        </div>
        <div class="product-card-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          ${sizesHtml}
          <div class="product-card-footer">
            <div class="product-pricing">
              <span class="product-price">${clp(p.price)}</span>
              ${origHtml}
            </div>
            <button class="add-btn" data-id="${p.id}" aria-label="Agregar ${p.name} al carrito">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.8"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ---- Carrito ---- */
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  let size = null;
  if (p.sizes && p.sizes.length) {
    const activeChip = $grid.querySelector(`.size-chip.active[data-id="${id}"]`);
    size = activeChip ? activeChip.dataset.size : p.sizes[0];
  }

  const key = cartKey(id, size);
  const cur = cart.get(key);
  cart.set(key, cur
    ? { ...cur, qty: cur.qty + 1 }
    : { ...p, qty: 1, size }
  );
  saveCart();
  updateCartUI();
  animateCartBtn();
  showToast(`"${p.name}"${size ? ` · ${size}` : ''} agregado al carrito`);
}

function changeQty(key, delta) {
  const cur = cart.get(key);
  if (!cur) return;
  const nq = cur.qty + delta;
  if (nq <= 0) cart.delete(key);
  else cart.set(key, { ...cur, qty: nq });
  saveCart();
  updateCartUI();
}

function animateCartBtn() {
  const btn = document.getElementById('open-cart');
  btn.classList.remove('bounce');
  void btn.offsetWidth;
  btn.classList.add('bounce');
}

function updateCartUI() {
  const items = [...cart.entries()];
  const totalQty   = items.reduce((s, [, i]) => s + i.qty, 0);
  const totalPrice = items.reduce((s, [, i]) => s + i.price * i.qty, 0);

  $cartCount.textContent = totalQty;
  $cartTotal.textContent = clp(totalPrice);

  if (!items.length) {
    $cartItems.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="#d1d5db" stroke-width="1.4"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Tu carrito está vacío</p>
        <p style="font-size:.78rem;margin-top:.3rem;color:#9ca3af">Agrega productos para continuar</p>
      </div>`;
    return;
  }

  $cartItems.innerHTML = items.map(([key, i]) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${i.img}" alt="${i.name}" />
      <div>
        <p class="cart-item-name">${i.name}</p>
        ${i.size ? `<p class="cart-item-size">${i.size}</p>` : ''}
        <p class="cart-item-price">${clp(i.price)} c/u · <strong style="color:var(--navy)">${clp(i.price * i.qty)}</strong></p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="inc" data-key="${key}" aria-label="Aumentar cantidad">+</button>
        <span class="qty-display">${i.qty}</span>
        <button class="qty-btn" data-action="dec" data-key="${key}" aria-label="Disminuir cantidad">−</button>
      </div>
    </div>
  `).join('');
}

/* ---- Panel ---- */
function openCart() {
  $cartPanel.classList.add('open');
  $cartPanel.setAttribute('aria-hidden', 'false');
  $overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $cartPanel.classList.remove('open');
  $cartPanel.setAttribute('aria-hidden', 'true');
  $overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ---- WhatsApp checkout ---- */
function buildWhatsApp() {
  const items = [...cart.values()];
  if (!items.length) return `https://wa.me/${PHONE}`;

  const lines = ['Hola! 👋 Quiero hacer un pedido en *Michel Hogar*:\n'];
  items.forEach(i => {
    const sizeTxt = i.size ? ` · ${i.size}` : '';
    lines.push(`• *${i.name}*${sizeTxt} x${i.qty} — ${clp(i.price * i.qty)}`);
  });
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  lines.push(`\n💰 *Total estimado: ${clp(total)}*`);
  lines.push(`\n🚚 Envío vía *Starken* (3–4 días hábiles a todo Chile)`);
  lines.push('\nPor favor confirmarme disponibilidad. ¡Gracias!');

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/* ---- Eventos ---- */

window.addEventListener('scroll', () => {
  $header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

document.getElementById('mobile-menu-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  $nav.classList.toggle('nav-open');
});
$nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    $nav.classList.remove('nav-open');
    document.getElementById('mobile-menu-btn').classList.remove('active');
  });
});

// Filtros
$filters.addEventListener('click', e => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

// Búsqueda con debounce
let searchTimer;
$search.addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchTerm = e.target.value;
    renderProducts();
  }, 140);
});

// Grid: tamaño + agregar
$grid.addEventListener('click', e => {
  const sizeBtn = e.target.closest('.size-chip');
  if (sizeBtn) {
    const group = sizeBtn.parentElement;
    group.querySelectorAll('.size-chip').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-checked', 'false');
    });
    sizeBtn.classList.add('active');
    sizeBtn.setAttribute('aria-checked', 'true');
    return;
  }
  const addBtn = e.target.closest('.add-btn');
  if (!addBtn) return;
  addToCart(Number(addBtn.dataset.id));
});

$cartItems.addEventListener('click', e => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  changeQty(btn.dataset.key, btn.dataset.action === 'inc' ? 1 : -1);
});

document.getElementById('open-cart').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
$overlay.addEventListener('click', closeCart);

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (!cart.size) {
    showToast('Agrega productos antes de continuar');
    return;
  }
  window.open(buildWhatsApp(), '_blank');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCart();
});

/* ---- Init ---- */
loadCart();
renderFilters();
renderProducts();
updateCartUI();
