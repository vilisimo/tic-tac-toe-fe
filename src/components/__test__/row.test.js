import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Row from '../row';
import Square from '../square';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => ({
   wrapper: shallow(<Row row={1} />),
});

describe('components', () => {
  describe('row', () => {
    it('should render the row', () => {
      const { wrapper } = setup();

      expect(wrapper.find('.row').exists()).toBe(true);
    });

    it('should render squares', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Square).length).toEqual(3);
    });

    it('should pass down the square numbers', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Square).get(0).props.number).toBe(3);
      expect(wrapper.find(Square).get(1).props.number).toBe(4);
      expect(wrapper.find(Square).get(2).props.number).toBe(5);
    });

    it('should pass down x values', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Square).get(0).props.x).toBe(1);
      expect(wrapper.find(Square).get(1).props.x).toBe(2);
      expect(wrapper.find(Square).get(2).props.x).toBe(3);
    });

    it('should pass down y values', () => {
      const { wrapper } = setup();

      expect(wrapper.find(Square).get(0).props.y).toBe(2);
      expect(wrapper.find(Square).get(1).props.y).toBe(2);
      expect(wrapper.find(Square).get(2).props.y).toBe(2);
    });
  });
});
