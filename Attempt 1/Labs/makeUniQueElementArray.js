function makeUniQueElementArray(arr) {
  let uniqueArr = [];

  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
}

console.log(makeUniQueElementArray([1, 2, 4, 3, 2, 5, 6, 5]));
