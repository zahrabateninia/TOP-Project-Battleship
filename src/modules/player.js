class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.attackedCoordinates = new Set(); // Store attacked coordinates for efficiency
    this.isMyTurn = false; // Track if it's this player's turn
  }

  attack(coord, enemyGameboard) {
    if (!this.isMyTurn) {
      return "not your turn"; // Prevent attacking out of turn
    }

    const coordStr = coord.join(',');

    if (this.attackedCoordinates.has(coordStr)) {
      return "already attacked"; // Prevent duplicate attacks
    }

    this.attackedCoordinates.add(coordStr); // Store attack
    const attackResult = enemyGameboard.receiveAttack(coord); // Calls Gameboard's receiveAttack()

    this.isMyTurn = false; // End turn after attack
    return attackResult;
  }

  computerAttack(enemyGameboard) {
    if (!this.isMyTurn) {
      return "not computer's turn";
    }

    let coord;
    do {
      coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } while (this.attackedCoordinates.has(coord.join(','))); // Ensure unique attack

    const attackResult = this.attack(coord, enemyGameboard);
    this.isMyTurn = false; // End turn after attack
    return attackResult;
  }

  startTurn() {
    this.isMyTurn = true;
  }
}

module.exports = Player;