const Ship = require('../src/modules/ship');

describe('Ship', () => {
  test('creates a ship with the correct length', () => {
    const ship = new Ship(3);  
    expect(ship.length).toBe(3); 
  });
});
