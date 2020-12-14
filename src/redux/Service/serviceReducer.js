
import {GET_SERVICE,GET_MY_SERVICE, SEARCH_SERVICE, SEARCH_SERVICE_LINK} from "./action";

const initialState = {
    service: [],
    search: {
        status: false,
        data: []
    },
    myService: {
        status:false,
        data:[]
    },
    link: ""
}


export default function requestReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICE:
            return {...state, service: action.payload}
        case SEARCH_SERVICE:
            return {...state, search: action.payload}
        case SEARCH_SERVICE_LINK:
            return {...state, link: action.payload}
        case GET_MY_SERVICE:
            return {...state, myService: action.payload}
        default: return  state
    }
}