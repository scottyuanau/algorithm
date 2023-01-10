/*

Smallest Difference

  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest
  difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]

 */
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a,b)=>a-b);
    arrayTwo.sort((a,b)=>a-b);
    let index1 = 0;
    let index2 = 0;
    let result = {};
    result['min'] = Number.POSITIVE_INFINITY
    while(index1 < arrayOne.length && index2 < arrayTwo.length) {
        let diff = Math.abs(arrayOne[index1] - arrayTwo[index2])
        if (diff == 0) {
            result['num1'] = arrayOne[index1]
            result['num2'] = arrayTwo[index2]
            result['min'] = 0
            return [result['num1'],result['num2']]
        } else {
            if (arrayOne[index1] < arrayTwo[index2]) {
                index1 += 1
                if (Math.abs(arrayOne[index1] - arrayTwo[index2]) < result['min']) {
                    result['num1'] = arrayOne[index1]
                    result['num2'] = arrayTwo[index2]
                    result['min'] = Math.abs(arrayOne[index1] - arrayTwo[index2])
                }
            } else {
                index2 += 1
                if (Math.abs(arrayOne[index1] - arrayTwo[index2]) < result['min']) {
                    result['num1'] = arrayOne[index1]
                    result['num2'] = arrayTwo[index2]
                    result['min'] = Math.abs(arrayOne[index1] - arrayTwo[index2])
                }
            }
        }
    }
    return [result.num1,result.num2]
}
//test
let {arrayOne,arrayTwo} = {
    "arrayOne": [-1, 5, 10, 20, 28, 3],
    "arrayTwo": [26, 134, 135, 15, 17]
}
console.log(smallestDifference(arrayOne,arrayTwo))