"easy".split(); // ['easy']
"easy".split(" "); // ['easy']
"easy".split("-"); // ['easy']
"easy".split("as"); // ['e', 'y']
"easy".split(""); // ['e', 'a', 's', 'y']

// count words
const name = "Easy Frontend";
const words = name.splits(" "); // ['Easy', 'Frontend']
console.log(words.length); // 2
