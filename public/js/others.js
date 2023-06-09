// Call Foods API
async function getFoods() {
  let res = await fetch("foods");
  let data = await res.json();
  return data;
}
async function renderFoods() {
  let foods = await getFoods();
  let productBox = document.querySelector(".product .container .row");
  foods.map((element) => {
    let item = document.createElement("div");
    item.classList.add("col-6");
    item.classList.add("col-lg-4");
    item.classList.add("mb-4");
    item.setAttribute("data-product-id", `${element.id}`);

    item.innerHTML = `
      <div class="item p-2 custom-shadow  rounded-2">
                <a
                  href="./other-product.html?${element.id}"
                  class="text-decoration-none d-flex flex-column gap-3"
                >
                  <div class="wrap-img">
                    <img
                      src="${element.thumbnail}"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="wrap-product-info d-flex flex-column px-lg-2">
                    <div class="pr-name text-soft-bl fw-medium">
                      <span class="name-value fs-4 d-none d-lg-block"
                        >${element.name}</span
                      >
                      <span class="name-value fs-5 d-lg-none"
                        >${element.name}</span
                      >
                    </div>
                    <div class="pr-price-box d-flex justify-content-between">
                      <div class="price fw-medium d-lg-none">
                        <span class="ff-roboto text-soft-bl fw-medium"
                          >${element.price}</span
                        >
                        <span class="text-soft-bl fw-bold">VND</span>
                      </div>
                      <div class="price fw-medium fs-4 d-none d-lg-block">
                        <span class="ff-roboto text-soft-bl fw-medium"
                          >${element.price}</span
                        >
                        <span class="text-soft-bl fw-bold">VND</span>
                      </div>
                      <div
                        class="cart-btn border border-success py-1 px-2 text-soft-bl"
                        style="border-radius: 50%"
                      >
                        <i class="bi bi-cart4"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
    
   `;
    productBox.append(item);
  });
}
renderFoods();
