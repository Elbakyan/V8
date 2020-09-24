import {USER_EXIST} from "./action";

const initialState = {
    status: undefined
}

export default function UserExistReducer(state = initialState,action){

    switch (action.type) {
        case USER_EXIST:
            return action.payload
        default:
            return state;
    }

}