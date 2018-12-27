import { MOVE, NEW_GAME, RESUME_GAME } from '../actions/actions';

const initialState = {
  board: Array(9).fill(null),
  xTurn: true,
};

const moves = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME: {
      const { gameId } = action.payload
      return {
        ...state,
        gameId,
      }
    }

    case RESUME_GAME: {
      const { id } = action.payload;
      return {
        ...state,
        gameId: id,
      }
    }

    case MOVE: {
      const { square } = action.payload;
      const board = state.board.slice();
      board[square] = state.xTurn ? 'X' : 'O';

      return {
        ...state,
        board,
        xTurn: !state.xTurn,
      };
    }

    default:
      return state;
  }
}

export default moves;
