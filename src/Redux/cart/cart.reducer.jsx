import ToggleCartHidden from './cart.types'
const INITIAL_STATE={
    hidden:true
}
const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ToggleCartHidden.TOGGLE_CART_HIDDEN:
            return(
                {...state,
                hidden : !state.hidden}
            )
            break
            default:
                return state
    }
}
export default cartReducer;