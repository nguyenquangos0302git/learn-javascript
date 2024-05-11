const sayHello = () => {
  console.log(this); // window or global
};
('use strict');
function sayHello() {
  console.log(this); // undefined
  const getLanguage = () => {
    console.log(this); // same as this from outer normal function
  };
  getLanguage();
}
