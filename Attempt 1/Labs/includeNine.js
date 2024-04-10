function includeNine(arr) {
  for (let i = 0; i < 4; i++) {
    if (arr[i] === 9) {
      return true;
    }
  }
  return false;
}

console.log(includeNine([1, 2, 3, 4, 5]));
console.log(includeNine([1, 2, 9, 3, 4]));
console.log(includeNine([1, 2, 3, 4, 9]));
