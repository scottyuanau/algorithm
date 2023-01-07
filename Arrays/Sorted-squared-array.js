
/*
Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
Sample Input
array = [1, 2, 3, 5, 6, 8, 9] 

Sample Output
[1, 4, 9, 25, 36, 64, 81]

*/

//O(n)t, O(n)s
function sortedSquaredArray(array) {
  // Write your code here
  let result = [];
  let left = 0;
  let right = array.length - left - 1;
  while (left <= right){
    if(Math.abs(array[left]) <= Math.abs(array[right])) {
      result.push(Math.pow(array[right],2))
      right -= 1;
    } else {
      result.push(Math.pow(array[left],2))
      left += 1;
    }
  }
  //reverse the result
  let reversedResult = []
  for (let i = result.length - 1; i >= 0; i--) {
    reversedResult.push(result[i]);
  }
  return reversedResult;
}
