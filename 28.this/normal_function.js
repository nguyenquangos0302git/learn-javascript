// non-strict mode
function sayHello() {
  console.log(this); // window or global
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // window or global
});

('use strict');
function sayHello() {
  console.log(this); // undefined
}
// anonymous function
[1, 2, 3].forEach(function (number) {
  console.log(this); // undefined
});
