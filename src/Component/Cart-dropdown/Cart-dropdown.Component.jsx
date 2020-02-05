import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/Custom-button.Component';
import './Cart-dropdown.Styles.scss';
import CartItem from '../cartItem/cart-item.component';

const CartDropdown =({cartItems})=>{
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((cartitem,index)=>{
                    return <CartItem key={cartitem.id} item={cartitem}/>
            })}
        </div>
            <CustomButton>Go To Checkout</CustomButton>
    </div>)
}
let mapStateToProps=({cart:{cartItems}})=>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);