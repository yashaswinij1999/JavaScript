function post4(arr) {
  let result = 0;
  let newArr = [];

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 4) {
      result = i;
      break;
    }
  }

  if (result === arr.length - 1) {
    return arr;
  } else {
    newArr = arr.slice(result + 1, arr.length);
    return newArr;
  }
}

console.log(post4([2, 4, 1, 2]));
console.log(post4([4, 1, 4, 2]));
console.log(post4([4, 4, 1, 2, 3]));
console.log(post4([4, 1, 2, 3, 4]));
