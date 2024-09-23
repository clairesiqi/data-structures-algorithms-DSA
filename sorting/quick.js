// Quick Sort Implementation in JavaScript
// Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element,
// partitioning the array around that pivot, and recursively sorting the sub-arrays.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length; // Store the length of the array
  let pivot; // This will hold the index of the pivot element
  let partitionIndex; // Index where the array is partitioned around the pivot

  // Base case: If the left index is less than the right index, the array can still be sorted
  if (left < right) {
    pivot = right; // Choose the last element as the pivot
    partitionIndex = partition(array, pivot, left, right); // Partition the array

    // Recursively sort elements on the left of the pivot
    quickSort(array, left, partitionIndex - 1);

    // Recursively sort elements on the right of the pivot
    quickSort(array, partitionIndex + 1, right);
  }
  return array; // Return the sorted array
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]; // Get the value of the pivot element
  let partitionIndex = left; // Partition index starts at the left boundary

  // Iterate through the array and move elements smaller than the pivot to the left
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex); // Swap the current element with the partition index
      partitionIndex++; // Move the partition index to the right
    }
  }
  // Swap the pivot element with the element at the partition index to place the pivot in its correct position
  swap(array, right, partitionIndex);
  return partitionIndex; // Return the partition index
}

function swap(array, firstIndex, secondIndex) {
  // Helper function to swap two elements in the array
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Call quickSort with the full array and the initial left and right boundaries
quickSort(numbers, 0, numbers.length - 1);

// Print the sorted array to the console
console.log(numbers);

// Output: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
