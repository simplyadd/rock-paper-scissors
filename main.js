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

let count = 1;
var playerPoints = 0, computerPoints=0;
const btns = document.querySelectorAll('button');
const container = document.querySelector('#container');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const score = document.createElement('p');

btns.forEach( (button) => {
  button.addEventListener('click', () => { 

    let playerSelection = button.id;
    let computerSelection = getComputerChoice();

    h1.textContent = 'Round ' + count;
    container.appendChild(h1);
    count += 1;
    
    if (playerSelection == computerSelection) {  
      p.textContent = "It's a draw!";  
    }
    else {
      let res = playRound(playerSelection, computerSelection)
      switch (res) {
        case 0:
          computerPoints++;
          let msgL = "You lost! " + computerSelection +
                    " beats " + playerSelection
          p.textContent = msgL;
          break;
        case 1:
          playerPoints++;
          let msgW = "You won! " + playerSelection +
                    " beats " + computerSelection
          p.textContent = msgW;
          break;
        case 999:
          p.textContent = "Invalid Input.";
          break;             
      }
    }

    container.appendChild(p);
    score.textContent = 'Computer: ' + computerPoints +
                        '; You: ' + playerPoints;
    
    container.appendChild(score);
  });
});




/*
//Plays five rounds
for (let i=0; i<5; i++) {
  let res = game()
  console.log(res)
  console.log("Computer: " + computerPoints + "; You: " + playerPoints)
}
*/

/*
const finalRes = playerPoints - computerPoints;
if (finalRes==0) {
    console.log("Final Result: It's a Draw!")
} else if (finalRes>0) {
  console.log("Final Result: You won!")
} else {
  console.log("Final Result: You lost!")
}
*/
