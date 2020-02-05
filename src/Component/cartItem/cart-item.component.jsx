import React from 'react';

import './CartItem.styles.scss';

const cartItem = ({item:{imageUrl, name, price, quantity}}) =>{
    return <div className="cart-Item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
}

export default cartItem;