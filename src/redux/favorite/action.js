import {POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_FAVORITE = 'GET_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';




export function GetFavorite(id){
    let data = new FormData();
    data.append('id', id)
    return (dispach) => {
        TEST_POST(Url.getFavorite,data).then(res => {
            console.log(res)
            dispach({
                type: GET_FAVORITE,
                payload: res
            })
        })

    }
}

// export function GetModel(e = 1) {
//     return async (dispach) => {
//         let id = e.target == undefined ? e :e.target.selectedIndex;
//         let data = new FormData()
//         data.append('id',  id);
//         POST(Url.model, data).then(data=> {
//             data.unshift({
//                 id:"0",
//                 name: 'Մոդել․․․'
//             })
//             dispach({
//                 type: GET_MODEL,
//                 payload: data
//             })
//         })
//
//     }
// }

