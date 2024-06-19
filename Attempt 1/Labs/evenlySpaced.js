function evenlySpaced(a, b, c) {
  let large = 0;
  let medium = 0;
  let small = 0;
  val = "" + a + b + c;
  let n = 0;

  for (let i = 0; i < val.length; i++) {
    n = parseInt(val[i]);

    if (n >= a && n >= b && n >= c) {
      large = n;
    } else if (n <= a && n <= b && n <= c) {
      small = n;
    } else if ((n <= a && n >= b) || (n <= b && n >= c) || (n <= c && n >= a)) {
      medium = n;
    }
  }

  if (small - medium === medium - large) {
    return true;
  }
  return false;
}
console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 2));
console.log(evenlySpaced(4, 6, 3));
