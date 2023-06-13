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

let cartObject = {
  price: productPrice,
  quantity: productQuantity,
  discountChecked: discountChecked,
  productName: productName,
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

// orderbtn handle click
let orderBtn = document.querySelector(".order-btn");
orderBtn.addEventListener("click", function () {
  let customerNameValue = customerName.value;
  let customerPhoneValue = customerPhone.value;
  let customerAddressValue = customerAddress.value;

  if (
    customerNameValue.trim() === "" ||
    customerPhoneValue.trim() === "" ||
    customerAddressValue.trim() === ""
  ) {
    toastr.error("Vui lòng điền đầy đủ thông tin !");
  } else {
    toastr.success("Đặt Hàng Thành Công !");
    customerName.value = "";
    customerPhone.value = "";
    customerAddress.value = "";
  }
});
