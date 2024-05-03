function hasTeen(val1, val2, val3) {
  const arr = [];
  arr.push(val1);
  arr.push(val2);
  arr.push(val3);

  for (let teen of arr) {
    if (teen >= 13 && teen <= 19) {
      return true;
    }
  }
  return false;
}

console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 13));
console.log(hasTeen(10, 10, 12));
