function array() {
  console.log("hello");
}
array(); //callbackfunction

function add(a, b) {
  console.log(a + b);
}
add(2, 3); //function declaration

const add = function (a, b) {
  console.log(a + b);
};
add(2, 3); //function expression
let add = (a, b) => a + b;
add(2, 3); //arrowfunction
