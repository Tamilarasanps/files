const product = document.getElementById("product");
const Description = document.getElementById("description");
const Brand = document.getElementById("brand");
const Quantity = document.getElementById("quantity");
const Gender = document.getElementById("gender");
const Category = document.getElementById("category");
const Price = document.getElementById("price");
const button = document.getElementById("butn");
const color = document.getElementById("colors");
let gender = "";
const gender1 = document.getElementById("gender1");
const gender2 = document.getElementById("gender2");
const gender3 = document.getElementById("gender3");

gender1.addEventListener("click", (e) => {
  gender = e.target.value;
});
gender2.addEventListener("click", (e) => {
  gender = e.target.value;
});
gender3.addEventListener("click", (e) => {
  gender = e.target.value;
});
function getSelectedCheckboxValues() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selectedValues = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    }
  });
  return selectedValues;
}

// Get selected checkbox values
const selectedColors = getSelectedCheckboxValues();

button.addEventListener("click", (e) => {
  e.preventDefault();
  const userdetails = {
    id: Math.random().toString(16).split(".")[1],
    product: product.value,
    description: Description.value,
    brand: Brand.value,
    quantity: Quantity.value,
    gender,
    color: selectedColors,
    Price: Price.value,
    Category: Category.value,
  };

  if (localStorage.getItem("userdetails") === null) {
    const details = []
    details.push(userdetails)
    localStorage.setItem("userdetails", JSON.stringify(details))
  }
  else {
    const details = JSON.parse(localStorage.getItem("userdetails"))
    details.push(userdetails)
    localStorage.setItem("userdetails", JSON.stringify(details))
  }

  window.location.reload();
  alert("user create successfully");
});

// console.log(JSON.parse.window.localStorage.getItem("userdetails"));
// document.addEventListener("DOMContentLoaded", function () {
//   function addProduct() {
//     const productName = document.getElementById("Product-name").value;
//     const productDescription = document.getElementById("Description").value;
//     const productBrand = document.getElementById("Brand").value;
//     const productQuantity = document.getElementById("Quantity").value;
//     const productPrice = document.getElementById("Price").value;

//     const product = {
//       productName: productName,
//       productDescription: productDescription,
//       productBrand: productBrand,
//       productQuantity: productQuantity,
//       productPrice: productPrice,
//       createdAt: new Date().toLocaleString(),
//     };

//     if (localStorage.getItem("products") === null) {
//       const products = [];
//       products.push(product);
//       localStorage.setItem("products", JSON.stringify(products));
//     } else {
//       const products = JSON.parse(localStorage.getItem("products"));
//       products.push(product);
//       localStorage.setItem("products", JSON.stringify(products));
//     }

//     alert("Product added successfully!");
//   }

//   const createButton = document.getElementById("createButton");
//   if (createButton) {
//     createButton.addEventListener("click", addProduct);
//   }
// });
