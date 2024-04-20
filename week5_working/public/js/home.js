// Call the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    const access_token = getStorage("access_token");
    if(!access_token) window.location.href = "/error.html";
    populateUserDetails();
  });
  
  const populateUserDetails = () => {
    fetch("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((users) => {
        console.log("users data result ", users);
        const tableBody = document.querySelector("#user-table tbody");
        users.forEach((user, id) => {
          const row = document.createElement("tr");
          let userId = id + 1;
          row.innerHTML = `
                          <td>${userId}</td>
                          <td>${user.username}</td>
                          <td>${user.email}</td>
                      `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error:", error));
  };
  