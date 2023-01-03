/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a
function that returns a new string obtained by shifting every letter in the input string by k positions in
the alphabet, where k is the key.
Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one
returns the letter a .
Sample Input
string = "xyz"
key = 2
Sample Output
"zab"

*/

function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let arr = string.split('');
    let result = arr.map((letter)=>{
      let char = letter.charCodeAt(0);
      if (key > 26) {
        key = key % 26
      }
      let converedChar = char + key;
      if (converedChar > 122) {
        converedChar -= 26
      }
      return String.fromCharCode(converedChar)
    })
    return result.join('')
  }