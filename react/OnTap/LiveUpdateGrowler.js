import React, { Component } from 'react';
import BeerListDisplayTile from './BeerListDisplayTile';

class LiveUpdateGrowler extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className='live-update-growlers'>
        <h1>Growlers</h1>
        <BeerListDisplayTile />
      </div>
    )
  }
}

export default LiveUpdateGrowler;
