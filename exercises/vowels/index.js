// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str, n = 0, count = 0) {
  // *1
  // if (n === str.length) {
  //   return count;
  // }
  // if (str[n].toLowerCase().match(/[aeiou]/)) count++;
  // return vowels(str, n + 1, count);

  // *2
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
