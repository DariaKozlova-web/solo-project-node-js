const gameStart = () => {
  const availableOptions = ["rock", "paper", "scissors"];
  const randomOptionIndex = Math.floor(Math.random() * 3);
  const randomOption = availableOptions[randomOptionIndex];
  const userInput = process.argv[2];
  console.log("User chose: ", userInput);
  console.log("Computer chose: ", randomOption);
  if (randomOption === userInput) {
    console.log("It`s a draw!");
    return;
  } else {
    switch (userInput) {
      case "rock":
        if (randomOption === "paper") {
          console.log("The user lost =(");
          return;
        }
        if (randomOption === "scissors") {
          console.log("The user won!");
          return;
        }
        break;
      case "paper":
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
        console.log("Invalid input. Please enter: rock, paper or scissors.");
    }
  }
};
gameStart();
