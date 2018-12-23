import { MOVE } from './types';

export const move = () => ({
  type: MOVE
});

export const thunkedMove = () => async dispatch => {
  console.log("Going through thunk");
  dispatch(move());
}
