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
