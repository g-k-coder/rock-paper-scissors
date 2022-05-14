
//computer randomly returns 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
    const output = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random()*output.length);
    return output[index];
} //works


