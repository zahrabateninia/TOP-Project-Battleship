class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
    }

    hit(){
      this.hits+=1
    }
  }
  
  module.exports = Ship;  
  