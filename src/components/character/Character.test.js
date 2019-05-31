import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a character', () => {
    const wrapper = shallow(<Character />);
    expect(wrapper).toMatchSnapshot();
  });
});
