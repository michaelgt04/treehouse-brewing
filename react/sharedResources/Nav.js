import React from 'react';
import { Link } from 'react-router';

const Nav = props => {
  return(
    <div className={props.className}>
      <img src="http://static1.squarespace.com/static/501bb93ec4aa651f100e3b0f/t/54fcb3efe4b0443041485eec/1490403063657/?format=1000w"/>
      <Link to='/'>Home</Link>
      <Link to='shop'>Shop</Link>
      <Link to='on-tap'>On-Tap</Link>
      <Link to='beers'>Beers</Link>
      <Link to='retail-shop'>Retail Shop</Link>
      <Link to='blog'>Blog</Link>
      <Link to='people'>People</Link>
      <Link to='contact'>Contact</Link>
      <Link to='jobs'>Jobs</Link>
    </div>
  )
}

export default Nav;
