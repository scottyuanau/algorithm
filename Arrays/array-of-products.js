/*
Array of Products

  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other than input[i].

Note that you're expected to solve this problem without using division.
Sample Input
array = [5, 1, 4, 2]

Sample Output
[8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

 */

function arrayOfProducts(array) {
    // Write your code here.
    let result = 1;
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result = 1
            for (let right = array.length - 1; right > i; right--) {
                result *= array[right];
            }
            output.push(result)
        } else if (i > 0 && i < array.length - 1) {
            result = 1
            for (let left = 0; left < i; left++) {
                result *= array[left];
            }
            for (let right = array.length -1; right > i; right--) {
                result *= array[right];
            }
            output.push(result)
        } else if (i === array.length - 1) {
            result = 1
            for (let left = 0; left < i; left++) {
                result *= array[left];
            }
            output.push(result)
        }


    }
    return output

}

//O(n2)Time, O(n2)Space
function arrayOfProductsOn2(array) {
    // Write your code here.
    let helperArr = [...Array(array.length).keys()]
    let result = []
    for (let i = 0; i < array.length; i++) {
        let sum = 1
        helperArr.filter((item)=>item!==i).map((index)=>sum *= array[index])
        result.push(sum)
    }
    return result

}

array = [5, 1, 4, 2]

console.log(arrayOfProducts(array))
