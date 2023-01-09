/*
First Duplicate Value
Given an array of integers between 1 and n , inclusive, where n is the length of the array, write a function that returns the !rst integer that appears more than once (when the array is read from left to right).
In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose !rst duplicate value has the minimum index.
If no integer appears more than once, your function should return -1 . Note that you're allowed to mutate the input array.
Sample Input #1
array = [2, 1, 5, 2, 3, 3, 4]

Sample Output
2
*/

//O(n)time, O(1)space
function firstDuplicateValue(array) {
  // Write your code here.
  let compareArr = [];
  for (let i = 0; i < array.length; i++) {
    if (compareArr.indexOf(array[i]) >= 0) {
      return array[i];
    } else {
      compareArr.push(array[i])
    }
  }
  return -1;
}
