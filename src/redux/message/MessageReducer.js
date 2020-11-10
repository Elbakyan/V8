import {GET_DIALOG_ID, GET_ID, GET_MESSAGE, GET_STATUS, SEND_MESSAGE} from "./action";
const initialState = {
    data: {
        user: [],
        score: [],
        message: []
    },
    id: '',
    dialog: '',
    status: []
}

function MessageReducer(state = initialState , action) {
    switch (action.type){
        case SEND_MESSAGE:
            return {...state, data: action.payload}
        case GET_MESSAGE:
            return {...state, data: action.payload}
        case GET_ID:
            return {...state, id: action.payload}
        case GET_DIALOG_ID:
            return {...state, dialog: action.payload}
        case GET_STATUS:
            return {...state, status: action.payload}
        default:
            return state
    }

}

export default MessageReducer;