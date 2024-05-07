function startHi(str) {
  if (str.startsWith("hi")) {
    return true;
  } else {
    return false;
  }
}
console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
