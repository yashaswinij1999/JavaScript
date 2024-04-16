function array667(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] === 6 && arr[i + 1] === 6) || arr[i + 1] === 7) {
      count++;
    }
  }
  return count;
}

console.log(array667([6, 6, 2]));
console.log(array667([6, 6, 2, 6]));
console.log(array667([6, 7, 2, 6]));
