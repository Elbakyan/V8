import {
    GET_ID, GET_SEARCH_MARK_MODEL_LINK, SEARCH_MARK_MODEL,
    SEARCH_RESULT,
    SEARCH_RESULT_ANAL,
    SEARCH_RESULT_ANAL_COUNT,
    SEARCH_RESULT_AUTO,
    SEARCH_RESULT_IMG, SEARCH_RESULT_PRODUCT, SEARCH_SCORE_LISTS
} from "./action";

const initialState = {
    result: [],
    analCount: 0,
    anal: [],
    auto: [],
    img: [],
    product: [],

    scoreList: {
        status: false,
        detal: [],
        store:[]
    },
    id:'',
    MarkModelResult: {
        status:false
    },
    link: ''
}
export default function searchReducer(state = initialState, action){
    switch (action.type){
        case SEARCH_RESULT:
            return {...state, result: action.payload}
        case SEARCH_RESULT_ANAL_COUNT:
            return {...state, analCount: action.payload}
        case SEARCH_RESULT_ANAL:
            return {...state, anal: action.payload}
        case SEARCH_RESULT_AUTO:
            return {...state, auto: action.payload}
        case SEARCH_RESULT_IMG:
            return {...state, img: action.payload}
        case SEARCH_RESULT_PRODUCT:
            return {...state, product: action.payload}
        case SEARCH_SCORE_LISTS:
            return {...state, scoreList: action.payload}
        case GET_ID:
            return {...state, id: action.payload}
        case SEARCH_MARK_MODEL:
            return {...state, MarkModelResult: action.payload}
        case GET_SEARCH_MARK_MODEL_LINK:
            return {...state, link: action.payload}
        default:
            return state

    }


}


