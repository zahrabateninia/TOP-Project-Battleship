class Ship {
    constructor(length, position) {
      this.length = length;
      this.hits = 0;
      this.position = new Set(position.map(coord => coord.join(','))); // Store as a Set for fast lookup
    }
  
    hit(coord) {
      if (this.position.has(coord.join(','))) {
        this.hits++;
        return true; // Ship was hit
      }
      return false;
    }
  
    isSunk() {
      return this.hits >= this.length;
    }
  }
  
  module.exports = Ship;  