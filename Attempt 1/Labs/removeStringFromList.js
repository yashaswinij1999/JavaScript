function removeStringFromList(str, n) {
  const result = str.filter((el) => el.length < n);
  console.log(result);
}
removeStringFromList(["Book", "Pencil", "Pen", "Sharpner", "Eraser"], 6);
removeStringFromList(["mango", "apple", "grapes", "tomato"], 6);
