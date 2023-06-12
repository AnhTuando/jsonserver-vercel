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
let filterMobile = document.querySelector(".filter-mb");
let filterMoblieBtn = document.querySelector(".filter-btn");
let filterMoblieCloseBtn = document.querySelector(".filter-mb-close-btn");
filterMoblieBtn.onclick = function () {
  filterMobile.classList.toggle("d-none");
};
filterMoblieCloseBtn.onclick = function () {
  filterMobile.classList.add("d-none");
};

function updateKeys(key, value) {
  const url = new URL(location.href);
  if (!value) {
    url.searchParams.delete(key);
  } else {
    url.searchParams.set(key, value);
  }
  window.history.pushState(null, null, url);
}

// Call Cats API
async function getCats() {
  let res = await fetch("cats");
  let data = await res.json();
  return data;
}
async function renderCats() {
  let cats = await getCats();
  let wrapCatsBox = document.querySelector(".products .row");
  wrapCatsBox.innerHTML = ``;
  cats.map(function (element) {
    let catProductItems = document.createElement("div");
    catProductItems.classList.add("col-6");
    catProductItems.classList.add("col-lg-4");
    catProductItems.classList.add("mb-4");
    catProductItems.setAttribute("data-product-id", `${element.id}`);
    catProductItems.innerHTML = `<a
                    href="./cat-product.html?${element.id}"
                    class="product-item text-decoration-none rounded-2 custom-shadow d-flex p-3"
                  >
                    <div
                      class="item d-flex flex-column gap-2 position-relative"
                    >
                      <div class="pr-img">
                        <img
                          src="${element.thumbnail}"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="product-name fw-medium text-soft-bl">
                        <span class="name-value fs-4 d-none d-lg-block"
                          >${element.name}</span
                        >
                        <span class="name-value fs-5 d-lg-none"
                          >${element.name}</span
                        >
                      </div>
                      <div
                        class="product-price d-flex justify-content-between fw-medium text-soft-bl"
                      >
                        <div class="price-wrap">
                          <span class="price-value fw-bold">${element.price}</span>
                          <span class="price-value fw-bold">VND</span>
                        </div>
                        <div
                          class="cart-btn border border-success text-center text-gr py-1 px-2 position-absolute end-0 bottom-0"
                          style="border-radius: 50%"
                        >
                          <i class="bi bi-cart4 fs-6"></i>
                        </div>
                      </div>
                    </div>
                  </a>`;
    wrapCatsBox.append(catProductItems);
  });
}
renderCats();
