// ES5
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// ES6
// convert arguments to Array
function sum() {
  return [...arguments].reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3));
