function without2(str) {
  if (str.length >= 4) {
    firstChar = str.slice(0, 2);
    secondChar = str.slice(str.length - 2, str.length);

    if (firstChar === secondChar) {
      return str.slice(2, str.length);
    } else {
      return str;
    }
  }
}
console.log(without2("HelloHe"));
console.log(without2("HelloHi"));
console.log(without2("HiHi"));
