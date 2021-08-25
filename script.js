function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const moves = ["rock", "paper", "scissors"];
  const playerMoveIndex = moves.indexOf(playerSelection);
  const computerMoveIndex = moves.indexOf(computerSelection);
  if (playerMoveIndex - computerMoveIndex === 1 ||
      playerMoveIndex - computerMoveIndex === -2) {
    return "win";
  }
  else if (playerMoveIndex - computerMoveIndex === -1 ||
      playerMoveIndex - computerMoveIndex === 2){
    return "lose";
  }
}

function game() {
  let numberOfWins = 0;
  let numberOfLosses = 0;

  for (let round = 0; round < 5; round++) {
    const playerSelection = prompt("Enter a move (ex. rock): ").toLowerCase();
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log("Round " + (round + 1) + " computer chose " + 
        computerSelection + " - you " + result);

    if (result === "win") {
      numberOfWins += 1;
    }
    else if (result === "lose") {
      numberOfLosses += 1;
    }
  }

  return (numberOfWins > numberOfLosses) ? "You Win!" :
      (numberOfWins < numberOfLosses) ? "You Lose!" :
      "It's a Tie!";
}

console.log(game());