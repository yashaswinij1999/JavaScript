function numberOfOccurence(arr, word) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}
numberOfOccurence(
  ["Word", "Java", "Computer", "Object", "Software", "Computer"],
  "Computer"
);
