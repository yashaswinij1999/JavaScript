function make_ends(arr) {
  const newArr = [arr[0], arr[arr.length - 1]];
  return newArr;
}
console.log(make_ends([1, 2, 3]));
console.log(make_ends([1, 2, 3, 4]));
console.log(make_ends([7, 4, 6, 2]));
