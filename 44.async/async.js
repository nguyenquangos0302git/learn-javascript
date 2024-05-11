// Async function declaration
async function func1() {}
// Async function expression
const func2 = async function () {};
// Async arrow function
const func3 = async () => {};
// Async method definition in an object literal
const obj = { async say() {} };

async function fetchData() {
  const data = await studentApi.getAll();
  console.log(data);
}

async function getAllStudent() {
  try {
    const url = 'http://js-post-api.herokuapp.com/api/students?_page=1';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
