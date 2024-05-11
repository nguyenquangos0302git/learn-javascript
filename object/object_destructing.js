const student = {
  name: "Easy Frontend",
  age: 18,
};
// old way
const name = student.name;
const age = student.age;
// new way usign object destructuring
const { name, age } = student; // recommended
