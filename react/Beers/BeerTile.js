import React from 'react';

const BeerTile = props => {
  return(
    <div className='beer-tile'>
      <img src={props.imgUrl} />
      <span>{props.name}</span>
    </div>
  )
}

export default BeerTile;
