'use strict';
function sayHello(name) {
  console.log(this.name + name);
}

const student = {
  name: 'Quang',
};

const bindSayHello = sayHello.bind(student, 'Nguyen');
bindSayHello();
sayHello.call(student, 'Nguyen');
sayHello.apply(student, ['Nguyen']);
