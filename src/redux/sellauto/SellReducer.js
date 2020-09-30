import {GET_SELL} from "./action";



const initalState = {

    auto: []
}



export default function sellReducer(state = initalState, action){
    switch (action.type){
        case GET_SELL:
            return action.payload
    }
    return state;

}