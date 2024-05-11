const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true

// deep clone
const deepClone = JSON.parse(JSON.stringify(target));
console.log(deepClone); // { a: 1, b: 4, c: 5 }
