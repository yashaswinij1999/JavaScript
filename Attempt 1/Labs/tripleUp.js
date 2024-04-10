function tripleUp(arr) {
  let first = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    first = arr[i];

    if (arr[i] + 1 === arr[i + 1] && arr[i + 1] + 1 === arr[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(tripleUp([1, 4, 5, 6, 2]));
console.log(tripleUp([1, 2, 3]));
console.log(tripleUp([1, 2, 4]));
