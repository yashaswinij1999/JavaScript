function backAround(s) {
  lastChar = s[s.length - 1];
  let str = lastChar + s + lastChar;
  return str;
}
console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
