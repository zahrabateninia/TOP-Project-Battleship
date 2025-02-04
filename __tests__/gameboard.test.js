const Gameboard = require("../src/modules/gameboard")

test("places a ship correctly", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, [0, 0], "horizontal");
  expect(gameboard.ships[0].position.has("0,0")).toBe(true);
  expect(gameboard.ships[0].position.has("0,1")).toBe(true);
});

test("registers a hit on a ship", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(2, [1, 1], "horizontal");
  expect(gameboard.receiveAttack([1, 1])).toBe("hit");
});

test("registers a missed shot", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(2, [1, 1], "horizontal");
  expect(gameboard.receiveAttack([3, 3])).toBe("miss");
  expect(gameboard.missedShots.has("3,3")).toBe(true);
});
