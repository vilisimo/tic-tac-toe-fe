import { MOVE } from '../actions/actions';

const initialState = {
  moves: {},
  squares: [],
}

const history = (state = initialState, action) => {
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

    default:
      return state;
  }
}

export default history;
