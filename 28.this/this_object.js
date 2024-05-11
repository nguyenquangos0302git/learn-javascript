const student = {
  name: 'Bob',
  sayHello: function () {
    console.log('My name is', this.name);
  },
};
student.sayHello(); // 'My name is Bob'

const student = {
  name: 'Bob',
  // ES6 property methods
  sayHello() {
    console.log('My name is', this.name);
  },
};
student.sayHello(); // 'My name is Bob'

('use strict');
// avoid using arrow function in object methods
const student = {
  name: 'Bob',

  // arrow function
  sayHello: () => {
    console.log('My name is', this.name);
  },
};
student.sayHello(); // 'My name is undefined'
