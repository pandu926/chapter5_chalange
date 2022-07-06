class GameSuit {
  constructor(com, player) {
    this.com = com;
    this.player = player;
  }
  rules() {
    let hasil = "";
    if (this.player == this.com) {
      hasil = "DRAW";
    } else if (this.player == "batu") {
      hasil = this.com == "kertas" ? "COM WIN" : "PLAYER 1 WIN";
    } else if (this.player == "kertas") {
      hasil = this.com == "batu" ? "PLAYER 1 WIN" : "COM WIN";
    } else if (this.player == "gunting") {
      hasil = this.com == "batu" ? "COM WIN" : "PLAYER 1 WIN";
    }
    return hasil;
  }
}
