// Merge Sort Implementation in JavaScript
// The merge sort algorithm works by recursively splitting an array into halves,
// sorting each half, and then merging the sorted halves back together.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  // Base case: Arrays with only one element are already sorted
  if (array.length === 1) {
    return array;
  }

  // Split the array into two halves: left and right
  const length = array.length;
  const middle = Math.floor(length / 2); // Find the middle index
  const left = array.slice(0, middle); // Left half of the array
  const right = array.slice(middle); // Right half of the array

  // Recursively split and merge the arrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = []; // Array to store the merged result
  let leftIndex = 0; // Pointer for the left array
  let rightIndex = 0; // Pointer for the right array

  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // If left element is smaller, push it to the result array
      result.push(left[leftIndex]);
      leftIndex++; // Move the left pointer to the next element
    } else {
      // If right element is smaller, push it to the result array
      result.push(right[rightIndex]);
      rightIndex++; // Move the right pointer to the next element
    }
  }

  // After the while loop, one of the arrays may still have remaining elements.
  // Concatenate these remaining elements into the result array.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Call mergeSort on the input array and store the result
const answer = mergeSort(numbers);

// Print the sorted array to the console
console.log(answer);

// Output: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
