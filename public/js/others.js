// subnav
let subNavClose = document.querySelector(".sub-nav-close ");
let subNav = document.querySelector(".subnav-mobile");
let subNavMoblieBtn = document.querySelector(".list-mobile-btn");
subNavClose.onclick = function () {
  subNav.classList.add("d-none");
};
subNavMoblieBtn.onclick = function () {
  subNav.classList.toggle("d-none");
};

let item = document.querySelectorAll(
  ".navigation-2 .container .row .col-8 .item"
);

let navigationElements = document.querySelectorAll(
  ".navigation-2 .container .row .col-8 .item"
);

function getCharacter() {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  let urlStrId = url.search;
  let character = urlStrId.replace(/\?/g, "");

  return character;
}
// Call Foods API
async function getFoods() {
  let res = await fetch("http://localhost:3000/foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let foods = await getFoods();
  let productBox = document.querySelector(".product .container .row");
  productBox.innerHTML = ``;
  foods.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.setAttribute("data-product-id", `${element.id}`);

    item.innerHTML = `
      <div class="item p-2 custom-shadow h-100 rounded-2" >
                <a
                  href="./other-product.html?${element.id}"
                  class="text-decoration-none d-flex flex-column justify-content-between h-100"
                >
                  <div class="wrap-img d-flex justify-content-center" >
                    <img
                      src="${element.thumbnail}"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="wrap-product-info d-flex flex-column px-lg-2">
                    <div class="pr-name text-soft-bl fw-medium">
                      <span class="name-value fs-4 d-none d-lg-block"
                        >${element.name}</span
                      >
                      <span class="name-value d-lg-none"
                        >${element.name}</span
                      >
                    </div>
                    <div class="pr-price-box d-flex justify-content-between">
                      <div class=" price fw-medium d-flex justify-content-center gap-1 align-items-center">
                        <span class="ff-roboto text-soft-bl "
                          >${element.price}</span
                        >
                        <span class=" ff-roboto text-soft-bl ">VND</span>
                      </div>
                    
                      <div
                        class="cart-btn border border-success py-1 px-2 text-soft-bl"
                        style="border-radius: 50%"
                      >
                        <i class="bi bi-cart4"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
    
   `;
    productBox.append(item);
  });
}

// Call Clothes API
async function getClothes() {
  let res = await fetch("http://localhost:3000/clothes");
  let data = await res.json();
  return data;
}
async function renderClothes() {
  let clothes = await getClothes();
  let productBox = document.querySelector(".product .container .row");
  productBox.innerHTML = ``;
  clothes.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.setAttribute("data-product-id", `${element.id}`);

    item.innerHTML = `
        <div class="item p-2 custom-shadow h-100 rounded-2" >
                  <a
                    href="./other-product.html?clothes?${element.id}"
                    class="text-decoration-none d-flex flex-column justify-content-between h-100"
                  >
                    <div class="wrap-img d-flex justify-content-center" >
                      <img
                        src="${element.thumbnail}"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="wrap-product-info d-flex flex-column px-lg-2">
                      <div class="pr-name text-soft-bl fw-medium">
                        <span class="name-value fs-4 d-none d-lg-block"
                          >${element.name}</span
                        >
                        <span class="name-value d-lg-none"
                          >${element.name}</span
                        >
                      </div>
                      <div class="pr-price-box d-flex justify-content-between">
                        <div class=" price fw-medium d-flex justify-content-center gap-1 align-items-center">
                          <span class="ff-roboto text-soft-bl "
                            >${element.price}</span
                          >
                          <span class=" ff-roboto text-soft-bl ">VND</span>
                        </div>

                        <div
                          class="cart-btn border border-success py-1 px-2 text-soft-bl"
                          style="border-radius: 50%"
                        >
                          <i class="bi bi-cart4"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

     `;
    productBox.append(item);
  });
}

// Call Toys API
async function getToys() {
  let res = await fetch("http://localhost:3000/toys");
  let data = await res.json();
  return data;
}
async function renderToys() {
  let toys = await getToys();
  let productBox = document.querySelector(".product .container .row");
  productBox.innerHTML = ``;
  toys.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.setAttribute("data-product-id", `${element.id}`);

    item.innerHTML = `
        <div class="item p-2 custom-shadow h-100 rounded-2" >
                  <a
                    href="./other-product.html?toys?${element.id}"
                    class="text-decoration-none d-flex flex-column justify-content-between h-100"
                  >
                    <div class="wrap-img d-flex justify-content-center" >
                      <img
                        src="${element.thumbnail}"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="wrap-product-info d-flex flex-column px-lg-2">
                      <div class="pr-name text-soft-bl fw-medium">
                        <span class="name-value fs-4 d-none d-lg-block"
                          >${element.name}</span
                        >
                        <span class="name-value d-lg-none"
                          >${element.name}</span
                        >
                      </div>
                      <div class="pr-price-box d-flex justify-content-between">
                        <div class=" price fw-medium d-flex justify-content-center gap-1 align-items-center">
                          <span class="ff-roboto text-soft-bl "
                            >${element.price}</span
                          >
                          <span class=" ff-roboto text-soft-bl ">VND</span>
                        </div>

                        <div
                          class="cart-btn border border-success py-1 px-2 text-soft-bl"
                          style="border-radius: 50%"
                        >
                          <i class="bi bi-cart4"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

     `;
    productBox.append(item);
  });
}

// Call Litter API
async function getLitter() {
  let res = await fetch("http://localhost:3000/litter");
  let data = await res.json();
  return data;
}
async function renderLitter() {
  let litter = await getLitter();
  let productBox = document.querySelector(".product .container .row");
  productBox.innerHTML = ``;
  litter.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.setAttribute("data-product-id", `${element.id}`);

    item.innerHTML = `
        <div class="item p-2 custom-shadow h-100 rounded-2" >
                  <a
                    href="./other-product.html?litter?${element.id}"
                    class="text-decoration-none d-flex flex-column justify-content-between h-100"
                  >
                    <div class="wrap-img d-flex justify-content-center" >
                      <img
                        src="${element.thumbnail}"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="wrap-product-info d-flex flex-column px-lg-2">
                      <div class="pr-name text-soft-bl fw-medium">
                        <span class="name-value fs-4 d-none d-lg-block"
                          >${element.name}</span
                        >
                        <span class="name-value d-lg-none"
                          >${element.name}</span
                        >
                      </div>
                      <div class="pr-price-box d-flex justify-content-between">
                        <div class=" price fw-medium d-flex justify-content-center gap-1 align-items-center">
                          <span class="ff-roboto text-soft-bl "
                            >${element.price}</span
                          >
                          <span class=" ff-roboto text-soft-bl ">VND</span>
                        </div>

                        <div
                          class="cart-btn border border-success py-1 px-2 text-soft-bl"
                          style="border-radius: 50%"
                        >
                          <i class="bi bi-cart4"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

     `;
    productBox.append(item);
  });
}

function showItems() {
  let characterValue = getCharacter();

  if (characterValue == "foods") {
    renderFoods();
  }
  if (characterValue == "clothes") {
    renderClothes();
  }
  if (characterValue == "toys") {
    renderToys();
  }
  if (characterValue == "litter") {
    renderLitter();
  }
}
showItems();
