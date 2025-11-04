// console.log("hello,world!");
// const userInput = process.argv;
// console.log(userInput);
// console.log(userInput[2]);

const gameStart = () => {
  const aveableOptions = ["rock", "paper", "scissors"];
  const randomOptionIndex = Math.floor(Math.random() * 3);
  const randomOption = aveableOptions[randomOptionIndex];
  const userInput = process.argv[2];
  console.log("User: ", userInput);
  console.log("Computer: ", randomOption);
  if (randomOption === userInput) {
    console.log("Ничья!");
    return;
  } else {
    switch (userInput) {
      case "rock":
        // console.log("Пользователь ввел камень");
        if (randomOption === "paper") {
          console.log("The user lost=(");
          return;
        }
        if (randomOption === "scissors") {
          console.log("The user won!");
          return;
        }
        break;
      case "paper":
        // console.log("Пользователь ввел бумага");
        if (randomOption === "scissors") {
          console.log("The user lost=(");
          return;
        }
        if (randomOption === "rock") {
          console.log("The user won!");
          return;
        }
        break;
      case "scissors":
        // console.log("Пользователь ввел ножницы");
        if (randomOption === "rock") {
          console.log("The user lost=(");
          return;
        }
        if (randomOption === "paper") {
          console.log("The user won!");
          return;
        }
        break;
      default:
        console.log(
          "Ошибка ввода. Доступные для ввода значения: rock, paper, scissors"
        );
    }
  }
};
gameStart();
