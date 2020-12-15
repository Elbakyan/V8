import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_SERVICE = 'GET_SERVICE';

export const SEARCH_SERVICE = 'SEARCH_SERVICE';
export const SEARCH_SERVICE_LINK = 'SEARCH_SERVICE_LINK';
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


export function SearchService(id) {
    return (dispatch) => {
        let data = new FormData()
        data.append('id', id)
        POST(Url.searchServices, data).then(res => {
            dispatch({
                type: SEARCH_SERVICE,
                payload: res
            })
        })
    }
}
export function GetMyService(){
    return (dispatch) => {
        GET(Url.getMyService).then(res => {
            dispatch({
                type: GET_MY_SERVICE,
                payload: res
            })
        })
    }
}
export function SearchServiceLink(link){
    return (dispatch) => {
            dispatch({
                type: SEARCH_SERVICE_LINK,
                payload: link
            })
    }
}
