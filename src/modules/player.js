const Gameboard = require("./gameboard"); 

class Player {
  constructor(isComputer = false) {
    this.gameboard = new Gameboard(); // Each player has a gameboard
    this.isComputer = isComputer; 
    this.attackedPositions = new Set(); // Store all attacked positions
    // Sets have O(1) lookup time, making it much faster than iterating over arrays.
  }

  attack(enemyGameboard, coord) {
    enemyGameboard.receiveAttack(coord);
  }

//   computerAttack(enemyGameboard) {
//     let randomCoord;
//     do {
//       randomCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
//     } while (
//       enemyGameboard.missedShots.some(
//         (shot) => shot[0] === randomCoord[0] && shot[1] === randomCoord[1]
//       ) ||
//       enemyGameboard.ships.some((ship) =>
//         ship.hits.some((hit) => hit[0] === randomCoord[0] && hit[1] === randomCoord[1])
//       )
//     );
  
//     enemyGameboard.receiveAttack(randomCoord);
//   }
    computerAttack(enemyGameboard) {
        let randomCoord;
        do {
        randomCoord = `${Math.floor(Math.random() * 10)},${Math.floor(Math.random() * 10)}`;
        } while (this.attackedPositions.has(randomCoord)); // Check if already attacked

        this.attackedPositions.add(randomCoord); // Mark as attacked
        enemyGameboard.receiveAttack(randomCoord.split(',').map(Number)); // Convert back to array
        //  because the receiveAttack method in the Gameboard class expects an array representing the coordinate, like [x, y]

        // .split(',') → Converts "3,5" into ["3", "5"] (an array of strings).
        // .map(Number) → Converts ["3", "5"] into [3, 5] (an array of numbers).
    }


}

module.exports = Player; 
