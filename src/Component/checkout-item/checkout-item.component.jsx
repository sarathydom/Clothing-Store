import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { clearCartItem , addItem,removeItem} from '../../Redux/cart/cart.actions';

const checkoutItem = ({cartItem,removeCartItem,addItem,removeItem}) =>{
    const {name,price,quantity,imageUrl} = cartItem;
    console.log(removeCartItem)
    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
<span className="name">{name}</span>
<span className="quantity">
    <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
<span className="price">{price}</span>
        <div className="remove-button" onClick={()=>removeCartItem(cartItem)}>
            &#10005;
        </div>
    </div>)
}
let mapDispatchToProps=dispatch=>{
    return {
            removeCartItem:item=>dispatch(clearCartItem(item)),
            addItem:item=>dispatch(addItem(item)),
            removeItem:item=>dispatch(removeItem(item))
        }

}
export default connect(null,mapDispatchToProps)(checkoutItem);