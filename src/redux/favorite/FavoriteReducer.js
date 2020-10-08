import {ADD_FAVORITE, GET_FAVORITE} from "./action";
import {GET_AUTO, GET_MARK, GET_MODEL} from "../auto/action";
export default function favoriteReducer(state = [], action){
    switch (action.type){
        case GET_FAVORITE:
            return action.payload
        case ADD_FAVORITE:
            return action.payload

    }
    return state;

}


