import { newGame, NEW_GAME, resumeGame, RESUME_GAME, move, MOVE } from '../actions';

describe('actions', () => {
  describe('simple action creators', () => {
    it('new game', () => {
      expect(newGame('game id')).toEqual({ type: NEW_GAME, payload: { gameId: 'game id' } });
    });

    it('resume game', () => {
      const game = { gameId: 'game id', moves: [{ player: 'X', square: 0, x: 1, y: 1 }]};
      expect(resumeGame(game)).toEqual({ type: RESUME_GAME, payload: game });
    });

    it('move', () => {
      const playerMove = { player: 'X', square: 0, x: 1, y: 1 };
      expect(move(playerMove)).toEqual({ type: MOVE, payload: playerMove });
    });
  });
});