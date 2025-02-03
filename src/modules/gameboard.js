class Gameboard{
    constructor(){
        this.ships = []
    }

    placeShip(ship, position){
        ship.position = position
        this.ships.push(ship)
    }


}
  
module.exports = Gameboard;


