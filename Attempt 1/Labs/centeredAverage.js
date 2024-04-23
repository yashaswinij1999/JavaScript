function centeredAverage(arr) {
  const sort = arr.sort((a, b) => a - b);
  const sortedArr = sort.slice(1, sort.length - 1);

  const totalSum = sortedArr.reduce((total, num) => {
    return total + num;
  });

  const average = Math.floor(totalSum / sortedArr.length);
  console.log(average);
}

centeredAverage([1, 2, 3, 4, 100]);
centeredAverage([1, 1, 5, 5, 10, 8, 7]);
centeredAverage([10, 4, 2, 4, 2, 0]);
