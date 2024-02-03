const product = document.getElementById("product");
const Description = document.getElementById("description");
const Brand = document.getElementById("brand");
const Quantity = document.getElementById("quantity");
const Gender = document.getElementById("gender");
const Colors = document.getElementById("colors");
const Category = document.getElementById("category");
const button = document.getElementById("butn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const userdetails = {
    id: Math.random().toString(16).split(".")[1],
    product: product.value,
    description: Description.value,
    brand: Brand.value,
    quantity: Quantity.value,
    gender:Gender.value,
  };
  // console.log(userdetails.description);
  localStorage.setItem(userdetails.id, JSON.stringify(userdetails));
  console.log(userdetails);
  // alert("user create successfully");
});

