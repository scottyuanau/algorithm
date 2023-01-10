/*
Monotonic Array
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
Note that empty arrays and arrays of one element are monotonic.
Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Sample Output
true
*/

//O(n)Time, O(1)space
function isMonotonic(array) {
  // Write your code here.

  //1. find the trend of the array
  let trend = 'equal';
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i+1]) {
      trend = 'increase'
      break
    } else if (array[i] > array[i+1]) {
      trend = 'decrease'
      break
    }
    
  }

  //2. check the array if follows the trend
  if (trend === 'equal') {
    return true
  } else if (trend === 'increase') {
    for (let i = 0; i <array.length-1; i++) {
      if (array[i] > array[i+1]) {
        return false
      }
    }
    return true
  } else if (trend === 'decrease') {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i+1]) {
        return false
      }
    }
    return true
  }
  
}
