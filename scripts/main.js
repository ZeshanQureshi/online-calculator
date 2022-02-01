let computerWins = 0;
let playerWins = 0;

let paragraphComputer = document.getElementById("computerPick");
let paragraphPlayer = document.getElementById("playerPick")
let paragraphGame = document.getElementById("gameStatus");
let paragraphScore = document.getElementById("gameScore");

let Ro = "Rock";
let Pa = "Paper";
let Sc = "Scissors";

function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let computerDecision = computerChoices[Math.floor(Math.random()*3)];
    
    paragraphComputer.innerHTML = computerDecision;

    return computerDecision;
}

function playRound(buttonClick) {
    paragraphPlayer.innerHTML = buttonClick;

    let computerRun = computerPlay();

    if (computerRun == buttonClick) {
        paragraphGame.innerHTML = "Both players played " + buttonClick + ". It's a Tie!";
    } else if (buttonClick == "Rock" && computerRun == "Scissors") {
        paragraphGame.innerHTML = "Rock beats Scissors. You Win!";
        playerWins++;
    } else if (buttonClick == "Paper" && computerRun == "Rock") {
        paragraphGame.innerHTML = "Paper beats Rock. You Win!";
        playerWins++;
    } else if (buttonClick == "Scissors" && computerRun == "Paper") {
        paragraphGame.innerHTML = "Scissors beats Paper. You Win!";
        playerWins++;
    } else if (computerRun == "Rock" && buttonClick == "Scissors") {
        paragraphGame.innerHTML = "Scissors loses to Rock. Computer Wins!";
        computerWins++;
    } else if (computerRun == "Paper" && buttonClick == "Rock") {
        paragraphGame.innerHTML = "Rock loses to Paper. Computer Wins!";
        computerWins++;
    } else {
        paragraphGame.innerHTML = "Paper loses to Scissors. Computer Wins!";
        computerWins++;
    }

    paragraphScore.innerHTML = "Score: " + playerWins + " - " + computerWins + "";
}
