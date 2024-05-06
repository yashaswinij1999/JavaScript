function noTriples(arr) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 1, 2, 2, 2, 1]));
