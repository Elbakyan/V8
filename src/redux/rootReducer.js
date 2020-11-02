import {combineReducers} from 'redux';
import UserExistReducer  from './user/UserReducer'
import locationReducer from './location/LocationReducer';
import autoReducer from './auto/AutoReducer';
import scoreReducer from './score/ScoreReducer'
import SellReducer from "./sellauto/SellReducer";
import FavoriteReducer from "./favorite/FavoriteReducer";
import MessageReducer from "./message/MessageReducer";
import tmpReducer from "./tmp/tmpReducer";
import SearchReducer from "./search/SearchReducer";
export default combineReducers({
    user: UserExistReducer,
    location: locationReducer,
    auto: autoReducer,
    score: scoreReducer,
    sell: SellReducer,
    favorite: FavoriteReducer,
    message: MessageReducer,
    tmp: tmpReducer,
    search: SearchReducer
})