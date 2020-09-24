import {SCORE_EXIST} from "./action";
const initialState = {
    status: true
}

export default function ScoreExistReducer(state = initialState,action){

    switch (action.type) {
        case SCORE_EXIST:
            return action.payload
        default:
            return state;
    }

}