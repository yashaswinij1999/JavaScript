function endsLy(str) {
  if (str.length < 2) {
    return false;
  } else if (str.slice(str.length - 2, str.length) !== "ly") {
    return false;
  }
  return true;
}

console.log(endsLy("yashu"));
console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));
