function wordsWithoutList(arr, int) {
  const filter = arr.filter((el) => el.length !== int);
  return filter;
}

console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 1));
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 3));
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 4));
