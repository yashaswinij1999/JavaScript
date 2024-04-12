function nTwice(str, n) {
  let s = "";

  s = str.substring(0, n) + str.substring(str.length - n, str.length);
  return s;
}

console.log(nTwice("Chocolate", 3));
console.log(nTwice("Hello", 2));
