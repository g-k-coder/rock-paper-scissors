
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
        return playerChoice();
    } else {
        return choice;
    }
};//works

let playerSelection = playerChoice(); //function call for player assigned to variable
let computerSelection = computerPlay(); //function call for computer assigned to variable

//play a single round of Rock Paper Scissors
//return the outcome
function playRound(playerSelection, computerSelection) {
    let result;

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        result = `You lose! ${computerSelection} beat ${playerSelection}.`;
    } else if (computerSelection === playerSelection) {
        result = `Draw!`;
    } else {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    return result;
}//works 

