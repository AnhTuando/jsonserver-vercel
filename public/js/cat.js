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
