function fizzArray(num) {
  arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(fizzArray(4));
console.log(fizzArray(1));
console.log(fizzArray(10));
