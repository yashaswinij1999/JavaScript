function AnthaksharyOfWords(str) {
  if (str.length === 0) return [];

  let reArrangeArray = [];
  let used = new Set();
  let currentElement = str[0];

  reArrangeArray.push(currentElement);
  used.add(currentElement);

  while (reArrangeArray.length < str.length) {
    const lastChar = currentElement.slice(-1).toLowerCase();
    let found = false;

    for (let i = 0; i < str.length; i++) {
      if (!used.has[str[i]] && str[i][0].toLowerCase() === lastChar) {
        reArrangeArray.push(str[i]);
        used.add(str[i]);
        currentElement = str[i];
        found = true;
        break;
      }
    }

    if (!found) break;
  }
  return reArrangeArray;
}
console.log(AnthaksharyOfWords(["Java", "excel", "android", "logo", "dbase"]));
