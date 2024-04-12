function haveThree(arr) {
  let count = 0;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 3) {
      count++;
    }
    i++;
  }

  if (count === 3) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(haveThree([3, 1, 3, 1, 3]));
console.log(haveThree([3, 1, 3, 3]));
console.log(haveThree([3, 4, 3, 3, 4]));
