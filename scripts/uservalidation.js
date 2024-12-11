function validate () {
  var username = document.getElementById('username1').value;
  var password = document.getElementById('password1').value;
  if (username == 'Alex Spurman' && password == '1234') {
    location.assign("main.html");
  }
  else {
    location.assign("signin.html");
  }
}