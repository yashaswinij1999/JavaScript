function atFirst(str) {
  if (str.length < 2) {
    return str + "@";
  } else if (str === 2) {
    return str;
  } else {
    return str.slice(0, 2);
  }
}

console.log(atFirst("hello"));
console.log(atFirst("hi"));
console.log(atFirst("h"));
