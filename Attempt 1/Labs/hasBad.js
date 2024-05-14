function hasBad(str) {
  if (str.slice(0, 3) === "bad" || str.slice(1, 4) === "bad") {
    return true;
  }
  return false;
}
console.log(hasBad("badxx"));
console.log(hasBad("xbadxx"));
console.log(hasBad("xxbadxx"));
