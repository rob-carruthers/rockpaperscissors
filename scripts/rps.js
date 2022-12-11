// rps.js - Rock, Paper, Scissors backend

const rps = ["rock", "paper", "scissors"]

// First, make the computer choice of Rock, Paper or Scissors.
// For ease, this will be a random index of the array above.

function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 3);
    
    return rps[choice];
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function playRockPaperScissors(playerSelection, computerSelection) {
    // first check to see if the player has made a valid choice
    if ( ! rps.includes(playerSelection)) {
        return "Not a valid choice! Please input 'rock', 'paper' or 'scissors'."
    }
    // check if it's a draw
    else if ( playerSelection === computerSelection) {
        return "It's a draw! You played " + capitalize(playerSelection) + ", Computer played " + capitalize(computerSelection)
    }
    // check win conditions for player
    else if ( 
        ( playerSelection === 'rock' && computerSelection === 'scissors' ) ||
        ( playerSelection === 'scissors' && computerSelection === 'paper' ) ||
        ( playerSelection === 'paper' && computerSelection === 'rock' ) 
    ) {
        return "You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection)
    }
    // if conditions not met, player has lost
    else {
        return "You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection)
    }
};

let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRockPaperScissors(playerSelection, computerSelection))


