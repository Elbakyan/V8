import {USER_EXIST} from "./action";
import {user} from "./user";

const initialState = {
    status: user
}

export default function UserExistReducer(state = initialState,action){

    switch (action.type) {
        case USER_EXIST:
            return action.payload
        default:
            return state;
    }

}