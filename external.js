let playerOption = prompt("Pls input rock, paper, or scissors:");

const options = [
  "Rock",
  "Paper",
  "Scissors"
];

function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random()*options.length)];
  console.log(computerChoice);
}

getComputerChoice();