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
// show/remove notice box
let showExclamationMarkPc = document.querySelector(".cart-box span");
let showExclamationMarkMb = document.querySelector(
  ".cart-mobile-btn .notice-box-mb"
);
function showNotice() {
  showExclamationMarkPc.classList.remove("d-none");
  showExclamationMarkMb.classList.remove("d-none");
}
function removeNotice() {
  showExclamationMarkPc.classList.add("d-none");
  showExclamationMarkMb.classList.add("d-none");
}
let moveToCartItemsBtnPc = document.querySelector(".cart-box");
let moveToCartItemsBtnMb = document.querySelector(".cart-mobile-btn");
moveToCartItemsBtnPc.addEventListener("click", removeNotice);
moveToCartItemsBtnMb.addEventListener("click", removeNotice);
// Get location
function getUrlId() {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  let urlStrId = url.search;
  let numStr = urlStrId.replace(/\D/g, "");
  let postID = parseInt(numStr);

  return postID;
}

let currentId = getUrlId();
// Call Cats API
async function getCats() {
  let res = await fetch("cats");
  let data = await res.json();
  return data;
}
async function HanldeMain() {
  let productBox = document.querySelector(".product .container .row ");
  async function renderCatDetail() {
    let datas = await getCats();
    datas.map((element) => {
      if (element.id == currentId) {
        let item1 = document.createElement("div");
        item1.classList.add("col-12");
        item1.innerHTML = ` <div class="row my-2">
                  <div
                    class="product-img col-12 col-lg-6 d-flex justify-content-center align-items-center"
                    style="height: 400px"
                  >
                    <img
                      src="${element.thumbnail}"
                      class="img-fluid h-75"
                      style="image-rendering: pixelated"
                      alt=""
                    />
                  </div>
                  <div
                    class="product-info col-12 col-lg-6 gap-2 d-flex flex-column justify-content-between"
                  >
                    <div class="pr-name fs-3 text-gr fw-bold">
                       ${element.name}
                    </div>
                    <div class="sub-info row">
                      <div class="pr-color col-6">
                        <span class="title text-secondary fw-medium"
                          >Kiểu Màu:</span
                        >
                        <span class="color-value text-soft-bl"
                          >${element.color}</span
                        >
                      </div>
                      <div class="pr-size col-6">
                        <span class="title text-secondary fw-medium">Size:</span>
                        <span class="size-valuetext-soft-bl"
                          >${element.size}</span
                        >
                      </div>
                      <div class="pr-fur col-6">
                        <span class="title text-secondary fw-medium"
                          >Kiểu Lông:</span
                        >
                        <span class="fur-value text-soft-bl"
                          >${element.furr}</span
                        >
                      </div>
                      <div class="pr-fur-loss col-6">
                        <span class="title text-secondary fw-medium"
                          >Rụng Lông:</span
                        >
                        <span class="fur-loss-value text-soft-bl"
                          >${element.furrLose}</span
                        >
                      </div>
                    </div>
                    <div class="discount-box d-flex flex-column gap-2">
                      <div class="title fw-medium text-gr">
                        Giảm 10% giá phụ kiện khi mua kèm với mèo
                      </div>
                      <div
                        class="discount-products-box d-flex justify-content-between"
                        style="height: 70px"
                      >
                      <div class="item d-flex">
                        <div class="ds-pr-1 h-100">
                        
                          <img
                            src="./img/accessory.png"
                            class="img-fluid h-100"
                            alt=""                         
                          />                       
                        </div>
                        <div class="ds-pr-2 h-100">
                        
                          <img
                            src="./img/accessory.png"
                            class="img-fluid h-100"
                            alt=""                         
                          />                       
                        </div>
                        <div class="ds-pr-3 h-100">
                        
                          <img
                            src="./img/accessory.png"
                            class="img-fluid h-100"
                            alt=""                         
                          />                       
                        </div>
                       
                      </div>
                       
                        <div
                          class="show-discount-price d-flex flex-column justify-content-center border border-secondary px-2 rounded-2 "
                        >
                          <div
                            class="old-price text-decoration-line-through text-secondary"
                          >
                          <span>Giảm cũ:</span>
                            <span class="old-value  ff-roboto"
  
                              >140.000</span
                            >
                            <span class=" ">VND</span>
                          </div>
                          <div class="current-price text-danger ">
                          <span>Giảm còn:</span>
                            <span class="cur-value ff-roboto "
                              >126.000</span
                            >
                            <span class=" ">VND</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="payment-control d-flex justify-content-between">
                      
                      <div class="price-box p-2 fs-5">
                        <span class="title fw-bold text-soft-bl">Giá:</span>
                        <span class="price-value fw-bold number-font text-gr ff-roboto"
                          >${element.price}</span
                        >
                        <span class="text-gr fw-bold">VND</span>
                      </div>
                      <div class="payment d-flex">
                        <a                      
                          class="pay-btn d-flex justify-content-center align-items-center text-decoration-none px-4 green-bg text-light fw-bold rounded-4"
                        >
                          <span> Thêm vào giỏ hàng <span>
                        </a>
                      </div>
                    </div>
                    <div
                      class="description bg-success-subtle text-soft-bl p-2 rounded-2"
                    >
                      <div class="warranty d-flex gap-2">
                        <i class="bi bi-award-fill"></i>
                        <span>Bảo hành trong vòng 1 năm</span>
                      </div>
                      <div class="vaccination d-flex gap-2">
                        <i class="bi bi-prescription2"></i>
                        <span> Cam kết tiêm chủng đầy đủ</span>
                      </div>
                      <div class="delivery d-flex gap-2">
                        <i class="bi bi-truck"></i>
                        <span>Miễn phí vận chuyển nội thành</span>
                      </div>
                    </div>
                  </div>
                  <div class="row certification">
                    <div class="col-12">
                      <div
                        class="title d-lg-none text-center mt-2 fw-bold text-soft-bl"
                      >
                        Giấy Tờ Kèm Theo
                      </div>
                      <div
                        class="title d-none d-lg-block text-center fs-4 mt-2 fw-bold text-soft-bl"
                      >
                        Giấy Tờ Kèm Theo
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div
                        class="vaccination-box d-flex flex-column justify-content-center"
                      >
                        <img src="./img/cert1.png" class="img-fluid" alt="" />
                        <div
                          class="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl"
                        >
                          Sổ tiêm phòng
                        </div>
                        <div
                          class="d-lg-none cert-info text-center fw-medium text-soft-bl"
                        >
                          Sổ tiêm phòng
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div
                        class="warranty-box d-flex flex-column justify-content-center"
                      >
                        <img src="./img/cert2.png" class="img-fluid" alt="" />
                        <div class="cert-info text-center text-soft-bl">
                          <div
                            class="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl"
                          >
                            Phiếu bảo hành
                          </div>
                          <div
                            class="d-lg-none cert-info text-center fw-medium text-soft-bl"
                          >
                            Phiếu bảo hành
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

        productBox.append(item1);
        // Handle Discount Products
        let checkDiscount = localStorage.getItem("checkDiscount") || false;
        function HandleDiscountProducts() {
          let discountProduct1 = document.querySelector(".ds-pr-1");
          let discountProduct2 = document.querySelector(".ds-pr-2");
          let discountProduct3 = document.querySelector(".ds-pr-3");

          discountProduct1.addEventListener("click", function () {
            discountProduct1.classList.toggle("border-gr");
            discountProduct1.classList.remove("border-none");
            discountProduct2.classList.add("border-none");
            discountProduct3.classList.add("border-none");
            if (discountProduct1.classList.contains("border-gr")) {
              checkDiscount = true;
              localStorage.setItem("discountChecked", checkDiscount);
            } else {
              checkDiscount = false;
              localStorage.setItem("discountChecked", checkDiscount);
            }
          });
          discountProduct2.addEventListener("click", function () {
            discountProduct2.classList.toggle("border-gr");
            discountProduct2.classList.remove("border-none");

            discountProduct1.classList.add("border-none");
            discountProduct3.classList.add("border-none");
            if (discountProduct2.classList.contains("border-gr")) {
              checkDiscount = true;
              localStorage.setItem("discountChecked", checkDiscount);
            } else {
              checkDiscount = false;
              localStorage.setItem("discountChecked", checkDiscount);
            }
          });
          discountProduct3.addEventListener("click", function () {
            discountProduct3.classList.toggle("border-gr");
            discountProduct3.classList.remove("border-none");

            discountProduct1.classList.add("border-none");
            discountProduct2.classList.add("border-none");
            if (discountProduct3.classList.contains("border-gr")) {
              checkDiscount = true;
              localStorage.setItem("discountChecked", checkDiscount);
            } else {
              checkDiscount = false;
              localStorage.setItem("discountChecked", checkDiscount);
            }
          });
        }
        HandleDiscountProducts();

        // pull data into local storage
        let addToCartBtn = document.querySelector(".product .payment .pay-btn");
        let itemArr = JSON.parse(localStorage.getItem("myArray")) || [];
        addToCartBtn.addEventListener("click", function () {
          showNotice();
          let productNameValue =
            document.querySelector(".product .pr-name").innerText;
          let productPriceValue = document.querySelector(
            ".product .price-box .price-value"
          ).innerText;
          let productImgSourceValue = document.querySelector(
            ".product .product-img img"
          ).src;
          let newItems = {
            id: Date.now(),
            productName: productNameValue,
            productPrice: productPriceValue,
            productImgSource: productImgSourceValue,
            checkDiscount: checkDiscount,
          };
          itemArr.push(newItems);
          localStorage.setItem("myArray", JSON.stringify(itemArr));
          toastr.success("Đã thêm vào giỏ hàng của bạn !!!");
          // localStorage.removeItem("myArray");
        });
      }
    });
  }
  renderCatDetail();
}
HanldeMain();

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
// localStorage.removeItem("myArray");
