import {MENU_ACTIVE} from "./action";

const initialState = {
    active:['','']
}

export default function MenuReducer(state = initialState,action){
    switch (action.type){
        case MENU_ACTIVE:
        return {...state, active: action.payload}
        default:return state
    }

}