import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './HomePage/Home';
import Shop from './Shop/Shop';
import OnTap from './OnTap/OnTap';
import Beers from './Beers/Beers';
import RetailShop from './RetailShop/RetailShop';
import Blog from './Blog/Blog';
import People from './People/People';
import Contact from './Contact/Contact';
import Jobs from './Jobs/Jobs';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/on-tap' component={OnTap}/>
        <Route path='/beers' component={Beers}/>
        <Route path='/retail-shop' component={RetailShop}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/people' component={People}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/jobs' component={Jobs}/>
      </Router>
    )
  }
}

export default App;
