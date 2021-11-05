function computerPlay() {
    let computerOption = ['rock', 'paper', 'scissors'];      
    let computerHand = computerOption[Math.floor(Math.random() * 3)];
    return computerHand;
}

function userPlay() {
    let input = prompt("Type 'rock', 'paper', or 'scissors'.");
    let answer = input.toLowerCase();
        if (answer != 'rock' && answer != 'paper' && answer != 'scissors') {
            return prompt("Please enter a valid selection: 'rock', 'paper', or 'scissors'!");
        } else {
    return answer;
        }
}

function playRound() {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "You win, " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lose, " + computerSelection + " beats " + playerSelection + ".";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

game();