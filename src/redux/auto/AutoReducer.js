import {GET_MODEL, GET_MARK} from "./action";
import {body, color} from "./Values";

const initalState = {
    mark: [],
    model: [],
    year:(()=>{
        let temp = [];
        let year = new Date().getFullYear();
        for (let i = year; i >= 1915; i--){
            temp.push(i);
        }
        return temp;
    })(),
    color:color,
    body:body,
    engine:(() => {
        let temp = [];
        // let year = new Date().getFullYear();
        for (let i = 0; i < 7; i++){
            if(i > 0 ){
                temp.push(i + '.0')
            }
            for (let j = 1; j < 10; j++){
                if(i == 0 && j >= 8){
                    temp.push(i + '.' + j)
                }else if(i > 0){
                    temp.push(i + '.' + j)
                }
            }
        }
        temp.push("7.0")
        return temp;
    })(),
}




export default function autoReducer(state = initalState, action){
    switch (action.type){
        case GET_MARK:
            return {...state, mark: action.payload}
        case GET_MODEL:
            return {...state, model: action.payload}
    }
    return state;

}