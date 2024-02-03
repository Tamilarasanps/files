let gender = '';
let colors = [];

const product = document.getElementById("product");
const Description = document.getElementById("description");
const Brand = document.getElementById("brand");
const Quantity = document.getElementById("quantity");
const Colors = document.getElementById("colors");
const Category = document.getElementById("category");
const button = document.getElementById("butn");

const Gender1 = document.getElementById("Gender1");
const Gender2 = document.getElementById("Gender2");
const Gender3 = document.getElementById("Gender3");

Gender1.addEventListener('click', (e) => {
  gender = e.target.value
})
Gender2.addEventListener('click', (e) => {
  gender = e.target.value
})
Gender3.addEventListener('click', (e) => {
  gender = e.target.value
})


button.addEventListener("click", (e) => {
  e.preventDefault();
  const userdetails = {
    id: Math.random().toString(16).split(".")[1],
    product: product.value,
    description: Description.value,
    brand: Brand.value,
    quantity: Quantity.value,
    gender: gender,
  };
  localStorage.setItem(userdetails.id, JSON.stringify(userdetails));
  window.location.reload();
  // console.log(userdetails);
  // console.log(userdetails.description);
  // alert("user create successfully");
});

