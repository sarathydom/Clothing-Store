import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from  '../../Assets/crown.svg';
import CartIcon from '../Cart-icon/Cart-icon.Component'
import {auth} from  '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../Redux/cart/cart.selector'
import { selectCurrentUser } from '../../Redux/user/User.selector'
import CartDropdown from '../Cart-dropdown/Cart-dropdown.Component';
const Header = ({ currentuser,hidden })=>{
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
                <Link className="option" to='/signin'>Sign In</Link> }
            <CartIcon/>
            
        </div>
        {hidden?null:<CartDropdown/>}

        </div>
    </>)
}
const mapStateToProps = createStructuredSelector({
    currentuser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);