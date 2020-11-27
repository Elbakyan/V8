import {
    GET_DIALOG_ID,
    GET_ID,
    GET_MESSAGE,
    GET_MESSAGE_DIALOG_ID,
    GET_MESSAGE_ID, GET_NOTIFICATION,
    GET_STATUS,
    SEND_MESSAGE
} from "./action";
const initialState = {
    notifications:false,
    data: {
        user: [],
        score: [],
        message: []
    },
    id: '',
    dialog: '',
    status: [],
    messageId: ''
}

function MessageReducer(state = initialState , action) {
    switch (action.type){
        case SEND_MESSAGE:
            return {...state, data: action.payload}
        case GET_MESSAGE:
            return {...state, data: action.payload}
        case GET_MESSAGE_DIALOG_ID:
            return {...state, data: action.payload}
        case GET_ID:
            return {...state, id: action.payload}
        case GET_DIALOG_ID:
            return {...state, dialog: action.payload}
        case GET_STATUS:
            return {...state, status: action.payload}
        case GET_MESSAGE_ID:
            return {...state, messageId: action.payload}
        case GET_NOTIFICATION :
            return {...state,notifications:action.payload}
        default:
            return state
    }

}

export default MessageReducer;