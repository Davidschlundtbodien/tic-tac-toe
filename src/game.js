class Game {
  constructor() {
    this.player1 = new Player({id: 1, token: "🍺"})
    this.player2 = new Player({id: 2, token: "🍷"})
    this.playerTurn = this.player1
  }

  changePlayerTurn() {
    this.playerTurn = this.playerTurn.id === 1 ? this.player2 : this.player1
  }
}
