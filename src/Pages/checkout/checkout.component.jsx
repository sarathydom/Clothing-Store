import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector } from 'reselect';
import { cartSelector } from '../../Redux/cart/cart.selector';

import {selectCartTotal} from '../../Redux/cart/cart.selector';
import CartItem from '../../Component/checkout-item/checkout-item.component';
const checkoutPage =({cartItem,cartTotal})=>{
    return (<div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Desctiption</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItem.map(caet=><CartItem key={caet.id} cartItem={caet}/>)}
<div className="total"><span >${cartTotal}</span></div>
    </div>
    
    )
}
let mapStateToprops = createStructuredSelector({
    cartItem:cartSelector,
    cartTotal:selectCartTotal
})
export default connect(mapStateToprops)(checkoutPage);