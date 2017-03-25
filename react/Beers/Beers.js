import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import OnTap from './OnTap'

class Beers extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>BEEEEEEEERS</h1>
        <OnTap />
      </div>
    )
  }
}

export default Beers;
