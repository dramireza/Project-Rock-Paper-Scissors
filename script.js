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
        decision = "tie";
        loser = playerSelection;
        winner = computerSelection;
    } else {
        switch (playerSelection) {

            case "Rock": if (computerSelection === "Scissors") {
                decision = "win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "Paper") {
                decision = "lose";
                loser = playerSelection;
                winner = computerSelection;
            }
                break;

            case "Paper": if (computerSelection === "Rock") {
                decision = "win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "Scissors") {
                decision = "lose";
                loser = playerSelection;
                winner = computerSelection;
            }
                break;

            case "Scissors": if (computerSelection === "Paper") {
                decision = "win";
                winner = playerSelection;
                loser = computerSelection;
            } if (computerSelection === "Rock") {
                decision = "lose";
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
const results = document.querySelector('#results')
const score = document.querySelector('#score')
const buttons = document.querySelectorAll('.choice')

buttons.forEach(button => button.addEventListener("click", function (e) {
    let computerChoice = getComputerChoice();
    let playerChoice = (e.target.alt);

    round = (playRound(playerChoice, computerChoice))

    if (round.decision === "win") playerScore++;
    if (round.decision === "lose") computerScore++;

    if (round.decision === "tie") {
        results.textContent=`It's a ${round.decision}! Try again!`
    } else {
        results.textContent=`You ${round.decision}! ${round.winner} beats ${round.loser}`
        score.textContent=`You: ${playerScore} - CPU: ${computerScore}`
    }

    if (playerScore == 5) { 
        results.textContent=`You've Won! Congratulations!!!`;
        score.textContent="";
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        results.textContent=`You've Lost! Sad Times :(`;    
        score.textContent="";
        playerScore = 0;
        computerScore = 0;
    }
}))





