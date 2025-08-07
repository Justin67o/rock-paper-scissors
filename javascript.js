let playerScore = 0;
let computerScore = 0;

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



function playRound(humanChoice, computerChoice){
    //player loses
    const RESULT = document.querySelector("#result");
    const PLAYER_SCORE_BOX = document.querySelector("#player_score");
    const COMPUTER_SCORE_BOX = document.querySelector("#computer_score");
    PLAYER_SCORE_BOX.textContent = "Player Score: " + playerScore;
    COMPUTER_SCORE_BOX.textContent = "Computer Score: " + computerScore;
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper"){

        RESULT.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        COMPUTER_SCORE_BOX.textContent = "Computer Score: " + computerScore;
        if(computerScore >= 5){
            RESULT.textContent = "Computer Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "scissors"){

        RESULT.textContent = "You lose! Scissors beats Paper!";
        computerScore++;
        COMPUTER_SCORE_BOX.textContent = "Computer Score: " + computerScore;
        if(computerScore >= 5){
            RESULT.textContent = "Computer Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "rock"){

        RESULT.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
        COMPUTER_SCORE_BOX.textContent = "Computer Score: " + computerScore;

        if(computerScore >= 5){
            RESULT.textContent = "Computer Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    //player wins
    } else if(humanChoice.toLowerCase() == "rock" && computerChoice == "scissors"){
        
        RESULT.textContent = "You win! Rock beats Scissors!";
        playerScore++;
        PLAYER_SCORE_BOX.textContent = "Player Score: " + playerScore;
        if(playerScore >= 5){
            RESULT.textContent = "Player Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    } else if(humanChoice.toLowerCase() == "paper" && computerChoice == "rock"){
        RESULT.textContent = "You win! Paper beats Rock!";
        playerScore++;
        PLAYER_SCORE_BOX.textContent = "Player Score: " + playerScore;
        if(playerScore >= 5){
            RESULT.textContent = "Player Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    } else if(humanChoice.toLowerCase() == "scissors" && computerChoice == "paper"){
        
        RESULT.textContent = "You win! Scissors beats paper!";
        playerScore++;
        PLAYER_SCORE_BOX.textContent = "Player Score: " + playerScore;
        if(playerScore >= 5){
            RESULT.textContent = "Player Wins!";
            playerScore = 0;
            computerScore = 0;
            return;
        }
    //player ties
    } else if(humanChoice.toLowerCase() == computerChoice){
        RESULT.textContent = "No one wins! " + humanChoice + " ties with " + computerChoice + "!";
    }
}

const BUTTONS = document.querySelectorAll("button")
BUTTONS.forEach((button) =>{
    button.addEventListener("click", function (e){
        playRound(e.target.textContent, getComputerChoice());
    })
});
// function playGame(){
//     //create variable to track player score
//     let playerScore = 0;
//     //create variable to track computer score
//     let computerScore = 0;
//     for (i = 0; i < 5; i++){
//         let result = playRound(getHumanChoice(), getComputerChoice());
//         if (result == "Player"){
//             playerScore++;
//         } else{
//             computerScore++;
//         }
//     }
// }
