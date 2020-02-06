import {createSelector} from 'reselect';

export const selectCart = state => state.cart;

export const cartSelector=createSelector([selectCart],(cart)=>cart.cartItems);

export const cartSelectorCount = createSelector([cartSelector],cartItems=>{
   return  cartItems.reduce((acc,val)=>acc+val.quantity,0)
})

