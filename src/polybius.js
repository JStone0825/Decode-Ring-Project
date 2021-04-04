// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //create an object containing the varialbes from polybius square
  const polybiusSquare = {
    11: { letter: "a"},
    21: { letter: "b"},
    31: { letter: "c"},
    41: { letter: "d"},
    51: { letter: "e"},
    12: { letter: "f"},
    22: { letter: "g"},
    32: { letter: "h"},
    42: { letter: "(i/j)"},
    52: { letter: "k"},
    13: { letter: "l"},
    23: { letter: "m"},
    33: { letter: "n"},
    43: { letter: "o"},
    53: { letter: "p"},
    14: { letter: "q"},
    24: { letter: "r"},
    34: { letter: "s"},
    44: { letter: "t"},
    54: { letter: "u"},
    15: { letter: "v"},
    25: { letter: "w"},
    35: { letter: "x"},
    45: { letter: "y"},
    55: { letter: "z"},
  };
  //helper function to convert letter to number code
  function convertLetter(letters) {
    if (letters === " ") return " ";
    if (letters === "i" || letters === "j") return "42";
    let result;
      for (let number in polybiusSquare) {
        const numberInObject = polybiusSquare[number];
        const letterInObject = numberInObject.letter;
        if (letterInObject === letters) {
          result = number;
        };
      };
    return result;
  };
  //helper function to convert number pairs to letters
  function convertNumbers(numbers) {
    if (numbers === " ") return " ";
    let result;
    for (let number in polybiusSquare) {
      const numberInObject = polybiusSquare[number];
      const letterInObject = numberInObject.letter;
      if (number == numbers) {
        result = letterInObject;
      };
    };
    return result;
  };
  function polybius(input, encode = true) {
    // your solution code here

    //to decode
    if (encode === false) {
      //return false if input to decode is ann odd amount of numbers
      
      //use .split() to get an array
      const splitInput = input.split(" ");
      if (splitInput.some((word) => {
        return word % 2 == 0;
      })) return false;
      //utilize .map() to create new arrays after using helper functions
      return splitInput.map((numbers) => {
        let result = "";
        for (let i = 0; i < numbers.length; i += 2) {
          result += convertNumbers(`${numbers[i]}${numbers[i + 1]}`);
        }console.log(result);
        return result;
      }).join(" ");
    };
    //if encode = true follow these instructions
    if (encode != false){
      //use .toLowerCase() to get most accurate conversions
      const lowerInput = input.toLowerCase();
      //use .split() to get an array
      const splitInput = lowerInput.split("");
      //utilize .map() to create new arrays after using helper functions
      return splitInput.map((letters) => convertLetter(letters)).join("");
    };


  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
