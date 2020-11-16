import {GET_MODEL, GET_MARK, GET_AUTO, GET_ALL_MODEL, GET_TRUCK, GET_TRUCK_MODEL} from "./action";

import {category, color, engine, fuel, royle, sort, traction, transmission, type, year} from "./Values";


const initalState = {
    mark: [],
    model: [],
    truck:[],
    truckModel:[],
    royle:royle,
    color:color,
    year: year,
    fuel: fuel,
    transmission:transmission,
    engine: engine,
    type: type,
    category:category,
    traction: traction,
    auto: {data:[]},
    sort: sort,
    allModels: []
}




export default function autoReducer(state = initalState, action){
    switch (action.type){
        case GET_MARK:
            return {...state, mark: action.payload}
        case GET_MODEL:
            return {...state, model: action.payload}
        case GET_TRUCK:
            return {...state, truck: action.payload}
        case GET_TRUCK_MODEL:
            return {...state, truckModel: action.payload}
        case GET_AUTO:
            return {...state, auto: action.payload}
        case GET_ALL_MODEL:
            return {...state, allModels: action.payload}
        default:
            return state
    }

}