// block scope
{
  const blockScope = "Javascript";
  console.log(blockScope); // ok
}
console.log(blockScope); //  runtime error: blockScope is not defined

// function scope
function sayHello() {
  const functionScope = "Javascript";
  console.log(functionScope); //ok
}
sayHello();
console.log(functionScope); // ReferenceError: name is not defined

// lexical scope
const lexicalScope = "=Javascript";
function sayHello() {
  const language = "en";
  console.log(lexicalScope);
  // the lexical scope of lexicalScope is global scope
  function printLanguage() {
    console.log(language);
    // the lexical scope of language is a function scope (sayHello)
  }
}

// global scope
let globalScope = "Global Scope";

// scope chain
const fullName = "Easy";
// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Frontend";

  function sayName() {
    const fullName = "Boooom";

    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
