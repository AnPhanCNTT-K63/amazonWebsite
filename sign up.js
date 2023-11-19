function check(event) {
  event.preventDefault();
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value;
  username = document.getElementById("username").value;
  email = document.getElementById("email").value;

  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu không đúng");
    return;
  }
  alert(`Đăng ký thành công!\nTài khoản: ${username}\nMật khẩu: ${password}`);
}

function redirectToSignIn() {
  window.location.assign("sign in1.html");
}
