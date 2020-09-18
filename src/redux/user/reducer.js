import {USER_EXIST} from "./action";

const initialState = {
    status: undefined
}

export default function UserExistReducer(state = initialState,action){
    console.log(action)
    switch (action.types) {
        case USER_EXIST: return {state: action.payload}

        default: return state
    }
}