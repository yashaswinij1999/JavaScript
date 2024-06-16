function shareDigit(n1, n2) {
  isDigit = true;

  while (n1 > 0) {
    let r1 = n1 % 10;
    n1 = Math.floor(n1 / 10);

    while (n2 > 0) {
      let r2 = n2 % 10;
      n2 = Math.floor(n2 / 10);

      if (r1 === r2) {
        return isDigit;
      }
    }
  }
  return (isDigit = false);
}
console.log(shareDigit(12, 23));
console.log(shareDigit(12, 43));
console.log(shareDigit(12, 44));
