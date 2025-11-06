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

// const userPhrace = process.argv[2];
// const shiftNumber = Number(process.argv[3]);
const cipherLetter = (letter, shift) => {
  const currentLetterIndex = alphabet.findIndex(
    (item) => item === letter.toLowerCase() //если findIndex не находит букву(item) возвращает -1
  );
  if (currentLetterIndex < 0) {
    return "*";
  }
  const newIndex = currentLetterIndex + shift;
  let result = "";
  if (newIndex > 0) {
    if (newIndex <= alphabet.length) {
      const newLetter = alphabet[newIndex];
      result = newLetter;
    } else {
      const remainderIndex = newIndex % alphabet.length;
      const newLetter = alphabet[remainderIndex];
      result = newLetter;
    }
  } else {
    // если хвоста нет
    if (newIndex * -1 <= alphabet.length) {
      const newLetter = alphabet[alphabet.length + newIndex];
      result = newLetter;
    } else {
      const remainderIndex = newIndex % alphabet.length;
      const newLetter = alphabet[alphabet.length + remainderIndex];
      result = newLetter;
    }
  }
  return result;
};
const cipheredLetter = cipherLetter("A", 1);
console.log(cipheredLetter);
console.log(alphabet.length);
