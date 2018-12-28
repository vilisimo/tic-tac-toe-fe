import { api } from '../../services';

export const MOVE = 'MOVE';
export const NEW_GAME = 'NEW_GAME';
export const RESUME_GAME = 'RESUME_GAME';

const SESSION_GAME_KEY = 'ticatactoe-id';

export const thunkedInitGame = () => async dispatch => {
  const gameId = sessionStorage.getItem(SESSION_GAME_KEY);
  if (gameId) {
    dispatch(thunkedResumeGame(gameId))
  } else {
    dispatch(thunkedNewGame());
  }
};

export const thunkedResumeGame = (gameId) => async dispatch => {
  // TODO: add loading indicator
  const game = await api.Game.findOne(gameId);
  if (game) {
    dispatch(resumeGame(game));
    const { moves } = game;
    moves.forEach(m => dispatch(move(m.square, m.x, m.y)));
  } else {
    dispatch(thunkedNewGame());
  }
}

export const thunkedNewGame = () => async dispatch => {
  // TODO: add loading indicator
  const gameId = await api.Game.newGame();
  sessionStorage.setItem(SESSION_GAME_KEY, gameId);
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

export const thunkedMove = (square, x, y) => (dispatch, getState) => {
  const { xTurn, gameId } = getState().moves;
  const player = xTurn ? 'X' : 'O';
  dispatch(move(square, x, y));
  api.Game.makeMove(gameId, { player, square, x, y });
}

export const move = (square, x, y) => ({
  type: MOVE,
  payload: { square, x, y },
});
