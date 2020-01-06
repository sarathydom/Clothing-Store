import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Component Imports
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'



function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
