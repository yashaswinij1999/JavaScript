function bubbleSort(arr) {
  const n = arr.length;

  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // Inner loop for each pass
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps occurred, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Test the bubbleSort function
const arr = [93, 46, 230, 27, 20, 15];
console.log("Original Array:", arr);

// Sort the array using bubble sort
bubbleSort(arr);

console.log("Sorted Array:", arr);
