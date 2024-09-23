const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min_index = i;
    let temp_min_element = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    array[i] = array[min_index];
    array[min_index] = temp_min_element;
  }
  return array;
}

console.log(selectionSort(numbers));
