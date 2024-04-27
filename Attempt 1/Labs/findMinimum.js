function findMinimum(arr) {
  let min = arr[0];

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(findMinimum([123, 66, 77, 333, 555]));
