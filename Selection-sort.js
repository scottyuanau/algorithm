//O(N2)
function selectionSort(array) {
  // Write your code here.

  for (let i = 0; i < array.length; i++){
    for (let j = i; j < array.length; j++){
      if (array[j] <= array[i]) {
      [array[i],array[j]] = [array[j],array[i]]
      }
    }
  }
  return array
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
