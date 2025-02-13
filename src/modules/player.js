class Player {
    constructor(isComputer = false) {
      this.isComputer = isComputer;
      this.attackedCoordinates = new Set(); // Store attacked coordinates for efficiency
    }
  
    attack(coord, enemyGameboard) {
      const coordStr = coord.join(',');
  
      if (this.attackedCoordinates.has(coordStr)) {
        return "already attacked"; // Prevent duplicate attacks
      }
  
      this.attackedCoordinates.add(coordStr); // Store attack
      return enemyGameboard.receiveAttack(coord); // Calls Gameboard's receiveAttack()
    }
  
    computerAttack(enemyGameboard) {
      let coord;
      do {
        coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      } while (this.attackedCoordinates.has(coord.join(','))); // Ensure unique attack
  
      return this.attack(coord, enemyGameboard);
    }
  }
  

module.exports = Player; 
