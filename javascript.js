

//FOR 5 times
    //Prompt user for rock, paper, or scissors
    //Generate computer choice
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3) + 1;
        //generate random number from 1-3
        // 1 = rock, 2 = paper, 3 = scissors
    if (result === 1){
        return "rock";
    } else if (result === 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    let result = prompt("Rock, Paper, or Scissors?");
    return result;
}


function playRound(humanChoice, computerChoice){
    //player loses
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock.");
        return "Computer";
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper!");
        return "Computer";
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors!");
        return "Computer";
    //player wins
    } else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors!");
        return "Player";
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock!");
        return "Player";
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper!");
        return "Player";
    //player ties
    } else if(humanChoice.toLowerCase() == computerChoice){
        console.log("You win! " + humanChoice + " ties with " + computerChoice + "!");
    }
}



function playGame(){
    //create variable to track player score
    let playerScore = 0;
    //create variable to track computer score
    let computerScore = 0;
    for (i = 0; i < 5; i++){
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result == "Player"){
            playerScore++;
        } else{
            computerScore++;
        }
    }
}

playGame();