//computer randomly returns 'rock', 'paper' or 'scissors'
function computerPlay() {
    const output = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random()*output.length);
    
    return output[index];
}

//ask user for input and check if input is valid
let playerChoice = () => {
    let inputChoice = prompt('Choose rock, paper, or scissors. \nEnter your choice: ');
    let choice = inputChoice.toLowerCase();

    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        return playerChoice();
    } else {
        return choice;
    }
};

let playerSelection;
let computerSelection;

//play a single round of Rock Paper Scissors
//return the outcome
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice(); //function call for player assigned to variable
    computerSelection = computerPlay(); //function call for computer assigned to variable
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
} 


//play 5 rounds game; keep score
//display results to console after each round
function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        scoreTable(result, i);
        
        if (i === 4) return scoreTable(result, i);
    }
}


//game(); //call function to play RPS five rounds




//"helper" function for game() to keep score
function scoreTable(playRound, i) {
    let lose = result => { return result.match(/[lose]/gi) };
    let win = result => { return result.match(/[win]/i) };
    let resultComputer = 0;
    let resultPlayer = 0;
    let resultDraw = 0;


    if (lose) {
        resultComputer++;
    } else if (win) {
        resultPlayer++; 
    } else {
        resultDraw++;
    }


    if (i === 4) {
        if (resultComputer > resultPlayer && resultComputer > resultDraw) {
            return console.log('Computer wins!');
        } else if (resultPlayer > resultComputer && resultPlayer > resultDraw) {
            return console.log('Player wins!');
        } else {
            return console.log('Draw!');
        }
    }
}