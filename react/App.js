import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './HomePage/Home';
import Beers from './Beers/Beers';
import RetailShop from './RetailShop/RetailShop';
import Blog from './Blog/Blog';
import Team from './Team/Team';

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
        <Route path='/beers' component={Beers}/>
        <Route path='/retail-shop' component={RetailShop}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/team' component={Team}/>
      </Router>
    )
  }
}

export default App;
