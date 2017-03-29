import React from 'react';

const BeerListDisplayTile = props => {
  let displayMessage;
  if(props.available){
    displayMessage = 'available'
  } else {
    displayMessage = 'sold-out'
  }

  return(
    <div className={`beer-display-tile ${displayMessage}`}>
      <span>{props.name}</span><span className='status'>{displayMessage}</span>
    </div>
  )
}

export default BeerListDisplayTile;
