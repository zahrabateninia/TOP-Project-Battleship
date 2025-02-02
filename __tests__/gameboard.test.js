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
});
