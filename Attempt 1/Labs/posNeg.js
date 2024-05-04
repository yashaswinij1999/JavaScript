function posNeg(a, b, val) {
  if (a > 0 && b < 0 && val === false) {
    return true;
  } else if (a < 0 && b > 0 && val === false) {
    return true;
  } else if (a < 0 && b < 0 && val === true) {
    return true;
  }
  return false;
}
console.log(posNeg(1, -1, false));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));
console.log(posNeg(4, -5, true));
