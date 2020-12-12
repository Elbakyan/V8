import {GET} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_SERVICE = 'GET_SERVICE';

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