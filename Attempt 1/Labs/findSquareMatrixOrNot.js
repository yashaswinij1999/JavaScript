function findSquareMatrixOrNot(a) {
  let row = a.length;
  let column = a[0].length;

  if (row === column) {
    return true;
  } else {
    return false;
  }
}
console.log(
  findSquareMatrixOrNot([
    [1, 2],
    [2, 5],
  ])
);
console.log(findSquareMatrixOrNot([[1, 2, 3], 4, 5, 6]));
console.log(
  findSquareMatrixOrNot([
    [1, 2, 8],
    [3, 4, 5],
  ])
);
