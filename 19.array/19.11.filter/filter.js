const arr = [1, 2, 3];

// filter method
console.log(arr.filter((x) => x % 2 === 0));

// build filter method
function filter(arr, onFilterFn) {
  if (!Array.isArray(arr) || typeof onFilterFn !== "function") return undefined;

  const newArr = [];

  arr.forEach((element) => {
    if (onFilterFn(element)) {
      newArr.push(element);
    }
  });

  return newArr;
}

function handleFilterFn(element) {
  if (element === undefined || element === null) return undefined;

  return element % 2 === 0;
}

console.log(filter(arr, handleFilterFn));
