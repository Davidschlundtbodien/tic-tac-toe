class Player {
  constructor(playerInfo) {
    this.id = playerInfo.id;
    this.token = playerInfo.token;
    this.wins = playerInfo.wins || 0;
  }

  saveWinsToStorage() {
    var payload = JSON.stringify(this.wins)
    localStorage.setItem(`${this.id}`, payload)
  }

  retrieveWinsFromStorage() {
    var response = localStorage.getItem(`${this.id}`)
    this.wins = JSON.parse(response)
  }
}
