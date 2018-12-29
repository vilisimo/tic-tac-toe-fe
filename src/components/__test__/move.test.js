import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Move } from '../move';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    index: 0,
    move: { player: 'X', square: 0, x: 1, y: 1},
  };
  const wrapper = shallow(<Move {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('move', () => {
    it('should render the move', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.move').exists()).toBe(true);
    });

    it('should have the text filled in with properties', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.move').text()).toBe('1. Player X marked (1, 1)');
    });
  });
});
