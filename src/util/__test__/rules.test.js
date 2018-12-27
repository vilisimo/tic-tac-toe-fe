import calculateWinner from '../rules';

describe('rules', () => {
  it('calculates winners', () => {
    //since there are only 8 winning states, we can easily test it manually
    // for 100% coverage

    // columns
    const state1 = ['X', null, null, 'X', null, null, 'X', null, null];
    const state2 = [null, 'O', null, null, 'O', null, null, 'O', null];
    const state3 = [null, null, 'O', null, null, 'O', null, null, 'O'];

    // rows
    const state4 = ['X', 'X', 'X', null, null, null, null, null, null];
    const state5 = [null, null, null, 'X', 'X', 'X', null, null, null];
    const state6 = [null, null, null, null, null, null, 'X', 'X', 'X'];

    // diagonals
    const state7 = ['O', null, null, null, 'O', null, null, null, 'O'];
    const state8 = [null, null, 'O', null, 'O', null, 'O', null, null];

    const winner1 = calculateWinner(state1);
    const winner2 = calculateWinner(state2);
    const winner3 = calculateWinner(state3);
    const winner4 = calculateWinner(state4);
    const winner5 = calculateWinner(state5);
    const winner6 = calculateWinner(state6);
    const winner7 = calculateWinner(state7);
    const winner8 = calculateWinner(state8);


    expect(winner1).toBe('X');
    expect(winner2).toBe('O');
    expect(winner3).toBe('O');
    expect(winner4).toBe('X');
    expect(winner5).toBe('X');
    expect(winner6).toBe('X');
    expect(winner7).toBe('O');
    expect(winner8).toBe('O');

  })
});
