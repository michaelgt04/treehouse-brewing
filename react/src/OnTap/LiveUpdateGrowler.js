import React, { Component } from 'react';
import BeerListDisplayTile from './BeerListDisplayTile';

class LiveUpdateGrowler extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    let beers = this.props.beers.map(beer => {
      return(
        <BeerListDisplayTile
          key={beer.id}
          name={beer.name}
          available={beer.growlers}
        />
      )
    })

    return (
      <div className='live-update'>
        <h1>Growlers</h1>
        {beers}
      </div>
    )
  }
}

export default LiveUpdateGrowler;
