function Cat(name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;
}
// Thêm method
Cat.prototype.meow = function () {
  console.log(`${this.name} meows: meow meow meow!`);
};

// Khởi tạo 1 instance object
let alex = new Cat('Alex', 'Yellow', 'Bengal');

alex.meow(); // Alex meows: meow meow meow!

function Cat(name, color, type) {
  this.name = name;
  this.color = color;
  this.type = type;

  this.meow = function () {
    console.log(`${this.name} meows: meow meow meow!`);
  };
}

let alex = new Cat('Alex', 'Yellow', 'Bengal');

alex.meow(); // Alex meows: meow meow meow!
