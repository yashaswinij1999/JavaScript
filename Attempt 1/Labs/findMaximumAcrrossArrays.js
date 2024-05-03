function findMaximumAcrrossArrays(arr1, arr2) {
  let newArray = [...arr1, ...arr2];
  let max = Math.max(...newArray);
  console.log(max);
}
findMaximumAcrrossArrays([22, 55, 34, 67, 88], [32, 77, 666, 11]);
