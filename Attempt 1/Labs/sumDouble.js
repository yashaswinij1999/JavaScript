function sumDouble(val1, val2) {
  let sum = 0;

  if (val1 === val2) {
    sum = 2 * (val1 + val2);
  } else {
    sum = val1 + val2;
  }
  return sum;
}
console.log(sumDouble(1, 2));
console.log(sumDouble(3, 2));
console.log(sumDouble(2, 2));
