function biggerTwo(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
    sum2 = arr2[i];
  }
  if (sum1 > sum2) {
    return arr1;
  } else {
    return arr2;
  }
}
console.log(biggerTwo([1, 2], [3, 4]));
console.log(biggerTwo([3, 4], [1, 2]));
console.log(biggerTwo([1, 1], [1, 2]));
