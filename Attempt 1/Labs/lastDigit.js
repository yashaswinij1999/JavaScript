function lastDigit(n1, n2) {
  r1 = n1 % 10;
  r2 = n2 % 10;

  if (r1 === r2) {
    return true;
  } else {
    return false;
  }
}

console.log(lastDigit(27, 57));
console.log(lastDigit(7, 17));
console.log(lastDigit(12, 21));
console.log(lastDigit(12, 4));
