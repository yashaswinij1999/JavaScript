function parrotTrouble(isTalking, val) {
  if ((isTalking === true && val < 7) || val > 20) {
    return true;
  }
  return false;
}
console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));
