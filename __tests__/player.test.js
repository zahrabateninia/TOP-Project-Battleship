const Player = require("../src/modules/player");
const Gameboard = require("../src/modules/gameboard");


test("player can attack enemy gameboard", () => {
  const player = new Player();
  const enemyGameboard = new Gameboard();
  enemyGameboard.placeShip(2, [1, 1], "horizontal");

  expect(player.attack([1, 1], enemyGameboard)).toBe("hit");
  expect(player.attack([2, 2], enemyGameboard)).toBe("miss");
});

test("computer makes a random attack", () => {
  const player = new Player(true);
  const enemyGameboard = new Gameboard();

  const result = player.computerAttack(enemyGameboard);
  expect(["hit", "miss"]).toContain(result);
  expect(player.attackedCoordinates.size).toBe(1); // Ensure attack is recorded
});
