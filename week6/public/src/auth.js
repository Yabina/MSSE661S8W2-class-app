const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('formInputUsername').value;
    const password = document.getElementById('formInputPassword').value;
  
    // const res = await login({ username, password });
    // const { auth, access_token, refresh_token } = res;
    login({
      username:username,
      password:password
    }). then ( function(res) {
      window.location.href = 'home.html';
    });
  
    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);
   
    window.location.href = 'home.html';
  };
//const login = async (username, password) => {
//   try {
//       // Make a POST request to the login endpoint with username and password
//       const response = await fetch('http://localhost:3000/api/login', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ username, password })
//       });

//       // Check if the request was successful (status code 200)
//       if (response.ok) {
//           // Parse the JSON response
//           const data = await response.json();
//           // Return the authentication data
//           return data;
//       } else {
//           // If the request was not successful, throw an error with the status text
//           throw new Error(`Login failed: ${response.statusText}`);
//       }
//   } catch (error) {
//       // If an error occurs during the request, throw an error
//       throw new Error(`Login failed: ${error.message}`);
//   }
// };

// // Example usage:
// try {
//   const { auth, access_token, refresh_token } = response;
//   // Store authentication data in local storage
//   setStorage('isAuth', auth);
//   setStorage('access_token', access_token);
//   setStorage('refresh_token', refresh_token);
//   // Redirect user to home page
//   window.location.href = 'home.html';
// } catch (error) {
//   // Handle login error
//   alert(error.message);
// }
  

  const doRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById('formInputUsernameReg').value;
    const email = document.getElementById('formInputEmailReg').value;
    const password = document.getElementById('formInputPasswordReg').value;
  
    const res = await register({
      username,
      email,
      password,
    });
  
    if (res) {
      window.location.href = '/';
    }
  };
  
  const doLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = '/';
  };
  
  // document.querySelector(".logout").addEventListener("click", (e) => {
  //   auth.logout();
  // });
  // (() => {
  //   if (storageHasData()) {
  //     const isAuth = getStorage('isAuth');
  //     if (!isAuth) {
  //       document.getElementById('logout');//.style.display = 'none';
  //     } else {
  //       document.getElementById('logout').style.display = 'block';
  //     }
  //   }
  // })();