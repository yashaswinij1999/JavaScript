function isEverywhere(nums, val) {
  // Iterate through the array, skipping the last element
  for (let i = 0; i < nums.length - 1; i++) {
    // Check if the current or next element matches the value
    if (nums[i] !== val && nums[i + 1] !== val) {
      return false; // Value is not everywhere
    }
  }
  return true; // Value is everywhere
}

// Test cases
console.log(isEverywhere([1, 2, 1, 3], 1)); // Output: true
console.log(isEverywhere([1, 2, 1, 3], 2)); // Output: false
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // Output: false
