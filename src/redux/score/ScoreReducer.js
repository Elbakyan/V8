import {GET_MARK_MODEL_AUTO_PARTS, GET_PRODUCT, GET_SCORE_LIST, SCORE_EXIST} from "./action";
const initialState = {

    score:{
        status: undefined,
        data: []
    },
    scoreList: [],
    product: {
        data: []
    },
    MarkModelParts: []
}

export default function ScoreExistReducer(state = initialState,action){

    switch (action.type) {
        case SCORE_EXIST:
            return {...state, score: action.payload}
        case GET_SCORE_LIST:
            return {...state, scoreList: action.payload}
        case GET_PRODUCT:
            return {...state, product: action.payload}
        case GET_MARK_MODEL_AUTO_PARTS:
            return {...state, MarkModelParts: action.payload}
        default:
            return state;
    }

}