import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameOutcome } from '../outcome';

Enzyme.configure({ adapter: new Adapter() })

describe('components', () => {
  describe('outcome', () => {
    it('should render the outcome', () => {
      const props = { player: null, winner: null, board: [] };
      const wrapper = shallow(<GameOutcome {...props} />);

      expect(wrapper.find('.outcome').exists()).toBe(true);
    });

    it('should inform of a draw', () => {
      const props = { player: null, winner: null, board: [] };
      const wrapper = shallow(<GameOutcome {...props} />);

      expect(wrapper.find('.outcome').text()).toBe("It's a draw!");
    });

    it('should inform that a player O won the game', () => {
      const props = { player: null, winner: 'O', board: [] };
      const wrapper = shallow(<GameOutcome {...props} />);

      expect(wrapper.find('.outcome').text()).toBe('Player O won the game!');
    });

    it("should inform that it's player X's turn", () => {
      const props = { player: 'X', winner: null, board: [null] };
      const wrapper = shallow(<GameOutcome {...props} />);

      expect(wrapper.find('.outcome').text()).toBe("Player X's turn");
    });
  });
});
