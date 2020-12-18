
import {
    GET_SERVICE,
    GET_MY_SERVICE,
    SEARCH_SERVICE,
    SEARCH_SERVICE_LINK,
    GET_SERVICE_LIST,
    GET_PARTS_ACCESSORIES, GET_MY_PARTS_ACCESSORIES, SEARCH_PARTS_ACCESSORIES, SEARCH_ACCESSORIES_LINK
} from "./action";

const initialState = {
    service: [],
    serviceList: {
        service: [],
        score:[]
    },
    search: {
        status: false,
        data: []
    },
    myService: {
        status:false,
        data:[]
    },
    link: '',
    accessoriesLink:'',
    partsAndAccessories:[],
    partsMyAndAccessories: {
        status:false,
        data:[]
    },
    searchPartAccessories: {
        status: false,
        data: []
    },
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
        case GET_SERVICE_LIST:
            return {...state, serviceList: action.payload}
        case GET_PARTS_ACCESSORIES:
            return {...state, partsAndAccessories: action.payload}
        case GET_MY_PARTS_ACCESSORIES:
            return {...state, partsMyAndAccessories: action.payload}
        case SEARCH_PARTS_ACCESSORIES:
            return {...state, searchPartAccessories: action.payload}
        case SEARCH_ACCESSORIES_LINK:
            return {...state, accessoriesLink: action.payload}
        default: return  state
    }
}