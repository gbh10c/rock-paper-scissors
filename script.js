function computerPlay() {
    let computerOption = ['rock', 'paper', 'scissors'];      
    let computerHand = computerOption[Math.floor(Math.random() * 3)];
    return computerHand;
}
function userPlay() {
    let input = prompt("Type 'rock', 'paper', or 'scissors'.");
    let answer = input.toLowerCase();
    return answer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else {
        console.log(playerSelection, computerSelection);
    }
}

//playRound();