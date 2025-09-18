const products = [];
let id = 1;

// 🔌 Electronics (100)
const electronics = [
  { name: "boAt Rockerz 255 Pro+", price: 1499 },
  { name: "Noise Air Buds Pro 2", price: 1999 },
  { name: "Samsung Galaxy Watch 6", price: 18999 },
  { name: "Mi Smart Band 7", price: 3499 },
  { name: "Canon EOS M50 Mark II", price: 58999 },
  { name: "Sony WH-CH720N", price: 7999 },
  { name: "Realme Pad X", price: 25999 },
  { name: "TP-Link AX1500 Router", price: 3499 },
  { name: "Lenovo Ideapad Slim 3", price: 42999 },
  { name: "Xiaomi Smart TV 5A", price: 14999 }
];
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    products.push({ id: id++, name: `${electronics[i].name} ${j}`, price: electronics[i].price, category: "Electronics" });
  }
}

// 👕 Fashion (100)
const fashion = [
  { name: "Levi’s Slim Fit Jeans", price: 2499 },
  { name: "Zara Graphic T-Shirt", price: 799 },
  { name: "Nike Air Max Sneakers", price: 5999 },
  { name: "Ray-Ban Aviator Sunglasses", price: 6999 },
  { name: "FabIndia Silk Saree", price: 3499 },
  { name: "Van Heusen Blazer", price: 4999 },
  { name: "Wrangler Denim Jacket", price: 2999 },
  { name: "Crocs Classic Clogs", price: 1999 },
  { name: "Peter England Tie", price: 499 },
  { name: "Campus Running Shoes", price: 1499 }
];
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    products.push({ id: id++, name: `${fashion[i].name} ${j}`, price: fashion[i].price, category: "Fashion" });
  }
}

// 🏠 Home (100)
const home = [
  { name: "Cello Opalware Dinner Set", price: 1999 },
  { name: "Philips LED Table Lamp", price: 899 },
  { name: "Nilkamal Foldable Chair", price: 1499 },
  { name: "Prestige Induction Cooktop", price: 2499 },
  { name: "Sleepyhead Memory Foam Pillow", price: 1299 },
  { name: "Urban Ladder Coffee Table", price: 3999 },
  { name: "Solimo Cotton Bedsheet", price: 999 },
  { name: "Havells Ceiling Fan", price: 2999 },
  { name: "Wakefit Orthopedic Mattress", price: 8999 },
  { name: "IKEA Storage Box Set", price: 999 }
];
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    products.push({ id: id++, name: `${home[i].name} ${j}`, price: home[i].price, category: "Home" });
  }
}

// 📚 Books (100)
const books = [
  { name: "Atomic Habits", price: 499 },
  { name: "Psychology of Money", price: 399 },
  { name: "Ikigai", price: 299 },
  { name: "Rich Dad Poor Dad", price: 349 },
  { name: "Think Like a Monk", price: 399 },
  { name: "Deep Work", price: 499 },
  { name: "Sapiens", price: 599 },
  { name: "Start With Why", price: 449 },
  { name: "Do Epic Shit", price: 299 },
  { name: "Hooked", price: 399 }
];
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    products.push({ id: id++, name: `${books[i].name} ${j}`, price: books[i].price, category: "Books" });
  }
}

// 🧴 Personal Care (100)
const care = [
  { name: "Beardo Face Wash", price: 299 },
  { name: "Nivea Men Cream", price: 199 },
  { name: "MCaffeine Scrub", price: 449 },
  { name: "Plum Toner", price: 350 },
  { name: "Mamaearth Hair Oil", price: 399 },
  { name: "L'Oreal Shampoo", price: 499 },
  { name: "Gillette Razor", price: 299 },
  { name: "Vaseline Lotion", price: 249 },
  { name: "Biotique Face Pack", price: 199 },
  { name: "Neutrogena Sunscreen", price: 599 }
];
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    products.push({ id: id++, name: `${care[i].name} ${j}`, price: care[i].price, category: "Personal Care" });
  }
}