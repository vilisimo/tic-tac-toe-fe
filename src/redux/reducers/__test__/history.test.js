import history, { getSquares, getSquareByNumber } from '../history';
import { move, newGame } from '../../actions/actions';

describe('reducers', () => {
  describe('history store reducer', () => {
    it('has initial state', () => {
      const initialState = { moves: {}, squares: [] };

      expect(history(undefined, {})).toEqual(initialState);
    });

    it('records a move', () => {
      const initialState = { moves: {}, squares: [] };
      const expectedState = {
        moves: {
          0: { player: 'X', x: 1, y: 1 }
        },
        squares: [0, ],
      };

      expect(history(initialState, move({ player: 'X', square: 0, x: 1, y: 1 })))
        .toEqual(expectedState);
    });

    it('appends a move to existing ones', () => {
      const initialState = {
        moves: {
          0: { player: 'X', x: 1, y: 1 }
        },
        squares: [0, ],
      };

      const expectedState = {
        moves: {
          ...initialState.moves,
          1: { player: 'O', x: 2, y: 1 },
        },
        squares: [0, 1, ],
      };

      expect(history(initialState, move({ player: 'O', square: 1, x: 2, y: 1 })))
      .toEqual(expectedState);
    });

    it('resets state when new game is requested', () => {
      const initialState = {
        moves: {
          0: { player: 'X', x: 1, y: 1 }
        },
        squares: [0, ],
      };

      expect(history(initialState, newGame())).toEqual({ moves: {}, squares: []});
    });
  });
});

describe('selectors', () => {
  describe('history store selectors', () => {
    it('retrieves squares', () => {
      const state = { history: { squares: [1, 2, 3], } };

      expect(getSquares(state)).toEqual([1, 2, 3]);
    });

    it('retrieves a move by its square', () => {
      const state = { history: {
        moves: {
          0: { player: 'X', },
          1: { player: 'O', },
        }
      }};

      expect(getSquareByNumber(state, 1)).toEqual({ player: 'O' });
    });
  });
});
