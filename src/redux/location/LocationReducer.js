import {GET_CITY, GET_SIRCLE} from "./action";

const initalState = {
    sircle: [],
    city: []
}




export default function locationReducer(state = initalState, action){
    switch (action.type){
        case GET_SIRCLE:
            return {...state, sircle: action.payload}
        case GET_CITY:
            return {...state, city: action.payload}
    }
    return state;

}