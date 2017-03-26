import React from 'react';

const BeerTile = props => {
  return(
    <div onMouseEnter={props.onHover} onMouseLeave={props.onMouseLeave} className='beer-tile'>
      <img src={props.imgUrl} />
      <span>{props.spanText}</span>
    </div>
  )
}

export default BeerTile;
