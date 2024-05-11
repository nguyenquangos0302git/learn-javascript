function sum(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3)); // 6
const numberList = [1, 2, 3];
console.log(sum(...numberList)); // 6
