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
function getUrlId() {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  let urlStrId = url.search;
  let numStr = urlStrId.replace(/\D/g, "");
  let postID = parseInt(numStr);
  return postID;
}
let isChecked = false;
let checkDiscount = localStorage.getItem("discountChecked");
localStorage.setItem("discountChecked", isChecked);

// Call Foods API
async function getFoods() {
  let res = await fetch("foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let savedQuantity = 1;

  let productBox = document.querySelector(".product .container ");
  let foods = await getFoods();
  let currentId = getUrlId();
  productBox.innerHTML = ``;
  foods.map((element) => {
    if (element.id == currentId) {
      let item1 = document.createElement("div");
      item1.classList.add("row");
      item1.innerHTML = ` <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-img d-flex justify-content-center align-items-center"
                >
                  <img
                    src="${element.thumbnail}"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3"
                >
                  <div class="product-name">
                    <span class="name-value fs-3 text-gr fw-bold"
                      >${element.name}</span
                    >
                  </div>
                  <div class="brand-name fs-4">
                    <span class="text-secondary fw-medium">Brand:</span>
                    <span class="brand-value text-soft-bl fw-medium"> ${element.brand}</span>
                  </div>
                 
                  <div class="payment-control d-flex justify-content-between">
                    <div
                      class="quantity-box d-flex gap-4 border p-2 rounded-5 border-success-subtle"
                    >
                      <div class="minus-btn px-1 d-flex align-items-center fs-5">
                        <i class="bi bi-dash"></i>
                      </div>
                      <div class="show-quantity d-flex align-items-center">1</div>
                      <div class="plus-btn px-2 d-flex align-items-center fs-5">
                        <i class="bi bi-plus"></i>
                      </div>
                    </div>
                    <div class="price-box p-2 fs-5 fw-bold">
                      <span class="title text-soft-bl">Giá:</span>
                      <span class="price-value number-font text-gr">${element.price}</span>
                      <span class="text-gr">VND</span>
                    </div>
                    <div class="payment d-flex">
                      <a
                        href="checkout.html"
                        class="pay-btn text-decoration-none d-flex align-items-center px-2 px-lg-3 green-bg text-light fw-bold rounded-4"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <div
                    class="description bg-success-subtle text-soft-bl p-2 rounded-2 fw-medium"
                  >
                    <div class="money-back-warranty d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hoàn tiền 100 % nếu sản phẩm có vấn đề</span>
                    </div>
                    <div class="quality d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span> Sản phẩm chất lượng tốt</span>
                    </div>
                    <div class="delivery d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Miễn phí vận chuyển nội thành</span>
                    </div>
                    <div class="support d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>`;
      productBox.append(item1);
      // Quantity Box Handle
      function handleQuantityBox() {
        let plusBtn = document.querySelector(".quantity-box .plus-btn");
        let quantityNumberBox = document.querySelector(
          ".quantity-box .show-quantity"
        );
        let minusBtn = document.querySelector(".quantity-box .minus-btn");
        let priceText = document.querySelector(".price-value").textContent;
        let priceBox = document.querySelector(".price-value");
        let quantity = parseInt(quantityNumberBox.textContent);

        let priceValue = parseFloat(priceText.replace(/\./g, ""));

        minusBtn.addEventListener("click", function () {
          if (quantity > 1) {
            quantity--;
            quantityNumberBox.innerHTML = `${quantity}`;
            savedQuantity = `${quantity}`;
            priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
              "vi-VN"
            )}`;
          }
        });
        plusBtn.addEventListener("click", function () {
          quantity++;
          quantityNumberBox.innerHTML = `${quantity}`;
          savedQuantity = `${quantity}`;
          priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
            "vi-VN"
          )}`;
        });
      }
      handleQuantityBox();
      // Put product's info into localStorage
      let payBtn = document.querySelector(".pay-btn");
      payBtn.addEventListener("click", function () {
        let imgSource = document.querySelector(".wrap-product-img img");
        let price = document.querySelector(".price-box .price-value").innerText;
        let name = document.querySelector(
          ".product-name .name-value "
        ).innerText;

        let savedOtherProductObj =
          localStorage.getItem("savedOtherProductObj") || 0;

        let otherProducObj = {
          price: price,
          name: name,
          quantity: savedQuantity,
          imgSource: imgSource.src,
        };
        savedOtherProductObj = JSON.stringify(otherProducObj);
        localStorage.setItem("savedOtherProductObj", savedOtherProductObj);
      });
    }
  });
}

// Call Toys API
async function getToys() {
  let res = await fetch("toys");
  let data = await res.json();
  return data;
}
async function renderToys() {
  let savedQuantity = 1;

  let productBox = document.querySelector(".product .container ");
  let toys = await getToys();
  let currentId = getUrlId();
  productBox.innerHTML = ``;
  toys.map((element) => {
    if (element.id == currentId) {
      let item1 = document.createElement("div");
      item1.classList.add("row");
      item1.innerHTML = ` <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-img d-flex justify-content-center align-items-center"
                >
                  <img
                    src="${element.thumbnail}"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3"
                >
                  <div class="product-name">
                    <span class="name-value fs-3 text-gr fw-bold"
                      >${element.name}</span
                    >
                  </div>
                  <div class="brand-name fs-4">
                    <span class="text-secondary fw-medium">Brand:</span>
                    <span class="brand-value text-soft-bl fw-medium"> ${element.brand}</span>
                  </div>
                 
                  <div class="payment-control d-flex justify-content-between">
                    <div
                      class="quantity-box d-flex gap-4 border p-2 rounded-5 border-success-subtle"
                    >
                      <div class="minus-btn px-1 d-flex align-items-center fs-5">
                        <i class="bi bi-dash"></i>
                      </div>
                      <div class="show-quantity d-flex align-items-center">1</div>
                      <div class="plus-btn px-2 d-flex align-items-center fs-5">
                        <i class="bi bi-plus"></i>
                      </div>
                    </div>
                    <div class="price-box p-2 fs-5 fw-bold">
                      <span class="title text-soft-bl">Giá:</span>
                      <span class="price-value number-font text-gr">${element.price}</span>
                      <span class="text-gr">VND</span>
                    </div>
                    <div class="payment d-flex">
                      <a
                        href="checkout.html"
                        class="pay-btn text-decoration-none d-flex align-items-center px-2 px-lg-3 green-bg text-light fw-bold rounded-4"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <div
                    class="description bg-success-subtle text-soft-bl p-2 rounded-2 fw-medium"
                  >
                    <div class="money-back-warranty d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hoàn tiền 100 % nếu sản phẩm có vấn đề</span>
                    </div>
                    <div class="quality d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span> Sản phẩm chất lượng tốt</span>
                    </div>
                    <div class="delivery d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Miễn phí vận chuyển nội thành</span>
                    </div>
                    <div class="support d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>`;
      productBox.append(item1);
      // Quantity Box Handle
      function handleQuantityBox() {
        let plusBtn = document.querySelector(".quantity-box .plus-btn");
        let quantityNumberBox = document.querySelector(
          ".quantity-box .show-quantity"
        );
        let minusBtn = document.querySelector(".quantity-box .minus-btn");
        let priceText = document.querySelector(".price-value").textContent;
        let priceBox = document.querySelector(".price-value");
        let quantity = parseInt(quantityNumberBox.textContent);

        let priceValue = parseFloat(priceText.replace(/\./g, ""));

        minusBtn.addEventListener("click", function () {
          if (quantity > 1) {
            quantity--;
            quantityNumberBox.innerHTML = `${quantity}`;
            savedQuantity = `${quantity}`;
            priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
              "vi-VN"
            )}`;
          }
        });
        plusBtn.addEventListener("click", function () {
          quantity++;
          quantityNumberBox.innerHTML = `${quantity}`;
          savedQuantity = `${quantity}`;
          priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
            "vi-VN"
          )}`;
        });
      }
      handleQuantityBox();
      // Put product's info into localStorage
      let payBtn = document.querySelector(".pay-btn");

      payBtn.addEventListener("click", function () {
        let imgSource = document.querySelector(".wrap-product-img img");

        let price = document.querySelector(".price-box .price-value").innerText;
        let name = document.querySelector(
          ".product-name .name-value "
        ).innerText;
        let savedOtherProductObj =
          localStorage.getItem("savedOtherProductObj") || 0;

        let otherProducObj = {
          price: price,
          name: name,
          quantity: savedQuantity,
          imgSource: imgSource.src,
        };
        savedOtherProductObj = JSON.stringify(otherProducObj);
        localStorage.setItem("savedOtherProductObj", savedOtherProductObj);
      });
    }
  });
}

// Call Litter API
async function getLitter() {
  let res = await fetch("litter");
  let data = await res.json();
  return data;
}
async function renderLitters() {
  let savedQuantity = 1;

  let productBox = document.querySelector(".product .container ");
  let litters = await getLitter();
  let currentId = getUrlId();
  productBox.innerHTML = ``;
  litters.map((element) => {
    if (element.id == currentId) {
      let item1 = document.createElement("div");
      item1.classList.add("row");
      item1.innerHTML = ` <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-img d-flex justify-content-center align-items-center"
                >
                  <img
                    src="${element.thumbnail}"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3"
                >
                  <div class="product-name">
                    <span class="name-value fs-3 text-gr fw-bold"
                      >${element.name}</span
                    >
                  </div>
                  <div class="brand-name fs-4">
                    <span class="text-secondary fw-medium">Brand:</span>
                    <span class="brand-value text-soft-bl fw-medium"> ${element.brand}</span>
                  </div>
                 
                  <div class="payment-control d-flex justify-content-between">
                    <div
                      class="quantity-box d-flex gap-4 border p-2 rounded-5 border-success-subtle"
                    >
                      <div class="minus-btn px-1 d-flex align-items-center fs-5">
                        <i class="bi bi-dash"></i>
                      </div>
                      <div class="show-quantity d-flex align-items-center">1</div>
                      <div class="plus-btn px-2 d-flex align-items-center fs-5">
                        <i class="bi bi-plus"></i>
                      </div>
                    </div>
                    <div class="price-box p-2 fs-5 fw-bold">
                      <span class="title text-soft-bl">Giá:</span>
                      <span class="price-value number-font text-gr">${element.price}</span>
                      <span class="text-gr">VND</span>
                    </div>
                    <div class="payment d-flex">
                      <a
                        href="checkout.html"
                        class="pay-btn text-decoration-none d-flex align-items-center px-2 px-lg-3 green-bg text-light fw-bold rounded-4"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <div
                    class="description bg-success-subtle text-soft-bl p-2 rounded-2 fw-medium"
                  >
                    <div class="money-back-warranty d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hoàn tiền 100 % nếu sản phẩm có vấn đề</span>
                    </div>
                    <div class="quality d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span> Sản phẩm chất lượng tốt</span>
                    </div>
                    <div class="delivery d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Miễn phí vận chuyển nội thành</span>
                    </div>
                    <div class="support d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>`;
      productBox.append(item1);
      // Quantity Box Handle
      function handleQuantityBox() {
        let plusBtn = document.querySelector(".quantity-box .plus-btn");
        let quantityNumberBox = document.querySelector(
          ".quantity-box .show-quantity"
        );
        let minusBtn = document.querySelector(".quantity-box .minus-btn");
        let priceText = document.querySelector(".price-value").textContent;
        let priceBox = document.querySelector(".price-value");
        let quantity = parseInt(quantityNumberBox.textContent);
        let priceValue = parseFloat(priceText.replace(/\./g, ""));

        minusBtn.addEventListener("click", function () {
          if (quantity > 1) {
            quantity--;
            quantityNumberBox.innerHTML = `${quantity}`;
            savedQuantity = `${quantity}`;

            priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
              "vi-VN"
            )}`;
          }
        });
        plusBtn.addEventListener("click", function () {
          quantity++;
          quantityNumberBox.innerHTML = `${quantity}`;
          savedQuantity = `${quantity}`;

          priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
            "vi-VN"
          )}`;
        });
      }
      handleQuantityBox();
      // Put product's info into localStorage
      let payBtn = document.querySelector(".pay-btn");
      payBtn.addEventListener("click", function () {
        let imgSource = document.querySelector(".wrap-product-img img");

        let price = document.querySelector(".price-box .price-value").innerText;
        let name = document.querySelector(
          ".product-name .name-value "
        ).innerText;
        let savedOtherProductObj =
          localStorage.getItem("savedOtherProductObj") || 0;

        let otherProducObj = {
          price: price,
          name: name,
          quantity: savedQuantity,
          imgSource: imgSource.src,
        };
        savedOtherProductObj = JSON.stringify(otherProducObj);
        localStorage.setItem("savedOtherProductObj", savedOtherProductObj);
      });
    }
  });
}

// Call Litter API
async function getClothes() {
  let res = await fetch("clothes");
  let data = await res.json();
  return data;
}
async function renderClothes() {
  let savedQuantity = 1;

  let productBox = document.querySelector(".product .container ");
  let clothes = await getClothes();
  let currentId = getUrlId();
  productBox.innerHTML = ``;
  clothes.map((element) => {
    if (element.id == currentId) {
      let item1 = document.createElement("div");
      item1.classList.add("row");
      item1.innerHTML = ` <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-img d-flex justify-content-center align-items-center"
                >
                  <img
                    src="${element.thumbnail}"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div
                  class="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3"
                >
                  <div class="product-name">
                    <span class="name-value fs-3 text-gr fw-bold"
                      >${element.name}</span
                    >
                  </div>
                  <div class="brand-name fs-4">
                    <span class="text-secondary fw-medium">Brand:</span>
                    <span class="brand-value text-soft-bl fw-medium"> ${element.brand}</span>
                  </div>
                 
                  <div class="payment-control d-flex justify-content-between">
                    <div
                      class="quantity-box d-flex gap-4 border p-2 rounded-5 border-success-subtle"
                    >
                      <div class="minus-btn px-1 d-flex align-items-center fs-5">
                        <i class="bi bi-dash"></i>
                      </div>
                      <div class="show-quantity d-flex align-items-center">1</div>
                      <div class="plus-btn px-2 d-flex align-items-center fs-5">
                        <i class="bi bi-plus"></i>
                      </div>
                    </div>
                    <div class="price-box p-2 fs-5 fw-bold">
                      <span class="title text-soft-bl">Giá:</span>
                      <span class="price-value number-font text-gr">${element.price}</span>
                      <span class="text-gr">VND</span>
                    </div>
                    <div class="payment d-flex">
                      <a
                        href="checkout.html"
                        class="pay-btn text-decoration-none d-flex align-items-center px-2 px-lg-3 green-bg text-light fw-bold rounded-4"
                      >
                        Mua ngay
                      </a>
                    </div>
                  </div>
                  <div
                    class="description bg-success-subtle text-soft-bl p-2 rounded-2 fw-medium"
                  >
                    <div class="money-back-warranty d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hoàn tiền 100 % nếu sản phẩm có vấn đề</span>
                    </div>
                    <div class="quality d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span> Sản phẩm chất lượng tốt</span>
                    </div>
                    <div class="delivery d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Miễn phí vận chuyển nội thành</span>
                    </div>
                    <div class="support d-flex gap-2">
                      <i class="bi bi-bag-check text-gr"></i>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>`;
      productBox.append(item1);
      // Quantity Box Handle
      function handleQuantityBox() {
        let plusBtn = document.querySelector(".quantity-box .plus-btn");
        let quantityNumberBox = document.querySelector(
          ".quantity-box .show-quantity"
        );
        let minusBtn = document.querySelector(".quantity-box .minus-btn");
        let priceText = document.querySelector(".price-value").textContent;
        let priceBox = document.querySelector(".price-value");
        let quantity = parseInt(quantityNumberBox.textContent);

        let priceValue = parseFloat(priceText.replace(/\./g, ""));

        minusBtn.addEventListener("click", function () {
          if (quantity > 1) {
            quantity--;
            quantityNumberBox.innerHTML = `${quantity}`;
            savedQuantity = `${quantity}`;
            priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
              "vi-VN"
            )}`;
          }
        });
        plusBtn.addEventListener("click", function () {
          quantity++;
          quantityNumberBox.innerHTML = `${quantity}`;
          savedQuantity = `${quantity}`;
          priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
            "vi-VN"
          )}`;
        });
      }
      handleQuantityBox();
      // Put product's info into localStorage
      let payBtn = document.querySelector(".pay-btn");
      payBtn.addEventListener("click", function () {
        let imgSource = document.querySelector(".wrap-product-img img");

        let price = document.querySelector(".price-box .price-value").innerText;
        let name = document.querySelector(
          ".product-name .name-value "
        ).innerText;
        let savedOtherProductObj =
          localStorage.getItem("savedOtherProductObj") || 0;

        let otherProducObj = {
          price: price,
          name: name,
          quantity: savedQuantity,
          imgSource: imgSource.src,
        };
        savedOtherProductObj = JSON.stringify(otherProducObj);
        localStorage.setItem("savedOtherProductObj", savedOtherProductObj);
      });
    }
  });
}

// Get Character
function getCharacter() {
  let character = new URL(window.location.href).search;
  let replaceCharacter = character.replace(/[^\w\s]/gi, "");
  return replaceCharacter.replace(/\d/g, "");
}
// Render Items

function showItems() {
  let characterValue = getCharacter();

  if (characterValue == "toys") {
    renderToys();
  }
  if (characterValue == "foods") {
    renderFoods();
  }
  if (characterValue == "litter") {
    renderLitters();
  }
  if (characterValue == "clothes") {
    renderClothes();
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
