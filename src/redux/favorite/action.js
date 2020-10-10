import {POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_FAVORITE = 'GET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';


export function GetFavorite(id){
    let data = new FormData();
    data.append('id', id)
    return (dispach) => {
        POST(Url.getFavorite,data).then(res => {
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





