import {combineReducers} from 'redux';
import UserExistReducer  from './user/UserReducer'
import locationReducer from './location/LocationReducer';
import autoReducer from './auto/AutoReducer';
import scoreReducer from './score/ScoreReducer'
export default combineReducers({
    user: UserExistReducer,
    location: locationReducer,
    auto: autoReducer,
    score: scoreReducer
})