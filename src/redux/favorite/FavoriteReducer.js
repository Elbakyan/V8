import {ADD_FAVORITE, GET_FAVORITE, GET_USER_FAVORITE} from "./action";

const initialState = {
    favorite: [],
    userFavorite: []
}
export default function favoriteReducer(state = initialState, action){
    switch (action.type){
        case GET_FAVORITE:
            return {...state, favorite: action.payload}
        case ADD_FAVORITE:
            return {...state, favorite: action.payload}
        case GET_USER_FAVORITE:
            return {...state, userFavorite: action.payload}
    }
    return state;
}


