import React, { Component } from 'react';
import Nav from '../sharedResources/Nav'

class Jobs extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>JOOOOOOOOOOOOBS</h1>
      </div>
    )
  }
}

export default Jobs;
