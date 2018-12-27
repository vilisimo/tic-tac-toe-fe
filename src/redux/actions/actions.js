import { api } from '../../services';

export const MOVE = 'MOVE';
export const NEW_GAME = 'NEW_GAME';
export const RESUME_GAME = 'RESUME_GAME';

const LS_GAME_KEY = 'ticatactoe-id';

export const thunkedInitGame = () => async dispatch => {
  const gameId = localStorage.getItem(LS_GAME_KEY);
  if (gameId) {
    dispatch(thunkedResumeGame(gameId))
  } else {
    dispatch(thunkedNewGame());
  }
};

export const thunkedResumeGame = (gameId) => async dispatch => {
  const game = await api.Game.findOne(gameId);
  dispatch(resumeGame(game));
}

export const thunkedNewGame = () => async dispatch => {
  const gameId = await api.Game.newGame();
  localStorage.setItem(LS_GAME_KEY, gameId);
  dispatch(newGame(gameId));
}

export const newGame = gameId => ({
  type: NEW_GAME,
  payload: { gameId },
});

export const resumeGame = game => ({
  type: RESUME_GAME,
  payload: game,
});

export const thunkedMove = (square, x, y) => dispatch => {
  dispatch(move(square));
}

export const move = (square) => ({
  type: MOVE,
  payload: {
    square: square,
  }
});
