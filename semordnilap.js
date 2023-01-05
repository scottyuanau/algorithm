/*
Semordnilap
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.
A semordnilap pair is de!ned as a set of di"erent strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".
The order of the returned pairs and the order of the strings within each pair does not matter.
Sample Input
words = ["diaper", "abc", "test", "cba", "repaid"] Sample Output
  [["diaper", "repaid"], ["abc", "cba"]]
*/

//O(m+n)
function semordnilap(words) {
  // Write your code here.
  let wordSet = new Map();
  words.map((word)=>{
    wordSet.set(word,word.split('').reverse().join(''));
  })
  let result=[];

  for (let [key,value] of wordSet) {
    if (words.indexOf(value) > words.indexOf(key)) { 
    result.push([key,value])
    }
  }
  
  return result;
}
