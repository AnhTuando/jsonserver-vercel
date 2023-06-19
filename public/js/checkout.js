// localStorage.removeItem("myArray");
let localStorageData = localStorage.getItem("myArray");
let localStorageArrayData = localStorageData
  ? JSON.parse(localStorageData)
  : [];
console.log(localStorageArrayData);
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
      let showQuantityBox = element.querySelector(".quantity-value");
      let subTotalBox = element.querySelector(".total-value");

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
}
renderAndHandleCartItems();
