function average(arr1, arr2) {
  const newArray = [...arr1, ...arr2];
  let sum = 0;

  for (let num of newArray) {
    sum += num;
  }

  return sum / newArray.length;
}
console.log(average([2, 4, 5, 6], [8, 0, 12, 5]));
console.log(average([8, 9, 6], [9, 5]));
