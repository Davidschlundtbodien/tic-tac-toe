var currentGame = new Game()

// SELECTORS
var playerOne = document.getElementById('playerOne')
var playerTwo = document.getElementById('playerTwo')
// EVENT LISTENERS
window.addEventListener('load', loadPlayers)

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
