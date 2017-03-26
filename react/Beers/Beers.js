import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import BeerTile from './BeerTile';

class Beers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      hoverBeer: null
    }

    this.onHover = this.onHover.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onHover(id){
    this.setState({ hoverBeer: id })
  }

  onMouseLeave(){
    this.setState({ hoverBeer: null })
  }

  componentDidMount(){
    fetch('/api/v1/beers').
    then(response => {
      return response.json()
    }).then(beers => {
      this.setState({ beers: beers })
    })
  }

  render(){
    let beers = this.state.beers.map(beer => {
      let text;
      if (this.state.hoverBeer === beer.id){
        text = beer.blurb
      } else {
        text = beer.name
      }

      let onHover = () => {
        this.onHover(beer.id)
      }

      return(
        <BeerTile
          key={beer.id}
          imgUrl={beer.imgUrl}
          spanText={text}
          onHover={onHover}
          onMouseLeave={this.onMouseLeave}
        />
      )
    })
    return(
      <div>
        <Nav className='top-nav'/>
        <div className='beers-container'>
          <h2 className='title'>Beers</h2>
          <p>Tree House Brewing Company brews a vast array of ales.  Our offerings vary based on the season, our moods, and innovations discovered in the midst of day in and day out brewing.  Our artisan brewery knows no bounds and we are driven by an intense curiosity of ingredients and how they blend together to create something special.</p>
          <p>We are a draft only brewery and that allows us the freedom constantly rotate our offerings, and introduce new ones.  At our retail shop, we (almost) always pour four beers for growler fills to take home and enjoy.</p>
          {beers}
        </div>
      </div>
    )
  }
}

export default Beers;
