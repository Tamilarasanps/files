document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("tbody"); // Assuming you have only one table body in your HTML
  let a = [];
  const alluser = JSON.parse(localStorage.getItem("userdetails"));
  console.log(alluser);
  a.push(alluser);

  console.log(a);
  a.forEach((user) => {
    console.log(user);
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${user.id}</td>
              <td>${user.product}</td>
              <td>${user.description}</td>
              <td>${user.quantity}</td>
              <td>${user.price}</td>
           
              <td>
                  <div class="btns d-flex">
                      <button class="btn btn-danger mx-3" onclick="deleteUser('${user}')">Delete</button>
                      <button class="btn btn-secondary" onclick="editUser('${user.productName}')">Edit</button>
                 </div>
           </td>`;
    tableBody.append(row);
    // console.log(alluser);
  });
});
