// random [0, n]

function randomNumber(n) {
  if (n <= 0) return -1;

  // random [0, n)
  const random = Math.random() * n;

  // random [0, n]
  const result = Math.round(random);

  return result;
}

// random [a, b]
function randomNumberIsRange(a, b) {
  if (a >= b) return -1;

  // random [a, b)
  const random = Math.random() * (b - a);

  // random [a, b]
  const result = Math.round(random);

  return result;
}
