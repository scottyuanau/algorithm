/*
Powerset
Write a function that takes in an array of unique integers and returns its powerset.
The powerset P(X) of a set X is the set of all subsets of X . For example, the powerset of [1,2] is [[], [1], [2], [1,2]] .
Note that the sets in the powerset do not need to be in any particular order.
Sample Input
array = [1, 2, 3] 

Sample Output
[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/


//O(n*2^n) Time, O(n*2^n)space. N is the length of the input array
function powerset(array) {
  // Write your code here.
  let result = [[]]
  array.map((number)=>{
    result.map((subArr)=>{
      let newArr = subArr.concat(number) 
      //concat method doesn't mutate original array
      result.push(newArr)
    })
  })
  return result
}

//Recusive method
function powersetRecusive(array) {
  // Write your code here.
  if (array.length == 0) {
    return [[]]
  } 
  let lastValue = array.pop();
  // must set up a new arr to recursively store the value (call stack)
  let newArr = powerset(array)
  return newArr.concat(newArr.map((item)=>item.concat(lastValue)))
  
}
