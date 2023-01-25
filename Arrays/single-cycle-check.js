/*
Single Cycle Check
  You're given an array of integers where each integer represents a jump of its
  value in the array. For instance, the integer 2 represents a jump
  of two indices forward in the array; the integer -3 represents a
  jump of three indices backward in the array.

  If a jump spills past the array's bounds, it wraps over to the other side. For
  instance, a jump of -1 at index 0 brings us to the last index in
  the array. Similarly, a jump of 1 at the last index in the array brings us to
  index 0.

  Write a function that returns a boolean representing whether the jumps in the
  array form a single cycle. A single cycle occurs if, starting at any index in
  the array and following the jumps, every element in the array is visited
  exactly once before landing back on the starting index.

Sample Input
array = [2, 3, 1, -4, -4, 2]

Sample Output
true

 */


//O(N)Time, O(1) Space, n is the input array length
function hasSingleCycle(array) {
    // hash table to store if the target has been visited,
    // note the first index must be visited twice to show the te cycle ends in index 0.
    let check = new Map();
    array.map((value,index)=>{
        check[index] = {
            'Visited': 0
        }
    })
    let currIndex = 0;
    while (check[currIndex]['Visited'] == 0 || (check[currIndex]['Visited'] == 1 && currIndex ==0)) {
        check[currIndex]['Visited'] += 1
        currIndex = targetIndex(currIndex,array[currIndex],array.length)
    }
    //check if the cycle ends in index 0
    if (check[0]['Visited'] !== 2) {
        return false
    }
    //check if all indexes are visited
    for (const [index, value] of Object.entries(check)) {
        if (value['Visited'] == 0) {
            return false
        }
    }

    return true
}
//helper function to determine the next target index number
function targetIndex(currIndex, value, arrLength){
    let result;
    if (value <= 0 && value >= -arrLength) {
        result = currIndex + value + arrLength
    } else if (value < -arrLength) {
        value = value % arrLength
        result = currIndex + value + arrLength
    } else if (value > 0) {
        result = currIndex + value
    }

    if (result < arrLength) {
        return result
    } else {
        return result % arrLength
    }
}

let test = {
    "array": [1, 2, 3, 4, -2, 3, 7, 8, -26]
}
console.log(hasSingleCycle(test.array))