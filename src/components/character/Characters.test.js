import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders a list of characters', () => {
    const wrapper = shallow(<Characters />);
    expect(wrapper).toMatchSnapshot();
  });
});
