function copyEvens(arr, count) {
  let evenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (evenArr.length !== count) {
        evenArr.push(arr[i]);
      }
    }
  }
  return evenArr;
}

console.log(copyEvens([3, 2, 4, 5, 8], 2));
console.log(copyEvens([3, 2, 4, 5, 8], 3));
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3));
