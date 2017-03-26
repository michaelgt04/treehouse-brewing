import React, { Component } from 'react';
import Nav from '../sharedResources/Nav';
import OnTap from './OnTap';
import BeerTile from './BeerTile';

class Beers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [
        {
          id: 1,
          imgUrl: 'https://pbs.twimg.com/media/C7sXDjnVQAEv-Di.jpg',
          name: 'Doppelganger'
        },
        {
          id: 2,
          imgUrl: 'https://pbs.twimg.com/media/C7msh2GXUAM-ts9.jpg:large',
          name: 'Sap'
        },
        {
          id: 3,
          imgUrl: 'https://pbs.twimg.com/media/C69fYKjVoAIW6ga.jpg:large',
          name: 'Lights On'
        },
        {
          id: 4,
          imgUrl: 'https://pbs.twimg.com/media/C6v5RM5WkAAEGfj.jpg:large',
          name: 'Green'
        },
        {
          id: 5,
          imgUrl: 'https://pbs.twimg.com/media/C6k02NMU0AA7WOV.jpg:large',
          name: 'Haze'
        },
        {
          id: 6,
          imgUrl: 'https://pbs.twimg.com/media/C6jmZVeU0AMt4EU.jpg:large',
          name: 'Eureka'
        }
      ]
    }
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
