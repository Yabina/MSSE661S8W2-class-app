const doLogin = async (e) => {
  e.preventDefault();

  const username = document.getElementById('formInputUsername').value;
  const password = document.getElementById('formInputPassword').value;

  try {
    const res = await authService.login({ username, password });
    const { auth, expires_in, access_token, refresh_token , user_id} = res;
    const expiryDate = authService.setExpiration(expires_in);

    if (auth) {
    setStorage('isAuth', auth);
    setStorage('expires_in', expiryDate);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);
    setStorage('user_id', user_id);

      window.location.href = 'todo/todo.html';
    } else {
      console.log(msg);
      alert(msg);
    }
  } catch (err) {
    alert('Failed to login. Please try again later.');
  }
};

const doRegister = async (e) => {
  e.preventDefault();

  const username = document.getElementById('formInputUsernameReg').value;
  const password = document.getElementById('formInputPasswordReg').value;
  const email = document.getElementById('formInputEmailReg').value;
  console.log(username);
  console.log(password);
  console.log(email);
  try {
    const res = await authService.register({
      username,
      password,
      email,
    });
    console.log(res.data);
    if (res) {
      window.location.href = '/';
    }
  } catch (err) {
    alert('Failed to register. Please try again later.');
    console.log(err);
  }
};

const doUpdate = async (e) => {
  e.preventDefault();
  const userName = document.getElementById("formInputUsername").value;
  const userEmail = document.getElementById("formInputEmail").value;
  const newEmail = document.getElementById("formInputNewEmail").value;
  const userPassword = document.getElementById("formInputPassword").value;
  const newPassword = document.getElementById("formInputNewPassword").value;

  if (validate()) {
    const res = await update({
      userName,
      userEmail,
      newEmail,
      userPassword,
      newPassword,
    });
    console.log(res);
    if (res._id) {
      alert("Account Updated successfully");
      window.location.href = "./main.html";
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }
};


const doLogout = (e) => {
  e.preventDefault();
  authService.logout();
};

(async () => {
  const login = document.getElementById('login');
  const logout = document.getElementById('logout');
  const username = document.getElementById('header-username');
 
  if (authService.isAuth()) {
    if (login) {
      login.style.display = 'none';
      logout.style.display = 'block';
    }
  } else {
    login.style.display = 'block';
    logout.style.display = 'none';
  }

  if (authService.isAuth()) {
    try {
      await userService.getMe().then(([user]) => {
        const usernameText = document.createTextNode(user.username);
        username.appendChild(usernameText);
      });
    } catch (err) {
      console.log(err);
      alert('Could not get the current user.');
    }
  }
})();