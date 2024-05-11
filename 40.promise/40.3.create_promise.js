const promise = new Promise(
  // Executor
  function (resolve, reject) {
    // logic
    // success: resolve()
    // fail: reject()
  }
);

promise
  .then(function () {})
  .then(function () {})
  .catch(function () {})
  .finally(function () {});
