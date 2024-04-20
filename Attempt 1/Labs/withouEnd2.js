function withouEnd2(str) {
  let newString = "";

  if (str.length >= 3) {
    newString = str.slice(1, str.length - 1);
  }
  return newString;
}

console.log(withouEnd2("hello"));
console.log(withouEnd2("abc"));
console.log(withouEnd2("abcd"));
