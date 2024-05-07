function icyHot(t1, t2) {
  if ((t1 < 0 && t2 > 100) || (t1 > 100 && t2 < 0)) {
    return true;
  }
  return false;
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));
