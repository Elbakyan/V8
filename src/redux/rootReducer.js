import {combineReducers} from 'redux';
import UserExistReducer  from './user/reducer'
import locationReducer from "./location/reducer";
import autoReducer from "./auto/reducer";

export default combineReducers({
    user: UserExistReducer,
    location: locationReducer,
    auto: autoReducer
})