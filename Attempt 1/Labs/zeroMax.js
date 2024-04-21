function zeroMax(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] === 0) {
      let maxOdd = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] % 2 !== 0 && arr[j] > maxOdd) {
          maxOdd = arr[j];
        }
      }
      arr[i] = maxOdd;
    }
  }
  return arr;
}

console.log(zeroMax([0, 5, 0, 3]));
