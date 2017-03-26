import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import People from './People';
import Jobs from './Jobs';
import Contact from './Contact';

class Team extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>TEAM</h1>
        <People />
        <Jobs />
        <Contact />
      </div>
    )
  }
}

export default Team;
