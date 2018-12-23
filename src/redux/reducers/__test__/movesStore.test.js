import moves from '../movesStore';
import { move } from '../../actions/actions';

describe('moves store reducer', () => {
  it('has initial state', () => {
    const initialState = {
      board: Array(9).fill(null),
      xTurn: true,
    };

    expect(moves(undefined, {})).toEqual(initialState);
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