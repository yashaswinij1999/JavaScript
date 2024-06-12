function has77(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      if (arr[i + 1] === 7 || arr[i + 2] === 7) {
        return true;
      }
    }
  }
  return false;
}
console.log(has77([1, 7, 7]));
console.log(has77([1, 7, 1, 7]));
console.log(has77([1, 7, 1, 1, 7]));
