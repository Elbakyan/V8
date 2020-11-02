import {GET_PRODUCT, GET_SCORE_LIST, SCORE_EXIST} from "./action";
const initialState = {

    score:{
        status: undefined,
        data: []
    },
    scoreList: [],
    product: {
        data: []
    }
}

export default function ScoreExistReducer(state = initialState,action){

    switch (action.type) {
        case SCORE_EXIST:
            return {...state, score: action.payload}
        case GET_SCORE_LIST:
            return {...state, scoreList: action.payload}
        case GET_PRODUCT:
            return {...state, product: action.payload}
        default:
            return state;
    }

}