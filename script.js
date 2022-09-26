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
        decision = "Tie";
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

function game(){
    let round;
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let index = 0; index < 5; index++) {
        let playerChoice = prompt("Rock, paper or scissors?");
        let computerChoice = getComputerChoice();
        
       
        round = (playRound(playerChoice.toLowerCase(),computerChoice.toLowerCase()))
        if (round.decision === "Win")scorePlayer++;
        if (round.decision === "Lose")scoreComputer++;
        
        if (round.decision === "Tie"){
            console.log (`You ${round.decision}! Try Again! `)
            index--;
        }else {
            console.log (`You ${round.decision}! ${round.winner} beats ${round.loser}`)
            console.log (`Score: You = ${scorePlayer}, CPU = ${scoreComputer}`)
        }


        
    }
}

game();

