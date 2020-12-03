import {GET, POST, TEST_GET} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
import {GET_MODEL} from "../auto/action";
import {GET_NOTIFICATION} from "../message/action";
import {combineReducers} from "redux";

export const  GET_REQUEST = 'GET_REQUEST';

export function GetRequst(){
    return (dispatch) => {
        GET(Url.getrequest).then(res => {
            let arr = [];
            console.log(res)
            for (const key in res) {
                arr.push(res[key]);
            }
            // console.log('arr',arr)
            // arr.map((el)=>{
            //     console.log('status',el.message[el.message.length - 1].status)
            //     console.log()
            //     if(+el.message[el.message.length - 1].status){
            //         dispatch(Notifications(true))
            //     }else{
            //         dispatch(Notifications(false))
            //     }
            // })
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

export function Notifications(boolean) {
    return (dispatch) => {
        dispatch({
            type: GET_NOTIFICATION,
            payload: boolean
        })
    }
}