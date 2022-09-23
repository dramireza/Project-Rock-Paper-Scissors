function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: choice="Paper";
        break;
        case 1: choice="Scissors"
        break;
        case 2: choice="Rock"
        break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    
    let decision;
    let winner;
    let loser;

    if (playerSelection === computerSelection){
        decision = "Lose";
        loser = playerSelection;
        winner = computerSelection;
    }else{
    switch (playerSelection){

        case "rock": if( computerSelection === "scissors"){
            decision = "Win";
            winner = playerSelection;
            loser = computerSelection;
        }
        if( computerSelection === "paper"){
            decision = "Lose";
            loser = playerSelection;
            winner = computerSelection;
        }
        break;

        case "paper": if( computerSelection === "rock"){
            decision = "Win";
            winner = playerSelection;
            loser = computerSelection;
        }if( computerSelection === "scissors"){
            decision = "Lose";
            loser = playerSelection;
            winner = computerSelection;
        }
        break;

        case "scissors": if( computerSelection === "paper"){
            decision = "Win";
            winner = playerSelection;
            loser = computerSelection;
        } if( computerSelection === "rock"){
            decision = "Lose";
            loser = playerSelection;
            winner = computerSelection;
        }  
        break;         
    }
}   
    return {decision,winner,loser}
    //return `You ${decision}! ${winner} beats ${loser}`


}
const playerChoice = prompt("Rock, paper or scissors?");
const computerChoice = getComputerChoice();

playRound(playerChoice.toLowerCase(),computerChoice.toLowerCase())