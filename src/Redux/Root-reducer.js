import {combineReducers} from 'redux';
import UserReducer from './user/User.reducer';
import cartReducer from './cart/cart.reducer';
export default  combineReducers({
    user:UserReducer,
    cart:cartReducer
})