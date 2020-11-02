import {SEARCH_RESULT, SEARCH_RESULT_ANAL, SEARCH_RESULT_ANAL_COUNT, SEARCH_RESULT_AUTO} from "./action";

const initialState = {
    result: [],
    analCount: 0,
    anal: [],
    auto: []
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

    }
    return state;

}


