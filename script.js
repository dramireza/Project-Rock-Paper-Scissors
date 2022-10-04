function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: choice = "Paper";
            break;
        case 1: choice = "Scissors"
            break;
        case 2: choice = "Rock"
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    let decision;
    let winner;
    let loser;

    if (playerSelection === computerSelection) {
        decision = "Tie";
        loser = playerSelection;
        winner = computerSelection;
    } else {
        switch (playerSelection) {

            case "rock": if (computerSelection === "scissors") {
                decision = "Win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "paper") {
                decision = "Lose";
                loser = playerSelection;
                winner = computerSelection;
            }
                break;

            case "paper": if (computerSelection === "rock") {
                decision = "Win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "scissors") {
                decision = "Lose";
                loser = playerSelection;
                winner = computerSelection;
            }
                break;

            case "scissors": if (computerSelection === "paper") {
                decision = "Win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "rock") {
                decision = "Lose";
                loser = playerSelection;
                winner = computerSelection;
            }
                break;
        }
    }
    return { decision, winner, loser }
    //return `You ${decision}! ${winner} beats ${loser}`


}

let round;
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('.choice')
buttons.forEach(button => button.addEventListener("click", function (e) {
    let computerChoice = getComputerChoice();
    let playerChoice = (e.target.textContent);

    round = (playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase()))

    if (round.decision === "Win") playerScore++;
    if (round.decision === "Lose") computerScore++;

    if (round.decision === "Tie") {
        console.log(`It's a ${round.decision}! Try Again!`)
    } else {
        console.log(`You ${round.decision}! ${round.winner} beats ${round.loser}`)
        console.log(`Score: You = ${playerScore}, CPU = ${computerScore}`)
    }

    if (playerScore == 5) {
        alert(`You've Won! Congratulations!!!`)
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        alert(`You've Lost! Sad Times :(`)
    }
}))





