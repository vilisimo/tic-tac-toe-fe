import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { History } from '../history';
import Move from '../move';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    squares: [3, 4],
  };
  const wrapper = shallow(<History {...props} />);

  return { props, wrapper };
};

describe('components', () => {
  describe('history', () => {
    it('should render the history', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.history').exists()).toBe(true);
      expect(wrapper.find('.title').text()).toEqual('History:');
    });

    it('should render moves that have been made', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Move).length).toBe(2);
    });

    it('should pass down square number to move component', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Move).get(0).props.square).toBe(3);
      expect(wrapper.find(Move).get(1).props.square).toBe(4);
    });

    it('should pass down index to move component', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Move).get(0).props.index).toBe(0);
      expect(wrapper.find(Move).get(1).props.index).toBe(1);
    });
  });
});

