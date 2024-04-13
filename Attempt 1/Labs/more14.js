function more14(arr) {
  let oneCount = 0;
  let fourCount = 0;

  for (let num of arr) {
    if (num === 1) {
      oneCount = oneCount + 1;
    } else if (num === 4) {
      fourCount = fourCount + 1;
    }
  }

  if (oneCount > fourCount) {
    return true;
  } else {
    return false;
  }
}

console.log(more14([1, 4, 1]));
console.log(more14([1, 4, 1, 4]));
console.log(more14([1, 1]));
