let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return {
            dont: false,
            value: this.current++,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of range) {
  console.log(num);
}

let str = "hello";
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

let test = {
  0: "1",
  length: 10,
};

console.log(Array.from(test));
