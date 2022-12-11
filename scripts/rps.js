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
        return -1
    }

    // check if it's a draw
    else if ( playerSelection === computerSelection) {
        return 0
    }

    // check win conditions for player
    else if ( 
        ( playerSelection === 'rock' && computerSelection === 'scissors' ) ||
        ( playerSelection === 'scissors' && computerSelection === 'paper' ) ||
        ( playerSelection === 'paper' && computerSelection === 'rock' ) 
    ) {
        return 1
    }

    // if conditions not met, player has lost
    else {
        return 2
    }
};

function game(rounds) {
    console.log("Let's play " + rounds + " rounds of Rock, Paper, Scissors.")

    // set scores to 0
    let playerPoints = 0;
    let computerPoints = 0;

    // set up a loop for the rounds of the game
    for (n = 0; n < rounds; n++) {
        // take player input and get the computer's choice
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        
        // process conditions from the game function
        switch(playRockPaperScissors(playerSelection, computerSelection)) {
            case -1:
                console.log("Not a valid choice! Please input 'rock', 'paper' or 'scissors'.");
                break;
            case 0:
                console.log("It's a draw! You played " + capitalize(playerSelection) + ", Computer played " + capitalize(computerSelection));
                break;
            case 1:
                playerPoints++
                console.log("You win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection))
                break;
            case 2:
                computerPoints++
                console.log("You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection));
        }
        // output the round result and the scores as they stand
        console.log("Current score: You: " + playerPoints + ", Computer: " + computerPoints)
    }

    // Now output the final result and final scores
    if ( playerPoints > computerPoints ) { console.log("You win the game! Final score: You: " + playerPoints + ", Computer: " + computerPoints)}
    else if ( playerPoints < computerPoints ) { console.log("You lose the game! Final score: You: " + playerPoints + ", Computer: " + computerPoints)}
    else { console.log("It's a draw! Final score: You: " + playerPoints + ", Computer: " + computerPoints) } 
}


game(3)



