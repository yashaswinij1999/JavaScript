function teaParty(tea, candy) {
  const bad = 0;
  const good = 1;
  const great = 2;

  if (tea >= 2 * candy || candy >= 2 * tea) {
    return great;
  } else if (tea >= 5 && candy >= 5) {
    return good;
  }
  return bad;
}
console.log(teaParty(6, 8));
console.log(teaParty(3, 8));
console.log(teaParty(20, 6));
