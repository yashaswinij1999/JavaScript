function makeChocolate(small, big, goal) {
  // Calculate the maximum amount of chocolate we can use from big bars
  let maxBigBars = Math.floor(goal / 5);
  console.log(maxBigBars);

  // Use only as many big bars as we have available
  let usedBigBars = Math.min(maxBigBars, big);
  console.log(usedBigBars);

  // Calculate the remaining weight to be fulfilled by small bars
  let remainingWeight = goal - usedBigBars * 5;
  console.log(remainingWeight);

  // Check if we have enough small bars to fulfill the remaining weight
  if (remainingWeight <= small) {
    return remainingWeight;
  } else {
    return -1;
  }
}

// Sample Input and Output
console.log(makeChocolate(4, 1, 9)); // Output: 4
// console.log(makeChocolate(4, 1, 10)); // Output: -1
// console.log(makeChocolate(4, 1, 7)); // Output: 2
