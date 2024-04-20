function isUserAlreadyLogin() {
    const access_token = getStorage("access_token");
    if(access_token) window.location.href = "/home.html";
  }
  
  // Call the function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", function () {
    isUserAlreadyLogin();
  });
  
  const login = () => {
    const formData = new FormData(document.getElementById("loginForm"));
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log("Login data ", data);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setStorage("isAuth", data.username);
          setStorage("access_token", data.username);
          setStorage("refresh_token", data.username);
          window.location.href = "/home.html";
        } else {
          alert(result.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  
  const register = () => {
    const formData = new FormData(document.getElementById("register-form"));
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
    };
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()) 
      .then((result) => {
        if (result.success) {
        console.log("users", JSON.stringify(result.users));
        //alert(result.message);
          setStorage("isAuth", data.username);
          setStorage("access_token", data.username);
          setStorage("refresh_token", data.username);
        window.location.href = "/home.html";
      }
     else{
      alert(result.message);
    }
     })
      .catch((error) => console.error("Error:", error));
  };
  