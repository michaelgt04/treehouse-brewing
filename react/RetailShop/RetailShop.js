import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';

class RetailShop extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <h1>REEEEEEETAIL SHOP</h1>
      </div>
    )
  }
}

export default RetailShop;
