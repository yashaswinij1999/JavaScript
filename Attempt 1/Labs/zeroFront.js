function zeroFront(arr) {
  const zeros = [];
  const nonZeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return [...zeros, ...nonZeros];
}

console.log(zeroFront([1, 0, 0, 1]));
console.log(zeroFront([0, 1, 2, 0, 1]));
console.log(zeroFront([1, 0]));
