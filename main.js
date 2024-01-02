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
const div = document.createElement('div');

const h1 = document.createElement('h1');
const p = document.createElement('p');
const score = document.createElement('p');

btns.forEach( (button) => {
  button.addEventListener('click', () => { 

    let playerSelection = button.id;
    let computerSelection = getComputerChoice();

    h1.textContent = 'Round ' + count;
    div.appendChild(h1);
    count += 1;
    if (playerSelection == computerSelection) {  
      p.textContent = "It's a draw!";  
    } else {
      let res = playRound(playerSelection, computerSelection)
      switch (res) {
        case 0:
          computerPoints++;
          p.textContent = "You lost! " + computerSelection +
                          " beats " + playerSelection;
          break;
        case 1:
          playerPoints++;
          p.textContent = "You won! " + playerSelection +
                          " beats " + computerSelection;
          break;
        case 999:
          p.textContent = "Invalid Input.";
          break;             
      }

      if (computerPoints == 5 || playerPoints == 5) {
        const finalRes = playerPoints - computerPoints;
        if (finalRes==0) {
          p.textContent = "Final Result: It's a Draw!"
        } else if (finalRes>0) {
          p.textContent = "Final Result: You won!"
        } else {
          p.textContent = "Final Result: You lost!"
        }
      }
    }

    div.appendChild(p);
    score.textContent = 'Computer: ' + computerPoints +
                        '; You: ' + playerPoints;
    
    div.appendChild(score);
    container.appendChild(div);

    if (computerPoints == 5 || playerPoints == 5) {
      count = 0, computerPoints = 0, playerPoints = 0; 
    }
  });
});
