/*
Three Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should !nd all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
If no three numbers sum up to the target sum, the function should return an empty array.
Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6] targetSum = 0
Sample Output
 [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/


//O(N2)Time, O(n)Space
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a,b)=>a-b);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
      let test = num1 + array[leftIndex]+array[rightIndex]
      if ( test === targetSum) {
        result.push([num1,array[leftIndex],array[rightIndex]])
        leftIndex += 1
        rightIndex -= 1
      } else if (test > targetSum) {
        rightIndex -= 1
      } else if (test < targetSum) {
        leftIndex += 1
      }

      
      }
    
}
 
  return result;
}
