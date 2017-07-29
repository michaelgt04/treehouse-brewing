import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';
import { Router } from 'react-router';
  
test('App should render a Router for the appliation', () => {
  const wrapper =mount(<App />)

  expect(wrapper.find(Router)).toBePresent()
})
