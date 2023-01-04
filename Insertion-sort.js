//O(n2)
function insertionSort(array) {
  // Write your code here.
  for(let i = 0; i <array.length; i++) {
    for (let j = i; j>0 && array[j] < array[j-1];j--){
      let tmp = array[j];
      array[j] = array[j-1];
      array[j-1] = tmp
    }
  }
  
  
  return array;
}
