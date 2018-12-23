import { MOVE } from '../actions/types';

const initialState = {
  board: Array(9).fill(null),
  xTurn: true,
};

const moves = (state = initialState, action) => {
  switch (action.type) {
    case MOVE: {
      const { square } = action.payload;
      const board = state.board.slice();
      board[square] = state.xTurn ? 'X' : 'O';

      return {
        board,
        xTurn: !state.xTurn,
      };
    }

    default:
      return state;
  }
}

export default moves;
