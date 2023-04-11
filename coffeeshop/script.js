let loader = document.querySelector("#loader");
let navbar = document.querySelector(".primary-header");
let hero = document.querySelector(".hero");
let content = document.querySelector(".content");
let navbarCart = document.querySelector(".navbar");
let listCart = document.querySelector(".listCart");
let contentCart = document.querySelector(".container-cart");
let contentCard = document.querySelector(".content-card");
let checkOut = document.querySelector(".checkOut");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let input = document.querySelectorAll("#input");
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let footer = document.querySelector('footer');
let user = document.querySelector('.user');
let swiperCaro = document.querySelector('.swiper');

console.log(localStorage.getItem('user'))
user.innerText = localStorage.getItem('user');

// Navbar
const isScrolling = () => {
  const headerEl = document.querySelector(".primary-header");
  let windowPosition = window.scrollY > 250;
  headerEl.classList.toggle("active", windowPosition);
};
window.addEventListener("scroll", isScrolling);

// Loader
function load() {
  document.body.classList.remove = 'overflow';
  loader.style.display = "block";
  footer.style.display = 'none';
}

function hideLoad() {
  loader.style.display = "none";
  navbar.style.display = "block";
  navbar.style.position = "static";
  contentCart.style.display = "flex";
  checkOut.style.display = "flex";
  footer.style.display = 'flex';
}

function hidePage() {
  load();
  navbar.style.display = "none";
  hero.style.display = "none";
  content.style.display = "none";
  swiperCaro.style.display = 'none';
}

let cart = function() {
  hidePage();
  setTimeout(hideLoad, 1000);
  burger.style.position = 'sticky'
};

// Search
function search() {
  let titleCard = document.querySelectorAll(".title-card");
  let searchBar = document.querySelector("#searchbar");
  let x = document.querySelectorAll(".card");
  let filter = searchbar.value.toUpperCase();
  for (i = 0; i < x.length; i++) {
    let txtValue = titleCard[i].textContent || titleCard[i].innerText;
    removeClass(x[i], "show");
    removeClass(x[i], "hide");
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      addClass(x[i], "show");
    } else {
      addClass(x[i], "hide");
    }
  }
}

// Filter
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    removeClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    } else {
      addClass(x[i], "hide");
    }
    console.log(x[i].className.indexOf > -1);
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Card Cart
let products = [
  {
    id: 1,
    name: "Matcha Latte",
    image: "matcha-lt.jpg",
    price: 3,
    category: "latte",
    desk: 'consists of matcha powder, water and, milk'
  },
  {
    id: 2,
    name: "Americano",
    image: "americano.jpg",
    price: 3,
    category: "espresso",
    desk: 'coffee drink prepared by diluting an espresso with hot water',
  },
  {
    id: 3,
    name: "Chiaro Cappucino",
    image: "chiaro-cpp.jpg",
    price: 3,
    category: "cappucino",
    desk: 'composed of espresso and hot milk, with foamed milk',
  },
  {
    id: 4,
    name: "Macchiato",
    image: "coffeMacchiato-bc.png",
    price: 3,
    category: "espresso",
    desk: 'espresso, topped with a small amount of foamed or steamed milk',
  },
  {
    id: 5,
    name: "Cold Brew",
    image: "coldBrew.jpg",
    price: 3,
    category: "iced",
    desk: 'the process of steeping coffee in water at cool temperatures',
  },
  {
    id: 6,
    name: "Doppio",
    image: "doppio-bc.jpg",
    price: 3,
    category: "espresso",
    desk: 'simply a double shot of espresso served in a slightly larger cup',
  },
  {
    id: 7,
    name: "Freddo Cappucino",
    image: "freddo-cpp.jpg",
    price: 3,
    category: "cappucino",
    desk: 'two espresso shots that have been shaken on ice for a foamy constancy',
  },
  {
    id: 8,
    name: "Iced Vanilla Latte",
    image: "icedVanilla-lt.jpg",
    price: 3,
    category: "latte",
    desk: 'espresso with ice, cream, and vanilla syrup',
  },
  {
    id: 9,
    name: "Latte Macchiato",
    image: "latteMacchiato-bc.jpg",
    price: 3,
    category: "espresso",
    desk: 'an espresso with milk and a spoonful of foamed milk on top',
  },
  {
    id: 10,
    name: "Long Black",
    image: "longBlack-bc.jpg",
    price: 3,
    category: "espresso",
    desk: 'an espresso two shots of espresso diluted with hot water',
  },
  {
    id: 11,
    name: "Peppermint Mocha Latte",
    image: "pepperMintMocha-lt.jpg",
    price: 3,
    category: "latte",
    desk: 'espresso, milk, peppermint syrup, and whipped cream',
  },
  {
    id: 12,
    name: "Ristretto",
    image: "ristretto-bc.jpg",
    price: 3,
    category: "espresso",
    desk: 'a short shot of espresso made with finely ground beans and less water',
  },
  {
    id: 13,
    name: "Scuro Cappucino",
    image: "scuro-cpp.jpg",
    price: 3,
    category: "cappucino",
    desk: `an intense, roasted but balanced coffee with milk as a cappuccino`,
  },
  {
    id: 14,
    name: "Traditional Cappucino",
    image: "traditional-cpp.jpg",
    price: 3,
    category: "cappucino",
    desk: 'one to two shots of espresso with of steamed and foamed milk',
  },
  {
    id: 15,
    name: "White Chocolate Latte",
    image: "whiteChocolate-lt.jpg",
    price: 3,
    category: "latte",
    desk: 'the combination of white chocolate and coffee is smooth and velvety',
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add(`card`);
    newDiv.classList.add(`${value.category}`);
    newDiv.classList.add(`show`);
    newDiv.innerHTML = `
                <img src="img/${value.image}" alt="${
      value.name
    }" class="img-card">
                <div class="text-card">
                    <p class="title-card">${value.name}</p>
                    <p>${value.desk}</p>
                </div>
                <div class="price-card">
                    <p><span class="dollar">$</span>${value.price.toLocaleString()}</p>   
                    <svg class="cart" onclick="addToCard(${key})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#9E5E3B" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>
                </div>`;
    contentCard.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
  animNotif();
}

function animNotif() {
  let notif = document.querySelector(".notification");
  notif.classList.remove("animateOpen");
  notif.classList.add("animateOpen");
  setTimeout(() => {
    notif.classList.remove("animateOpen");
  }, 2000);
}

function reloadCard() {
  listCart.innerHTML = "";
  let totalPrice = 0;
  let count = 0;
  listCards.forEach((value, key) => {
    // key : ${key}`)
    if (value != null) {
      let newDiv = document.createElement("div");
      let countDiv = document.querySelector(".count");
      totalPrice = totalPrice + value.price;
      count = count + value.quantity;
      newDiv.classList.add("card-cart");
      newDiv.innerHTML = `
          <img class="img-cart" src="img/${value.image}" alt="Matcha Latte">
          <div class="content-cart">
              <p class="product-name poppins">${value.name}</p>
              <label class="product-price matcha"><span class="dollar">$</span>${value.price.toLocaleString()}</label>
              <div class="quantity">
                  <button id="minus" onclick="changeQuantityMinus(${key}, ${
            value.quantity - 1
          })"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#fff" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
                  <label id="input">${value.quantity}</label>
                  <button id="plus" onclick="changeQuantityPlus(${key}, ${
            value.quantity + 1
          })"><svg id="plusSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="plusSvg"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#fff" id="plusPath" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
              </div>
              <svg class="deleteSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#9E5E3B" class="deletePath" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </div>`;
              listCart.appendChild(newDiv);
      countDiv.innerText = `${count.toLocaleString()} product`;
      listCards[key].totalPrice = listCards[key].price;
    }
    input.forEach((e) => {
      e.addEventListener("click", (e) => {
        e.preventDefault;
      });
    });
  });
  total.innerHTML = `<span class="dollar">$</span>${totalPrice.toLocaleString()}`;
  del();
}


function changeQuantityPlus(key, quantity) {
  // console.log('key : ' + key);
  // console.log(`quantity : ${quantity}`);
  let total = document.querySelector(".total");
  let countDiv = document.querySelector(".count");
  let totalPrice = 0;
  let count = 0;
  if (quantity == 0) {
    delete listCards[key];
  } else {
    let productPrice = document.querySelectorAll(".product-price");
    let plus = document.querySelectorAll("#plus");
    let minus = document.querySelectorAll("#minus");
    let input = document.querySelectorAll("#input");
    let price = listCards[key].price * quantity;
    productPrice[key].innerHTML = "";
    total.innerText = "";
    input.innerText = "";
    plus[key].setAttribute(
      "onclick",
      `changeQuantityPlus(${key}, ${quantity + 1})`
    );
    minus[key].setAttribute(
      "onclick",
      `changeQuantityPlus(${key}, ${quantity - 1})`
    );
    listCards[key].quantity = quantity;
    // listCards[key].price = quantity * products[key].price;
    listCards[key].totalPrice = price;
    productPrice[key].innerHTML = `
      <span class="dollar">$</span>${listCards[key].totalPrice}`;
    input[key].innerText = `${quantity}`;
    // console.log(`price ${listCards[key].price}`);
    // console.log(`quantity : ${listCards[key].quantity}`);
    // console.log(price);
  }
  listCards.forEach((value) => {
    totalPrice = totalPrice + value.totalPrice;
    count = count + value.quantity;
    total.innerHTML = `<span class="dollar">$</span>${totalPrice.toLocaleString()}`;
    countDiv.innerText = `${count.toLocaleString()} product`;
  });
}

function changeQuantityMinus(key, quantity) {
  // console.log('key : ' + key);
  // console.log(`quantity : ${quantity}`);
  let total = document.querySelector(".total");
  let countDiv = document.querySelector(".count");
  let totalPrice = 0;
  let count = 0;
  let productPrice = document.querySelectorAll(".product-price");
  let minus = document.querySelectorAll("#minus");
  let input = document.querySelectorAll("#input");
  let price = listCards[key].price * quantity;
  productPrice[key].innerHTML = "";
  total.innerText = "";
  plus[key].setAttribute(
    "onclick",
    `changeQuantityPlus(${key}, ${quantity + 1})`
  );
  minus[key].setAttribute(
    "onclick",
    `changeQuantityMinus(${key}, ${quantity - 1})`
  );
  listCards[key].quantity = quantity;
  // listCards[key].price = quantity * products[key].price;
  listCards[key].totalPrice = price;
  productPrice[key].innerHTML = `
      <span class="dollar">$</span>${listCards[key].totalPrice}`;
  input[key].innerText = `${quantity}`;
  // console.log(`price : ${listCards[key].price}`);
  // console.log(`quantity : ${listCards[key].quantity}`);
  // console.log(price);
  listCards.forEach((value) => {
    totalPrice = totalPrice + value.totalPrice;
    count = count + value.quantity;
    total.innerHTML = `<span class="dollar">$</span>${totalPrice.toLocaleString()}`;
    countDiv.innerText = `${count.toLocaleString()} product`;
  });
}

function del() {
  let cardCart = document.querySelectorAll(".card-cart");
  cardCart.forEach((el) => {
    el.addEventListener("click", (e) => {
      let targetClass = e.target.classList.value;
      if (targetClass === "deleteSvg") {
        e.target.parentElement.style.display = "none";
      }
      if (targetClass === "deletePath") {
        e.target.parentElement.parentElement.style.display = "none";
      }
    });
  });
}

// Burger

$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.nav').toggleClass('show');
  $('body').toggleClass('overflow');
});

// Carousels
