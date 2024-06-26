function deFront(s) {
  let str = "";

  if (s[0] === "a" && s[1] === "b") {
    return s;
  } else if (s[0] === "a" && s[1] !== "b") {
    return s[0] + s.slice(2);
  } else if (s[0] !== "a" && s[1] === "b") {
    return s.slice(1);
  } else {
    return s.slice(2);
  }
}
console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));
