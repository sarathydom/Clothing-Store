import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Component Imports
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import Header from './Component/Header/Header.Component'
import SignInSignUp from './Pages/Sign-in-Sign-up/Sign-in-Sign-up.Component'
import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentuser:null
    }
  }
  unSubscribeFromAuth=null
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentuser:user},()=>console.log(user))
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header currentuser={this.state.currentuser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUp}/>
        
        </Switch>
      </div>
    );  
  }
  
}

export default App;
