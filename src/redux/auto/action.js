import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MARK = 'GET_MARK';
export const GET_MODEL = 'GET_MODEL';
export const GET_AUTO = 'GET_AUTO';



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

export function GetModel(e = 1) {
    return async (dispach) => {
        let id = e.target === undefined ? e :e.target.selectedIndex;
        let data = new FormData()
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
