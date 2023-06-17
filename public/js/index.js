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

// searchBox Handle
function handleSearchBox() {
  // show / remove search modal
  let body = document.querySelector("body");
  let showSearchBoxBtnMb = document.querySelector(".container .search-mb");
  let showSearchBoxBtnPc = document.querySelector(".container .search-box");
  let closeModalBtn = document.querySelector(
    ".wrap-search-box-modal .close-search-modal"
  );
  let searchBoxModal = document.querySelector(".wrap-search-box-modal");
  function showSearchBoxModal() {
    searchBoxModal.classList.remove("d-none");
  }
  showSearchBoxBtnPc.addEventListener("click", function () {
    showSearchBoxModal();
  });
  showSearchBoxBtnMb.addEventListener("click", function () {
    showSearchBoxModal();
  });
  closeModalBtn.addEventListener("click", function () {
    searchBoxModal.classList.add("d-none");
    body.style.overflow = "visible";
  });

  // handle search input
  let searchInput = document.querySelector(
    ".wrap-search-box-modal .container .search-input input"
  );
  let clearValue = document.querySelector(".container .clear-btn");
  let wrapItemsBox = document.querySelector(
    ".wrap-search-box-modal .container .wrap-items-box"
  );
  function renderItems() {
    // callAPi
    async function getCats() {
      let res = await fetch("cats");
      let data = await res.json();
      return data;
    }
    async function getToys() {
      let res = await fetch("toys");
      let data = await res.json();
      return data;
    }
    async function getLitter() {
      let res = await fetch("litter");
      let data = await res.json();
      return data;
    }
    async function getClothes() {
      let res = await fetch("clothes");
      let data = await res.json();
      return data;
    }
    async function getFoods() {
      let res = await fetch("foods");
      let data = await res.json();
      return data;
    }
    // handle cats data
    async function searchCatsData() {
      let catDatas = await getCats();
      catDatas.filter((data) => {
        let arrNameValue = data.name;
        let inputValue = searchInput.value;
        if (arrNameValue.toLowerCase().includes(inputValue.toLowerCase())) {
          let item = document.createElement("div");
          item.classList.add("item");
          item.innerHTML = ` <a
                    href="./cat-product.html?${data.id}"
                    class="text-decoration-none w-100"
                  >
                    <div
                      class="d-flex justify-content-center justify-content-lg-center gap-lg-5 gap-3 py-2"
                    >
                      <div class="img-wrap d-flex justify-content-center align-items-center" style="height: 120px">
                        <img
                          src="${data.thumbnail}"
                          class="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div
                        class="wrap-info d-flex flex-column justify-content-center gap-2"
                      >
                        <div class="pr-name fs-5 fw-bold text-gr">
                          ${data.name}
                        </div>
                        <div class="pr-price fs-5 text-soft-bl">
                          <span class="price-value ff-roboto">${data.price}</span>
                          <span class="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>`;
          wrapItemsBox.append(item);
        }
      });
    }
    // handle foods data
    async function searchFoodsData() {
      let fooddatas = await getFoods();
      fooddatas.filter((data) => {
        let arrNameValue = data.name;
        let inputValue = searchInput.value;
        if (arrNameValue.toLowerCase().includes(inputValue.toLowerCase())) {
          let item = document.createElement("div");
          item.classList.add("item");
          item.innerHTML = ` <a
                    href="./other-product.html?foods?${data.id}"
                    class="text-decoration-none w-100"
                  >
                    <div
                      class="row d-flex justify-content-center  py-2"
                    >
                      <div class="col-6 img-wrap d-flex justify-content-center align-items-center" style="height: 120px">
                        <img
                          src="${data.thumbnail}"
                          class="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-6 wrap-info d-flex flex-column justify-content-center gap-2"
                      >
                        <div class="pr-name fs-5 fw-bold text-gr">
                          ${data.name}
                        </div>
                        <div class="pr-price fs-5 text-soft-bl">
                          <span class="price-value ff-roboto">${data.price}</span>
                          <span class="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>`;
          wrapItemsBox.append(item);
        }
      });
    }
    // handle toys data
    async function searchToysData() {
      let toyDatas = await getToys();
      toyDatas.filter((data) => {
        let arrNameValue = data.name;
        let inputValue = searchInput.value;
        if (arrNameValue.toLowerCase().includes(inputValue.toLowerCase())) {
          let item = document.createElement("div");
          item.classList.add("item");
          item.innerHTML = ` <a
                    href="./other-product.html?toys?${data.id}"
                    class="text-decoration-none w-100"
                  >
                    <div
                      class="row d-flex justify-content-center  py-2"
                    >
                      <div class="col-6 img-wrap d-flex justify-content-center align-items-center" style="height: 120px">
                        <img
                          src="${data.thumbnail}"
                          class="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-6 wrap-info d-flex flex-column justify-content-center gap-2"
                      >
                        <div class="pr-name fs-5 fw-bold text-gr">
                          ${data.name}
                        </div>
                        <div class="pr-price fs-5 text-soft-bl">
                          <span class="price-value ff-roboto">${data.price}</span>
                          <span class="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>`;
          wrapItemsBox.append(item);
        }
      });
    }
    // handle litter data
    async function searchLittersData() {
      let litterDatas = await getLitter();
      litterDatas.filter((data) => {
        let arrNameValue = data.name;
        let inputValue = searchInput.value;
        if (arrNameValue.toLowerCase().includes(inputValue.toLowerCase())) {
          let item = document.createElement("div");
          item.classList.add("item");
          item.innerHTML = ` <a
                    href="./other-product.html?litter?${data.id}"
                    class="text-decoration-none w-100"
                  >
                    <div
                      class="row d-flex justify-content-center  py-2"
                    >
                      <div class="col-6 img-wrap d-flex justify-content-center align-items-center" style="height: 120px">
                        <img
                          src="${data.thumbnail}"
                          class="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-6 wrap-info d-flex flex-column justify-content-center gap-2"
                      >
                        <div class="pr-name fs-5 fw-bold text-gr">
                          ${data.name}
                        </div>
                        <div class="pr-price fs-5 text-soft-bl">
                          <span class="price-value ff-roboto">${data.price}</span>
                          <span class="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>`;
          wrapItemsBox.append(item);
        }
      });
    }
    // handle clothes data
    async function searchClothesData() {
      let clothesDatas = await getClothes();
      clothesDatas.filter((data) => {
        let arrNameValue = data.name;
        let inputValue = searchInput.value;
        if (arrNameValue.toLowerCase().includes(inputValue.toLowerCase())) {
          let item = document.createElement("div");
          item.classList.add("item");
          item.innerHTML = ` <a
                    href="./other-product.html?clothes?${data.id}"
                    class="text-decoration-none w-100"
                  >
                    <div
                      class="row d-flex justify-content-center  py-2"
                    >
                      <div class="col-6 img-wrap d-flex justify-content-center align-items-center" style="height: 120px">
                        <img
                          src="${data.thumbnail}"
                          class="img-fluid h-100"
                          alt=""
                        />
                      </div>
                      <div
                        class="col-6 wrap-info d-flex flex-column justify-content-center gap-2"
                      >
                        <div class="pr-name fs-5 fw-bold text-gr">
                          ${data.name}
                        </div>
                        <div class="pr-price fs-5 text-soft-bl">
                          <span class="price-value ff-roboto">${data.price}</span>
                          <span class="ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </a>`;
          wrapItemsBox.append(item);
        }
      });
    }
    searchCatsData();
    searchFoodsData();
    searchClothesData();
    searchToysData();
    searchLittersData();
  }
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      wrapItemsBox.innerHTML = "";
      body.style.overflow = "hidden";
      renderItems();
    }
  });
  clearValue.addEventListener("click", function () {
    wrapItemsBox.innerHTML = "";
    body.style.overflow = "hidden";
    searchInput.value = "";
  });
}
handleSearchBox();
