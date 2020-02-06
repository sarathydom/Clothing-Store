import React from 'react'
import './Cart-icon.Styles.scss'
import {ReactComponent as ShoppingBag} from '../../Assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggleCartHidden} from'../../Redux/cart/cart.actions';
import {cartSelectorCount} from '../../Redux/cart/cart.selector';
const cartIcon=({setHidden,itemCount})=>{
    return (<div className="cart-icon" onClick={setHidden}>
        <ShoppingBag className="shopping-icon"/>
        <span className='item-count'>{itemCount}</span>
    </div>)
}
const mapDisoatchToProps = dispatch=>({
    setHidden:()=>dispatch(toggleCartHidden())
})  
const mapStateToProps = (state) =>{
    console.log('I am a map state to props from cart icon')
    return {
        itemCount:cartSelectorCount(state)
    }
}
export default connect(mapStateToProps,mapDisoatchToProps)(cartIcon);