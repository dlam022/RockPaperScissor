//randomly return rock paper or scissor
function getComputerChoice(a) {
    var b = a[Math.floor(Math.random() * a.length)];
    console.log(`Computer chooses ${b}`);
    return b;
    
}

function gameStart(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a Draw!";
    } 
    else if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissor";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Scissor beats Paper"
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else{
            return "You Win! Scissors beats Paper";
        }
    }
}

var a = ["rock", "paper", "scissors"];
let playerInput = prompt("Enter rock, paper, scissors");
var lowercaseInput = playerInput.toLowerCase();
console.log(`Player chooses ${lowercaseInput}`);
let computerInput = getComputerChoice(a);


console.log(gameStart(lowercaseInput, computerInput));
