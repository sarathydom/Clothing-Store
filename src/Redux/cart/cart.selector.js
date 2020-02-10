import {createSelector} from 'reselect';

export const selectCart = state => state.cart;

export const cartSelector=createSelector([selectCart],(cart)=>cart.cartItems);

export const selectCartHidden = createSelector([selectCart],(cart)=>cart.hidden);

export const cartSelectorCount = createSelector([cartSelector],cartItems=>{
   return  cartItems.reduce((acc,val)=>acc+val.quantity,0)
})
export const selectCartTotal = createSelector([cartSelector],cartItems=>{
   return  cartItems.reduce((acc,val)=>acc+(val.price*val.quantity),0)
})

