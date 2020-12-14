import {GET} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_SERVICE = 'GET_SERVICE';
export const GET_MY_SERVICE = 'GET_MY_SERVICE';

export function GetService(){
    return (dispatch) => {
        GET(Url.getService).then(res => {
            dispatch({
                type: GET_SERVICE,
                payload: res
            })
        })
    }
}

export function GetMyService(){
    return (dispatch) => {
        GET(Url.getMyService).then(res => {
            console.log(res)
            dispatch({
                type: GET_MY_SERVICE,
                payload: res
            })
        })
    }
}