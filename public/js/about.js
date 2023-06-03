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
console.log(filterMoblieBtn);
filterMoblieBtn.onclick = function () {
  filterMobile.classList.toggle("d-none");
};
