import React from 'react';
import Counter from './Counter';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  it('Poprawnie wyświetla licznik w H1', () => {
    wrapper = mount(<Counter />);
    expect(wrapper.find('h1').text()).toBe("5")
  });

  it('Poprawnie wyświetla Boom! w H1', () => {
    wrapper = mount(<Counter />);
    setTimeout(() => {
      expect(wrapper.find('h1').text()).toBe("Boom!");
    }, 5000)
  });
});