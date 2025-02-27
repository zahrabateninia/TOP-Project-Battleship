const Player = require('../src/modules/player');


describe('Player class', () => {
  let player1, player2, mockGameboard;

  beforeEach(() => {
    player1 = new Player();
    player2 = new Player();
    // Creates a mock object 
    mockGameboard = {
      // jest.fn(() => 'hit') tells the mock function to return the string 'hit' when called
      receiveAttack: jest.fn(() => 'hit'),
    };
  });

  test('player cannot attack if it is not their turn', () => {
    expect(player1.attack([0, 0], mockGameboard)).toBe('not your turn');
  });

  test('player can attack when it is their turn', () => {
    player1.startTurn();
    expect(player1.attack([0, 0], mockGameboard)).toBe('hit');
  });

  test('player ends turn after attacking', () => {
    player1.startTurn();
    player1.attack([0, 0], mockGameboard);
    expect(player1.attack([1, 1], mockGameboard)).toBe('not your turn');
  });

  test('turn switches between players', () => {
    player1.startTurn();
    player1.attack([0, 0], mockGameboard);

    player2.startTurn();
    expect(player2.attack([1, 1], mockGameboard)).toBe('hit');
  });

  test('computer cannot attack if it is not its turn', () => {
    const computer = new Player(true);
    expect(computer.computerAttack(mockGameboard)).toBe("not computer's turn");
  });

  test('computer can attack when it is its turn', () => {
    const computer = new Player(true);
    computer.startTurn();
    computer.computerAttack(mockGameboard);
    expect(mockGameboard.receiveAttack).toHaveBeenCalled();
  });
});
