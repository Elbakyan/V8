import {GET, POST, TEST_GET} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
import {GET_MODEL} from "../auto/action";

export const  GET_REQUEST = 'GET_REQUEST';

export function GetRequst(){
    return (dispatch) => {
        GET(Url.getrequest).then(res => {
            let arr = [];
            for (const key in res) {
                arr.push(res[key]);
            }
            dispatch({
                type: GET_REQUEST,
                payload: arr
            })
        })

    }
}

export function DelRequest(e = 1) {
    return async (dispach) => {
        let id = e
        let data = new FormData()
        data.append('id',  id);
        POST(Url.model, data).then(data=> {
            dispach({
                type: GET_MODEL,
                payload: data
            })
        })
    }
}