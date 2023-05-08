let playerChoice;
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let message;
let playerScore = 0;
let computerScore = 0;
let testy;

function didWin() {
  if (playerScore === 5) {
    document.getElementById("whoWonny").innerHTML = "You wonny the gamey!! Reload to play again.";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    document.getElementById("whoWonny").innerHTML = "You losty the gamey😭  Reload to play again.";
    playerScore = 0;
    computerScore = 0;
  } else {
    testy = 4;
  } 
}

// Event listeners for all the images.
rockButton.addEventListener("click", ()=> {
  playerChoice = "rock";
})

paperButton.addEventListener("click", ()=> {
  playerChoice = "paper";
})

scissorsButton.addEventListener("click", ()=> {
  playerChoice = "scissors";
})

// Options for the computer ot choose from.
const options = [
  "Rock",
  "Paper",
  "Scissors"
];

// Function for generating a random choice by computer.
function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random()*options.length)];
  console.log(computerChoice);
  return computerChoice;
}

// For determining the winner of the round.
function gameRound(computerChoice) {
  if ((playerChoice === "rock") && computerChoice === "Scissors"){
      message = "You win!";
      playerScore++;
  } else if ((playerChoice === "paper") && computerChoice === "Rock"){
      message = "You win!";
      playerScore++;
  } else if ((playerChoice === "scissors") && computerChoice === "Paper"){
      message = "You win!";
      playerScore++;
  } else if ((playerChoice === "rock") && computerChoice === "Paper"){
      message = "You lose :(";
      computerScore++;
  } else if ((playerChoice === "paper") && computerChoice === "Scissors") {
      message = "You lose :(";
      computerScore++;
  } else if ((playerChoice === "scissors") && computerChoice === "Rock"){
      message = "You lose :(";
      computerScore++;
  } else if ((playerChoice === "rock") && computerChoice === "Rock"){
      message = "It's a tie :|";
  } else if ((playerChoice === "paper") && computerChoice === "Paper"){
      message = "It's a tie :|";
  } else if ((playerChoice === "scissors") && computerChoice === "Scissors"){
      message = "It's a tie :|";
  }
    else {
      message = "Pls insert a valid option.";
    }
}

  const submitButton = document.getElementById("submit");

  // Adding and event listener to the submit button
submitButton.addEventListener("click", () => {
  const choice = getComputerChoice();
  gameRound(choice);
  document.getElementById("winOrLose").innerHTML = message;
  document.getElementById("pscore").innerHTML = "Player Score: " + playerScore;
  document.getElementById("cscore").innerHTML = "Computer Score: "  + computerScore;
  didWin();
  playerChoice = undefined;
})
