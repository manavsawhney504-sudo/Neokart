let cart = [];

// 🛍️ Render Products
function renderProducts(productList = products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
      <div class="cart-controls">
        <input type="number" min="1" value="1" />
        <button onclick="addToCart(this, ${product.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ➕ Add to Cart
function addToCart(button, productId) {
  const card = button.closest('.card');
  const quantity = parseInt(card.querySelector('input').value);
  const product = products.find(p => p.id === productId);

  if (!product || isNaN(quantity) || quantity < 1) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  updateCartCount();
  console.log("Cart updated:", cart);
  alert(`${product.name} added to cart (Qty: ${quantity})`);
}

// 🔢 Update Cart Count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

// 🔍 Filter Products
function filterProducts() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const filtered = products.filter(p =>
    (p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)) &&
    (category === "" || p.category === category)
  );

  renderProducts(filtered);
}

// 🛒 Show Cart Page
function showCart() {
  document.getElementById("productGrid").classList.add("hidden");
  document.getElementById("checkoutPage").classList.add("hidden");
  document.getElementById("cartPage").classList.remove("hidden");

  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`;
      cartItems.appendChild(div);
      total += item.price * item.quantity;
    });
  }

  document.getElementById("cartTotal").textContent = total;
  console.log("Cart rendered:", cart);
  window.scrollTo({ top: 0, behavior: "instant" });
}

// 🔙 Back to Shop
function hideCart() {
  document.getElementById("cartPage").classList.add("hidden");
  document.getElementById("productGrid").classList.remove("hidden");
}

// 📦 Checkout Flow
function checkout() {
  document.getElementById("cartPage").classList.add("hidden");
  document.getElementById("checkoutPage").classList.remove("hidden");
}

// 🔙 Back to Cart
function hideCheckout() {
  document.getElementById("checkoutPage").classList.add("hidden");
  document.getElementById("cartPage").classList.remove("hidden");
}

// ✅ Confirm Order
function confirmOrder() {
  const address = document.getElementById("addressInput").value;
  if (address.trim() === "") {
    alert("Please enter your address.");
    return;
  }

  alert(`Order confirmed! Shipping to: ${address}`);
  cart = [];
  updateCartCount();
  hideCheckout();
  document.getElementById("productGrid").classList.remove("hidden");
}

// 🌙 Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// 🚀 Initial Render
renderProducts();