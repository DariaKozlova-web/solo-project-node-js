// English to Pig Latin Translator
// Description: Create a program that translates English text to Pig Latin.
// Requirements:
// The program should take an English phrase as an input from process.argv.
// Convert each word to Pig Latin:
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
// Example: Happy = appyh + ay = appyhay
// If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
// Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word.
// Example: Awesome = Awesome +way = Awesomeway
// Output the translated phrase to the console.
console.log("Pig Latin translator");
const vowels = ["A", "E", "I", "U", "O"];
const consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const main = () => {
  const userDataArray = process.argv.slice(2);
  const translatedArray = userDataArray.map((item) => {
    const firstLetter = item[0].toUpperCase();
    const secondLetter = item[1].toUpperCase();
    if (consonants.includes(firstLetter) && vowels.includes(secondLetter)) {
      const result = `${item.slice(1)}${item[0]}ay`;
      return result;
    } else if (
      consonants.includes(firstLetter) &&
      consonants.includes(secondLetter)
    ) {
      const result = `${item.slice(2)}${item[0]}${item[1]}ay`;
      return result;
    } else if (vowels.includes(firstLetter)) {
      const result = `${item}way`;
      return result;
    } else {
      console.log("Error");
      return item;
    }
  });
  const pigLatin = translatedArray.join(" ");
  console.log(pigLatin);
};
main();