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

// scroll filter pc
let contentBoxParent = document.querySelector(".pc-content");
let filterBoxChild = document.querySelector(".filter-scroll");

// product item when mouse not hover event:
let productItems = document.querySelectorAll(".col-9 .product-item");
let newProductItemsArr = Array.from(productItems);
newProductItemsArr.map(function (item) {
  item.addEventListener("mouseleave", function () {
    item.style.transform = "scale(1)";
  });
});
// PaymentBox Zoom Lens
