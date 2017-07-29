import React from 'react';
import { mount } from 'enzyme';
import Home from '../src/HomePage/Home';
import Nav from '../src/sharedResources/Nav';

describe('Home component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Home />) 
  })
  
  test('Home should render a picture and a Nav component', () => {
    
    expect(wrapper.find(Nav)).toBePresent();
    expect(wrapper.find('img')).toBePresent();
  })

  test('Click on home should set a new picture in the state', () => {
    expect(wrapper.state().currentPictureId).toEqual(0)

    wrapper.find('.background0').simulate('click')

    expect(wrapper.state().currentPictureId).toEqual(1)
  })

  test('Clicking on last picture should reset to the first picture', () => {
    wrapper.setState({currentPictureId: 12}) 

    wrapper.find('.background12').simulate('click')

    expect(wrapper.state().currentPictureId).toEqual(0)
  })
})
