function outerFunc() {
  let outer = "I'm outer";
  //closure
  function innerFunc() {
    console.log(outer);
  }
  return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();
