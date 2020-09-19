import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_SIRCLE = 'GET_SIRCLE';
export const GET_CITY = 'GET_CITY';


export function GetSicle(){
    return (dispach) => {
        GET(Url.location).then(res => {
            dispach({
                type: GET_SIRCLE,
                payload: res
            })
        })

    }
}
export  function GetCity(id){
    let data = new  FormData();

    data.append('id' , id)
    return (dispach) => {
       POST(Url.city,data).then(res => {
            dispach({
                type: GET_CITY,
                payload: res
            })
        })

    }
}