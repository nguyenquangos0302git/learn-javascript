function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  onFinish(sum);
}
function handleOnFinish(sum) {
  console.log("Sum is:", sum);
}

// v1
main(handleOnFinish);

// v2
main((x) => console.log(`Sum is: ${x}`));
