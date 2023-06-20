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

// localStorage.removeItem("myArray");
let localStorageData = localStorage.getItem("myArray");

let localStorageArrayData = localStorageData
  ? JSON.parse(localStorageData)
  : [];
function renderAndHandleCartItems() {
  // render cart item
  let productContentWrap = document.querySelector(".content");
  let checkCart = productContentWrap.querySelector(".check-cart");
  let wrapCartItems = checkCart.querySelector(".wrap-cart-items");

  wrapCartItems.innerHTML = "";
  localStorageArrayData.map((element) => {
    let item = document.createElement("div");
    item.classList.add("item");
    if (element.checkDiscount == false) {
      item.setAttribute("data-id", element.id);
      item.innerHTML = `<div
                            class="d-flex w-100 py-3 justify-content-between position-relative my-3 border-bottom border-secondary-subtle"
                          >
                            <div
                              class="clear-cart-item-btn position-absolute fs-14px text-bg-danger py-1 px-2"
                              style="right: 10px; bottom: 10px"
                            >
                              <span>Xóa</span>
                            </div>
                            <div class="cart-item d-flex gap-3">
                              <div class="img-wrap" style="height: 100px">
                                <img
                                  src="${element.productImgSource}"
                                  class="img-fluid h-100"
                                  alt=""
                                />
                              </div>
                              <div
                                class="item-info-wrap fs-14px d-flex flex-column justify-content-center"
                              >
                                <div class="name fw-medium text-soft-bl">
                                  ${element.productName}
                                </div>
                                <div class="price-box">
                                  <span class="pr-value ff-roboto text-secondary"
                                    >${element.productPrice}</span
                                  >
                                  <span class="ff-roboto text-secondary">VND</span>
                                </div>
                               
                              </div>
                            </div>
                            <div
                              class="quantity-and-subtotal fs-14px d-flex flex-column gap-2"
                            >
                              <div
                                class="quantity-wrap w-100 d-flex justify-content-between px-1 border border-success-subtle rounded-5"
                              >
                                <div class="minus-btn fs-5">
                                  <i class="bi bi-dash"></i>
                                </div>
                                <div
                                  class="quantity-number d-flex justify-content-between align-items-center"
                                >
                                  <span class="quantity-value">1</span>
                                </div>
                                <div class="plus-btn">
                                  <i class="bi bi-plus fs-5"></i>
                                </div>
                              </div>
                              <div class="total">
                                <div class="total-wrap">
                                  <span class="total-value ff-roboto"
                                    >${element.productPrice}</span
                                  >
                                  <span class="ff-roboto">VND</span>
                                </div>
                              </div>
                            </div>
                          </div>`;
    } else if (element.checkDiscount == true) {
      item.setAttribute("data-id", element.id);
      item.innerHTML = `<div
                            class="d-flex w-100 py-3 justify-content-between position-relative my-3 border-bottom border-secondary-subtle"
                          >
                            <div
                              class="clear-cart-item-btn position-absolute fs-14px text-bg-danger py-1 px-2"
                              style="right: 10px; bottom: 10px"
                            >
                              <span>Xóa</span>
                            </div>
                            <div class="cart-item d-flex gap-3">
                              <div class="img-wrap" style="height: 100px">
                                <img
                                  src="${element.productImgSource}"
                                  class="img-fluid h-100"
                                  alt=""
                                />
                              </div>
                              <div
                                class="item-info-wrap fs-14px d-flex flex-column justify-content-center"
                              >
                                <div class="name fw-medium text-soft-bl">
                                  ${element.productName}
                                </div>
                                <div class="price-box">
                                  <span class="pr-value ff-roboto text-secondary"
                                    >${element.productPrice}</span
                                  >
                                  <span class="ff-roboto text-secondary">VND</span>
                                </div>
                                <div class="attach-pr">
                                  <div class="text-soft-bl fw-medium">Mũ Sừng</div>
                                  <div class="attach-price-box">
                                    <span
                                      class="attach-price-value ff-roboto text-secondary"
                                      >126.000
                                    </span>
                                    <span class="ff-roboto text-secondary"
                                      >VND</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="quantity-and-subtotal fs-14px d-flex flex-column gap-2"
                            >
                              <div
                                class="quantity-wrap w-100 d-flex justify-content-between px-1 border border-success-subtle rounded-5"
                              >
                                <div class="minus-btn fs-5">
                                  <i class="bi bi-dash"></i>
                                </div>
                                <div
                                  class="quantity-number d-flex justify-content-between align-items-center"
                                >
                                  <span class="quantity-value">1</span>
                                </div>
                                <div class="plus-btn">
                                  <i class="bi bi-plus fs-5"></i>
                                </div>
                              </div>
                              <div class="total">
                                <div class="total-wrap">
                                  <span class="total-value ff-roboto"
                                    >${element.productPrice}</span
                                  >
                                  <span class="ff-roboto">VND</span>
                                </div>
                              </div>
                            </div>
                          </div>`;
    }
    wrapCartItems.append(item);
  });

  //    cart quantity handle
  function handleQuantityWithDiscountProducts() {
    let itemsArr = Array.from(wrapCartItems.querySelectorAll(".item"));
    itemsArr.map((element) => {
      console.log(element);
      let showQuantityBox = element.querySelector(".quantity-value");
      let subTotalBox = element.querySelector(
        ".quantity-and-subtotal .total .total-value"
      );

      console.log(showQuantityBox);
      let subTotalBoxValue = parseFloat(
        subTotalBox.innerText.replace(/\./g, "")
      );
      let showQuantityValue = parseFloat(showQuantityBox.innerText);
      let itemMinusBtn = element.querySelector(".minus-btn");
      let itemPlusBtn = element.querySelector(".plus-btn");
      if (element.querySelector(".attach-pr")) {
        subTotalBox.innerHTML = `${(subTotalBoxValue + 126000).toLocaleString(
          "vi-VN"
        )}`;
      }
      itemMinusBtn.addEventListener("click", function () {
        if (showQuantityValue > 1) {
          showQuantityValue--;
          showQuantityBox.innerHTML = `${showQuantityValue}`;
          if (element.querySelector(".attach-pr")) {
            subTotalBox.innerHTML = `${(
              subTotalBoxValue * showQuantityValue +
              126000
            ).toLocaleString("vi-VN")}`;
          } else {
            subTotalBox.innerHTML = `${(
              subTotalBoxValue * showQuantityValue
            ).toLocaleString("vi-VN")}`;
          }
        }
      });
      itemPlusBtn.addEventListener("click", function () {
        showQuantityValue++;
        showQuantityBox.innerHTML = `${showQuantityValue}`;
        if (element.querySelector(".attach-pr")) {
          subTotalBox.innerHTML = `${(
            subTotalBoxValue * showQuantityValue +
            126000
          ).toLocaleString("vi-VN")}`;
        } else {
          subTotalBox.innerHTML = `${(
            subTotalBoxValue * showQuantityValue
          ).toLocaleString("vi-VN")}`;
        }
      });
    });
  }
  handleQuantityWithDiscountProducts();

  // delete cart item
  function handleDeleteItem() {
    let deleteCartItemBtnArray = Array.from(
      wrapCartItems.querySelectorAll(".clear-cart-item-btn")
    );
    deleteCartItemBtnArray.map((element) => {
      element.addEventListener("click", function () {
        let parentItem = element.closest(".item");
        let parentID = parseFloat(parentItem.getAttribute("data-id"));
        console.log(parentID);
        parentItem.remove();
        toastr.warning("Đã xóa sản phẩm");
        let myArray = JSON.parse(localStorage.getItem("myArray"));
        let newArr = myArray.filter(function (element) {
          if (element.id !== parentID) return element;
        });
        localStorage.setItem("myArray", JSON.stringify(newArr));
      });
    });
  }
  handleDeleteItem();
  // update cart-item
  function updateCartItem() {
    let paymentBox = document.querySelector(".subtotal-items-wrap");
    let updateCartBtn = paymentBox.querySelector(".update-cart-btn");
    let showTotalValue = paymentBox.querySelector(".subtotal-price-value");
    updateCartBtn.addEventListener("click", function () {
      let itemsPriceArr = Array.from(
        document.querySelectorAll(
          ".content .wrap-cart-items .item .total-value"
        )
      );
      let totalValue = itemsPriceArr.reduce(function (total, element) {
        return total + parseFloat(element.innerText.replace(/\./g, ""));
      }, 0);
      showTotalValue.innerHTML = `${totalValue.toLocaleString("vi-VN")}`;
    });
  }
  updateCartItem();
  //   payment form handle
  function paymentFormHandle() {
    // cusomer info
    let totalBox = document.querySelector(".content .subtotal-items-wrap ");
    let customerNameInput = totalBox.querySelector(".customer-name input");
    let customerPhoneInput = totalBox.querySelector(".customer-phone input");
    let customerAddressInput = totalBox.querySelector(
      ".customer-address input"
    );
    let doneDealItemsBox = document.querySelector(".wrap-items-done-deal");
    let payBtn = totalBox.querySelector(".payment-wrap .pay-btn");
    let cartItems = localStorageArrayData;
    let productArr = cartItems.map((element) => {
      return {
        productName: element.productName,
        productImgSource: element.productImgSource,
      };
    });
    // pay-btn click
    payBtn.addEventListener("click", function () {
      if (
        customerNameInput.value == "" ||
        customerPhoneInput.value == "" ||
        customerAddressInput.value == ""
      ) {
        toastr.error("Hãy điền đầy đủ thông tin !!!");
      } else {
        let doneDealArr = localStorage.getItem("doneDealArr");
        let newItems = {
          id: Date.now(),
          customerName: customerNameInput.value,
          customerPhone: customerPhoneInput.value,
          customerAddress: customerAddressInput.value,
          product: productArr,
        };
        doneDealArr = newItems;

        localStorage.setItem("customerObject", JSON.stringify(doneDealArr));
        // reset value input
        customerNameInput.value = "";
        customerPhoneInput.value = "";
        customerAddressInput.value = "";

        doneDealItemsBox.innerHTML = "";
        productArr.map((element) => {
          let customerObject = JSON.parse(
            localStorage.getItem("customerObject")
          );
          let itemDoneDeal = document.createElement("div");
          itemDoneDeal.classList.add(".item-done-deal");
          itemDoneDeal.innerHTML = `<div class="my-3 border-bottom border-success-subtle py-2">
                      <div class="row my-2">
                        <div class="col-8">
                          <div class="item-infor d-flex">
                            <div
                              class="img-wrap"
                              style="height: 100px; width: fit-content"
                            >
                              <img
                                src=" ${element.productImgSource}"
                                class="img-fluid h-100"
                                alt=""
                              />
                            </div>
                            <div
                              class="item-description d-flex flex-column justify-content-center align-items-center fs-14px"
                            >
                              <div class="item-name fw-medium">
                                ${element.productName}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-4 d-flex">
                          <div
                            class="status-box-value d-flex align-items-center fw-bold"
                          >
                            Chờ Lấy Hàng
                          </div>
                        </div>
                      </div>
                      <div class="row my-2">
                        <div
                          class="customer-info d-flex justify-content-between fs-14px"
                        >
                          <div class="customer-name ff-roboto">
                             ${customerObject.customerName}
                          </div>
                          <div class="customer-phone ff-roboto">  ${customerObject.customerPhone}</div>
                          <div class="customer-address ff-roboto">
                                                        ${customerObject.customerAddress}

                          </div>
                        </div>
                      </div>
                    </div>`;
          doneDealItemsBox.append(itemDoneDeal);
        });
        toastr.success("Thanh toán thành công !!!");
      }
    });
  }
  paymentFormHandle();
}
renderAndHandleCartItems();
