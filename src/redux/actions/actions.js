import { api } from '../../services';
import { PLAYER_ONE, PLAYER_TWO } from '../../util/rules';

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

export const thunkedResumeGame = gameId => async dispatch => {
  const game = await api.Game.findOne(gameId);
  if (game) {
    dispatch(resumeGame(game));
    const { moves } = game;
    moves.forEach(m => dispatch(move({
      player: m.player,
      square: m.square,
      x: m.x,
      y: m.y
    })));
  } else {
    dispatch(thunkedNewGame());
  }
}

export const thunkedNewGame = () => async dispatch => {
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
  const payload = { player: xTurn ? PLAYER_ONE : PLAYER_TWO, square, x, y }
  dispatch(move(payload));
  api.Game.makeMove(gameId, payload);
}

export const move = payload => ({
  type: MOVE,
  payload,
});
