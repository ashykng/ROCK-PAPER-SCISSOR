const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore").children[0];
const computerScore = document.getElementById("computerScore").children[0];
const choices = ["rock", "paper", "scissor"];
let pScore = 0;
let cScore = 0;

function playGame(player){
    let result = "";
    const computer = choices[Math.floor(Math.random() * 3)];

    playerChoice.textContent = `PLAYER: ${player}`;
    computerChoice.textContent = `COMPUTER: ${computer}`;

    if (player === computer)
        result = "IT'S A TIE!"

    else{
        switch(player){
            case "rock":
                result = (computer === "scissor") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "paper":
                result = (computer === "rock") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "scissor":
                result = (computer === "paper") ? "YOU WIN!": "YOU LOSE!";
                break;
        }
    }

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("green", "red");

    switch(result){
        case "YOU WIN!":
            playerScore.textContent = ++pScore;
            resultDisplay.classList.add("green");
            break;
        case "YOU LOSE!":
            computerScore.textContent = ++cScore;
            resultDisplay.classList.add("red");
            break;
    }

}