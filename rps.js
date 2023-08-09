const playerScoreboard = document.getElementById("playerScore");
const computerScoreboard = document.getElementById("computerScore");
const computer = document.getElementById("computerChoice");
const player = document.getElementById("playerChoice");
const computerImg = document.getElementById("computerImg");


var playerScore = 0;
var computerScore = 0;

playerScoreboard.innerHTML = playerScore;
computerScoreboard.innerHTML = computerScore;

function play(playerChoice) {
    let n = Math.floor(Math.random() * 3);
    let computerChoice;

    if (n == 0) {
        computerChoice = "ROCK"
    } if (n == 1) {
        computerChoice = "PAPER"
    } if (n == 2) {
        computerChoice = "SCISSORS"
    }

    /* 0: ROCK
       1: PAPER
       2: SCISSORS
    */
    
    console.log(computerChoice);
    computer.innerHTML = " " + computerChoice + "!";
    player.innerHTML = " " + playerChoice + "!";
    computerImg.src = "img/" + computerChoice.toLowerCase() + ".png";
    computerImg.style.width = "15%";

    if (playerChoice == "ROCK") {

        if (computerChoice == "ROCK") {
            console.log("TIE");
        }

        if (computerChoice == "PAPER") {
            console.log("LOSE");
            computerWin();
            
        }

        if (computerChoice == "SCISSORS") {
            console.log("WIN");
            playerWin();
        }
    } 
    
    if (playerChoice == "PAPER") {

        if (computerChoice == "ROCK") {
            console.log("WIN");
            playerWin();
        }

        if (computerChoice == "PAPER") {
            console.log("TIE");
        }

        if (computerChoice == "SCISSORS") {
            console.log("LOSE");
            computerWin();
        }
    } 

    if (playerChoice == "SCISSORS") {

        if (computerChoice == "ROCK") {
            console.log("LOSE");
            computerWin();
        }

        if (computerChoice == "PAPER") {
            console.log("WIN");
            playerWin();
        }

        if (computerChoice == "SCISSORS") {
            console.log("TIE");
        }
    } 

function playerWin() {
    playerScore++;
    playerScoreboard.innerHTML = playerScore;
    if (playerScore == 5) {
        setTimeout(function() {
            window.alert('Player wins!');
            window.location.reload(); 
        }, 100);       
    }
}

function computerWin() {
    computerScore++;
    computerScoreboard.innerHTML = computerScore;
    if (computerScore == 5) {
        setTimeout(function() {
        window.alert('Computer wins!');
        window.location.reload();
        }, 100);
    }
}

}