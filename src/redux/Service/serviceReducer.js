import {GET_SERVICE} from "./action";

const initialState = {
    service: []
}
export default function requestReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICE:
            return {...state, service: action.payload}
        default: return  state
    }
}