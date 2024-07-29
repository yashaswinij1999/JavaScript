function addMatrices(A, B) {
  let sum = [];

  for (let i = 0; i < A.length; i++) {
    sum[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      sum[i][j] = A[i][j] + B[i][j];
    }
  }

  return sum;
}
console.log(
  addMatrices(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 5, 6],
      [4, 5, 7],
      [3, 2, 1],
    ]
  )
);
