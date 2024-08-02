function removeWordsHavingNoVowels(arr) {
  const removedVowels = arr.filter((el) => {
    return findVowels(el);
  });

  console.log(removedVowels);

  function findVowels(str) {
    for (let i = 0; i < str.length; i++) {
      let c = str[i];

      if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
        return true;
      }
    }
    return false;
  }
}
removeWordsHavingNoVowels([
  "book",
  "Pencil",
  "Pen",
  "Sharpner",
  "Eraser",
  "Myth",
]);
