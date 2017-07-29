import React from 'react';

const BeerListDisplayTile = props => {
  let cansDisplayMessage;
  if(props.availableCans){
    cansDisplayMessage = 'available'
  } else {
    cansDisplayMessage = 'sold-out'
  }

  let growlersDisplayMessage;
  if(props.availableGrowlers){
    growlersDisplayMessage = 'available'
  } else {
    growlersDisplayMessage = 'sold-out'
  }

  return(
    <div className='beer-display-tile'>
      <div className='beer-display-name'>
        <p>{props.name}</p>
      </div>
      <div className='beer-display-status'>
        <p className={`${cansDisplayMessage}`}>Cans: {cansDisplayMessage}</p>
        <p className={`${growlersDisplayMessage}`}>Growlers: {growlersDisplayMessage}</p>
      </div>
    </div>
  )
}

export default BeerListDisplayTile;
