import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
export const GET_MARK = 'GET_MARK';
export const GET_MODEL = 'GET_MODEL';
export const GET_AUTO = 'GET_AUTO';
export const GET_ALL_MODEL = 'GET_ALL_MODEL';
export const GET_TRUCK = 'GET_TRUCK';
export const GET_TRUCK_MODEL = 'GET_TRUCK_MODEL';
export const GET_TRUCK_MODELS = 'GET_TRUCK_MODELS';


export function GetMark(){
    return (dispach) => {
        GET(Url.auto).then(res => {
            res.unshift({
                id:"0",
                name: 'Մակնիշ․․․'
            })
            dispach({
                type: GET_MARK,
                payload: res
            })
        })

    }
}

export function GetAllModel(){
    return (dispach) => {
        GET(Url.allmodels).then(res => {
            dispach({
                type: GET_ALL_MODEL,
                payload: res
            })
        })

    }
}

export function GetModel(e = 1) {
    return async (dispach) => {

        let id = e.target === undefined ? e :''
        let data = new FormData()
        if(e.target !== undefined){
            e.target.childNodes.forEach(el =>{
                if(e.target.value === el.innerText){
                    id = el.dataset.id
                    // console.log(id)
                }
            })
        }

        data.append('id',  id);

        POST(Url.model, data).then(data=> {
            data.unshift({
                id:"0",
                name: 'Մոդել․․․'
            })
            dispach({
                type: GET_MODEL,
                payload: data
            })
        })
    }
}

export function GetAuto(id) {
    return async (dispach) => {
        let data = new FormData();
        data.append('user_id', id);
        POST(Url.getUserAuto, data).then(data=> {
            dispach({
                type: GET_AUTO,
                payload: data
            })

        })

    }
}

export function GetTruck(){
    return (dispach) => {
        GET(Url.truck).then(res => {
            dispach({
                type: GET_TRUCK,
                payload: res
            })
        })

    }
}

export function GetTruckModel(e = 1) {
    return async (dispach) => {
        let id = e.target === undefined ? e :e.target.selectedIndex;
        let data = new FormData()
        data.append('id',  id);
        POST(Url.truckID, data).then(data=> {
            data.unshift({
                id:"0",
                name: 'Մոդել․․․'
            })
            dispach({
                type: GET_TRUCK_MODEL,
                payload: data
            })
        })
    }
}

export function GetTruckModels(){
    return (dispach) => {
        GET(Url.truckModels).then(res => {
            dispach({
                type: GET_TRUCK_MODELS,
                payload: res
            })
        })

    }
}
