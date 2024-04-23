function evenOdd(arr) {
  const even = arr.filter((el) => el % 2 === 0);
  const odd = arr.filter((el) => el % 2 !== 0);
  const newArray = [...even, ...odd];
  return newArray;
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));
console.log(evenOdd([3, 3, 2]));
console.log(evenOdd([2, 2, 2]));
