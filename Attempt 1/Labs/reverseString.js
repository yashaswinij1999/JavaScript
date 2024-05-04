function reverseString(str) {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

console.log(reverseString("Javascript"));
console.log(reverseString("Program "));
console.log(reverseString("result "));
