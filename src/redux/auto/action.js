import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MARK = 'GET_MARK';
export const GET_MODEL = 'GET_MODEL';


export function GetMark(){
    return (dispach) => {
        GET(Url.auto).then(res => {
            dispach({
                type: GET_MARK,
                payload: res
            })
        })

    }
}

// export function GetModel(){
//     return (dispach) => {
//         GET(Url.auto).then(res => {
//             dispach({
//                 type: GET_MARK,
//                 payload: res
//             })
//         })
//
//     }
// }

export function GetModel(e = 1) {
    return async (dispach) => {

        let data = new FormData();
        data.append('id', (e==1)? 1 : e.target.selectedIndex+1);

        POST(Url.model, data).then(data=> {
            dispach({
                type: GET_MODEL,
                payload: data
            })
        })

    }
}
// export  function GetModel(id){
//     let data = new  FormData();
//
//     data.append('id' , id)
//     return (dispach) => {
//         POST(Url.city,data).then(res => {
//             dispach({
//                 type: GET_MODEL,
//                 payload: res
//             })
//         })
//
//     }
// }