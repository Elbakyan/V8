import {GET_MODEL, GET_MARK} from "./action";

const initalState = {
    mark: [],
    model: []
}




export default function autoReducer(state = initalState, action){
    switch (action.type){
        case GET_MARK:
            return {...state, mark: action.payload}
        case GET_MODEL:
            return {...state, model: action.payload}
    }
    return state;

}