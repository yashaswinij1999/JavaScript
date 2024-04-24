function unlucky1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 1) {
      if (arr[i + 1] === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));
