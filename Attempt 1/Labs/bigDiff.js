function bigDiff(arr) {
  let max = 0;
  let min = arr[0];

  for (let el of arr) {
    if (el > max) {
      max = el;
    } else if (el < min) {
      min = el;
    }
  }
  return max - min;
}

console.log(bigDiff([10, 3, 5, 6]));
console.log(bigDiff([7, 2, 10, 9]));
console.log(bigDiff([2, 10, 7, 2]));
