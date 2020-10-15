import {GET, POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MESSAGE = 'GET_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_ID = 'GET_ID';

export function SendMessage(data) {

    return (dispach) => {
        POST(Url.sendMessage,data).then(res => {
            console.log(res)
            dispach({
                type: SEND_MESSAGE,
                payload: res

            })
        })

    }
}

export function GetMessage() {
    return (dispach) => {
        GET(Url.dialog).then(res => {
            dispach({
                type: GET_MESSAGE,
                payload: res

            })
        })

    }
}
export function GetId(id) {
    return (dispach) => {
            dispach({
                type: GET_ID,
                payload: id

            })

    }
}
