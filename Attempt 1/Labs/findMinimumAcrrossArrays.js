function findMinimumAcrrossArrays(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  let minval = arr3[0];

  for (let num of arr3) {
    if (num < minval) {
      minval = num;
    }
  }
  return minval;
}
console.log(findMinimumAcrrossArrays([12, 34, 52, 13], [99, 10, 23, 42, 77]));
