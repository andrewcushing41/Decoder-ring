// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const alphabetCode = (char) => (char.toLowerCase().charCodeAt(0)) - 'z'.charCodeAt(0) + 26; // Converts charactor to lowercase & converts it into a Javascript Character Code.
  function substitution(input, alphabet, encode = true) {
      if (!alphabet || alphabet.length !== 26 || !input) { // Check it see if alphabet if actual length of the alphabet
          return false;
      } 
       // Checks for duplicate letters
       const duplicateCheckArray = [];
       for (const letter of alphabet) {
           if (duplicateCheckArray.indexOf(letter) < 0) {
              duplicateCheckArray.push(letter);
           } else {
               return false;
           }
       }
      let returnString = '';
      const inArray = [...input]; // Spread our input into an array
      if (encode) {
          for (let i = 0; i < input.length; i++) { // Encode our input
              if(input[i].toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && input[i].toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0) || input[i].charCodeAt(0) === ' '.charCodeAt(0) )
                  alphabetCode(inArray[i]) === alphabetCode(' ') ? returnString += ' ' : returnString += alphabet[alphabetCode(inArray[i]) - 1];
          }
      } else {
          const alphabetArray = [...alphabet]
          for (let i = 0; i < input.length; i++) { // Decode out output by returning a letter based on index position
              let indexPosition = 0;
              for (let letter in alphabetArray) {
                  if (alphabetArray[letter] === inArray[i]){
                      indexPosition = letter;
                      indexPosition++; // Increment by one to get the alphabet position number
                  }
              }
              alphabetCode(inArray[i]) === alphabetCode(' ') ? returnString += ' ' : returnString += String.fromCharCode(indexPosition + 'a'.charCodeAt(0) - 1)
          }
      }
      return returnString;
  }
  
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
