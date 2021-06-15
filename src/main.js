var currentGame = new Game()

// SELECTORS
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
var gameMessage = document.getElementById('gameMessage')
var gameBoard = document.getElementById('gameBoard')
// EVENT LISTENERS
window.addEventListener('load', loadGame)
gameBoard.addEventListener('click', function(event) {
  if (event.target.className === 'cell' && !event.target.innerText) {
    handleTurn(event.target)
  }
});

// EVENT HANDLERS
function loadGame() {
  if (localStorage.getItem(`game`)) {
    currentGame.retrieveFromStorage()
  }
  loadPlayers()
  loadBoard()
}

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

function loadBoard() {
  gameMessage.innerText = `It's ${currentGame.playerTurn.token} turn!`
  var cells = document.getElementsByClassName("cell")
  for (var i = 0; i < currentGame.gameBoard.length; i++) {
    cells[i].innerText = currentGame.gameBoard[i]
  }
}

function handleTurn(cell) {
  placeToken(cell)

  if (checkBoard()) {
    loadPlayers()
    gameBoard.addEventListener('click', startNewGame)
    return
  }

  switchPlayer()
  currentGame.saveToStorage()
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
  updateGameMessage()
}

function startNewGame() {
  var cells = document.getElementsByClassName("cell")
  for (var i = 0; i < cells.length; i++) {
    cells[i]. innerText = ''
  }
  currentGame.resetBoard()
  updateGameMessage()
  currentGame.saveToStorage()
  gameBoard.removeEventListener('click', startNewGame)
}

function updateGameMessage() {
  gameMessage.innerText = `It's ${currentGame.playerTurn.token} turn!`
}
