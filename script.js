function computerPlay() {
    let computerOption = ['rock', 'paper', 'scissors'];      
    let computerHand = computerOption[Math.floor(Math.random() * 3)];
    return computerHand;
}

function userPlay() {
    let input = prompt("Type 'rock', 'paper', or 'scissors'.");
    let answer = input.toLowerCase();
        while (answer != 'rock' && answer != 'paper' && answer != 'scissors') {
            alert("Incompatible submission. Please try again.");
            input = prompt("Type 'rock', 'paper', or 'scissors'.");
            answer = input.toLowerCase();
        }
            return answer;
}

function playRound() {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let result = playRound();
        if (result === 'tie') {
            console.log("It's a tie! Try again.")
        } else if (result === 'win') {
            playerScore++;
            console.log("You win, " + playerSelection + " beats " + computerSelection + "! Player: " + playerScore + " Computer: " + computerScore); 
        } else {
            computerScore++;
            console.log("You lose, " + computerSelection + " beats " + playerSelection + ". Player: " + playerScore + " Computer: " + computerScore);
        }
    }
    if (playerScore === 3) {
        console.log("Congratulations, you defeated the Computer!");
    } else if (computerScore === 3) {
        console.log("I'm sorry, the Computer defeated you.");
    }
}

game();