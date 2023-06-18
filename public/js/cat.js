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
let showFilterMb = document.querySelector(".show-filter-mb");
let filterMoblieCloseBtn = document.querySelector(".filter-mb-close-btn");
showFilterMb.onclick = function () {
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
let wrapCatsBox = document.querySelector(".products .row");

async function getCats() {
  let res = await fetch("cats");
  let data = await res.json();
  return data;
}
async function renderCats() {
  let cats = await getCats();
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

// filter handle mobile
async function filterMobileHandle() {
  let catDatas = await getCats();
  let filterMobileBox = document.querySelector(".filter-mb .filter-box");
  // color filter
  let colorChoose = filterMobileBox.querySelector(".color-choose");
  let mixColorInput = colorChoose.querySelector(".mix-color input");
  let singleColorInput = colorChoose.querySelector(".single-color input");
  mixColorInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.color == mixColorInput.value) {
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
      }
    });
  });
  singleColorInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.color == singleColorInput.value) {
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
      }
    });
  });
  // furr style filter
  let furChoose = filterMobileBox.querySelector(".fur-choose");

  let shortFurrInput = furChoose.querySelector(".short input");
  let longFurrInput = furChoose.querySelector(".long input");
  let lessFurrInput = furChoose.querySelector(".less input");
  shortFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == shortFurrInput.value) {
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
      }
    });
  });
  longFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == longFurrInput.value) {
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
      }
    });
  });
  lessFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == lessFurrInput.value) {
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
      }
    });
  });
  // size filter
  let sizeChoose = filterMobileBox.querySelector(".size-choose");
  let smallInput = sizeChoose.querySelector(".small input");
  let mediumInput = sizeChoose.querySelector(".medium input");
  let bigFurrInput = sizeChoose.querySelector(".big input");
  smallInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == smallInput.value) {
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
      }
    });
  });
  mediumInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == mediumInput.value) {
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
      }
    });
  });
  bigFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == bigFurrInput.value) {
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
      }
    });
  });
  // fur loss filter
  let furlossChoose = filterMobileBox.querySelector(".fur-loss-choose");
  let hairyInput = furlossChoose.querySelector(".hairy input");
  let lessInput = furlossChoose.querySelector(".less input");
  hairyInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furrLose == hairyInput.value) {
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
      }
    });
  });
  lessInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furrLose == lessInput.value) {
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
      }
    });
  });
  // price filter
  let priceChoose = filterMobileBox.querySelector(".price-filter-box");
  let inputRange = priceChoose.querySelector("input");
  let pricefilterMb = filterMobile.querySelector(".filter-btn-price");

  let showCustomerPriceChoose =
    filterMobileBox.querySelector(".show-price-value");
  inputRange.addEventListener("input", function () {
    showCustomerPriceChoose.innerHTML = `${inputRange.value}`;
    let inputValue = inputRange.value;
    pricefilterMb.addEventListener("click", function () {
      wrapCatsBox.innerHTML = "";
      catDatas.map((element) => {
        // case < 1000000
        if (
          parseFloat(element.price.replace(/\./g, "")) == 1000000 &&
          parseInt(inputValue) == 1
        ) {
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
        }
        // case < 2000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 2000000 &&
          parseInt(inputValue) == 2
        ) {
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
        }
        // case < 3000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 3000000 &&
          parseInt(inputValue) == 3
        ) {
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
        }
        // case < 4000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 4000000 &&
          parseInt(inputValue) == 4
        ) {
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
        }
        // case < 5000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 5000000 &&
          parseInt(inputValue) == 5
        ) {
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
        }
        // case < 6000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 6000000 &&
          parseInt(inputValue) == 6
        ) {
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
        }
        // case < 7000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 7000000 &&
          parseInt(inputValue) == 7
        ) {
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
        }
        // case < 8000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 8000000 &&
          parseInt(inputValue) == 8
        ) {
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
        }
        // case < 9000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 9000000 &&
          parseInt(inputValue) == 9
        ) {
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
        }
        // case < 10000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 10000000 &&
          parseInt(inputValue) == 10
        ) {
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
        }
      });
    });
  });
}
// filter handle pc
async function filterPCHandle() {
  let catDatas = await getCats();
  let filterPcBox = document.querySelector(".filter-pc .filter-pc-box");
  // color filter
  let colorChoose = filterPcBox.querySelector(".color-choose");
  let mixColorInput = colorChoose.querySelector(".mix-color input");
  let singleColorInput = colorChoose.querySelector(".single-color input");
  mixColorInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.color == mixColorInput.value) {
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
      }
    });
  });
  singleColorInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.color == singleColorInput.value) {
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
      }
    });
  });
  // furr style filter
  let furChoose = filterPcBox.querySelector(".fur-style-choose");
  let shortFurrInput = furChoose.querySelector(".short input");
  let longFurrInput = furChoose.querySelector(".long input");
  let lessFurrInput = furChoose.querySelector(".less input");
  shortFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == shortFurrInput.value) {
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
      }
    });
  });
  longFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == longFurrInput.value) {
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
      }
    });
  });
  lessFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furr == lessFurrInput.value) {
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
      }
    });
  });
  // size filter
  let sizeChoose = filterPcBox.querySelector(".size-choose");
  let smallInput = sizeChoose.querySelector(".small input");
  let mediumInput = sizeChoose.querySelector(".medium input");
  let bigFurrInput = sizeChoose.querySelector(".big input");
  smallInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == smallInput.value) {
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
      }
    });
  });
  mediumInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == mediumInput.value) {
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
      }
    });
  });
  bigFurrInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.size == bigFurrInput.value) {
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
      }
    });
  });
  // fur loss filter
  let furlossChoose = filterPcBox.querySelector(".fur-loss-choose");
  let hairyInput = furlossChoose.querySelector(".hairy input");
  let lessInput = furlossChoose.querySelector(".less input");
  hairyInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furrLose == hairyInput.value) {
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
      }
    });
  });
  lessInput.addEventListener("click", function () {
    wrapCatsBox.innerHTML = "";
    catDatas.map((element) => {
      if (element.furrLose == lessInput.value) {
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
      }
    });
  });
  // price filter
  let priceFilterBox = filterPcBox.querySelector(".price-filter-wrap");
  let inputRange = priceFilterBox.querySelector("input");
  let pricefilterMb = priceFilterBox.querySelector(".filter-btn-price");
  let showCustomerPriceChoose = filterPcBox.querySelector(".show-price-value");
  console.log(showCustomerPriceChoose);
  inputRange.addEventListener("input", function () {
    showCustomerPriceChoose.innerHTML = `${inputRange.value}`;
    let inputValue = inputRange.value;
    pricefilterMb.addEventListener("click", function () {
      wrapCatsBox.innerHTML = "";
      catDatas.map((element) => {
        // case < 1000000
        if (
          parseFloat(element.price.replace(/\./g, "")) == 1000000 &&
          parseInt(inputValue) == 1
        ) {
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
        }
        // case < 2000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 2000000 &&
          parseInt(inputValue) == 2
        ) {
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
        }
        // case < 3000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 3000000 &&
          parseInt(inputValue) == 3
        ) {
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
        }
        // case < 4000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 4000000 &&
          parseInt(inputValue) == 4
        ) {
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
        }
        // case < 5000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 5000000 &&
          parseInt(inputValue) == 5
        ) {
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
        }
        // case < 6000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 6000000 &&
          parseInt(inputValue) == 6
        ) {
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
        }
        // case < 7000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 7000000 &&
          parseInt(inputValue) == 7
        ) {
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
        }
        // case < 8000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 8000000 &&
          parseInt(inputValue) == 8
        ) {
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
        }
        // case < 9000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 9000000 &&
          parseInt(inputValue) == 9
        ) {
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
        }
        // case < 10000000
        if (
          parseFloat(element.price.replace(/\./g, "")) <= 10000000 &&
          parseInt(inputValue) == 10
        ) {
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
        }
      });
    });
  });
}
filterPCHandle();
filterMobileHandle();
// inputChecked
// mobile
function handleInputMbChecked() {
  let filterMobileBoxInputs = Array.from(
    document.querySelectorAll('.filter-mb .filter-box input[type="radio"]')
  );
  filterMobileBoxInputs.map((element) => {
    element.addEventListener("click", function () {
      filterMobileBoxInputs.forEach((otherInput) => {
        if (otherInput !== element) {
          otherInput.checked = false;
        }
      });
    });
  });
}
handleInputMbChecked();
// pc
function handleInputPCChecked() {
  let filterPCBoxInputs = Array.from(
    document.querySelectorAll('.filter-pc .filter-pc-box input[type="radio"]')
  );
  filterPCBoxInputs.map((element) => {
    element.addEventListener("click", function () {
      filterPCBoxInputs.forEach((otherInput) => {
        if (otherInput !== element) {
          otherInput.checked = false;
        }
      });
    });
  });
}
handleInputPCChecked();
