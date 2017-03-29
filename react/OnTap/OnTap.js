import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import LiveUpdateGrowler from './LiveUpdateGrowler';
import LiveUpdateCans from './LiveUpdateCans';

class OnTap extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <LiveUpdateGrowler />
        <LiveUpdateCans />
      </div>
    )
  }
}

export default OnTap;
