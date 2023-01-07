//iterative approach

function binarySearch(array, target) {
    let left = 0;
    let right = array.length;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],33));

//recursive approach
function binarySearchR(array,target,left,right) {
    if (left > right) {
        return -1;
    } else {
    let mid = Math.floor((left+right)/2);
        if (array[mid]==target) {
            return mid;
        } else if (array[mid] < target) {
            return binarySearchR(array,target,mid+1,right);
        } else {
            return binarySearchR(array,target,left,mid-1);
        }

    }
}