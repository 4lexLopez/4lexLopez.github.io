/**
 * count how many times a character appears into a given word
 * @param {String} str sample string word
 * @param {String} char character to find into the string
 * @returns {Number} matches times that 'char' was found in 'str'
 */
let count = function (str, char) {
  let matches = 0;
  /**
   * this for loop that is used 
   * to iterate over each character in str word and make 
   * a strict comparison between each of them and the parameter 
   * stored in 'char', passed to the comparison function
   */
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      matches++;
    }
  }
  return matches;
};

count("hello", "l");

var donuts = [10, 11, 12];

// const filter = function (firstArray) {
//   newArray = firstArray.map(function(element) {
//     if (element > 10)
//       return element;
//     });
//   return newArray;
//   }
// array = filter(donuts);
// console.log(array);

/**
 * filter an array of numbers over 10 on each element of the array 
 * @param {Array} firstArray initial array to filter
 */
const filter = function (firstArray) {
  // newArray is a return array that will store the numbers
  // over 10 in the original array
  let newArray = [];
  for (let i = 0, j = 0; i < firstArray.length; i++) {
    if (firstArray[i] > 10) {
      // a 'j' index is only used as index in the 
      // new array to store every value over 10.
      // if a new value is stored, 'j' index is increased by one.
      newArray[j] = firstArray[i];
      j++;
    }
  }
  return newArray;
};

array = filter(donuts);
console.log(array);
