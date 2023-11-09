function getComputerChoice() {
  const move = ["rock", "paper", "scissors"]
  i = Math.floor(Math.random() * move.length);
  return move[i]
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      return computerSelection=="scissors" ? 1 : 0;
    case "paper":
      return computerSelection=="rock" ? 1 : 0;
    case "scissors":
      return computerSelection=="paper" ? 1 : 0;
    default:
      return 2
  }
}

var playerPoints = 0, computerPoints=0;
function game() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  let res = playRound(playerSelection, computerSelection)

  if (playerSelection == computerSelection) {
    return "It's a draw!"
  }

  switch (res) {
    case 0:
      computerPoints++;
      let msgL = "You lost! " + computerSelection +
                 " beats " + playerSelection
      return msgL
    
    case 1:
      playerPoints++;
      let msgW = "You won! " + playerSelection +
                 " beats " + computerSelection
      return msgW
    
    case 2:
      return "Invalid Input."                 
  }
}

//Five Rounds
for (let i=0; i<5; i++) {
  let res = game()
  console.log(res)
  console.log("Computer: " + computerPoints + "; You: " + playerPoints)
}


const finalRes = playerPoints - computerPoints;
if (finalRes==0) {
    console.log("Final Result: It's a Draw!")
}
else if (finalRes>0) {
  console.log("Final Result: You won!")
}
else {
  console.log("Final Result: You lost!")
}