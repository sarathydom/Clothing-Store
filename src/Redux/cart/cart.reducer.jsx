import CartItemTypes from './cart.types';
import {addItemToCart,removeItemfromcart} from './cart.redux.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}
const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartItemTypes.TOGGLE_CART_HIDDEN:
            return(
                {...state,
                hidden : !state.hidden}
            )
        case CartItemTypes.ADD_ITEM:
            return({
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            })
        case CartItemTypes.REMOVE_ITEM:
            return({
                ...state,
                cartItems:removeItemfromcart(state.cartItems,action.payload)
            })
        case CartItemTypes.CLEAR_CART_ITEM:
            console.log(action.payload,'clear cart itrm')
            return({
                ...state,
                cartItems:state.cartItems.filter(cartitem=>cartitem.id!=action.payload.id)
            })
            default:
                return state
    }
        
}
export default cartReducer;