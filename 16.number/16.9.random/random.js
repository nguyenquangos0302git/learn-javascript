// Random một số ngẫu nhiên trong khoảng [0, n]
// Random một số ngẫu nhiên trong khoảng [a, b] với a < b

function randomNumber(n) {
  if (n <= 0) return 0;

  return Math.round(Math.random() * n);
}

function randomNumber(a, b) {
  if ((a < 0 || b < 0) && a < b) return 0;

  let random = Math.random() * (b - a);
  return Math.round(random) + a;
}
