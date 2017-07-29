import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../src/sharedResources/Nav';
import { Link } from 'react-router';

describe('NavBar on homepage', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Nav 
        className={'home-nav'}
      />
    )   
  })

  test('should render with Links for each section', () => {
    expect(wrapper.find(Link)).toBePresent();
    expect(wrapper.find(Link).length).toEqual(5);
    expect(wrapper.find(Link).first().props().to).toEqual('/')
    expect(wrapper.find(Link).nodes[1].props.to).toEqual('retail-shop')
    expect(wrapper.find(Link).nodes[2].props.to).toEqual('beers')
    expect(wrapper.find(Link).nodes[3].props.to).toEqual('on-tap')
    expect(wrapper.find(Link).nodes[4].props.to).toEqual('team')
  })

  test('should render with the correct homepage logo', () => {
    let homeLogo = 'http://static1.squarespace.com/static/501bb93ec4aa651f100e3b0f/t/54fcb3efe4b0443041485eec/1490403063657/?format=1000w'
    
    expect(wrapper.find('img').first().props().src).toEqual(homeLogo)
  })
})

describe('NavBar on other pages', () => {
  let wrapper = shallow(
    <Nav
      className={'top-nav'}
    />
  )

  test('should render the with smaller logo', () => {
    let otherLogo = 'https://res.cloudinary.com/duor0bzmo/image/upload/v1490473577/TreeHouseLogo_obsz35.png' 

    expect(wrapper.find('img').first().props().src).toEqual(otherLogo)
  })
})
