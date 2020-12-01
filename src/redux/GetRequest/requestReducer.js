import {GET_REQUEST} from "./action";

const initialState = {
   request: []
}
export default function requestReducer(state = initialState, action){
    switch (action.type){
        case GET_REQUEST:
            return {...state, request: action.payload}
        default: return  state
    }
}