export const PLAYER_ONE = 'X';
export const PLAYER_TWO = 'O';

const calculateWinner = board => {
  const combinations = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // diagonal top left - bot right
    [2, 4, 6], // diagonal top right - bot left
  ];

  let winner = null;
  combinations.forEach(combination => {
    const [first, second, third] = combination;
    if (board[first] && board[first] === board[second] && board[first] === board[third]) {
      winner = board[first];
    }
  });

  return winner;
}

export default calculateWinner;
