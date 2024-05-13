function removeItems(arr, int) {
  const items = arr.filter((el) => {
    return el.length < int;
  });
  return items;
}

console.log(
  removeItems(
    [
      "Computer",
      "Laptop",
      "Recorder",
      "Television",
      "bottle",
      "pen",
      "pencil",
      "Chip",
      "mouse",
    ],
    5
  )
);

console.log(removeItems(["Ram", "krish", "roop", "nihar"], 4));
