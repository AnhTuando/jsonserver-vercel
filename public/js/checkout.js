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

let onlinePayment = document.querySelector(".online-pay");
let cashPayInput = document.querySelector(".cash-pay input");
// Get data from localstorage
let discountChecked = localStorage.getItem("discountChecked");
let catOtherProductObj = JSON.parse(
  localStorage.getItem("savedOtherProductObj")
);
let cartObject = {
  price: catOtherProductObj.price,
  quantity: catOtherProductObj.quantity,
  discountChecked: discountChecked,
  productName: catOtherProductObj.name,
  imgSource: catOtherProductObj.imgSource,
};
console.log(cartObject);
let checkedDiscountProducts = JSON.parse(
  localStorage.getItem("discountChecked")
);
if (checkedDiscountProducts == true) {
  parseFloat(cartObject.price.replace(/\./g, ""));
  cartObject.price = parseFloat(cartObject.price.replace(/\./g, "")) + 126000;
  cartObject.price = cartObject.price.toLocaleString("vi-VN");
}
// Render Checkout Detail
let productNameBox = document.querySelector(".product-name .name-value ");
let quantityBox = document.querySelector(".quantity-value ");
let priceBox = document.querySelector(".price-box .price-value");
let sumBoxValue = document.querySelector(".sum-box .sum-value");
let discountBox = document.querySelector(".discount-box");
if (checkedDiscountProducts == true) {
  discountBox.classList.remove("d-none");
}
console.log(discountBox);
productNameBox.innerHTML = `${cartObject.productName}`;
quantityBox.innerHTML = `${cartObject.quantity}`;
priceBox.innerHTML = `${cartObject.price}`;
sumBoxValue.innerHTML = `${cartObject.price}`;

// validate Form handle
let customerName = document.querySelector(".customer-name input");
let customerPhone = document.querySelector(".customer-phone input");
let customerAddress = document.querySelector(".customer-address input");
let cartModalMobileBox = document.querySelector(".modal-box-mb .cart-box");
let defaultModalItem = document.querySelector(".modal-box-mb .none-item");
let modal = document.querySelector(".modal-box");
let modalContainer = modal.querySelector(".container .items");

// render and handle cart item modal
let orderBtn = document.querySelector(".order-btn");

let inputPayOnline = paymentOnlineBtn.querySelector("input");
function renderAndHandleCatCart() {
  // orderbtnPC handle click
  let orderBtn = document.querySelector(".order-btn");
  let payment = "Tiền Mặt";

  orderBtn.addEventListener("click", function () {
    let bankCodeValue, selectBoxValue;
    if (inputPayOnline.checked == true) {
      let selectBox = document.querySelector(".online-payment-box select");
      selectBoxValue = selectBox.value;

      let codeBank = document.querySelector(
        ".online-payment-box .code-box input"
      );
      bankCodeValue = codeBank.value;
      payment;
    }

    let customerNameValue = customerName.value;
    let customerPhoneValue = customerPhone.value;
    let customerAddressValue = customerAddress.value;
    let noneItem = modal.querySelector(".none-item");
    let defaultDrodownItem = document.querySelector(".cart-item-box .default");
    defaultDrodownItem.classList.remove("d-lg-block");
    defaultDrodownItem.classList.add("d-lg-none");
    noneItem.classList.add("d-lg-none");

    // get customer info
    let customerNameLocalStorage =
      localStorage.getItem("customerInfo") || "info";
    let customerObj = {
      name: customerNameValue,
      phone: customerPhoneValue,
      address: customerAddressValue,
      bankCodeValue: bankCodeValue,
      selectBoxValue: selectBoxValue,
    };
    console.log(customerObj);
    customerNameLocalStorage = JSON.stringify(customerObj);
    localStorage.setItem("customerInfo", customerNameLocalStorage);

    if (
      customerNameValue.trim() === "" ||
      customerPhoneValue.trim() === "" ||
      customerAddressValue.trim() === ""
    ) {
      toastr.error("Vui lòng điền đầy đủ thông tin !");
    } else {
      // render item modal pc
      let item = document.createElement("div");
      item.classList.add("col-12");
      item.classList.add("parent");
      item.classList.add("mb-3");
      if (inputPayOnline.checked == true) {
        console.log("atm");
        item.innerHTML = `  <div class="row border border-end-0 border-success-subtle">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6 border-end border-success-subtle">
                      <div class=" title text-center fw-bold text-gr  border-bottom border-success-subtle mb-2">Khách Hàng</div>
                  <div class="customer-info w-100 d-flex flex-column gap-1 justify-content-center">
                    <div class="cus-name fw-medium" >${customerObj.name}</div>
                    <div class="cus-phone " >${customerObj.phone}
                    </div>
                    <div class="cus-address fw-medium">${customerObj.address}</div>
                    <div class="payment-box fw-medium ">
                   <div class="on-pay ">                      
                        <span>Thanh Toán: </span><span class="payment">
                           <span class="bank-value">${customerObj.selectBoxValue}</span> <span class="">-</span> <span class="bank-code">${customerObj.bankCodeValue}</span></span>
                      </div>
                     
                       
                      
                      </div>
                  </div>
                    </div>
                    <div class="col-6  border-end border-success-subtle">
                      <div class="title text-center fw-bold text-gr border-bottom border-success-subtle mb-2">Sản Phẩm</div>
                  <div class=" product-item mt-3 d-flex  justify-content-around align-items-center" style="height: 80px;">
                    <div class="img-wrap" style="height: 80px;">
                      <img src="${cartObject.imgSource}" class="img-fluid h-100">
                    </div>
                    <div class="wrap-info d-flex flex-column gap-1  ">
  
                      <div class="product-name fw-medium">${cartObject.productName}</div>
                      <div class="pr-price">
                        <span class="price-value ff-roboto text-danger">${cartObject.price}</span> <span class="ff-roboto text-danger">VND</span>
                      </div>
                     
                    </div>
                  </div>
                    </div>
                  </div>
                  
                  
                </div>
                  <div class="delete-btn d-flex justify-content-center align-items-center position-absolute end-0" style="width: fit-content;"><span class=" fw-bold">Xóa bỏ</span></div>
              </div>`;
        modalContainer.append(item);
      }
      if (cashPayInput.checked == true) {
        console.log("cash");
        item.innerHTML = `  <div class="row border border-end-0 border-success-subtle">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6 border-end border-success-subtle">
                      <div class=" title text-center fw-bold text-gr  border-bottom border-success-subtle mb-2">Khách Hàng</div>
                  <div class="customer-info w-100 d-flex flex-column gap-1 justify-content-center">
                    <div class="cus-name fw-medium" >${customerObj.name}</div>
                    <div class="cus-phone " >${customerObj.phone}
                    </div>
                    <div class="cus-address fw-medium">${customerObj.address}</div>
                    <div class="payment-box fw-medium ">
                   <div class="cash-pay">
                        <span>Thanh Toán: </span><span class="payment">Tiền Mặt</span>

                      </div>
                     
                       
                      
                      </div>
                  </div>
                    </div>
                    <div class="col-6  border-end border-success-subtle">
                      <div class="title text-center fw-bold text-gr border-bottom border-success-subtle mb-2">Sản Phẩm</div>
                  <div class=" product-item mt-3 d-flex  justify-content-around align-items-center" style="height: 80px;">
                    <div class="img-wrap" style="height: 80px;">
                      <img src="${cartObject.imgSource}" class="img-fluid h-100">
                    </div>
                    <div class="wrap-info d-flex flex-column gap-1  ">
  
                      <div class="product-name fw-medium">${cartObject.productName}</div>
                      <div class="pr-price">
                        <span class="price-value ff-roboto text-danger">${cartObject.price}</span> <span class="ff-roboto text-danger">VND</span>
                      </div>
                     
                    </div>
                  </div>
                    </div>
                  </div>
                  
                  
                </div>
                  <div class="delete-btn d-flex justify-content-center align-items-center position-absolute end-0" style="width: fit-content;"><span class=" fw-bold">Xóa bỏ</span></div>
              </div>`;
        modalContainer.append(item);
      }
      let deleteBtnModalItem = Array.from(
        modalContainer.querySelectorAll(".delete-btn")
      );
      // delete items in modal pc
      deleteBtnModalItem.map((element) => {
        element.addEventListener("click", function () {
          element.parentNode.closest(".parent").remove();

          let modalItem = modalContainer.querySelectorAll(".parent");
          if (modalItem.length === 0) {
            noneItem.classList.remove("d-lg-none");
            noneItem.classList.add("d-lg-block");
          }
        });
      });
      toastr.success("Đặt Hàng Thành Công !");

      customerName.value = "";
      customerPhone.value = "";
      customerAddress.value = "";
    }
  });
}
renderAndHandleCatCart();

let cartBoxMb = document.querySelector(".cart-mobile-btn");
let cartBoxPC = document.querySelector(".cart-box");
cartBoxMb.addEventListener("click", function () {
  modal.classList.remove("d-none");
  modal.classList.add("d-flex");
  modalContainer.classList.add("moving-down");
});
cartBoxPC.addEventListener("click", function () {
  modal.classList.remove("d-none");
  modal.classList.add("d-flex");
  modalContainer.classList.add("moving-down");
});
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
  }
});
