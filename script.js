const moves = ["rock", "paper", "scissors"];

function computerPlay() {
  const moveIndex = Math.floor(Math.random() * 3);
  return moves[moveIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerMoveIndex = moves.indexOf(playerSelection);
  const computerMoveIndex = moves.indexOf(computerSelection);
  
  if (playerMoveIndex - computerMoveIndex === 1 ||
      playerMoveIndex - computerMoveIndex === -2) return "win";
  else if (playerMoveIndex - computerMoveIndex === -1 ||
      playerMoveIndex - computerMoveIndex === 2) return "lose";
  else return "tie";
}

function game() {
  let numberOfWins = 0;
  let numberOfLosses = 0;

  //for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    const computerSelection = computerPlay();
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let result = playRound(button.id, computerSelection);
        alert(result);
        if (result === "win") numberOfWins += 1;
        else if (result === "lose") numberOfLosses += 1;
      });
    });
  //}

  return (numberOfWins > numberOfLosses) ? "You Win!" :
      (numberOfWins < numberOfLosses) ? "You Lose!" :
      "It's a Tie!";
}

console.log(game());