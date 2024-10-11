// START BAGIAN HUMBERGER MENU //
// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuerger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik diluar sidebar untuk menghilangkan Humberger menu/navbar
const hambuger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// END BAGIAN HUMBERGER MENU //

// Function to open modal
function openModal(modalId) {
  document.querySelector(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
  document.querySelector(modalId).style.display = "none";
}

// BAGIAN DIBAWAH INI YANG DI EDIT
// Array untuk menyimpan produk yang telah dimasukkan ke keranjang
var cartItems = [];

// Function to add product to cart
function addToCart(productName, price) {
  // Buat objek untuk produk yang akan dimasukkan ke dalam keranjang
  var product = {
    name: productName,
    price: price,
    quantity: 1, // Tambahkan properti quantity untuk menyimpan jumlah produk
  };

  // Cari apakah produk sudah ada di dalam keranjang
  var existingProduct = cartItems.find((item) => item.name === productName);
  if (existingProduct) {
    // Jika produk sudah ada, tambahkan jumlahnya
    existingProduct.quantity++;
  } else {
    // Jika produk belum ada, tambahkan ke dalam array keranjang
    cartItems.push(product);
  }

  // Tampilkan pesan atau lakukan operasi lain sesuai kebutuhan
  alert(productName + " ditambahkan ke keranjang!");

  // Perbarui tampilan keranjang
  updateCartUI();
}

// Function to update cart items list and total cost
function updateCartUI() {
  var cartList = document.getElementById("cartItemList");
  var totalCostElem = document.getElementById("totalCost");
  var totalCost = 0;

  // Kosongkan daftar produk sebelum menambahkan yang baru
  cartList.innerHTML = "";

  // Loop melalui produk di keranjang dan tambahkan ke daftar produk
  cartItems.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item.name + " - IDR " + item.price + " x " + item.quantity; // Tampilkan jumlah produk
    cartList.appendChild(li);

    // Tambahkan harga produk yang dikalikan dengan jumlahnya ke total biaya
    totalCost += item.price * item.quantity;
  });

  // Tampilkan total biaya yang terupdate
  totalCostElem.textContent = "IDR " + totalCost;
}
// BAGIAN DIATAS ITU YANG DIEDIT //

// Search product function
function btnCheckout() {
  // Add your search functionality here
  alert("Checkout Berhasil");
}

// Get the buttons that open the modals
var searchBtn = document.getElementById("search-button");
var cartBtn = document.getElementById("shopping-cart-button");

// Get the close buttons for modals
var closeBtns = document.querySelectorAll(".close");

// Add event listeners to open modal buttons
searchBtn.addEventListener("click", function () {
  openModal("#myModal");
});

cartBtn.addEventListener("click", function () {
  openModal("#keranjang");
});

// Add event listeners to close modal buttons
closeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    closeModal("#myModal");
    closeModal("#keranjang");
  });
});

// Close modal when clicking outside the modal
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal("#myModal");
    closeModal("#keranjang");
  }
};
