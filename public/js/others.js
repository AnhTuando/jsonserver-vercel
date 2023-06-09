// Call Foods API
async function getFoods() {
  let res = await fetch("http://localhost:3000/foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let foods = await getFoods();
  let productBox = document.querySelector(".container .row");
  foods.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.innerHTML = `
   <a
                href="./other-product.html?${element.id}"
                class="product-item text-decoration-none rounded-2 custom-shadow d-flex px-2 py-1"
              >
                <div class="item d-flex flex-column gap-2 position-relative">
                  <div
                    class="pr-img h-75 d-flex justify-content-center align-items-center"
                  >
                    <img
                      src="${element.src}"
                      class="img-fluid h-75"
                      alt=""
                    />
                  </div>
                  <div class="product-name fw-medium text-soft-bl">
                    <span class="name-value fs-3 d-none d-lg-block"
                      >${element.name}</span
                    >
                    <span class="name-value fs-5 d-lg-none"
                      >${element.name}</span
                    >
                  </div>
                  <div
                    class="product-price d-flex justify-content-between fw-medium text-soft-bl"
                  >
                    <div
                      class="wap-price-cart d-flex w-100 justify-content-between"
                    >
                      <div class="price-wrap d-flex">
                        <span class="price-value fw-bold ff-roboto me-1"
                          >${element.price}</span
                        >
                        <span class="price-value fw-bold">VND</span>
                      </div>
                      <div
                        class="cart-btn border border-success text-center text-gr py-1 px-2"
                        style="border-radius: 50%"
                      >
                        <i class="bi bi-cart4 fs-6"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>`;
    productBox.append(item);
  });
}
renderFoods();
