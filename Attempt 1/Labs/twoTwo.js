function twoTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      // Check if the current '2' has no neighbor that is also '2'
      if (
        (i > 0 && arr[i - 1] === 2) ||
        (i < arr.length - 1 && arr[i + 1] === 2)
      ) {
        continue; // '2' is properly paired
      } else {
        return false; // '2' is not properly paired
      }
    }
  }
  return true; // All '2's are properly paired
}

console.log(twoTwo([4, 2, 2, 3]));
console.log(twoTwo([2, 2, 4]));
console.log(twoTwo([2, 2, 4, 2]));
