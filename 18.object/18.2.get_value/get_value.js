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