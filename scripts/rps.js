// rps.js - Rock, Paper, Scissors backend

const rps = ["rock", "paper", "scissors"]

// First, make the computer choice of Rock, Paper or Scissors.
// For ease, this will be a random index of the array above.

function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 3);
    
    return rps[choice];
};

function playRockPaperScissors(playerSelection, computerSelection) {
    console.log("Player selection is: " + playerSelection);
    console.log("Computer selection is: " + computerSelection)
};

let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();

playRockPaperScissors(playerSelection, computerSelection)


