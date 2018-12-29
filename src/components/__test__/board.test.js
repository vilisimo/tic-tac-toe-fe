import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Board from '../board';
import Row from '../row';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => ({
  wrapper: shallow(<Board />),
});

describe('components', () => {
  describe('board', () => {
    it('should render the board', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.board').exists()).toBe(true);
    });

    it('should render rows', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Row).length).toEqual(3);
    });
  });
});
