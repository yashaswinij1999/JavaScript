function frontBack(str) {
  s = str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
  return s;
}

console.log(frontBack("ab"));
console.log(frontBack("code"));
console.log(frontBack("yashaswini"));
