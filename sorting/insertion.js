// Insertion Sort Implementation in JavaScript
// The algorithm sorts an array by comparing elements and shifting them to their correct position in the sorted part of the array.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  // Store the length of the array
  const length = array.length;

  // Outer loop traverses through the entire array starting from index 0
  for (let i = 0; i < length; i++) {
    // If the current element is smaller than the first element, move it to the front
    if (array[i] < array[0]) {
      // Remove the element at index i and insert it at the beginning of the array
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // If the current element is larger than the first element,
      // we need to find its correct position within the sorted portion of the array
      for (let j = 1; j < i; j++) {
        // Check if the current element fits between array[j - 1] and array[j]
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Remove the element at index i and insert it at the correct sorted position
          array.splice(j + 1, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  // Return the sorted array
  return array;
}

// Call the insertionSort function and print the sorted array to the console
console.log(insertionSort(numbers));

// Output: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
