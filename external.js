let playerChoice = prompt("Pls input rock, paper, or scissors:").toLowerCase();

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


const choice = getComputerChoice();
gameRound(choice);

const restartButton = document.getElementById("restart");

restartButton.addEventListener("click", () => {
  window.location.reload();
})