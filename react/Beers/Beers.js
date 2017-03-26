import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import OnTap from './OnTap';
import BeerTile from './BeerTile';

class Beers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/beers').
    then(response => {
      return response.json()
    }).then(beers => {
      debugger;
      this.setState({ beers: beers })
    })
  }

  render(){
    let beers = this.state.beers.map(beer => {
      return(
        <BeerTile
          key={beer.id}
          imgUrl={beer.imgUrl}
          name={beer.name}
        />
      )
    })
    return(
      <div>
        <Nav className='top-nav'/>
        <div className='beers-container'>
          <h2>Beers</h2>
          {beers}
          <OnTap />
        </div>
      </div>
    )
  }
}

export default Beers;
