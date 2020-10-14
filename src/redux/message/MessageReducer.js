import {GET_MESSAGE, SEND_MESSAGE} from "./action";
let x = 0

function MessageReducer(state = [] , action) {
    switch (action.type){
        case SEND_MESSAGE:
            return action.payload
        case GET_MESSAGE:
            return action.payload
        default:
            return state
    }

}

export default MessageReducer;