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

// Call Foods API
async function getFoods() {
  let res = await fetch("foods");
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
                  href="./other-product.html?foods?${element.id}"
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
  let res = await fetch("clothes");
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
  let res = await fetch("toys");
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
  let res = await fetch("litter");
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
function getCharacter() {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  let urlStrId = url.search;
  let character = urlStrId.replace(/\?/g, "");

  return character;
}

// section food fill
function sectionTitleFoodFill() {
  let sectionTitleArr = Array.from(
    document.querySelectorAll(".navigation-2 .col-8 .item a span")
  );
  sectionTitleArr.map((element) => {
    if (element.innerText == "ĐỒ ĂN") {
      let parentElement = element.closest("a");
      parentElement.querySelector("i").classList.add("text-special");
      element.classList.add("text-special");
    }
  });
}
// section litter fill
function sectionLitterFill() {
  let sectionTitleArr = Array.from(
    document.querySelectorAll(".navigation-2 .col-8 .item a span")
  );
  sectionTitleArr.map((element) => {
    if (element.innerText == "CÁT VỆ SINH") {
      let parentElement = element.closest("a");
      parentElement.querySelector("i").classList.add("text-special");
      element.classList.add("text-special");
    }
  });
}
// section clothes fill
function sectionClothesFill() {
  let sectionTitleArr = Array.from(
    document.querySelectorAll(".navigation-2 .col-8 .item a span")
  );
  sectionTitleArr.map((element) => {
    if (element.innerText == "ĐỒ TRANG TRÍ") {
      let parentElement = element.closest("a");
      parentElement.querySelector("i").classList.add("text-special");
      element.classList.add("text-special");
    }
  });
}
// section Toys fill
function sectionToysFill() {
  let sectionTitleArr = Array.from(
    document.querySelectorAll(".navigation-2 .col-8 .item a span")
  );
  sectionTitleArr.map((element) => {
    if (element.innerText == "ĐỒ CHƠI") {
      let parentElement = element.closest("a");
      parentElement.querySelector("i").classList.add("text-special");
      element.classList.add("text-special");
    }
  });
}
function showItems() {
  let characterValue = getCharacter();

  if (characterValue == "foods") {
    sectionTitleFoodFill();
    renderFoods();
  }
  if (characterValue == "clothes") {
    sectionClothesFill();
    renderClothes();
  }
  if (characterValue == "toys") {
    sectionToysFill();
    renderToys();
  }
  if (characterValue == "litter") {
    sectionLitterFill();
    renderLitter();
  }
}
showItems();

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
