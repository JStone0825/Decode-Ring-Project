// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //helper function to encode
  function encodeInput(character, alphabet) {
    //return spaces
    if (!alpha.includes(character)) return character;
    //find the equivalent letter in the alternate alphabet
    for (let i = 0; i < alpha.length; i++) {
      if (alpha[i] == character) return alphabet[i];
    };
  };
  //helper function to decode
  function decodeInput(character, alphabet) {
    //return spaces
    if (!alphabet.includes(character)) return character;
    //find equivalent letter
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === character) return alpha[i];
    };
  };
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //return false is alphabet is missing
    if (!alphabet) return false;
    //use .split() to turn string into an array
    alphabet = alphabet.split("");
    //return false if alphabet isn't 26 characters long and/or has duplicate characters
    if (alphabet.length > 26 || alphabet.length < 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j] && i != j) return false;
      };
    };
    //use .toLowerCase() to get most accurate conversions
    const lowerInput = input.toLowerCase();
    //use .split() to get an array
    const splitInput = lowerInput.split("");
    if (encode === true) {
      return splitInput.map((character) => encodeInput(character, alphabet)).join("");
    };
    if (encode === false) {
      return splitInput.map((character) => decodeInput(character, alphabet)).join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
