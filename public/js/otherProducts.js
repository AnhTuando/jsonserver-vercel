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
// Call Foods API
async function getFoods() {
  let res = await fetch("foods");
  let data = await res.json();
  return data;
}

async function renderFoodDetail() {
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
                  <div class="discount-box fs-5">
                    <div class="title">
                      Giảm
                      <span class="discount-value fw-medium ff-roboto text-danger"
                        >25.000</span
                      >
                      <span class="text-danger fw-bold">VND</span> khi mua từ 3
                      sản phẩm trở lên
                    </div>
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
            priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
              "vi-VN"
            )}`;
          }
        });
        plusBtn.addEventListener("click", function () {
          quantity++;
          quantityNumberBox.innerHTML = `${quantity}`;
          priceBox.innerHTML = `${(priceValue * quantity).toLocaleString(
            "vi-VN"
          )}`;
        });
      }
      handleQuantityBox();
    }
  });
}
renderFoodDetail();
