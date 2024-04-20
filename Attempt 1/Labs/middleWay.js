function middleWay(a, b) {
  let c = [];
  c.push(a[1]);
  c.push(b[1]);
  return c;
}

console.log(middleWay([1, 2, 3], [4, 5, 6]));
console.log(middleWay([7, 7, 7], [3, 8, 0]));
console.log(middleWay([5, 2, 9], [1, 4, 5]));
