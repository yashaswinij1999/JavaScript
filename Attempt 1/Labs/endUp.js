function endUp(str) {
  let s = "";
  let newString = "";

  if (str.length < 3) {
    newString = str.toUpperCase();
  } else {
    s = str.slice(str.length - 3, str.length).toUpperCase();
    newString = str.slice(0, str.length - 3) + s;
  }

  return newString;
}
console.log(endUp("hi there"));
console.log(endUp("hello"));
console.log(endUp("hi"));
