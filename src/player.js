class Player {
  constructor(playerInfo) {
    this.id = playerInfo.id;
    this.token = playerInfo.token;
    this.wins = playerInfo.wins || 0;
  }
}
