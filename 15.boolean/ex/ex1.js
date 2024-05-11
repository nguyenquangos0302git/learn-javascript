// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false

// v1
function checkEvenNumber(n) {
  let isValid;

  if (n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2
function checkEvenNumber(n) {
  let isValid = false;

  if (n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// v3
function checkEvenNumber(n) {
  if (n % 2 === 0) {
    return true;
  }

  return false;
}

// v4
function checkEvenNumber(n) {
  return n % 2 === 0;
}
