function swapEnds(arr) {
  if (arr.length > 1) {
    let a = arr.shift();
    let b = arr.pop();

    arr.push(a);
    arr.unshift(b);
    console.log(arr);
  }
}

swapEnds([1, 2, 3, 4]);
swapEnds([1, 2, 3]);
swapEnds([8, 6, 7, 9, 5]);
