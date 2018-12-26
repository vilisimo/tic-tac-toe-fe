import { api } from '../../services';

export const MOVE = 'MOVE';
export const NEW_GAME = 'NEW_GAME';
export const RESUME_GAME = 'RESUME_GAME';

const LS_GAME_KEY = 'ticatactoe-id';

export const thunkedInit = () => async dispatch => {
  let gameId = localStorage.getItem(LS_GAME_KEY);
  if (gameId) {
    const game = await api.Game.findOne(gameId);
    dispatch(resumeGame(game));
  } else {
    gameId = await api.Game.newGame();
    localStorage.setItem(LS_GAME_KEY, gameId);
    dispatch(newGame());
  }
};

export const newGame = () => ({
  type: NEW_GAME,
});

export const resumeGame = (game) => ({
  type: RESUME_GAME,
  payload: game,
});

export const thunkedMove = (square, x, y) => async dispatch => {
  dispatch(move(square));
}

export const move = (square) => ({
  type: MOVE,
  payload: {
    square: square,
  }
});
