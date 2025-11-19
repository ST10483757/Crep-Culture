const cartSummary = document.getElementById('cart-summary');
const cartItemsList = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');

let cart = [];

// Update product price when size changes
document.querySelectorAll('.shop-card').forEach(card => {
  const priceEl = card.querySelector('.product-price');
  const sizeSelect = card.querySelector('.size-select');

  if (!priceEl || !sizeSelect) return;

  sizeSelect.addEventListener('change', () => {
    const sel = sizeSelect.selectedOptions[0];
    const nextPrice = sel && sel.dataset.price ? parseFloat(sel.dataset.price) : 0;
    priceEl.textContent = nextPrice.toFixed(2);
  });
});

// Update cart summary
function updateCart() {
  if (!cartItemsList || !cartSummary || !cartTotalEl || !cartCountEl) return;

  cartItemsList.innerHTML = '';
  let total = 0;

  cartCountEl.textContent = cart.length;

  if (cart.length === 0) {
    cartSummary.classList.add('hidden');
    cartTotalEl.textContent = '0.00';
    return;
  } else {
    cartSummary.classList.remove('hidden');
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.img}" alt="${item.name}" width="60" height="60">
      <div>
        <strong>${item.name}</strong><br>
        Size: ${item.size}, Qty: ${item.qty}<br>
        R${(item.price * item.qty).toFixed(2)} 
        <span class="remove-btn" style="color:red; cursor:pointer;">[Remove]</span>
      </div>
    `;
    li.querySelector('.remove-btn').onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    cartItemsList.appendChild(li);
    total += item.price * item.qty;
  });

  cartTotalEl.textContent = total.toFixed(2);
}

// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.shop-card');
    if (!card) return;

    const name = button.dataset.name || 'Product';
    const imgEl = card.querySelector('.product-img') || card.querySelector('img');
    const img = imgEl ? imgEl.src : '';
    const sizeSelect = card.querySelector('.size-select');
    const qtyInput = card.querySelector('.quantity-input');

    if (!sizeSelect || !qtyInput) return;

    const size = sizeSelect.value;
    const sel = sizeSelect.selectedOptions[0];
    const price = sel && sel.dataset.price ? parseFloat(sel.dataset.price) : 0;
    const qty = parseInt(qtyInput.value, 10) || 1;

    cart.push({ name, img, size, price, qty });
    updateCart();
  });
});

//This is for the search bar
function filterProducts() {
  const input = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.shop-card');

  products.forEach(product => {
    const name = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = name.includes(input) ? 'block' : 'none';
  });
}
function sortProducts() {
  const sortValue = document.getElementById('sort').value;
  const grid = document.getElementById('shop-product');
  const cards = Array.from(grid.getElementsByClassName('shop-card'));

  let sortedCards;

  if (sortValue === 'name-asc') {
    sortedCards = cards.sort((a, b) => {
      const nameA = a.querySelector('h3').textContent.toLowerCase();
      const nameB = b.querySelector('h3').textContent.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else if (sortValue === 'name-desc') {
    sortedCards = cards.sort((a, b) => {
      const nameA = a.querySelector('h3').textContent.toLowerCase();
      const nameB = b.querySelector('h3').textContent.toLowerCase();
      return nameB.localeCompare(nameA);
    });
  } else if (sortValue === 'price-asc') {
    sortedCards = cards.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('.product-price').textContent);
      const priceB = parseFloat(b.querySelector('.product-price').textContent);
      return priceA - priceB;
    });
  } else if (sortValue === 'price-desc') {
    sortedCards = cards.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('.product-price').textContent);
      const priceB = parseFloat(b.querySelector('.product-price').textContent);
      return priceB - priceA;
    });
  } else {
    return; // 'default' selected, do nothing
  }

  // Clear and re-append sorted cards
  grid.innerHTML = '';
  sortedCards.forEach(card => grid.appendChild(card));
}
