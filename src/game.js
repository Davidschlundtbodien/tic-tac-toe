class Game {
  constructor() {
    this.player1 = new Player({id: 1, token: '🍺'});
    this.player2 = new Player({id: 2, token: '🍷'});
    this.currentPlayer = this.player1;
    this.gameBoard = ['','','','','','','','','']
  }

  updateBoard(index) {
    this.gameBoard[index] = this.currentPlayer.token
  }

  resetBoard() {
    this.currentPlayer = this.player1
    this.gameBoard = ['','','','','','','','','']
  }

  changePlayerTurn() {
    this.currentPlayer = this.currentPlayer.id === 1 ? this.player2 : this.player1
  }

  checkForWin() {
    var winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (var i = 0; i < winConditions.length; i++) {
      var winCondition = winConditions[i]
      var a = this.gameBoard[winCondition[0]];
      var b = this.gameBoard[winCondition[1]];
      var c = this.gameBoard[winCondition[2]];
      if (a !== '' || b !== '' || c !== '')  {
        if (a === b && b === c) {
          this.currentPlayer.retrieveWinsFromStorage()
          this.currentPlayer.wins ++
          this.currentPlayer.saveWinsToStorage()
          return true
        }
      }
    }
  }

  checkForDraw() {
    if (!this.gameBoard.includes('')) {
      return true
    } else {
      return false
    }
  }

  saveToStorage() {
    var payload = JSON.stringify(this)
    localStorage.setItem(`game`, payload)
  }

  retrieveFromStorage() {
    var response = localStorage.getItem(`game`)
    var game = JSON.parse(response)
    this.player1 = new Player(game.player1)
    this.player2 = new Player(game.player2)
    this.currentPlayer = game.currentPlayer.id === 1 ? this.player1 : this.player2
    this.gameBoard = game.gameBoard
  }
}
