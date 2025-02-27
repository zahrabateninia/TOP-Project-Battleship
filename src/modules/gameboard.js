const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = new Set(); // Keep Set for missed shots
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

    // Prevent ship overlap
    if (this.ships.some(ship => 
      ship.position.some(pos => 
        position.some(newPos => newPos[0] === pos[0] && newPos[1] === pos[1])
      )
    )) {
      return "Error: Ship overlap detected!";
    }

    const ship = new Ship(length, position); // position is always an array of arrays
    this.ships.push(ship);
  }

  receiveAttack(coord) {
    for (let ship of this.ships) {
      if (ship.hit(coord)) {
        return "hit"; 
      }
    }

    // Store missed shots as strings for quick lookup in Set
    this.missedShots.add(coord.join(',')); 
    return "miss";
  }
}

module.exports = Gameboard;