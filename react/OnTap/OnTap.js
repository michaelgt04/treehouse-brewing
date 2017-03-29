import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import LiveUpdateGrowler from './LiveUpdateGrowler';
import LiveUpdateCans from './LiveUpdateCans';

class OnTap extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      timeoutId: null
    }
  }

  checkBeers(){
    fetch('/api/v1/beers')
    .then(response => {
      let beers = response.json()
      return beers
    }).then(beers => {
      this.setState({ beers: beers })
    })
  }

  componentDidMount(){
    this.checkBeers()

    let timeoutId = setInterval(() => { this.checkBeers() }, 30000)
    this.setState({ timeoutId: timeoutId })
  }

  componentWillUnmount(){
    clearInterval(this.state.timeoutId)
  }

  render(){
    return(
      <div>
        <Nav className='top-nav'/>
        <LiveUpdateGrowler beers={this.state.beers}/>
        <LiveUpdateCans beers={this.state.beers}/>
      </div>
    )
  }
}

export default OnTap;
