import {GET_MY_SERVICE, GET_SERVICE} from "./action";

const initialState = {
    service: [],
    myService: {
        status:false,
        data:[]
    }
}
export default function requestReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICE:
            return {...state, service: action.payload}
        case GET_MY_SERVICE:
            return {...state, myService: action.payload}
        default: return  state
    }
}