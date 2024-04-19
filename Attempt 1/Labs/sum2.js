function sum2(arr) {
  let sum = 0;

  if (arr.length >= 2) {
    sum = arr[0] + arr[1];
    return sum;
  } else {
    return arr[0];
  }
}
console.log(sum2([1, 2, 3]));
console.log(sum2([1, 1]));
console.log(sum2([1, 1, 1, 1]));
