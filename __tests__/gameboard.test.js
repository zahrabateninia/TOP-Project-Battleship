const Gameboard = require("../src/modules/gameboard");
const Ship = require("../src/modules/ship");

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("places a ship at the correct coordinates", () => {
    gameboard.placeShip(3, [2, 2], "horizontal");

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.ships[0].position).toEqual([
      [2, 2],
      [2, 3],
      [2, 4],
    ]);
  });

  test("prevents overlapping ships", () => {
    gameboard.placeShip(3, [1, 1], "horizontal");
    const result = gameboard.placeShip(2, [1, 2], "horizontal"); // Overlaps

    expect(result).toBe("Error: Ship overlap detected!");
    expect(gameboard.ships.length).toBe(1); // No second ship added
  });

  test("registers a hit when a ship is attacked", () => {
    gameboard.placeShip(3, [0, 0], "vertical");
    const result = gameboard.receiveAttack([0, 0]);

    expect(result).toBe("hit");
    expect(gameboard.ships[0].hits).toBe(1);
  });

  test("registers a miss when attacking an empty coordinate", () => {
    gameboard.placeShip(3, [5, 5], "horizontal");
    const result = gameboard.receiveAttack([2, 2]);

    expect(result).toBe("miss");
    expect(gameboard.missedShots.has("2,2")).toBe(true);
  });
});
