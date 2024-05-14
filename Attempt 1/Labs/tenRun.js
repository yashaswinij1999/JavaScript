function tenRun(arr) {
  let multiple = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      multiple = arr[i];
    } else if (multiple !== -1) {
      arr[i] = multiple;
    }
  }
  return arr;
}
console.log(tenRun([2, 10, 3, 4, 20, 5]));
console.log(tenRun([10, 1, 20, 2]));
console.log(tenRun([10, 1, 9, 20]));
