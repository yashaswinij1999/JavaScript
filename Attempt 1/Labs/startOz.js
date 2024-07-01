function startOz(str) {
  if (str[0] === "o" && str[1] === "z") {
    return "oz";
  } else if (str[0] === "o") {
    return "o";
  } else if (str[1] === "z") {
    return "z";
  }
  return str;
}
console.log(startOz("ozymandias"));
console.log(startOz("bzoo "));
console.log(startOz("oxx"));
console.log(startOz("Pen"));
