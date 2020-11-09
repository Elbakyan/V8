import {GET_SELL, GET_SELL_BY_ID} from "./action";



const initalState = {

    data: {
        data: []
    },
    OneAuto:[]
}



export default function sellReducer(state = initalState, action){
    switch (action.type){
        case GET_SELL:
            return {...state, data: action.payload}
        case GET_SELL_BY_ID:
            return {...state, OneAuto: action.payload}
        default:
            return state
    }


}