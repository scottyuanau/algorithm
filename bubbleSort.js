function bubbleSort(array) {
    // Write your code here.
    let exchanged = true;
    while (exchanged === true) {
      exchanged = false;
      for (let i = 0; i < array.length -1; i++){
        if (array[i] > array[i+1]) {
          let tmp = array[i+1];
          array[i+1] = array[i];
          array[i] = tmp;
          exchanged = true;
        } 
      }
    } ;
    return array;
  }
  
  console.log(bubbleSort([5,4,2,1,6]));