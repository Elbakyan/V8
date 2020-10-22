import {CLEAR_IMG, TMP_IMG} from "./action";
const initialState = {
    tmpImg: {
        status: false,
        data: []
    }
}
export default function tmpReducer(state = initialState, action){
    switch (action.type){
        case TMP_IMG:
            return {...state, tmpImg:action.payload}
        case CLEAR_IMG:
            return {...state, tmpImg:action.payload}
        default:
            return state
    }
}