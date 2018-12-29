import { MOVE, NEW_GAME, RESUME_GAME } from '../actions/actions';
import calculateWinner, { PLAYER_ONE, PLAYER_TWO } from '../../util/rules';

const INITIAL_STATE = {
  board: Array(9).fill(null),
  xTurn: true,
  gameId: null,
  winner: null,
};

const moves = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEW_GAME: {
      const { gameId } = action.payload
      return {
        ...INITIAL_STATE,
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
      board[square] = state.xTurn ? PLAYER_ONE : PLAYER_TWO;
      const winner = calculateWinner(board);

      return {
        ...state,
        board,
        winner,
        xTurn: !state.xTurn,
      };
    }

    default:
      return state;
  }
}

// selectors
export const getPlayer = state => state.moves.xTurn ? PLAYER_ONE : PLAYER_TWO;
export const getWinner = state => state.moves.winner;
export const getBoard = state => state.moves.board;
export const getMark = (state, number) => state.moves.board[number];

export default moves;
