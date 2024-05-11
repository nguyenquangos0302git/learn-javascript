const countNumber = (n) => {
  let message = "";
  while (n > 0) {
    message = message + (n % 10);
    n = Math.trunc(n / 10);
  }
  return message.split("").reverse().join("");
};

console.log(countNumber(240));
