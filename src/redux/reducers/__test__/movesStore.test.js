import moves from '../movesStore';
import { move, newGame, resumeGame } from '../../actions/actions';

describe('reducers', () => {
  describe('moves store reducer', () => {
    it('has initial state', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: true,
        gameId: null,
        winner: null,
      };

      expect(moves(undefined, {})).toEqual(initialState);
    });

    it('sets new game id', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: true,
      };

      const gameId = 'game id';
      const expectedState = { ...initialState, gameId };

      expect(moves(initialState, newGame(gameId))).toEqual(expectedState);
    });

    it('sets resumed game id', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: true,
      };

      const gameId = 'game id';
      const expectedState = { ...initialState, gameId };

      expect(moves(initialState, resumeGame({ id: gameId, actions: [], finished: false }))).toEqual(expectedState);
    });

    it('makes a player 1 move', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: true,
        gameId: 'game Id',
      };

      const expectedBoard = Array(9).fill(null);
      expectedBoard[0] = 'X';
      const expectedState = {
        board: expectedBoard,
        xTurn: false,
        gameId: 'game Id',
        winner: null,
      };

      expect(moves(initialState, move({ square: 0 }))).toEqual(expectedState);
    });

    it('makes a player 2 move', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: false,
      };

      const expectedBoard = Array(9).fill(null);
      expectedBoard[0] = 'O';
      const expectedState = {
        board: expectedBoard,
        xTurn: true,
        winner: null,
      };

      expect(moves(initialState, move({ square: 0 }))).toEqual(expectedState);
    });

    it('calculates winner', () => {
      const initialState = {
        board: ['X', 'O', null, 'X', 'O', 'O', null, 'X', null],
        xTurn: true,
        gameId: 'game id',
      };

      const expectedState =  {
        board: ['X', 'O', null, 'X', 'O', 'O', 'X', 'X', null],
        xTurn: false,
        gameId: 'game id',
        winner: 'X',
      }

      expect(moves(initialState, move({ square: 6 }))).toEqual(expectedState);
    });
  });
});