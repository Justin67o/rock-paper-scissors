//create variable to track player score
let playerScore = 0;
//create variable to track computer score
let computerScore = 0;

//FOR 5 times
    //Prompt user for rock, paper, or scissors
    //Generate computer choice
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3) + 1;

    if (result === 1){
        return "Rock";
    } else if (result === 2){
        return "Paper";
    } else{
        return "Scissors";
    }
}



        //generate random number from 1-3
        // 1 = rock, 2 = paper, 3 = scissors
    //IF player wins
        //increase player score
    //else 
        // increase computer score
