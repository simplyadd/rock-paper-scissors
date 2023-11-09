console.log("hi")

const move = ["rock", "paper", "scissors"]

function getComputerChoice() {
  i = Math.floor(Math.random() * move.length);
  return move[i]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a draw!"
  }
    
  msgW = "You won! " + playerSelection + " beats " + computerSelection
  msgL = "You lost! " + computerSelection + " beats " + playerSelection

  switch (playerSelection) {
    case "rock":
      return computerSelection=="scissors" ? msgW : msgL;
    case "paper":
      return computerSelection=="rock" ? msgW : msgL;
    case "scissors":
      return computerSelection=="paper" ? msgW : msgL;
    default:
      return "Invalid Entry"
  }
}

const playerSelection = prompt("Rock, Paper, Scissors?")

var res = playRound( playerSelection.toLowerCase(), getComputerChoice() )
console.log(res)