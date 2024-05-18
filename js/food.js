

let dataObj = [
    {
      name: "Cold Drinks",
      imgSrc:"../css/img/cola.png",
          products: [
        {
          name: "Sprite Tin Cane",
          price: 100,
          imgSrc: "../css/img/Sprite Tin Cane - 480x923.png",
        },
        {
          name: "Cocktail",
          price: 120,
          imgSrc: "../css/img/Cocktail Glass - 640x630.png",
        },
        {
          name: "strawberry  Juice",
          price: 140,
          imgSrc: "../css/img/Tomato Juice - 480x606.png",
        },
      ],
    },
  
    {
      name: "Burgers",
      imgSrc: "../css/img/burger.png",
      products: [
        {
          name: "beef burger",
          price: 100,
          imgSrc: "../css/img/burger_1.png",
        },
        {
          name: "Double cheeseburger",
          price: 120,
          imgSrc: "../css/img/burger_2.png",
        },
        {
          name: "Cheese burger",
          price: 140,
          imgSrc: "../css/img/burger_3.png",
        },
      ],
    },
  

    {
      name: "Pizza",
      imgSrc: "../css/img/pizaa.png",
      products: [
        {
          name: "Greek pizza",
          price: 100,
          imgSrc: "../css/img/pizza_1.png",
        },
        {
          name: "Neapolitan pizza",
          price: 120,
          imgSrc: "../css/img/pizza_2.png",
        },
        {
          name: "Sicilian pizza",
          price: 140,
          imgSrc: "../css/img/pizza_3.png",
        },
      ],
    },
    //
    {
      name: "Wok",
      imgSrc: "../css/img/wok.png",
      products: [
        {
          name: "Stir-fry recipes ",
          price: 100,
          imgSrc: "../css/img/wok1.jpg",
        },
        {
          name: "Chinese food on wok",
          price: 120,
          imgSrc: "../css/img/wok2.jpg",
        },
        {
          name: "Meet Chinese Food",
          price: 140,
          imgSrc: "../css/img/wok3.webp",
        },
      ],
    },
    //
    {
      name: "Dessert",
      imgSrc: "../css/img/sweet.png",
      products: [
        {
          name: "Ice cream",
          price: 100,
          imgSrc: "../css/img/co (2).png",
        },
        {
          name: "Cookies",
          price: 120,
          imgSrc: "../css/img/co (1).png",
        },
        {
          name: "Puddings",
          price: 140,
          imgSrc: "../css/img/co (3).png",
        },
      ],
    },
    //
    {
      name: "Pasta",
      imgSrc: "../css/img/pasta.png",
      products: [
        {
          name: "Cheese Macaronis",
          price: 100,
          imgSrc: "../css/img/pasta22.png",
        },
        {
          name: "Farfalle",
          price: 120,
          imgSrc: "../css/img/pa2.jpg",
        },
        {
          name: "linguine carbonara",
          price: 140,
          imgSrc: "../css/img/pa3.jpeg",
        },
      ],
    },
  ];
  
let catsDiv = document.querySelector(".AllCats");
let productsDiv = document.querySelector(".productInCat");
let sideCartProducts = [];
renderCatsDiv();
let catprod=document.querySelector("#catprod");

function renderCatsDiv() {
  let catprod=document.querySelector("#catprod");

  if (!catsDiv) {
    let div = document.createElement("div");
    div.classList.add("AllCats");
    catprod.innerHTML="Categories";
    console.log(div);
    dataObj.forEach((cat, index) => {
      div.innerHTML += `
          <div id="cats" class="col-12col-md-10col-la-8 p-3  text-center clik card d-flex align-items-center gap-3 mb-1 justify-content-center">
              <img src="${cat.imgSrc}" id="imgCardF"  class="card-img-top col-12 p-2 clik"  onclick="showProductsInCat(${index})" />
              <div class="card-body text-center>
              <h3 class="col-12 card-title fw-bold">${cat.name}</h3> 
              </div>
              
          </div>
          `;
    });
    document.querySelector("#Products").appendChild(div);
    let productInCatElement = document.querySelector(".productInCat");
    if (productInCatElement) {
      productInCatElement.remove();
    }  }
}
function showProductsInCat(catIndex) {
  
  let div = document.createElement("div");
  div.classList.add("productInCat");
  let categoryName = dataObj[catIndex].name;
  catprod.innerHTML = `<button class="btn btn-warning p-2 mb-0 btnba clik" onclick="renderCatsDiv()"><i class="fa-solid fa-arrow-left-long"></i></button>`;

  catprod.innerHTML+=`<h2 class="category-name col-12">${categoryName}</h2>`;
  let products = dataObj[catIndex].products;
  products.forEach((product, productIndex) => {
    div.innerHTML += `
    <div class="product col-12col-md-10col-la-8 p-3 card d-flex align-items-center clik gap-3 mb-1 justify-content-center" onclick="addToCart(${catIndex},${productIndex})">
        <img style="height: 13rem;width: 13rem;" src="${product.imgSrc}"  class="card-img-top col-12 p-2" />
        <p class="col-12 card-title fw-bold">${product.name}</p>
        <p class="col-12 card-title fw-bold">${product.price} $</p>
    </div>
    `;
  });
  document.querySelector("#Products").appendChild(div);
  document.querySelector(".AllCats").remove();
}


function addToCart(catIndex, productIndex) {
  let product = dataObj[catIndex].products[productIndex];
  let existingProduct = sideCartProducts.find(p => p.id === product.id);
  
  if (existingProduct) {
    existingProduct.qty++;
  } else {
    product.qty = 1;
    sideCartProducts.push(product);
  }

  renderSideCart();
  updateCartCount();
}

function renderSideCart() {
  let cartItemsDiv = document.querySelector("#cartItems");
  cartItemsDiv.innerHTML = "";
  sideCartProducts.forEach((el, index) => {
    cartItemsDiv.innerHTML += `
      <div class="productInCart" id="PInC">
        <div class="col-12 d-flex justify-content-flex-start gap-2">
          <img src="${el.imgSrc}" style="height: 3rem" />
          <p class="mb-0">${el.name}</p>
        </div>
        <div class="col-12 d-flex align-items-center gap-2 justify-content-center">
          <button class="btn btn-outline-warning text-dark clik" onclick="decrementQty(${index})">-</button>
          <p class="mb-0">${el.qty}</p>
          <button class="btn btn-outline-warning text-dark clik" onclick="incrementQty(${index})">+</button>
        </div>
        <div class="col-12 d-flex justify-content-between p-2">
          <p>السعر: ${el.price}</p>
          <p>الإجمالي: ${el.price * el.qty}</p>
          <i class="fa-solid fa-trash-can clik" onclick="deleteItem(${index})"></i>
        </div>
      </div>
    `;
  });

  getTotal();
  updateCartCount();
}

function getTotal() {
  let total = 0;
  sideCartProducts.forEach(el => {
    total += el.price * el.qty;
  });
  document.querySelector("#cartTotal").innerHTML = `<p>Final Price : ${total}</p>`;
}

function openCart() {
  renderSideCart();
  document.getElementById("SideCart").style.width = "425px"; 
}

function closeCart() {
  renderSideCart();
  document.getElementById("SideCart").style.width = "0";
}

function incrementQty(index) {
  sideCartProducts[index].qty++;
  renderSideCart();
}

function decrementQty(index) {
  if (sideCartProducts[index].qty > 1) {
    sideCartProducts[index].qty--;
  } else {
    deleteItem(index);
  }
  renderSideCart();
}

function deleteItem(index) {
  sideCartProducts.splice(index, 1);
  renderSideCart();
}

document.getElementById("cartButton").addEventListener("click", openCart);
window.onload = closeCart;

function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  const itemCount = sideCartProducts.reduce((sum, item) => sum + item.qty, 0);

  if (itemCount > 0) {
    cartCountElement.textContent = itemCount;
    cartCountElement.classList.add('show');
  } else {
    cartCountElement.classList.remove('show');
  }
}

// Initialize cart count on page load
updateCartCount();
