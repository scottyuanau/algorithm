/*
Merge Overlapping Intervals
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.
Each interval interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.
Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and
[6, 7] are indeed overlapping.
Also note that the start of any particular interval will always be less than or
equal to the end of that interval.
Sample Input
intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
Sample Output
[[1,2],[3,8],[9,10]]
         
*/

//O(nlog(n))Time, O(n)space
function mergeOverlappingIntervals(array) {
  // Write your code here.
  let result=[];
  array.sort((a,b)=>a[0] - b[0]);
  result.push(array[0]);
  let min = array[0][0]
  let max = array[0][1]
  for (let i = 1; i<array.length; i++) {
    if(array[i][0] > max) {
      result.push(array[i])
      min = array[i][0]
      max = array[i][1]
    } else if (array[i][0] >= min && array[i][0] <= max && array[i][1] >= max) {
      result[result.length-1][1] = array[i][1]
      min = array[i][0]
      max = array[i][1]
    }
  }
  
  return result;
}
