function sortListAccordingToStringLength(arr) {
  let sortArr = [];
  let min = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(
  sortListAccordingToStringLength(["Software", "Java", "Object", "Programming"])
);
console.log(sortListAccordingToStringLength(["grapes", "apple"]));
