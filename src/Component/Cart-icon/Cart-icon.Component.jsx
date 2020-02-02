import React from 'react'
import './Cart-icon.Styles.scss'
import {ReactComponent as ShoppingBag} from '../../Assets/shopping-bag.svg'
import {connect} from 'react-redux';
import {toggleCartHidden} from'../../Redux/cart/cart.actions'
const cartIcon=({setHidden})=>{
    return (<div className="cart-icon" onClick={setHidden}>
        <ShoppingBag className="shopping-icon"/>
        <span className='item-count'>0</span>
    </div>)
}
const mapDisoatchToProps = dispatch=>({
    setHidden:()=>dispatch(toggleCartHidden())
})  
export default connect(null,mapDisoatchToProps)(cartIcon);