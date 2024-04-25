function scoresIncreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(scoresIncreasing([1, 3, 4]));
console.log(scoresIncreasing([1, 3, 2]));
console.log(scoresIncreasing([1, 1, 4]));
