/* 
Find Three Largest Numbers
Write a function that takes in an array of at least three integers and, without sorting the input array,
returns a sorted array of the three largest integers in the input array.
The function should return duplicate integers if necessary; for example, it should return
[10, 10, 12] for an input array of [10, 5, 9, 10, 12] .

Sample Input
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Sample Output
[18, 141, 541]
  
*/
function findThreeLargestNumbers(array) {
    // Write your code here.
    let output = [array[0]];
    array[1] >= output[0] ? output.push(array[1]) : output.unshift(array[1]);
    if (array[2] >= output[1]) {
      output.push(array[2])
    } else if (array[2] < output[1] && array[2] >= output[0]) {
      output.splice(1,0,array[2])
    } else if (array[2] < output[0]) {
      output.unshift(array[2])
    }
    
    if (array.length > 3) {
    for (let i = 3; i < array.length; i++){
     if (array[i] >= output[2]) {
       output.shift();
       output.push(array[i]);
     } else if (array[i] < output[2] && array[i]>= output[1]) {
       output.shift();
       output.splice(1,0,array[i]);
     } else if (array[i] < output[1] && array[i]>= output[0]) {
       output.shift();
       output.unshift(array[i]);
     }
    }
    }
    return output;
  }
  