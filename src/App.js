import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Component Imports
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component'

const temp = (props)=>{
  console.log(props,'from temp functional component')
  return(<div>
    Home Page Component 
  </div>)
}

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={temp}/>
      </Switch>
    </div>
  );
}

export default App;
