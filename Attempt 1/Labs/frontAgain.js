function frontAgain(str) {
  let s = "";
  let firstIndex = str.slice(0, 2);
  let lastIndex = str.slice(str.length - 2, str.length);

  if (str.length < 2) {
    return false;
  } else if (str.length === 2) {
    return true;
  } else {
    if (firstIndex === lastIndex) {
      return true;
    }
  }
  return false;
}

console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));
