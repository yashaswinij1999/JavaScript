function fix23(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 2) {
      if (arr[i + 1] === 3) {
        arr[i + 1] = 0;
        return arr;
      } else {
        return arr;
      }
    }
  }
}

console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 3]));
console.log(fix23([1, 2, 1]));
