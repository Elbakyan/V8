import {combineReducers} from 'redux';
import UserExistReducer  from './user/reducer'

export default combineReducers({
    user: UserExistReducer
})