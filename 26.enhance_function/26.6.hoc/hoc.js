// ES5
function add(x) {
  return function (y) {
    return y + x;
  };
}

// call 1
const addTwo = add(2); // function(y) { return 2 + y }
addTwo(3); // return 5

// call 2
add(2)(3);

// ES6
const addES6 = (x) => (y) => y + x;

// call 1
const addTwoES6 = add(2); // function(y) { return 2 + y }
addTwoES6(3); // return 5

// call 2
addES6(2)(3);

const callbackFn = (x) => x % 2 === 0;

console.log([2, 2, 4].every(callbackFn));
