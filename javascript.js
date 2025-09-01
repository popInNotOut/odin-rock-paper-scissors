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

function playRound(humanChoice, computerChoice){
    const output = document.querySelector("#output");
    const humanPoints = document.querySelector("#human");
    const computerPoints = document.querySelector("#computer");
    const gameResult = document.querySelector("#game-result");

    output.textContent = "You selected: " + humanChoice + ", computer selected: " + computerChoice;

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        humanPoints.textContent = "Your points: " + humanScore;
    }
    else if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        computerPoints.textContent = "Computer's points: " + computerScore;
    }

    if (humanScore == ROUNDS_WIN_CONDITION){
        gameResult.textContent = "You win!";
        gameResult.style.fontWeight = "bold";
    }
    else if (computerScore ==  ROUNDS_WIN_CONDITION){
        gameResult.textContent = "You lose!";
        gameResult.style.fontWeight = "bold";
    }
}

let humanScore = 0, computerScore = 0;
const ROUNDS_WIN_CONDITION = 5;

let selectList = document.querySelector("#selection");
selectList.addEventListener("click", (event)=>{
    if (humanScore == ROUNDS_WIN_CONDITION || computerScore == ROUNDS_WIN_CONDITION){
        alert("Game is over");
        return;
    }
    let target = event.target;
    console.log(target);
    /*
    switch(target.id){
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        default:
            alert("Error");
            break;
    }
    */
   playRound(target.id, getComputerChoice());
});
