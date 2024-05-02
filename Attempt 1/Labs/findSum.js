function findSum(num) {
  let sum = 0;
  let c = num % 10;
  num = Math.floor(num / 10);

  let b = num % 10;
  num = Math.floor(num / 10);

  let a = num % 10;
  num = Math.floor(num / 10);

  sum = a + b * b + c * c * c;  
  return sum;
}

console.log(findSum(123));
