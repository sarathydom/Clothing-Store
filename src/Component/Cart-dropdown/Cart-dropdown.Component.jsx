import React from 'react'
import CustomButton from '../Custom-button/Custom-button.Component';
import './Cart-dropdown.Styles.scss';

const CartDropdown =(props)=>{
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    </div>)
}
export default CartDropdown;