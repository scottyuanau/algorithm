function merge(leftArr, rightArr) {
    let resultArr=[];
    while (leftArr.length && rightArr.length) {
        if(leftArr[0]>=rightArr[0]){
            resultArr.push(rightArr.shift());
        } else {
            resultArr.push(leftArr.shift());
        }

    }
    return [...resultArr,...leftArr,...rightArr];
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