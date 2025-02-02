// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // *1
  // const aCharMap = charMap(stringA);
  // const bCharMap = charMap(stringB);
  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //   return false;
  // }
  // for (let char in aCharMap) {
  //   if (aCharMap[char] !== bCharMap[char]) {
  //     return false;
  //   }
  // }
  // return true;

  // *2
  return cleanedString(stringA) === cleanedString(stringB);
}

// *2
function cleanedString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// *1
// function charMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char]++ || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
