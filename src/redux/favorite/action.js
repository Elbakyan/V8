import {GET, POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_FAVORITE = 'GET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const GET_USER_FAVORITE = 'GET_USER_FAVORITE';


export function GetFavorite(){
    return (dispach) => {
        GET(Url.getFavorite).then(res => {
            console.log(res)
            dispach({
                type: GET_FAVORITE,
                payload: res
            })
        })

    }
}
export function AddFavorite(data){

    return (dispach) => {
        POST(Url.addFavorite,data).then(res => {
            dispach({
                type: ADD_FAVORITE,
                payload: res
            })
        })

    }
}
export function GetUserFavorite(){

    return (dispach) => {
        GET(Url.sendFavorite).then(res => {
            console.log(res)
            dispach({
                type: GET_USER_FAVORITE,
                payload: res
            })
        })

    }
}





