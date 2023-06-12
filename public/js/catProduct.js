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
async function renderCatDetail() {
  let productBox = document.querySelector(".product .container .row ");

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
                    Mèo ${element.name}
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
                  <div class="discount-box">
                    <div class="title fw-medium text-gr">
                      Giảm 10% giá phụ kiện khi mua kèm với mèo
                    </div>
                    <div
                      class="discount-products-box d-flex gap-3 gap-lg-4"
                      style="height: 80px"
                    >
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
                     
                     
                      <div
                        class="show-discount-price d-none d-flex flex-column justify-content-center border border-secondary px-2 rounded-2 "
                      >
                        <div
                          class="old-price text-decoration-line-through text-secondary"
                        >
                          <span class="old-value ff-roboto ff-roboto"
                            >140.000</span
                          >
                          <span class="ff-roboto ff-roboto">VND</span>
                        </div>
                        <div class="current-price text-danger fw-medium">
                          <span class="cur-value ff-roboto ff-roboto"
                            >126.000</span
                          >
                          <span class="ff-roboto ff-roboto">VND</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="payment-control d-flex justify-content-between">
                    <div
                      class="quantity-box d-flex gap-4 border p-2 rounded-5 border-success-subtle"
                    >
                      <div class="minus-btn px-1">
                        <i class="bi bi-dash"></i>
                      </div>
                      <div class="show-quantity">1</div>
                      <div class="plus-btn px-2">
                        <i class="bi bi-plus"></i>
                      </div>
                    </div>
                    <div class="price-box p-2">
                      <span class="title fw-medium text-soft-bl">Giá:</span>
                      <span class="price-value number-font text-gr"
                        >${element.price}</span
                      >
                      <span class="text-gr fw-medium">VND</span>
                    </div>
                    <div class="payment d-flex">
                      <a
                        href="checkout.html"
                        class="pay-btn text-decoration-none p-2 green-bg text-light fw-bold rounded-4"
                      >
                        Mua ngay
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
      function Handle() {
        let discountProduct1 = document.querySelector(".ds-pr-1");
        let discountProduct2 = document.querySelector(".ds-pr-2");
        let discountProduct3 = document.querySelector(".ds-pr-3");
        let showDiscountPrice = document.querySelector(".show-discount-price");
        discountProduct1.addEventListener("click", function () {
          discountProduct1.classList.remove("border-none");
          discountProduct1.classList.toggle("border-gr");
          showDiscountPrice.classList.toggle("d-none");

          discountProduct2.classList.add("border-none");
          discountProduct3.classList.add("border-none");
        });
        discountProduct2.addEventListener("click", function () {
          discountProduct2.classList.remove("border-none");
          discountProduct2.classList.toggle("border-gr");
          showDiscountPrice.classList.toggle("d-none");

          discountProduct1.classList.add("border-none");
          discountProduct3.classList.add("border-none");
        });
        discountProduct3.addEventListener("click", function () {
          discountProduct3.classList.remove("border-none");
          discountProduct3.classList.toggle("border-gr");
          showDiscountPrice.classList.toggle("d-none");

          discountProduct1.classList.add("border-none");
          discountProduct2.classList.add("border-none");
        });
      }
      Handle();
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
  let productObj = {
    name: "",
    price: "",
    quantity: 0,
    discountPr: true,
    discountPrName: "",
    discountPrPrice: "25.000",
  };
  return productObj;
}

renderCatDetail();

let a = await renderCatDetail();
console.log(a);
