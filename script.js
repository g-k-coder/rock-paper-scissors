function makeComputerChoose() {
    const output = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * output.length);
    
    return output[index];
}


let getPlayerChoice = () => {
    let inputChoice = prompt('Choose rock, paper, or scissors. \nEnter your choice: ');
    let choice = inputChoice.toLowerCase();

    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        return getPlayerChoice();
    } else {
        return choice;
    }
};

let playerSelection;
let computerSelection;


function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice(); 
    computerSelection = makeComputerChoose(); 
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


function game() {
    let result;

    for (let i = 0; i < 5; i++) {
        result = playRound();
        console.log(result);
        scoreTable(result, i);
        
        if (i === 4) return scoreTable(result, i);
    }
}


game(); 




// "helper" function for game() to keep score
function scoreTable(result, i) {
    let lose = result => { return result.match(/[lose]/gi); };
    let win = result => { return result.match(/[win]/i); };
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