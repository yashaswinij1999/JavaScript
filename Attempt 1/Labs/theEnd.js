function theEnd(str, value) {
  if (value) {
    return str[0];
  }
  return str[str.length - 1];
}
console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("oh", true));
