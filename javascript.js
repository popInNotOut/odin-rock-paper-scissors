/* BEGINNING FUNCTIONS */
function getComputerChoice(){
    let randNum = Math.random();
    if (0 <= randNum && randNum <= 1/3){
        return "rock";
    }
    else if (1/3 < randNum && randNum <= 2/3){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let ret = prompt("rock, paper, or scissors: ");
    while (ret.toLowerCase() != "rock" && ret.toLowerCase() != "paper" && ret.toLowerCase() != "scissors"){
        ret = prompt("Invalid input. Please type rock, paper, or scissors: ");
    }
    return ret;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        alert("You selected: " + humanChoice + ", computer selected: " + computerChoice + ". Therefore, you win");
    }
    else if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        alert("You selected: " + humanChoice + ", computer selected: " + computerChoice + ". Therefore, you lose");
    }
    else {
        alert("You selected: " + humanChoice + ", computer selected: " + computerChoice + ". Therefore, draw");
    }
    alert("Your score: " + humanScore + ", computer score: " + computerScore + ", rounds remaining: " + rounds);
}

function playGame(){
    alert("You will play 5 rounds of rock paper scissors.");
    while (rounds-- > 0){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore){
        alert("You win!");
    }
    else if (humanScore == computerScore){
        alert("Draw!");
    }
    else {
        alert("You lose!");
    }
}
/* END OF FUNCTIONS */



/* START OF VARIABLES */
let humanScore = 0, computerScore = 0, rounds = 5;
/* END OF VARIABLES */



/* START OF MAIN CODE */
playGame();
/* END OF MAIN CODE */