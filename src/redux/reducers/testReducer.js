import {USER} from "../action";



function TestReducer(state = {name: 'Noro'}, action){
    switch (action.type){
        case USER : return {state:action.payload}
    }
    return state;
}
export default TestReducer;