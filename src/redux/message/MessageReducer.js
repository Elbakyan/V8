import {GET_ID, GET_MESSAGE, GET_STATUS, SEND_MESSAGE} from "./action";
const initialState = {
    user: [],
    message: [],
    id: '',
    status: []
}

function MessageReducer(state = initialState , action) {
    switch (action.type){
        case SEND_MESSAGE:
            return {...state, message: action.payload.message,user:action.payload.user}
        case GET_MESSAGE:
            return {...state, message: action.payload.message,user:action.payload.user}
        case GET_ID:
            return {...state, id: action.payload}
        case GET_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }

}

export default MessageReducer;