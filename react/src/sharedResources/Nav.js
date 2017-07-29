import React from 'react';
import { Link } from 'react-router';

const Nav = props => {
  let imgUrl, linksDiv;
  if (props.className === 'top-nav') {
    imgUrl = 'https://res.cloudinary.com/duor0bzmo/image/upload/v1490473577/TreeHouseLogo_obsz35.png';
    linksDiv = 'links-div';
  } else {
    imgUrl = 'http://static1.squarespace.com/static/501bb93ec4aa651f100e3b0f/t/54fcb3efe4b0443041485eec/1490403063657/?format=1000w';
  }

  return(
    <div className={props.className}>
      <img src={imgUrl}/>
      <div className='links-div'>
        <Link to='/'>Home</Link>
        <Link to='retail-shop'>Retail Shop</Link>
        <Link to='beers'>Beers</Link>
        <Link to='on-tap'>On Tap</Link>
        <Link to='team'>Team</Link>
      </div>
    </div>
  )
}

export default Nav;
