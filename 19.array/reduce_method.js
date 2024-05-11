const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

const reduceMethod = (array, callbackFn, initValue) => {
  if (!Array.isArray(array) || typeof callbackFn !== "function")
    throw new Error("xxx");

  if (array.length === 0) {
    if (initValue === undefined) {
      throw new Error("xxx");
    }
    return initValue;
  }

  let hasInitValue = initValue !== undefined;
  let startIndex = hasInitValue ? 0 : 1;
  let accumlator = hasInitValue ? initValue : array[0];

  for (let i = startIndex; i < array.length; i++) {
    accumlator = callbackFn(accumlator, array[i]);
  }

  return accumlator;
};

console.log(
  reduceMethod(array1, (prevValue, currentValue) => prevValue + currentValue, 5)
);
