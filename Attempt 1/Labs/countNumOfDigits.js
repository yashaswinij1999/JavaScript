function countNumOfDigits(str) {
  let count = str.match(/\d/g);
  return count.length;
}
console.log(countNumOfDigits("19 th May 2021"));
