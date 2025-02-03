class Gameboard {
    constructor() {
      this.ships = [];
      this.missedShots = []; 
    }
  
    placeShip(ship, position) {
      ship.position = position;
      this.ships.push(ship);
    }
  
    receiveAttack(coord) {
      for (let ship of this.ships) {
        if (JSON.stringify(ship.position) === JSON.stringify(coord)) {
          ship.hit();
          return;
        }
      }
      this.missedShots.push(coord); // If no ship is hit, record a miss
    }
  }
  
  module.exports = Gameboard;
  

