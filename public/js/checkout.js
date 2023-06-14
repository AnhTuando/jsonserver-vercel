// SubNav
let subNavClose = document.querySelector(".sub-nav-close ");
let subNav = document.querySelector(".subnav-mobile");
let subNavMoblieBtn = document.querySelector(".list-mobile-btn");

subNavClose.onclick = function () {
  subNav.classList.add("d-none");
};
subNavMoblieBtn.onclick = function () {
  subNav.classList.toggle("d-none");
};
// DropDown-CartBox
let cartBox = document.querySelector(".cart-box");
let dropDownBox = document.querySelector(".cart-dropdown-pc");
let movingUpArrow = dropDownBox.querySelector(".close-btn");
cartBox.addEventListener("click", function () {
  dropDownBox.classList.remove("d-lg-none");
  dropDownBox.classList.add("d-lg-block");
  dropDownBox.classList.add("moving-down");
});
movingUpArrow.addEventListener("click", function () {
  dropDownBox.classList.remove("d-lg-block");
  dropDownBox.classList.add("d-lg-none");
});
// payment
let paymentOnlineBtn = document.querySelector(".online-pay");
let cashBtn = document.querySelector(".cash-pay");
let paymentOnlineBox = document.querySelector(".online-payment-box");
paymentOnlineBtn.onclick = function () {
  paymentOnlineBox.classList.remove("d-none");
};
cashBtn.onclick = function () {
  paymentOnlineBox.classList.add("d-none");
};

// Get data from localstorage
let productPrice = localStorage.getItem("productPrice");
let productQuantity = localStorage.getItem("productCount");
let discountChecked = localStorage.getItem("discountChecked");
let productName = localStorage.getItem("productName");
let imgSource = localStorage.getItem("imgSource");
let cartObject = {
  price: productPrice,
  quantity: productQuantity,
  discountChecked: discountChecked,
  productName: productName,
  imgSource: imgSource,
};

function handleCheckout() {
  let productNameBox = document.querySelector(".product-name .name-value ");
  let quantityBox = document.querySelector(".quantity-value ");
  let priceBox = document.querySelector(".price-box .price-value");
  let sumBoxValue = document.querySelector(".sum-box .sum-value");
  let discountBox = document.querySelector(".discount-box");
  productNameBox.innerHTML = `${cartObject.productName}`;
  quantityBox.innerHTML = `${cartObject.quantity}`;
  priceBox.innerHTML = `${cartObject.price}`;
  sumBoxValue.innerHTML = `${cartObject.price}`;
  if (JSON.parse(cartObject.discountChecked) == true) {
    discountBox.classList.remove("d-none");
    let discountPrValueBox = document.querySelector(".cur-value").innerText;
    let discountPrValue = parseFloat(discountPrValueBox.replace(/\./g, ""));
    let priceBoxValue = parseFloat(priceBox.innerText.replace(/\./g, ""));
    sumBoxValue.innerHTML = (discountPrValue + priceBoxValue).toLocaleString(
      "vi-VN"
    );
  }
}
handleCheckout();

// validate Form handle
let customerName = document.querySelector(".customer-name input");
let customerPhone = document.querySelector(".customer-phone input");
let customerAddress = document.querySelector(".customer-address input");
function validateForm() {}
validateForm();

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
async function renderAndHandleCatCart() {
  let datas = await getCats();
  let currentId = getUrlId();
  let cartItemBox = document.querySelector(".cart-item-box");
  datas.map((element) => {
    if (element.id == currentId) {
      let catCart = document.createElement("div");
      catCart.classList.add("cart-item");
      catCart.innerHTML = `
          <div class="row" style="height: 80px;">
                  <div class="col-4 h-100">
                    <div class="wrap-img h-100"><img src="${element.thumbnail}" class="img-fluid h-100" alt=""></div>
                  </div>
                  <div class="col-6 h-100 d-flex flex-column justify-content-center">
                    <div class="item-info d-flex flex-column justify-content-center ">
                      <div class="item-name text-gr fw-medium">${element.name}</div>
                      <div class="item-price"><span class="value ff-roboto">${element.price}</span> <span class="ff-roboto">VND</span> </div>
                    </div>
                  </div>
                  <div class="col-2 d-flex justify-content-center align-items-center">
                    <div class="show-more-btn-box " style="width: fit-content;">
                      <div class="show-more-btn p-1 bg-success rounded-1 text-light">Xem</div>
                    </div>
                  </div>
                </div>`;
      cartItemBox.append(catCart);
      let modal = document.querySelector(".modal-box");
      let modalContent = modal.querySelector(".item");
      let cartIemBox = Array.from(
        document.querySelectorAll(".cart-item-box .cart-item")
      );
      cartIemBox.map(function (element) {
        element.addEventListener("click", function () {
          modal.classList.remove("d-lg-none");
          modal.classList.add("d-lg-flex");
        });
      });
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.remove("d-lg-flex");
          modal.classList.add("d-lg-none");
        }
      });
      modalContent.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }
  });
}
// orderbtn handle click
let orderBtn = document.querySelector(".order-btn");
orderBtn.addEventListener("click", async function () {
  let customerNameValue = customerName.value;
  let customerPhoneValue = customerPhone.value;
  let customerAddressValue = customerAddress.value;
  let datas = await getCats();
  let modal = document.querySelector(".modal-box");
  let currentId = getUrlId();
  let modalContainer = modal.querySelector(".container");

  let item = document.createElement("div");
  item.innerHTML = `<div class=" border border-success-subtle position-relative " style="width: fit-content;">
            <div class="delete-item-btn position-absolute top-0 end-0 text-bg-danger py-1 px-2" style="width: fit-content;" >Xóa</div>
            <div class="row gy-3 py-3 ">
              <div class="col-12">
                <div class="product-item ">
                  <div class="row " style="height: 100px;">

                    <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="title fw-bold">Sản Phẩm</div>
                </div>
                    <div class="col-3 h-100">
                      <div class="img-wrap h-100 d-flex justify-content-center align-items-center">
                        <img src="${cartObject.imgSource}" class="img-fluid h-100" alt="">
                      </div>
                      </div>
                      <div class="col-3 d-flex flex-column justify-content-center fw-medium align-items-center">
                        <div class="item-name text-gr ">${cartObject.productName}</div>
                        <div class="accessory-name text-gr">Mũ Sừng</div>
                      </div>
                      <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                        <div class="price text-gr fw-medium">
                        <span class="price-value ff-roboto ">${cartObject.price}</span> <span class="ff-roboto">VND</span>
                      </div></div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex custommer-item ">
                <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="title fw-bold">Thông Tin Khách Hàng</div>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="md-customer-name"><span class="tilte fw-medium text-soft-bl">Tên khách hàng:</span class="fw-medium name-value"> Nguyễn Trọng Tân</div>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="md-customer-phone"><span class="tilte fw-medium text-soft-bl">SĐT: </span class="fw-medium phone-value">0234533678</div>
                </div>
                <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="md-customer-address"><span class="tilte fw-medium text-soft-bl">Địa chỉ:</span class="fw-medium address-value">Số 150 Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN</div>
                </div>
              </div>
            </div>

          </div>`;
  modalContainer.append(item);

  // let catItem = modal.querySelector(".item-name");
  // let catItem = modal.querySelector(".item-name");
  // let catItem = modal.querySelector(".item-name");
  if (
    customerNameValue.trim() === "" ||
    customerPhoneValue.trim() === "" ||
    customerAddressValue.trim() === ""
  ) {
    toastr.error("Vui lòng điền đầy đủ thông tin !");
  } else {
    renderAndHandleCatCart();
    toastr.success("Đặt Hàng Thành Công !");
    // get customer info
    let customerNameLocalStorage =
      localStorage.getItem("customerInfo") || "info";
    let customerObj = {
      name: customerNameValue,
      phone: customerPhoneValue,
      address: customerAddressValue,
    };
    customerNameLocalStorage = JSON.stringify(customerObj);
    localStorage.setItem("customerInfo", customerNameLocalStorage);
    console.log(JSON.parse(localStorage.getItem("customerInfo")));

    customerName.value = "";
    customerPhone.value = "";
    customerAddress.value = "";
  }
});
