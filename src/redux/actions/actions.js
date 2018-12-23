import { MOVE } from './types';

export const thunkedMove = (square) => async dispatch => {
  console.log("Going through thunk");
  dispatch(move(square));
}

export const move = (square) => ({
  type: MOVE,
  payload: {
    square: square,
  }
});
