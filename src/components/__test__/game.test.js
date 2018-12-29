import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Game } from '../game';
import GameOutcome from '../outcome';
import Board from '../board';
import History from '../history';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    onMount: jest.fn(),
    onClick: jest.fn(),
  }
  const wrapper = shallow(<Game {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('game', () => {
    it('should render the game', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.game').exists()).toBe(true);
    });

    it('should render the game outcome', () => {
      const { wrapper } = setup();

      expect(wrapper.find(GameOutcome).exists()).toBe(true);
    });

    it('should render the board', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Board).exists()).toBe(true);
    });

    it('should render the reset button', () => {
      const { wrapper } = setup();

      expect(wrapper.find('#reset').exists()).toBe(true);
    });

    it('should render the history', () => {
      const { wrapper } = setup();

      expect(wrapper.find(History).exists()).toBe(true);
    });

    it('initializes a game on mount', () => {
      const { props } = setup();

      expect(props.onMount.mock.calls.length).toBe(1);
    });

    it('resets a game on button click', () => {
      const { wrapper, props } = setup();
      wrapper.find('#reset').simulate('click');
      expect(props.onClick.mock.calls.length).toBe(1);
    });
  });
});
