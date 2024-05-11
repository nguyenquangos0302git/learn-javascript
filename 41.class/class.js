class Cat {
  constructor(name, color, type) {
    // Tạo các thuộc tính (property)
    this.name = name;
    this.color = color;
    this.type = type;
  }

  // Thêm vào các phương thức (method)
  meow() {
    console.log(`${this.name} meows: meow meow meow!`);
  }
}

let alex = new Cat('Alex', 'Yellow', 'Bengal');

alex.meow(); // Alex meows: meow meow meow!
