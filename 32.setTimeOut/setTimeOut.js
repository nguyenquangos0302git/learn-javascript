const timeoutId = setTimeout(callback, timeout);
// callback is the function will be executed once the timer is expired
// timeout is the time in milliseconds, default to 0. 1 second = 1000 milliseconds;
// timeoutId is a positive integer, used to identify a timeout
// and clear it by using clearTimeout(timeoutId)

// Real case: Redirect to another page after 3 seconds
setTimeout(() => {
  window.location.href = 'https://google.com';
}, 3000);

const timeoutId = setTimeout(() => {
  console.log('Tada!!!');
}, 5000);
clearTimeout(timeoutId); // cancel the timeout
// should be called before the timeout expired
