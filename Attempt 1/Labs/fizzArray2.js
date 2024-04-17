function fizzArray2(num) {
  const str = [];

  for (let i = 0; i < num; i++) {
    let s = "" + i;
    str.push(s);
  }
  return str;
}

console.log(fizzArray2(4));
console.log(fizzArray2(10));
console.log(fizzArray2(2));
