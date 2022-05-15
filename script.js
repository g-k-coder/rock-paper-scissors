
//computer randomly returns 'rock', 'paper' or 'scissors'
function computerPlay() {
    const output = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*output.length);
    
    return output[index];
} //works


//ask user for input and check if input is valid
let playerChoice = () => {
    let inputChoice = prompt('Choose rock, paper, or scissors. \nEnter your choice: ');
    let choice = inputChoice.toLowerCase();

    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        console.log('Choose ONLY among rock, paper, or scissors');
        playerChoice();
    } else {
        return choice;
    }
};//works

let playerSelection = playerChoice(); //function call for player assigned to variable
let computerSelection = computerPlay(); //function call for computer assigned to variable

//play a single round of Rock Paper Scissors
//return the outcome
function playRound(playerSelection, computerSelection) {
    
}

