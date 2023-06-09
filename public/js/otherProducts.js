// Call Foods API
async function getFoods() {
  let res = await fetch("http://localhost:3000/foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let productBox = document.querySelector(".container .row");
  let foods = await getFoods();
  foods.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-12");
    item.classList.add("col-lg-6");
    item.innerHTML = ` <div
                class="wrap-product-info d-flex flex-column justify-content-between h-100 p-3 gap-3"
              >
                <div class="product-name">
                  <span class="name-value fs-3 text-gr fw-bold"
                    ></span
                  >
                </div>
                <div class="brand-name fs-4">
                  <span class="text-secondary fw-medium">Brand:</span>
                  <span class="brand-value text-soft-bl fw-medium"> Jinny</span>
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
                    <span class="price-value number-font text-gr">100.000</span>
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
              </div>`;
  });
}
renderFoods();
