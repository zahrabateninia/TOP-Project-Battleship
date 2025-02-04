import Player from "../src/player";
import Gameboard from "../src/gameboard";

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
  
});
