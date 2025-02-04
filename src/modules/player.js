import Gameboard from "./Gameboard.js"; 

class Player {
  constructor(isComputer = false) {
    this.gameboard = new Gameboard(); // Each player has a gameboard
    this.isComputer = isComputer; 
  }

  attack(enemyGameboard, coord) {
    enemyGameboard.receiveAttack(coord);
  }

  computerAttack(enemyGameboard) {
    let randomCoord;
    do {
      randomCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } while (
      enemyGameboard.missedShots.some(
        (shot) => shot[0] === randomCoord[0] && shot[1] === randomCoord[1]
      )
    ); // Ensure the attack hasn't been made before

    enemyGameboard.receiveAttack(randomCoord);
  }
}

export default Player;
