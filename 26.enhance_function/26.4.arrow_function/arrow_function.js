function sum() {} // function declaration
const sum = function () {}; // function expression
const sum = () => {}; // arrow function

const sum = (a, b) => {
  return a + b;
};
// shorthand
const sum = (a, b) => a + b;

const getStudent = () => {
  return {
    name: 'Quang',
  };
};

// shorthand return
const getStudentShortHand = () => ({ name: 'Quang' });
