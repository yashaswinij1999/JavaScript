function sumOfElements(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5]));
console.log(sumOfElements([2, 2, 2]));
console.log(sumOfElements([12, 2, 3]));
