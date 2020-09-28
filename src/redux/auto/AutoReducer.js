import {GET_MODEL, GET_MARK} from "./action";

import {category, color, engine, fuel, royle, traction, transmission, type, year} from "./Values";


const initalState = {
    mark: [],
    model: [],
    royle:royle,
    color:color,
    year: year,
    fuel: fuel,
    transmission:transmission,
    engine: engine,
    type: type,
    category:category,
    traction: traction


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