const Gameboard = require('../src/modules/gameboard');
const Ship = require('../src/modules/ship');

describe('Gameboard', () => {
  test('places a ship at specific coordinates', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);

    gameboard.placeShip(ship, [0, 0]); // Place the ship at (0,0)

    expect(gameboard.ships.length).toBe(1); // Check if the ship was added
    expect(gameboard.ships[0].position).toEqual([0, 0]); // Check if position is stored correctly
  });

  test('receiveAttack() registers a hit on the correct ship', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    gameboard.placeShip(ship, [0, 0]);
  
    gameboard.receiveAttack([0, 0]); 
  
    expect(ship.hits).toBe(1); // Ship should have 1 hit
  });
  
  test('receiveAttack() records missed shots', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack([2, 2]); 
  
    expect(gameboard.missedShots).toContainEqual([2, 2]); 
  });
  
});
