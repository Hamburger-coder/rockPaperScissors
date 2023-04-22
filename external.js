let playerChoice;
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", ()=> {
  playerChoice = "rock";
})

paperButton.addEventListener("click", ()=> {
  playerChoice = "paper";
})

scissorsButton.addEventListener("click", ()=> {
  playerChoice = "scissors";
})

const options = [
  "Rock",
  "Paper",
  "Scissors"
];

function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random()*options.length)];
  console.log(computerChoice);
  return computerChoice;
}

function gameRound(computerChoice) {
  if ((playerChoice === "rock") && computerChoice === "Scissors"){
      alert("You win!");
  } else if ((playerChoice === "paper") && computerChoice === "Rock"){
      alert("You win!");
  } else if ((playerChoice === "scissors") && computerChoice === "Paper"){
      alert("You win!");
  } else if ((playerChoice === "rock") && computerChoice === "Paper"){
      alert("You lose :(");
  } else if ((playerChoice === "paper") && computerChoice === "Scissors") {
      alert("You lose :(");
  } else if ((playerChoice === "scissors") && computerChoice === "Rock"){
      alert("You lose :(");
  } else if ((playerChoice === "rock") && computerChoice === "Rock"){
      alert("It's a tie :|");
  } else if ((playerChoice === "paper") && computerChoice === "Paper"){
      alert("It's a tie :|");
  } else if ((playerChoice === "scissors") && computerChoice === "Scissors"){
      alert("It's a tie :|");
  }
    else {
      alert("Pls insert a valid option.");
    }
}

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  const choice = getComputerChoice();
  gameRound(choice);
  playerChoice = undefined;
})
