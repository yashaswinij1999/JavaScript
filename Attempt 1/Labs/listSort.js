function listSort(str) {
  return str.sort();
}
// console.log(listSort(["Word", "Java", "Computer", "Object", "Software"]));

function remove(str) {
  let count = 0;
  let duplicate = 0;

  for (let i = 0; i < str.length; i++) {
    count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count > 1) {
      duplicate = str[i];
    }
  }
  return duplicate;
}

console.log(remove([1, 2, 3, 2, 1, 2]));
