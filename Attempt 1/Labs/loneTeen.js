function loneTeen(a, b) {
  if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
    return false;
  }
  return true;
}
console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));
