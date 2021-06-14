var currentGame = new Game()

// SELECTORS
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
var gameMessage = document.getElementById('gameMessage')
var gameBoard = document.getElementById('gameBoard')
// EVENT LISTENERS
window.addEventListener('load', loadPlayers)
gameBoard.addEventListener('click', function(event) {
  if (event.target.className === 'cell' && !event.target.innerText) {
    handleTurn(event.target)
  }
});

// EVENT HANDLERS
function loadPlayers() {
  playerOne.innerHTML = `
  <h1>${currentGame.player1.token}</h1>
  <p>Wins: ${currentGame.player1.wins}</p>
  `
  playerTwo.innerHTML = `
  <h1>${currentGame.player2.token}</h1>
  <p>Wins: ${currentGame.player2.wins}</p>
  `
}

function handleTurn(cell) {
  placeToken(cell)

  if (checkBoard()) {
    loadPlayers()
    return
  }

  switchPlayer()
}

function checkBoard() {
  if (currentGame.checkForWin()) {
    return gameMessage.innerText = `${currentGame.playerTurn.token} has won!`
  } else if (currentGame.checkForDraw()) {
    return gameMessage.innerText = "DRAW!"
  }
}

function placeToken(cell) {
  cell.innerText = currentGame.playerTurn.token
  currentGame.updateBoard(cell.id)
}

function switchPlayer() {
  currentGame.changePlayerTurn()
  gameMessage.innerText = `It's ${currentGame.playerTurn.token} turn!`
}

function startNewGame() {
  var cells = document.getElementsByClassName("cell")
  for (var i = 0; i < cells.length; i++) {
    cells[i]. innerText = ''
  }
  currentGame.resetBoard()
}
