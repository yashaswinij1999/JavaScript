function isSquare(num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}

console.log(isSquare(100));
console.log(isSquare(8));
console.log(isSquare(15));
console.log(isSquare(16));
