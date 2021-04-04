// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //helper function to convert the letter to a number and add the shift
  function convertLetterWithShift(shift, letter) {
    if (!alphabet.includes(letter)) return letter;
    const letterIndex = alphabet.indexOf(letter);
    if (letterIndex + shift < 0) {
      return alphabet[letterIndex + shift + 26];
    };
    if (letterIndex + shift > 25) {
      return alphabet[letterIndex + shift - 26];
    };
    return alphabet[letterIndex + shift];
  };
  function caesar(input, shift, encode = true) {
    // your solution code here
    
    //return false if shift meets any of the following criteria:
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    //use .toLowerCase() to get most accurate conversions
    const lowerInput = input.toLowerCase();
    //use .split() to get an array
    const splitInput = lowerInput.split("");
    //if not encoding, turn shift negative to decode message
    if (encode === false) {
      shift = shift * (-1);
    };
    //utilize .map() to create new arrays after using helper functions and return a string using .join()
    return splitInput.map((letter) => convertLetterWithShift(shift, letter)).join("");
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
