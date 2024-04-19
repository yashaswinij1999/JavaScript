function either24(arr) {
  if (arr.includes(2) && arr.includes(4)) {
    return false;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === 2 || arr[i] === 4) {
        if (arr[i] === arr[i + 1]) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(either24([4, 4, 1, 2, 2]));
console.log(either24([1, 2, 2]));
console.log(either24([4, 4, 1]));
console.log(either24([1, 5, 9, 4, 4, 2, 2]));
