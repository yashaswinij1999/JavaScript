function removeDuplicates(arr) {
  s = new Set(arr);
  console.log(s);
}
removeDuplicates([
  "Computer",
  "Book",
  "Calculator",
  "Book",
  "Pencil",
  "pen",
  "bottles",
  "pen",
]);
removeDuplicates(["Pen", "Pencil", "mouse", "Pen"]);
