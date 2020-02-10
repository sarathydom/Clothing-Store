import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/Custom-button.Component';
import './Cart-dropdown.Styles.scss';
import CartItem from '../cartItem/cart-item.component';
import {cartSelector} from '../../Redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
const CartDropdown =({cartItems, history, dispatch})=>{
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length?cartItems.map((cartitem,index)=>{
                    return <CartItem key={cartitem.id} item={cartitem}/>
            }):<span className="empty-message">No Items in cart</span>}
        </div>
            <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>Go To Checkout</CustomButton>
    </div>)
}
let mapStateToProps=createStructuredSelector({
    cartItems:cartSelector
})
export default withRouter(connect(mapStateToProps)(CartDropdown));