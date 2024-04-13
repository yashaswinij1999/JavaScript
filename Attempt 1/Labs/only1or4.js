function only1or4(arr) {
  for (let num of arr) {
    if (num !== 1 && num !== 4) {
      return false;
    }
  }
  return true;
}

console.log(only1or4([1, 4, 1, 4]));
console.log(only1or4([1, 4, 2, 4]));
