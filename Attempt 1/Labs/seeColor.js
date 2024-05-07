function seeColor(s) {
  str = "";

  if (s.startsWith("blue")) {
    return "blue";
  } else if (s.startsWith("red")) {
    return "red";
  } else {
    return s;
  }
}
console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
