import {GET, POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MESSAGE = 'GET_MESSAGE';
export const SEND_MESSAGE = 'GET_MESSAGE';

export function SendMessage(data) {

    return (dispach) => {
        TEST_POST(Url.sendMessage,data).then(res => {
            console.log(res)
            dispach({
                type: SEND_MESSAGE,
                payload: res

            })
        })

    }
}

// export function GetMessage() {
//     return (dispach) => {
//         GET(Url.getMessage).then(res => {
//             dispach({
//                 type: GET_MESSAGE,
//                 payload: res
//
//             })
//         })
//
//     }
// }
