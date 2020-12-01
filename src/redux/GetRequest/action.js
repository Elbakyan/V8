import {GET, POST, TEST_GET} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const  GET_REQUEST = 'GET_REQUEST';

export function GetRequst(){
    return (dispatch) => {
        GET(Url.getrequest).then(res => {
            let arr = [];
            console.log(res)
            for (const key in res) {
                arr.push(res[key]);
            }
            console.log(arr)
            dispatch({
                type: GET_REQUEST,
                payload: arr
            })
        })

    }
}