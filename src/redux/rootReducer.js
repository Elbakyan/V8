import {combineReducers} from 'redux';
import UserExistReducer  from './user/reducer'
import locationReducer from "./location/reducer";

export default combineReducers({
    user: UserExistReducer,
    location: locationReducer
})