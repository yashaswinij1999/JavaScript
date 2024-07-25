function stringX(str) {
  let first = str[0];
  let last = str[str.length - 1];
  let sub = str.slice(1, str.length - 1);
  let removeX = "";

  for (let i = 0; i < sub.length; i++) {
    if (sub[i] !== "x") {
      removeX = removeX + sub[i];
    }
  }
  console.log(first + removeX + last);
}
stringX("xxHxix");
stringX("abxxxcd");
stringX("xabxxxcdx");
