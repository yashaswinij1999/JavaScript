function scoreUp(answers, strAns) {
  let sum = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === strAns[i]) {
      sum += 4;
    } else {
      sum -= 1;
    }
  }
  return sum;
}
console.log(scoreUp(["a", "a", "b", "b"], ["a", "c", "b", "c"]));
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "c"]));
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "b"]));
