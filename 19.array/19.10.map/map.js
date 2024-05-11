// map method
[1, 2, 3].map((x) => x * 2);

// build map method
function map(arr, onMappingFn) {
  if (!Array.isArray(arr) || typeof onMappingFn !== "function")
    return undefined;

  let newArr = [];

  arr.forEach((element) => {
    newArr.push(onMappingFn(element));
  });

  return newArr;
}

function handleMappingFn(element) {
  if (element === undefined || element === null) return undefined;

  return element * 2;
}

const handleMappingFn1 = (element) => {
  if (element === undefined || element === null) return undefined;

  return element * 2;
};

console.log(map([1, 2, 3], handleMappingFn));
console.log(
  map([1, 2, 3], (element) => {
    if (element === undefined || element === null) return undefined;

    return element * 2;
  })
);
console.log(map([1, 2, 3], (element) => handleMappingFn1(element)));
