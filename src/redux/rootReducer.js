import {combineReducers} from 'redux';
import UserExistReducer  from './user/UserReducer'
import locationReducer from './location/LocationReducer';
import autoReducer from './auto/AutoReducer';
import scoreReducer from './score/ScoreReducer'
import SellReducer from "./sellauto/SellReducer";
import FavoriteReducer from "./favorite/FavoriteReducer";
export default combineReducers({
    user: UserExistReducer,
    location: locationReducer,
    auto: autoReducer,
    score: scoreReducer,
    sell: SellReducer,
    favorite: FavoriteReducer
})