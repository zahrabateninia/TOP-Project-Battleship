const Player = require("../src/modules/player");
const Gameboard = require("../src/modules/gameboard");


describe("Player", () => {
  test("creates a player with a gameboard", () => {
    const player = new Player();
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test("player can attack enemy gameboard", () => {
    const player = new Player();
    const enemy = new Player();
    
    enemy.gameboard.placeShip([0, 0]); 
    
    player.attack(enemy.gameboard, [0, 0]); // Attack (0,0)
    
    expect(enemy.gameboard.ships[0].hits).toBe(1); // The ship should be hit
  });

  test("computer makes a random attack", () => {
    const player = new Player(true); // true means it's a computer player
    const enemy = new Player();
  
    player.computerAttack(enemy.gameboard);
  
    // Ensure that either a hit was recorded or a miss was recorded
    const totalAttacks =
      enemy.gameboard.missedShots.length + enemy.gameboard.ships.reduce((sum, ship) => sum + ship.hits, 0);
                                        //Iterates over every ship and adds its .hits property to sum.
  
    expect(totalAttacks).toBe(1); // There should be exactly one recorded attack
  });
  
  
});
