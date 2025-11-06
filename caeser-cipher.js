// Caesar Cipher
// Description: Implement a basic Caesar Cipher encryption.
// Requirements:
// The program should take a phrase and a shift number as inputs from process.argv.
// Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
// Output the encrypted phrase to the console.
// Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog
console.log("Caesar Cipher");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const userPhrace = process.argv[2];
const shiftNumber = Number(process.argv[3]);
const wordsArray = userPhrace.split(" ");
const newWordsArray = wordsArray.map((item) => {
  const lettersArray = item.split("");
  const newLettersArrey = lettersArray.map((letter) => {
    const currentLetterOnAlphabetIdx = alphabet.findIndex(
      (item) => item === letter
    );
    if (currentLetterOnAlphabetIdx > 0) {
      const newIndex = currentLetterOnAlphabetIdx + shiftNumber;
      console.log(newIndex);
      const newLetter = alphabet[newIndex];
      console.log("new letter: ", newLetter);
      console.log(currentLetterOnAlphabetIdx);
      console.log("alt letter: ", lettersArray[0]);
      return newLetter;
    } else {
      console.log("Letter is not find");
      return "Letter is not find";
    }
  });
  console.log(newLettersArrey);
  const result = "";
  return result;
});
