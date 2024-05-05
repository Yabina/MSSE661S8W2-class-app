const getFormValues = () => {
    const userName = document.getElementById("formInputUsername").value;
    const userEmail = document.getElementById("formInputEmail").value;
    const newEmail = document.getElementById("formInputNewEmail").value;
    const userPassword = document.getElementById("formInputPassword").value;
    const newPassword = document.getElementById("formInputNewPassword").value;
    return { userName, userPassword, newPassword, userEmail, newEmail };
}

    const validate = () => {
          const { userName, userPassword, newPassword, userEmail, newEmail } =getFormValues();

    if (userName && !userPassword) {
      alert("A password required to update username.");
      return false;
    } else if (userEmail && !userPassword) {
      alert("A password required to update email.");
      return false;
    } else if (!userPassword && newPassword) {
      alert("A current password is required.");
      return false;
    } else if (!newPassword && userPassword) {
      alert("A new password is required.");
      return false;
    } else {
      return true;
    }
  };

  const resetFields = () => {
    document.getElementById('formInputUsername').value = '';
    document.getElementById('formInputCurrentPassword').value = '';
    document.getElementById('formInputNewPassword').value = '';
    document.getElementById('formInputEmail').value = '';
  };
  
  const saveChanges = async (e) => {
    e.preventDefault();
  
    const { userName, userEmail, newPassword: userPassword } = validate();
  
    try {
      if ((userName && userPassword) || (userEmail && userPassword)) {
        const response = await userService.updateMe({
          username,
          email,
          password,
        });
        if (response.msg) {
          alert(response.msg);
          resetFields();
        }
      }
    } catch (err) {
      console.log(err);
      alert('Cannot process your request at this time.');
    }
  };