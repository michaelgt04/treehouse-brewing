import React, { Component } from 'react';
import Nav from '../sharedResources/Nav'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPictureId: 0
    }

    this.changeBackgroundPicture = this.changeBackgroundPicture.bind(this);
  }

  changeBackgroundPicture(){
    let newCurrentPictureId;
    if (this.state.currentPictureId < 12){
      newCurrentPictureId = this.state.currentPictureId + 1
    } else {
      newCurrentPictureId = 0
    }
    this.setState({ currentPictureId: newCurrentPictureId })
  }

  render(){
    return(
      <div className={`background${this.state.currentPictureId}`} onClick={this.changeBackgroundPicture}>
        <Nav className='home-nav'/>
      </div>
    )
  }
}

export default Home;
