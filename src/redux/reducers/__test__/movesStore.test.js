import moves from '../movesStore';
import { move, newGame, resumeGame } from '../../actions/actions';

describe('reducers', () => {
  describe('moves store reducer', () => {
    it('has initial state', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: true,
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
      };

      const expectedBoard = initialState.board;
      expectedBoard[0] = 'X';
      const expectedState = {
        board: expectedBoard,
        xTurn: false,
      };

      expect(moves(initialState, move(0))).toEqual(expectedState);
    });

    it('makes a player 2 move', () => {
      const initialState = {
        board: Array(9).fill(null),
        xTurn: false,
      };

      const expectedBoard = initialState.board;
      expectedBoard[0] = 'O';
      const expectedState = {
        board: expectedBoard,
        xTurn: true,
      };

      expect(moves(initialState, move(0))).toEqual(expectedState);
    });
  });
});