const student = {
  name: "Easy Frontend",
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: "male",
};
// v1: using Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);
// v2: using spread operator (shorter, easier to read)
const clonedStudent2 = {
  ...student,
  ...moreProps,
};

