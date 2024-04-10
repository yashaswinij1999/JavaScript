function isSum(num) {
  let r = 0;
  let sum = 0;

  num = Math.abs(num);

  while (num > 0) {
    r = num % 10;
    sum = sum + r;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(isSum(-123));
console.log(isSum(333));
