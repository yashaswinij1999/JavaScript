function mixStart(str) {
  let regex = /^[a-zA-Z]+$/;

  if (str.slice(0, 3) === "mix") {
    return true;
  } else if (str[0] >= "a" && str[0] <= "z" && str.slice(1, 3) === "ix") {
    return true;
  }
  return false;
}
console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));
