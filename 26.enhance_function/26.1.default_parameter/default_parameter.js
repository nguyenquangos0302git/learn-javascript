// move default param to the right most
function sum(a, b) {}
function sum(a, b = 10) {}
function sum(a = 5, b = 10) {}
function sum(a = 5, b = 10) {
  return a + b;
}
sum(); // 15
sum(10); // 20
sum(10, 20); // 30
sum(undefined, undefined); // 15
sum(undefined, null); // 5 as null is converted to 0
