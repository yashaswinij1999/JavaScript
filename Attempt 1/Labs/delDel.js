function delDel(str) {
  const delString = str.slice(1, 4);
  let op = "";

  if (delString === "del") {
    op = str[0] + str.slice(4, str.length);
    return op;
  } else {
    return str;
  }
}

console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc"));
