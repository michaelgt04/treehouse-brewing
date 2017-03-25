import React, { Component } from 'react';
import Nav from '../sharedResources/Nav'

class People extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>PEOOOOOOOPLE</h1>
      </div>
    )
  }
}

export default People;
