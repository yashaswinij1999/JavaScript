function reverseArray(arr) {
  let a = 0;
  let newArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[a] = arr[i];
    a++;
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3, 7, 4]));
