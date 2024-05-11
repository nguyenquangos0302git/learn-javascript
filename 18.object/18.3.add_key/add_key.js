const student = {
  id: 1,
  name: "Van A",
  isHero: true,
};
// update value of a key
student.name = "Van B";
// simply set new key for object
student.age = 18;
student["mark"] = 10;
console.log(student.age); // 18
console.log(student.mark); // 10
