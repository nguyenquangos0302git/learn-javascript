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
