const student = {
  id: 1,
  name: "Van A",
  isHero: true,
};
// Remove "name" key
delete student.name;
console.log(student.name); // undefined
