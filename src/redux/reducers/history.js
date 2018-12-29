import { MOVE, NEW_GAME } from '../actions/actions';

const INITIAL_STATE = {
  moves: {},
  squares: [],
}

const history = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE: {
      const { player, square, x, y } = action.payload
      const squares = state.squares.slice();
      squares.push(square);

      return {
        moves: {
          ...state.moves,
          [square]: { player, x, y },
        },
        squares,
      }
    }

    case NEW_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default history;
