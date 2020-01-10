import {combineReducers} from 'redux';
import UserReducer from './user/User.reducer';
export default  combineReducers({
    user:UserReducer
})