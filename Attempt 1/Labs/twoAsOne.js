function twoAsOne(a, b, c) {
  if (a === b + c || b === a + c || c === a + b) {
    return true;
  }
  return false;
}

console.log(twoAsOne(1, 2, 3));
console.log(twoAsOne(3, 1, 2));
console.log(twoAsOne(3, 2, 2));
