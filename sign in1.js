function check(event) {
  event.preventDefault();
  email = document.getElementById("email").value;
}

function redirectToSignIn() {
  window.location.assign("sign in2.html");
}
function redirectToSignUp() {
  window.location.assign("sign up.html");
}
