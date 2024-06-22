
  // Definición de productos
let mezOrigSmall = {
  id: 1,
  name: "Mezcla Original 200g",
  price: 500,
};

let mezOrigBig = {
  id: 2,
  name: "Mezcla Original 500g",
  price: 900,
};

let mezEspSmall = {
  id: 3,
  name: "Mezcla Especial 200g",
  price: 700,
};

let mezEspBig = {
  id: 4,
  name: "Mezcla Especial 500g",
  price: 1200,
};

// Array de productos disponibles
let products = [mezOrigSmall, mezOrigBig, mezEspSmall, mezEspBig];

// Elementos del formulario y lista de compras
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

// Función para añadir un producto al carrito
function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find(item => item.id === targetId);
  const number = parseInt(numberElement.value);

  if (!product || !number) {
    alert("Por favor, seleccione un producto y especifique una cantidad válida.");
    return;
  }

  let purchase = {
    product: product,
    number: number,
  };

  purchases.push(purchase);

  alert(`Producto añadido:\n${product.name}\nImporte: ${product.price} yenes\nCantidad: ${number}`);
  priceElement.value = "";
  numberElement.value = "";
}

// Función para mostrar el detalle de la compra
function display() {
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.product.price} yenes x ${purchase.number}\n`;
  }).join("");
}

// Función para calcular el subtotal de la compra
function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0);
}

// Función para calcular los gastos de envío según el importe total
function calcPostageFromPurchase(sum) {
  if (sum >= 3000) {
    return 0;
  } else if (sum >= 2000) {
    return 250;
  } else {
    return 500;
  }
}

// Función para calcular y mostrar el importe total
function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);

  alert(`${display()}Subtotal: ${sum} yenes\nGastos de envío: ${postage} yenes\nImporte total: ${sum + postage} yenes`);

  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}
