const initialState = {
  players: [
    {
      playerName: 'Player 1',
      globalScore: 0
    },
    {
      playerName: 'Player 2',
      globalScore: 0
    }
  ],
  currentScore: 0,
  activePlayerIndex: 0,
  diceRoll: 0,
  thereIsWinner: false,
  disabled: false
};

export default initialState
