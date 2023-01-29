/*
One Edit
You're given two strings stringOne and stringTwo . Write a function that determines if these two strings can be made equal using only one edit.
There are 3 possible edits:
Replace: One character in one string is swapped for a di!erent character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. If the strings are the
same, your function should return true.
Sample Input
stringOne = "hello"
stringTwo = "hollo"
Sample Output
True
*/

//O(n)Time, O(1)Space
function oneEdit(stringOne, stringTwo) {
  // Write your code here.
  if (Math.abs(stringOne.length - stringTwo.length) >= 2) {
    return false
  } else if (stringOne.length == stringTwo.length) {
    let count = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        count += 1;
      }
    }
    if (count >= 2) {
      return false
    } else {
      return true
    }
  } else {
    let longStr;
    let shortStr;
    let [i1,i2,count] = [0,0,0];
    if (stringOne.length - stringTwo.length > 0) {
      [longStr,shortStr] = [stringOne, stringTwo]
    } else {
      [longStr,shortStr] = [stringTwo, stringOne]
    }
     while (i1 < longStr.length) {
       if (longStr[i1] !== shortStr[i2]) {
         count+= 1
         i1 += 1
       } else {
         i1 +=1
         i2 +=1
       }
     }
    if (count > 1) {
      return false
    } else {
      return true
    }
  }
  
}
