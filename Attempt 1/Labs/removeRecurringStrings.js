function removeRecurringStrings(str) {
  const duplicate = str.filter((el, index, str) => {
    return str.indexOf(el) === index;
  });
  return duplicate;
}
console.log(
  removeRecurringStrings([
    "Apple",
    "Orange",
    "Mango",
    "Apple",
    "Apple",
    "Apple",
    "Grapes",
  ])
);
