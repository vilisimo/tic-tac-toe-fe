import { MOVE } from '../actions/types';

const initialState = {
  loading: false,
};

const moves = (state = initialState, action) => {
  switch (action.type) {
    case MOVE: {
      console.log("Just making sure redux is wired correctly...");
      return state;
    }

    default:
      return state;
  }
}

export default moves;
