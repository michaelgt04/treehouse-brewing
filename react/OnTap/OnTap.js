import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import LiveUpdateGrowler from './LiveUpdateGrowler';
import LiveUpdateCans from './LiveUpdateCans';
import BeerListDisplayTile from './BeerListDisplayTile';

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
    let beers = this.state.beers.map(beer => {
      return(
        <BeerListDisplayTile
          key={beer.id}
          name={beer.name}
          availableGrowlers={beer.growlers}
          availableCans={beer.cans}
          blurb={beer.blurb}
        />
      )
    })

    return(
      <div className='on-tap-div'>
        <Nav className='top-nav'/>
        <h1>Beers on Tap</h1>
          <div className='live-update'>
          {beers}
          </div>
        <p>
          This page is accurate to start retail hours and will ALWAYS be updated AS SOON AS BEER IS PACKAGED!
          ONCE OUR RETAIL HOURS BEGIN WE CANNOT GUARANTEE THAT THESE BEERS WILL BE AVAILABLE WHEN YOU ARRIVE!
          LIMITS MAY BE ADJUSTED AT ANY TIME.  FOLLOW @treehousebrewco on Twitter for real time updates
        </p>
      </div>
    )
  }
}

export default OnTap;
