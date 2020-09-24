import {SCORE_EXIST} from "./action";
const initialState = {
<<<<<<< HEAD
    status: undefined
=======
    status: false
>>>>>>> 911bfeeadbb0e896012829d5fd320325ab490159
}

export default function ScoreExistReducer(state = initialState,action){

    switch (action.type) {
        case SCORE_EXIST:
            return action.payload
        default:
            return state;
    }

}