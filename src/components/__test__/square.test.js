import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Square } from '../square';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = { mark: 'O', winner: null, onClick: jest.fn() };
  const wrapper = shallow(<Square {...props} />);

  return { props, wrapper };
}

describe('components', () => {
  describe('outcome', () => {
    it('should render the square', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.square').exists()).toBe(true);
    });

    it('should render the mark', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.square').text()).toBe('O');
    });

    it('should call passed in function on click', () => {
      const props = { mark: null, winner: null, onClick: jest.fn() };
      const wrapper = shallow(<Square {...props} />);

      wrapper.find('.square').simulate('click');

      expect(props.onClick.mock.calls.length).toBe(1);
    });
  });
});