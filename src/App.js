import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Redux Imports
import {connect} from 'react-redux';
import {setCurrentUser} from'./Redux/user/User.action'

//Component Imports
import './App.css';
import HomePage from './Pages/Homepage/Homepage.component'
import ShopPage from './Pages/shop/Shop.component'
import Header from './Component/Header/Header.Component'
import SignInSignUp from './Pages/Sign-in-Sign-up/Sign-in-Sign-up.Component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'


class App extends React.Component {
 
  unSubscribeFromAuth=null
  componentDidMount(){
    let {setCurrentUser} = this.props;

    // listner
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async  user=>{
      if(user){
        const userRef = await createUserProfileDocument(user)
        // listner
        userRef.onSnapshot(onsnapShot=>{
          setCurrentUser({
            id:onsnapShot.id,
          ...onsnapShot.data()
        })
        });
      }
      setCurrentUser(user)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUp}/>
        
        </Switch>
      </div>
    );  
  }
  
}
let mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);
