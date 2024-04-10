function isSum(num) {
  let r = 0;
  let sum = 0;

  while (num > 0) {
    r = num % 10;
    sum = sum + r;
    num = num / 10;
  }
  return sum;
}

console.log(isSum(123));
console.log(isSum(333));
