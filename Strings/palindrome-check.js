/* 
Palindrome Check
Write a function that takes in a non-empty string and that returns a boolean representing whether the
string is a palindrome.
A palindrome is defined as a string that's written the same forward and backward. Note that singlecharacter strings are palindromes.
Sample Input
string = "abcdcba"
Sample Output
true // it's written the same forward and backward

*/
//O(n)
function isPalindrome(string) {
  // Write your code here.
  let arr = string.split('')
  let result = true;
  let mid = Math.floor(arr.length /2);
  for (let left = 0; left < mid; left++) {
    let right = arr.length - left -1;
      if(arr[left] != arr[right]) {
        result = false;
      }
    
  }
  return result;
}
