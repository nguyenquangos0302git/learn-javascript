// browser
console.log(this); // window object
console.log(this === window); // true
this.name = 'Easy Frontend';
console.log(window.name); // 'Easy Frontend'

// nodejs
console.log(this); // global object
console.log(this === global); // true
this.name = 'Easy Frontend';
console.log(global.name); // 'Easy Frontend'
