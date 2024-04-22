function notAlone(arr, el) {
  let max = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === el) {
      if (arr[i - 1] >= 0 && arr[i + 1] >= 0) {
        if (arr[i - 1] > arr[i + 1]) {
          max = arr[i - 1];
        } else {
          max = arr[i + 1];
        }
      }
    }
    arr[i] = max;
  }
  return arr;
}

console.log(notAlone([1, 2, 3], 2));
console.log(notAlone([1, 2, 3, 2, 5, 2], 2));
console.log(notAlone([3, 4], 3));
