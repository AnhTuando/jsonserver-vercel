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
    
   `;
    productBox.append(item);
  });
}
renderFoods();
