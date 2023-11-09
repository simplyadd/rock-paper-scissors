function getComputerChoice() {
  const computerMove = ["Rock", "Paper", "Scissors"]
  i = Math.floor(Math.random() * computerMove.length);
  return computerMove[i]
}

//Plays a round and returns a point or error (999)
function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      return computerSelection=="Scissors" ? 1 : 0;
    case "Paper":
      return computerSelection=="Rock" ? 1 : 0;
    case "Scissors":
      return computerSelection=="Paper" ? 1 : 0;
    default:
      return 999
  }
}

function toTitleCase(str) {
  str = str.toLowerCase()
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var playerPoints = 0, computerPoints=0;
function game() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  playerSelection = toTitleCase(playerSelection);
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
    
    case 999:
      return "Invalid Input."                 
  }
}

//Plays five rounds
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