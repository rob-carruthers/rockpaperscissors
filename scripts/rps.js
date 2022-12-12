// rps.js - Rock, Paper, Scissors backend

const rps = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

// First, make the computer choice of Rock, Paper or Scissors.
// For ease, this will be a random index of the array above.

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function playRockPaperScissors(playerSelection, resultDiv, scoreDiv) {
    // Get the computer choice by generating a random
    // number, floor() to an int and get the corresponding
    // rps array index
    const choice = Math.floor(Math.random() * 3);
    const computerSelection = rps[choice];

    if ( playerScore < 5 && computerScore < 5) {
    let resultsLog = "";
    // check for a draw
    if ( playerSelection === computerSelection ) {
        resultsLog += "It's a draw! Both played " + playerSelection + "."
    }

    // check win conditions for player
    else if ( 
        ( playerSelection === 'rock' && computerSelection === 'scissors' ) ||
        ( playerSelection === 'scissors' && computerSelection === 'paper' ) ||
        ( playerSelection === 'paper' && computerSelection === 'rock' ) 
    ) {
        resultsLog += "You win! " + capitalize(playerSelection) + " beats " + computerSelection + "."
        playerScore += 1
    }

    // if conditions not met, player has lost
    else {
        resultsLog += "You lose! " + capitalize(computerSelection) + " beats " + playerSelection + "."
        computerScore += 1
    }

    resultDiv.textContent = resultsLog
    scoreDiv.textContent = "Your score: " + playerScore + ". Computer: " + computerScore
    }

    if (playerScore === 5 ) {
        scoreDiv.textContent = "You win the game! Your score: " + playerScore + ". Computer: " + computerScore
    }

    else if (computerScore === 5 ) {
        scoreDiv.textContent = "You lose the game! Your score: " + playerScore + ". Computer: " + computerScore
    }


};

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

rockButton.addEventListener('click', () => playRockPaperScissors("rock", results, score));
paperButton.addEventListener('click', () => playRockPaperScissors("paper", results, score));
scissorsButton.addEventListener('click', () => playRockPaperScissors("scissors", results, score));

