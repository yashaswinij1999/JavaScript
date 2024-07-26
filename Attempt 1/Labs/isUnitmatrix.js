function isUnitmatrix(a) {
  let firstRow = a[0];
  let secondRow = a[1];
  let final = [...firstRow, ...secondRow];

  for (let i = 0; i < final.length; i++) {
    if (final[0] !== final[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  isUnitmatrix([
    [1, 1, 1],
    [1, 1, 1],
  ])
);
console.log(
  isUnitmatrix([
    [1, 2, 1],
    [2, 1, 1],
  ])
);
