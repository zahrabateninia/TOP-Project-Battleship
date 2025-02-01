const Ship = require('../src/modules/ship');

describe('Ship', () => {
  test('creates a ship with the correct length', () => {
    const ship = new Ship(3);  
    expect(ship.length).toBe(3); 
  });

  test('increase hits when hit() is called', ()=>{
    const ship = new Ship(3)
    ship.hit()
    expect(ship.hits).toBe(1)
  })
});
