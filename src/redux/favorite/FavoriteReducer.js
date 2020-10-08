import {GET_FAVORITE} from "./action";
import {GET_AUTO, GET_MARK, GET_MODEL} from "../auto/action";

const initialstate = {
    favorite:[]
}



export default function favoriteReducer(state = initialstate, action){
    switch (action.type){
        case GET_FAVORITE:
            return {...state,favorite:action.payload}

    }
    return state;

}


