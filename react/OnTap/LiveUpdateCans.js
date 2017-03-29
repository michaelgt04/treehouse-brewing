import React, { Component } from 'react';
import BeerListDisplayTile from './BeerListDisplayTile';

class LiveUpdateCans extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className='live-update-cans'>
        <h1>Cans</h1>
        <BeerListDisplayTile />
      </div>
    )
  }
}

export default LiveUpdateCans;
