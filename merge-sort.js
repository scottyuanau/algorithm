//this version uses the shift method, which is O(N2) operation.
// function merge(leftArr, rightArr) {
//     let resultArr=[];
//     while (leftArr.length && rightArr.length) {
//         if(leftArr[0]>=rightArr[0]){
//             resultArr.push(rightArr.shift());
//         } else {
//             resultArr.push(leftArr.shift());
//         }

//     }
//     return [...resultArr,...leftArr,...rightArr];
// }

//the following code avoids shift method, which is O(N) operation.
function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < leftArr.length && rightIndex < rightArr.length)
  if (leftArr[leftIndex] <= rightArr[rightIndex]){
    result.push(leftArr[leftIndex])
    leftIndex += 1
  } else {
    result.push(rightArr[rightIndex])
    rightIndex += 1
  }
  //push remainings into the result if right arr has left over
  if(leftIndex == leftArr.length && rightIndex < rightArr.length) {
    for(let i = rightIndex; i < rightArr.length; i++) {
      result.push(rightArr[i])
    }
  }
  //push remainings into the result if left arr has left over
  if(rightIndex == rightArr.length && leftIndex < leftArr.length) {
    for(let i = leftIndex; i < leftArr.length; i++) {
      result.push(leftArr[i])
    }
  }
  return result;
}

function mergeSort(arr) {
   if (arr.length <= 1){
    return arr;
   } 
   let mid = Math.floor(arr.length/2); 
   let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
   

}
console.log(mergeSort([
    1,   2,    2,  3,   3,
    4,   7,   10,  6,  12,
   43,  54,    6, 65, 134,
  845, 214, 4542
]));