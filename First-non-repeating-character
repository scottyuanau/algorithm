/*
First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's !rst non-repeating character.
The !rst non-repeating character is the !rst character in a string that occurs only once.
If the input string doesn't have any non-repeating characters, your function should return -1 .
Sample Input
string = "abcdcaf" Sample Output
  1 // The first non-repeating character is "b" and is found at index 1.
*/

//O(n)
function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let hashTable = new Map();
  for (let i = 0; i < string.length; i++) {
    if (!hashTable.has(string[i])) {
      hashTable.set(string[i],1)
    } else if (hashTable.has(string[i])){
      hashTable.set(string[i], hashTable.get(string[i])+1)
    }
  }
  
  for (let [key,value] of hashTable) {
    if (value === 1) {
      return string.split('').indexOf(key)
    }
  }

  return -1
}
