function multiplyWithoutStarOperator(a, b) {
  let result = 0;

  while (b > 0) {
    if (b & 1) {
      result = result + a;
    }
    a = a << 1;
    b = b >> 1;
  }
  return result;
}

console.log(multiplyWithoutStarOperator(12, 8));
console.log(multiplyWithoutStarOperator(10, 4));
console.log(multiplyWithoutStarOperator(23, 4));
