import {UserActionTypes} from './User.types';
const INITIAL_STATE = {
    currentUser:null
}
const UserReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : action.payload
            }
            break;
        default:
            return state;
    }
} 
export default UserReducer;