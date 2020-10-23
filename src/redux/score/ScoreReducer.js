import {GET_SCORE_LIST, SCORE_EXIST} from "./action";
const initialState = {

    score:{
        status: undefined,
        data: []
    },
    scoreList: []
}

export default function ScoreExistReducer(state = initialState,action){

    switch (action.type) {
        case SCORE_EXIST:
            return {...state, score: action.payload}
        case GET_SCORE_LIST:
            return {...state, scoreList: action.payload}
        default:
            return state;
    }

}