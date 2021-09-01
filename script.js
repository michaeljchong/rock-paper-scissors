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

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (numberOfWins >= 5 || numberOfLosses >= 5) {
        const outcome = document.querySelector('#output');
        outcome.textContent = (numberOfWins > numberOfLosses) ? "You Win!" :
            (numberOfWins < numberOfLosses) ? "You Lose!" :
            "It's a Tie!";
        score.appendChild(outcome);
        return;
      }

      const computerSelection = computerPlay();
      let result = playRound(button.id, computerSelection);
      const computerOutput = document.querySelector('#output');
      computerOutput.textContent = `Computer chose ${computerSelection}.`;
      score.appendChild(computerOutput);

      if (result === "win") numberOfWins += 1;
      else if (result === "lose") numberOfLosses += 1;

      const runnningScore = document.querySelector('#runningScore');
      runnningScore.textContent = `Player: ${numberOfWins} | Computer: ${numberOfLosses}`;
    });
  });
}

game();