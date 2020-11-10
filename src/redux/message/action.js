import {GET, POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MESSAGE = 'GET_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_ID = 'GET_ID';
export const GET_DIALOG_ID = 'GET_DIALOG_ID';
export const GET_STATUS = 'GET_STATUS';

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
            console.log(res)
            console.log(1111)
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
export function GetDialogId(id) {
    return (dispach) => {
        dispach({
            type: GET_DIALOG_ID,
            payload: id

        })

    }
}

export function GetStatus(data) {
    let statusData = new FormData()
    statusData.append('send', data.send_id)
    statusData.append('get', data.get_id)

    return (dispach) => {
        POST(Url.messageStatus,statusData).then(res => {
            dispach({
                type: GET_STATUS,
                payload: res

            })
        })

    }
}
