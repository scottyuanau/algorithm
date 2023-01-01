function range(num) {
  let result=[];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result
}

function isPrime(num) {
  let check = true;
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num%i === 0) {
      check = false;
    }
  }
  return check;
}
console.log(range(1500).filter((item)=>isPrime(item)));
