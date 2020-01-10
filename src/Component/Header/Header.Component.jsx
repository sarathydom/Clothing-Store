import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from  '../../Assets/crown.svg';
import {auth} from  '../../firebase/firebase.utils';
import {connect} from 'react-redux';
const Header = ({ currentuser })=>{
    console.log(currentuser,'from header')
    return (<>
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>      
            </Link>
        
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentuser ? 
                 <div className='option' onClick={()=>auth.signOut()} >Sign Out</div> :
                <Link className="option" to='/signin'></Link> }
            
        </div>
        </div>
    </>)
}
const mapStateToProps = state =>({
    currentuser : state.user.currentUser
})
export default connect(mapStateToProps)(Header);