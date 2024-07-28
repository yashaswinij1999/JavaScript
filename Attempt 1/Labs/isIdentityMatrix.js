function isIdentityMatrix(a) {
  let first = a[0];
  let second = a[1];
  let third = a[2];

  if (first[0] === 1 && first[1] === 0 && first[2] === 0) {
    if (second[0] === 0 && second[1] === 1 && second[2] === 0) {
      if (third[0] === 0 && third[1] === 0 && third[2] === 1) {
        return true;
      }
    }
  }
  return false;
}
console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [2, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
