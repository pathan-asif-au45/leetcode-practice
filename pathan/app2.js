const password = prompt("please enter anew password");
if (password.length >= 6) {
  console.log("long enough password");
} else {
  console.log("password is too short");
}
if (password.indexOf(" ") === -1) {
  console.log("good job no space");
} else {
  console.log("password should not contain spaces");
}
