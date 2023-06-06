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

// Call Cats API
async function getCats() {
  let res = await fetch("http://localhost:3000/cats");
  let data = await res.json();
  return data;
}
async function renderCats() {
  let cats = await getCats();
  console.log(cats);
}
renderCats();

// Call Foods API
async function getFoods() {
  let res = await fetch("http://localhost:3000/foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let foods = await getFoods();
  console.log(foods);
}
renderFoods();

// Swiper
// PC
let swiperPc = new Swiper(".mySwiper-PC", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Mobile
let swiperPC = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
