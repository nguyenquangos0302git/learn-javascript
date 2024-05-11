const url = 'https://js-post-api.herokuapp.com/api/students?_page=1';
const init = {
  method: 'POST', // GET, PUT, PATCH. DELETE
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN_HERE',
  },
  body: JSON.stringify({ name: 'Easy Frontend' }),
};

fetch('https://js-post-api.herokuapp.com/api/students?_page=1')
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch('https://js-post-api.herokuapp.com/api/invalid-endpoint', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) return response.json();
    // TODO: How you handle errors here? --> It depends on what your API
    returns;
    // Solution 1: return Promise.reject(new Error('Something wrong!'));
    // Solution 2: throw new Error(response.statusText);
    return response.json().then((data) => {
      throw new Error(data?.message || 'Something went wrong!');
    });
  })
  .catch((error) => {
    console.log(error);
    // Toast message
    // Send report to log server (Sentry)
  });
