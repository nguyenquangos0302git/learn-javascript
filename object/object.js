const student = {
  id: 1,
  name: "Van A",
  name: "Van B", // same key come later will take precedence
  isHero: true,
  "key has space": "super", // key with spaces should be wrapped in quotes
  sayHi() {
    console.log("Hello!");
  },
};

const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
  'avg mark': 9,
}
console.log(student.name); 
console.log(student.avg mark); // Syntax Error 
console.log(student['avg mark']); // 9

const key = 'avg mark'; 
console.log(student.key); // undefined 
console.log(student[key]); // 9


const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
}
// update value of a key
student.name = 'Van B';
// simply set new key for object
student.age = 18;
student['mark'] = 10;
console.log(student.age); // 18 
console.log(student.mark); // 10


const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
}
// Remove "name" key
delete student.name; console.log(student.name); // undefined