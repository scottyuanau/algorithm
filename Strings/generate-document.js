/*
  Generate Documents

  You're given a string of available characters and a string representing a
  document that you need to generate. Write a function that determines if you
  can generate the document using the available characters. If you can generate
  the document, your function should return true; otherwise, it
  should return false.

  You're only able to generate the document if the frequency of unique
  characters in the characters string is greater than or equal to the frequency
  of unique characters in the document string. For example, if you're given
  characters = "abcabc" and document = "aabbccc" you
  cannot generate the document because you're missing one c.

  The document that you need to create may contain any characters, including
  special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

Sample Input

characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"

Sample Output
true

 */


//O(m+n)Time | O(c)Space,
// where n is the number of characters,
// m is the length of the document,
// and c is the number of unique characters in the characters string
function generateDocument(characters, document) {
    // Write your code here.
    let hashTable = new Map();
    for (let i = 0; i < characters.length; i++) {
        if(!hashTable.has(characters[i])) {
            hashTable.set(characters[i], 1);
        } else if (hashTable.has(characters[i])) {
            hashTable.set(characters[i], hashTable.get(characters[i])+1)
        }
    }
    console.log(hashTable)
    for (let i = 0; i < document.length; i++) {
        if(!hashTable.has(document[i])) {
            return false
        } else if (hashTable.has(document[i]) && hashTable.get(document[i]) <= 0) {
            return false
        } else if (hashTable.has(document[i]) && hashTable.get(document[i]) > 0) {
            hashTable.set(document[i], hashTable.get(document[i])-1)
        }
    }
    return true;
}