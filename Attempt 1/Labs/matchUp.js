function matchUp(num1, num2) {
  count = 0;

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] != num2[i]) {
      if (Math.abs(num1[i] - num2[i]) <= 2) {
        count += Math.abs(num1[i] - num2[i]);
      }
    }
  }
  return count;
}

console.log(matchUp([1, 2, 3], [2, 3, 10]));
console.log(matchUp([1, 2, 3], [2, 3, 5]));
console.log(matchUp([1, 2, 3], [2, 3, 3]));
