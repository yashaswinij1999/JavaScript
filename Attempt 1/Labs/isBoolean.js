function isBoolean(str) {
  if (str === "true" || str === "false") {
    return true;
  }
  return false;
}
console.log(isBoolean("Happy"));
