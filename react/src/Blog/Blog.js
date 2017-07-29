import React, { Component } from 'react';
import Nav from '../sharedResources/Nav'

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>BLOOOOOOOOOOOOG</h1>
      </div>
    )
  }
}

export default Blog;
