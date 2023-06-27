// multiply Two numbers without using * operator

function Multi(a, b) {
  let sum = 0;
  for (i = 1; i <= b; i++) {
    sum += a;
  }
  return sum;
}
console.log(Multi(8, 5));
