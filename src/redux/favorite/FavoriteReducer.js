import {GET_FAVORITE} from "./action";

export default function favoriteReducer(state = [], action){
    switch (action.type){
        case GET_FAVORITE:
            return action.payload;
        break;

    }
    return state;

}
