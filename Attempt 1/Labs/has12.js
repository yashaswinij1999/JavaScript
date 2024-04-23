function has12(arr) {
  if (arr.includes(1)) {
    if (arr.includes(2)) {
      return true;
    }
  }
  return false;
}

console.log(has12([1, 3, 2]));
console.log(has12([3, 1, 2]));
console.log(has12([3, 1, 4, 5, 2]));
console.log(has12([3, 8, 5, 1]));
console.log(has12([1, 3, 4, 5]));
