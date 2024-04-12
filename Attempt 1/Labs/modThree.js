function modThree(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i + 1] % 2 && arr[i + 2] === 0) {
        return true;
      }
    } else if (arr[i] !== 0) {
      if (arr[i + 1] % 2 && arr[i + 2] !== 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(modThree([2, 1, 3, 5]));
console.log(modThree([2, 1, 2, 5]));
console.log(modThree([2, 4, 2, 5]));
