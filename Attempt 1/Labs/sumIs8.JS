function sumIs8(arr) {
  let sum = 0;

  for (let val of arr) {
    if (val === 2) {
      sum += val;
    }
  }

  if (sum === 8) {
    return true;
  } else {
    return false;
  }
}

console.log(sumIs8([2, 3, 2, 2, 4, 2]));
console.log(sumIs8([2, 3, 2, 2, 4, 2, 2]));
console.log(sumIs8([1, 2, 3, 4]));
