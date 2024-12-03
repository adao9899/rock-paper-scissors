function getComputerChoice() {
    let outCome = Math.floor(Math.random() * 3); // Get a random integer between 0 and 2
    if (outCome === 0) {
        return "Rock";
    } else if (outCome === 1) {
        return "Paper";
    } else if (outCome === 2) {
        return "Scissors";
    }
}

function getHumanChoice() {
let humanInput = prompt("Choose from one of the following, Rock, Paper, or Scissors")
let humanInputLowerCase = humanInput.toLowerCase()
if (humanInputLowerCase === "rock") {
    return "Rock"
}
    else if (humanInputLowerCase === "paper") {
        return "Paper"
    } else if (humanInputLowerCase === "scissors") {
        return "Scissors"
    } 
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice,humanChoice) {
    if (computerChoice === humanChoice) {
        return "Tie!"
    } else if (computerChoice === "Rock" && humanChoice ==="Paper") {
        return "You win"
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        return "Computer wins"
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        return "Computer wins"
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        return "You win"
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        return "You win"
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        return "Computer wins"
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let result = playRound(computerChoice,humanChoice)
        if (result === "You win") {
            humanScore++
        } else if (result === "Computer wins") {
            computerScore++
        }
        console.log(result)
    }
    return {humanScore, computerScore}
}
playGame()
function compareGame(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "You win"
    }   else if (humanScore < computerScore) {
        return "You lose"
    }   else if (humanScore === computerScore) {
        return "It's a Tie!"
    }
}

let result = compareGame(humanScore, computerScore)
console.log(result)