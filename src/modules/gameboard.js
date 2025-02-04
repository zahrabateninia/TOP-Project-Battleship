const Ship = require("./ship")

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = new Set(); // Store missed shots as a Set
  }

  placeShip(length, startCoord, direction) {
    let position = [];

    for (let i = 0; i < length; i++) {
      if (direction === "horizontal") {
        position.push([startCoord[0], startCoord[1] + i]); 
      } else if (direction === "vertical") {
        position.push([startCoord[0] + i, startCoord[1]]);
      }
    }

    const ship = new Ship(length, position);
    this.ships.push(ship);
  }

  receiveAttack(coord) {
    const coordStr = coord.join(',');

    for (let ship of this.ships) {
      if (ship.hit(coord)) {
        return "hit"; // Faster lookup using Set
      }
    }

    this.missedShots.add(coordStr); // Store as a Set
    return "miss";
  }
}

  
  module.exports = Gameboard;