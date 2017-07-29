import React, { Component } from 'react';
import BeerListDisplayTile from './BeerListDisplayTile';

class LiveUpdateCans extends Component{
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
          available={beer.cans}
        />
      )
    })

    return(
      <div className='live-update'>
        <h1>Cans</h1>
        {beers}
      </div>
    )
  }
}

export default LiveUpdateCans;
